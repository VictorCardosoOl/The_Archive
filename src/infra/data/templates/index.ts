import { analise_holistica_produto_seo } from './analysis/analise-holistica-produto-seo';
import { analise_melhoria_tridimensional } from './analysis/analise-melhoria-tridimensional';
import { analise_base_lgpd } from './analysis/analise-base-lgpd';
import { analise_vulnerabilidades_devsecops } from './analysis/analise-vulnerabilidades-devsecops';
import { resumo_atual_projeto } from './analysis/resumo-atual-projeto';
import { inventario_atual_wip } from './analysis/inventario-atual-wip';
import { arquitetura_refatoracao_estrutural } from './architecture/arquitetura-refatoracao-estrutural';
import { arquitetura_auditoria_profunda } from './architecture/arquitetura-auditoria-profunda';
import { producao_sitemap_robots } from './production/producao-sitemap-robots';
import { producao_metadata_opengraph } from './production/producao-metadata-opengraph';
import { analise_integracao_dependencias } from './production/analise-integracao-dependencias';
import { analise_seo } from './production/analise-seo';
import { auditoria_estrategia_qualidade } from './production/auditoria-estrategia-qualidade';
import { utilitario_commit } from './utility/utilitario-commit';
import { correcao_auditoria_profunda } from './correction/correcao-auditoria-profunda';
import { auditoria_arquitetural_roadmap } from './correction/auditoria-arquitetural-roadmap';
import { design_layout_ultrawide } from './design/design-layout-ultrawide';
import { design_footer_premium } from './design/design-footer-premium';
import { design_interacao_cards } from './design/design-interacao-cards';
import { design_secao_duvidas } from './design/design-secao-duvidas';
import { termos_e_politicas_completo } from './texts/termos-e-politicas-completo';

export const INITIAL_TEMPLATES = [
  analise_holistica_produto_seo,
  analise_melhoria_tridimensional,
  analise_base_lgpd,
  analise_vulnerabilidades_devsecops,
  resumo_atual_projeto,
  inventario_atual_wip,
  arquitetura_refatoracao_estrutural,
  arquitetura_auditoria_profunda,
  producao_sitemap_robots,
  producao_metadata_opengraph,
  analise_integracao_dependencias,
  analise_seo,
  auditoria_estrategia_qualidade,
  utilitario_commit,
  correcao_auditoria_profunda,
  auditoria_arquitetural_roadmap,
  design_layout_ultrawide,
  design_footer_premium,
  design_interacao_cards,
  design_secao_duvidas,
  termos_e_politicas_completo,
];
