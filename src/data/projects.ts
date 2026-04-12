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
  },
  {
    slug: 'kuraimusik',
    title: 'KuraiMusik',
    description: 'Autonomous content generation system running 24/7 with zero human intervention. Dynamic content buffer system powered by advanced generative AI and circuit breaker patterns for resilience.',
    longDescription: 'Autonomous content generation system designed to run 24/7 without human intervention. Features a dynamic content buffer system powered by advanced generative AI, circuit breaker patterns for fault tolerance, and intelligent content orchestration with real-time metadata management and automated scheduling.',
    tags: ['FastAPI', 'Celery', 'Redis', 'ACE-Step', 'PostgreSQL'],
    category: 'ml',
    metrics: { label: 'Uptime', value: '100%' },
    links: [
      { label: 'Live', url: 'https://music.kuraitachi.com/' },
      { label: 'GitHub', url: 'https://github.com/DavidDevGt' }
    ],
    date: '2026-02'
  },
  {
    slug: 'kurai2video',
    title: 'KurAI2Video',
    description: 'Enterprise-grade self-hosted video generation platform using state-of-the-art Wan 2.1 T2V-1.3B model. Eliminates cloud API costs with advanced GPU memory management.',
    longDescription: 'Enterprise-grade self-hosted video generation platform using state-of-the-art Wan 2.1 T2V-1.3B model. Eliminates cloud API costs that charge $0.15-0.40 per second—10,000 videos would cost $15,000-40,000. Advanced GPU memory management with dynamic CPU↔GPU offloading prevents OOM errors. Strict concurrency control ensures one active job at a time for predictable performance. Built-in monitoring dashboard tracks GPU utilization, VRAM usage, and model performance in real-time. Production-ready Docker deployment with automated health checks and failover mechanisms.',
    tags: ['Wan 2.1 T2V-1.3B', 'PyTorch', 'FastAPI', 'Docker', 'CUDA', 'Prometheus'],
    category: 'ml',
    metrics: { label: 'Savings', value: '$35K+' },
    date: '2026'
  },
  {
    slug: 'daily-journal',
    title: 'Daily Journal',
    description: '100% private personal diary app for Android. No accounts, no subscriptions, no trackers. Your entries never leave your device.',
    longDescription: '100% private personal diary app for Android. No accounts, no subscriptions, no trackers. Your entries never leave your device. Minimalist interface, emotional analysis, dark mode, and works offline. Developed with privacy as the top priority.',
    tags: ['Kotlin', 'Android', 'Room Database', 'Material Design'],
    category: 'api',
    metrics: { label: 'Privacy', value: '100%' },
    links: [
      { label: 'Download', url: 'https://journal.davidwebgt.com/' }
    ],
    date: '2025'
  }
];

export const allTags = [...new Set(projects.flatMap(p => p.tags))].sort();

export const categories = [
  { value: 'all', label: 'All Projects' },
  { value: 'infrastructure', label: 'Infrastructure' },
  { value: 'ml', label: 'ML/AI' }
];