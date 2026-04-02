export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  category: 'infrastructure' | 'ml' | 'data' | 'api';
  metrics: { label: string; value: string };
  links?: { label: string; url: string }[];
  date: string;
}

export const projects: Project[] = [
  {
    slug: 'llm-gateway',
    title: 'LLM Gateway',
    description: 'Production-grade API gateway for LLM inference with rate limiting, caching, and observability.',
    longDescription: 'Built a high-performance API gateway designed specifically for LLM workloads. Features include intelligent rate limiting per user/model, semantic caching to reduce costs, comprehensive observability with distributed tracing, and automatic retry with circuit breaker patterns.',
    tags: ['Go', 'Redis', 'Prometheus', 'OpenTelemetry'],
    category: 'infrastructure',
    metrics: { label: 'p99 Latency', value: '50ms' },
    links: [
      { label: 'GitHub', url: 'https://github.com' },
      { label: 'Blog Post', url: '/blog/llm-gateway' }
    ],
    date: '2024-12'
  },
  {
    slug: 'vector-store',
    title: 'Vector Store',
    description: 'Distributed embedding storage with sub-millisecond retrieval for RAG applications.',
    longDescription: 'Designed and implemented a distributed vector database optimized for RAG workloads. Supports approximate nearest neighbor search with multiple index types (HNSW, IVFFlat), hybrid search with full-text filtering, and horizontal scaling via Kubernetes.',
    tags: ['Rust', 'PostgreSQL', 'pgvector', 'Kubernetes'],
    category: 'data',
    metrics: { label: 'Throughput', value: '1M+ embeddings/s' },
    links: [
      { label: 'GitHub', url: 'https://github.com' }
    ],
    date: '2024-10'
  },
  {
    slug: 'ml-pipeline',
    title: 'ML Pipeline',
    description: 'Automated training and deployment pipeline for large-scale ML models.',
    longDescription: 'Created an end-to-end MLOps pipeline handling data preprocessing, model training, validation, and deployment. Integrates with Kubernetes for scalable training, MLflow for experiment tracking, and Argo CD for GitOps-style deployments.',
    tags: ['Kubernetes', 'MLflow', 'Airflow', 'Python'],
    category: 'ml',
    metrics: { label: 'Cost Reduction', value: '80%' },
    links: [
      { label: 'Case Study', url: '/blog/ml-pipeline-case-study' }
    ],
    date: '2024-08'
  },
  {
    slug: 'realtime-inference',
    title: 'Realtime Inference',
    description: 'Low-latency inference serving for production ML models with auto-scaling.',
    longDescription: 'Built a real-time inference platform serving multiple ML models with sub-100ms latency. Features include model versioning, A/B testing, canary deployments, and automatic scaling based on request volume and GPU utilization.',
    tags: ['Python', 'TensorRT', 'NVIDIA Triton', 'gRPC'],
    category: 'ml',
    metrics: { label: 'Latency', value: '<50ms p99' },
    links: [
      { label: 'Documentation', url: '/docs/inference' }
    ],
    date: '2024-06'
  },
  {
    slug: 'data-mesh',
    title: 'Data Mesh Platform',
    description: 'Self-serve data platform enabling domain-oriented ownership and governance.',
    longDescription: 'Implemented a data mesh architecture providing self-service data products across the organization. Features data contract enforcement, lineage tracking, access control, and cost attribution per domain.',
    tags: ['Apache Kafka', 'Spark', 'Delta Lake', 'Terraform'],
    category: 'data',
    metrics: { label: 'Teams Served', value: '12+' },
    date: '2024-04'
  },
  {
    slug: 'api-gateway',
    title: 'API Gateway',
    description: 'Multi-region API gateway with traffic management and security policies.',
    longDescription: 'Developed a cloud-native API gateway handling millions of requests per day. Features include intelligent routing, request transformation, JWT validation, rate limiting, and comprehensive logging for audit compliance.',
    tags: ['Go', 'Envoy', 'OAuth2', 'Linux'],
    category: 'api',
    metrics: { label: 'Requests/day', value: '50M+' },
    links: [
      { label: 'Architecture', url: '/docs/api-gateway-arch' }
    ],
    date: '2024-02'
  }
];

export const allTags = [...new Set(projects.flatMap(p => p.tags))].sort();

export const categories = [
  { value: 'all', label: 'All Projects' },
  { value: 'infrastructure', label: 'Infrastructure' },
  { value: 'ml', label: 'ML/AI' },
  { value: 'data', label: 'Data' },
  { value: 'api', label: 'API' }
];