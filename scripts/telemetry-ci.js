/**
 * SRE Telemetry Script - GitHub Actions
 * Run with: node scripts/telemetry-ci.js <owner> <repo> [github_token]
 */

async function fetchWorkflowRuns(owner, repo, token) {
  const url = `https://api.github.com/repos/${owner}/${repo}/actions/runs?per_page=100`;
  const headers = {
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'SRE-Telemetry-Script'
  };
  
  if (token) {
    headers['Authorization'] = `token ${token}`;
  }

  const response = await fetch(url, { headers });
  if (!response.ok) {
    throw new Error(`Failed to fetch workflow runs: ${response.statusText}`);
  }

  return response.json();
}

function calculateBuildHealth(runs) {
  let totalDuration = 0;
  let successDuration = 0;
  let failedDuration = 0;
  
  const authors = {};
  const jobDurations = [];

  runs.forEach(run => {
    // Only analyze completed runs
    if (run.status !== 'completed') return;

    const runStart = new Date(run.run_started_at);
    const runEnd = new Date(run.updated_at);
    const durationSecs = (runEnd - runStart) / 1000;
    
    totalDuration += durationSecs;
    
    if (run.conclusion === 'success') {
      successDuration += durationSecs;
    } else if (run.conclusion === 'failure') {
      failedDuration += durationSecs;
      
      const author = run.head_commit?.author?.name || run.triggering_actor?.login || 'Unknown';
      authors[author] = (authors[author] || 0) + 1;
    }
    
    jobDurations.push({
      id: run.id,
      name: run.name,
      conclusion: run.conclusion,
      duration: durationSecs,
      author: run.triggering_actor?.login
    });
  });

  return { totalDuration, successDuration, failedDuration, authors, jobDurations };
}

async function run() {
  const [owner, repo, token] = process.argv.slice(2);
  
  if (!owner || !repo) {
    console.error("Uso: node scripts/telemetry-ci.js <owner> <repo> [GITHUB_TOKEN]");
    process.exit(1);
  }

  try {
    console.log(`\n🔍 [SRE] Coletando telemetria do repositório: ${owner}/${repo}...\n`);
    const data = await fetchWorkflowRuns(owner, repo, token);
    const runs = data.workflow_runs;
    
    if (!runs || runs.length === 0) {
      console.log("Nenhuma execução de pipeline encontrada. A esteira é nova!");
      return;
    }

    const metrics = calculateBuildHealth(runs);
    
    // Percentual global de Saúde do Build
    const successRate = ((metrics.successDuration / metrics.totalDuration) * 100).toFixed(2);
    const failureRate = ((metrics.failedDuration / metrics.totalDuration) * 100).toFixed(2);
    
    console.log(`=== 🚥 SAÚDE DO BUILD (Change Failure Rate Ponderada) ===`);
    console.log(`Total de Runs Avaliados: ${runs.length}`);
    console.log(`Tempo "Verde" (Sucesso): ${successRate}%`);
    console.log(`Tempo "Vermelho" (Falha): ${failureRate}%\n`);

    // Ranking dos autores de falhas
    console.log(`=== 🚩 TOP OFENSORES DE QUEBRA (Autores) ===`);
    const sortedAuthors = Object.entries(metrics.authors).sort((a, b) => b[1] - a[1]);
    if (sortedAuthors.length === 0) {
      console.log("Nenhuma quebra registrada! Parabéns à equipe.");
    } else {
      sortedAuthors.forEach(([author, count]) => {
        console.log(`- ${author}: ${count} falha(s) quebrando a esteira`);
      });
    }
    console.log("\n");

    // Ranking dos jobs mais lentos
    console.log(`=== 🐢 RANKING DE GARGALOS (Runs Mais Lentos) ===`);
    const slowestRuns = metrics.jobDurations.sort((a, b) => b.duration - a.duration).slice(0, 5);
    slowestRuns.forEach((run, index) => {
      console.log(`${index + 1}. [${run.conclusion.toUpperCase()}] Run #${run.id} (${run.duration.toFixed(2)}s) by @${run.author}`);
    });
    
    console.log("\n💡 Nota SRE: Investigue os runs lentos para otimizar cache de npm/docker e reduza a quebra do build.");

  } catch (error) {
    console.error("Erro ao analisar a API do GitHub:", error.message);
  }
}

run();
