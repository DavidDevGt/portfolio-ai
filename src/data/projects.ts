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
    slug: 'kurai-transcribe',
    title: 'Kurai-Transcribe',
    description: 'Self-hosted transcription API with NLP pipeline. Custom vocabulary injection, NER with SpaCy, automatic punctuation restoration. Semaphore-based VRAM management prevents OOM.',
    longDescription: 'Built a production-grade self-hosted transcription system using Faster-Whisper and CTranslate2 for efficient GPU inference. Features include custom vocabulary injection, named entity recognition with SpaCy, automatic punctuation restoration, VAD filtering, and Pyannote diarization. Real-time GPU monitoring exported to Prometheus for observability.',
    tags: ['Faster-Whisper', 'FastAPI', 'SpaCy', 'CTranslate2'],
    category: 'ml',
    metrics: { label: 'RTF', value: '< 0.3' },
    links: [
      { label: 'Live Demo', url: 'https://transcribe.kuraitachi.com/' },
      { label: 'GitHub', url: 'https://github.com/DavidDevGt' }
    ],
    date: '2026-01'
  },
  {
    slug: 'kuraimusik',
    title: 'KuraiMusik',
    description: 'Autonomous AI radio broadcasting 24/7 with zero human intervention. Dynamic buffer system with ACE-Step 1.5 engine and circuit breaker pattern for resilience.',
    longDescription: 'Designed and deployed an autonomous AI radio station that runs 24/7 without human intervention. Features a dynamic buffer system powered by ACE-Step 1.5 for AI music generation, circuit breaker pattern for fault tolerance, and professional DSP with Liquidsoap including AGC, crossfades, and real-time ID3 metadata management.',
    tags: ['FastAPI', 'Celery', 'Liquidsoap', 'Redis'],
    category: 'ml',
    metrics: { label: 'Uptime', value: '100%' },
    links: [
      { label: 'Live Radio', url: 'https://music.kuraitachi.com/' },
      { label: 'GitHub', url: 'https://github.com/DavidDevGt' }
    ],
    date: '2026-02'
  },
  {
    slug: 'ai-infrastructure',
    title: 'AI Infrastructure Orchestration',
    description: 'Production-grade distributed systems for AI workloads with dynamic resource allocation, automatic scaling, and fault tolerance.',
    longDescription: 'Built production-grade distributed systems for AI workloads featuring model serving with dynamic resource allocation, automatic scaling based on GPU utilization, and comprehensive fault tolerance. Designed for reliability and cost efficiency over hype.',
    tags: ['Kubernetes', 'Prometheus', 'Go', 'Python'],
    category: 'infrastructure',
    metrics: { label: 'Downtime', value: 'Zero' },
    links: [
      { label: 'GitHub', url: 'https://github.com/DavidDevGt' }
    ],
    date: '2025-06'
  },
  {
    slug: 'self-hosted-ml',
    title: 'Self-Hosted ML Pipeline',
    description: 'Complete MLOps stack on homelab GPU infrastructure. Model training, versioning, deployment, and monitoring with zero API costs.',
    longDescription: 'Created a complete MLOps stack running entirely on homelab GPU infrastructure. Covers the full ML lifecycle: model training with MLflow experiment tracking, Docker containerization, CUDA optimization, and PostgreSQL for metadata storage. Built to prove that cloud APIs are a scaling trap for serious AI workloads.',
    tags: ['MLflow', 'Docker', 'CUDA', 'PostgreSQL'],
    category: 'ml',
    metrics: { label: 'API Costs', value: '$0' },
    links: [
      { label: 'GitHub', url: 'https://github.com/DavidDevGt' }
    ],
    date: '2025-03'
  }
];

export const allTags = [...new Set(projects.flatMap(p => p.tags))].sort();

export const categories = [
  { value: 'all', label: 'All Projects' },
  { value: 'infrastructure', label: 'Infrastructure' },
  { value: 'ml', label: 'ML/AI' }
];