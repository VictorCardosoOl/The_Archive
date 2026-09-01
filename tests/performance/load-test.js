import http from 'k6/http';
import { check, sleep } from 'k6';

// 4. Requisitos Não Funcionais (Performance, Carga e Resiliência)
export const options = {
  stages: [
    { duration: '30s', target: 100 }, // Spike to 100 Virtual Users
    { duration: '1m', target: 500 },  // Ramp-up to 500 Virtual Users
    { duration: '30s', target: 1000 }, // Stress phase: 1000 VUs
    { duration: '30s', target: 0 },   // Cool down
  ],
  thresholds: {
    // 95% of requests must complete below 500ms
    http_req_duration: ['p(95)<500'],
    // Error rate must be less than 1%
    http_req_failed: ['rate<0.01'],
  },
};

export default function () {
  // Ajuste a URL para o ambiente de homologação real (Staging)
  const BASE_URL = __ENV.TARGET_URL || 'http://localhost:4173';
  
  const res = http.get(BASE_URL);
  
  check(res, {
    'status is 200': (r) => r.status === 200,
    'transaction time OK': (r) => r.timings.duration < 500,
  });
  
  // Wait time between iterations to simulate real user behavior
  sleep(1);
}
