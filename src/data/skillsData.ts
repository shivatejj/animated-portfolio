import { Code2, Layers, Cloud, Brain } from 'lucide-react';

export interface SkillInfo {
  name: string;
  logo: string;
  color: string;
  tooltip: string;
  useCases: string[];
  level: number;
  levelLabel: string;
}

export interface SkillDomain {
  icon: typeof Code2;
  title: string;
  skills: SkillInfo[];
}

export const skillsData: SkillDomain[] = [
  {
    icon: Code2,
    title: 'Languages',
    skills: [
      {
        name: 'Python',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        color: '#3776AB',
        tooltip: 'Used for automation & AI pipelines',
        useCases: ['Backend automation scripts', 'Machine learning model development'],
        level: 85,
        levelLabel: 'Advanced',
      },
      {
        name: 'JavaScript',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        color: '#F7DF1E',
        tooltip: 'Core language for web interactivity',
        useCases: ['Frontend logic & interactions', 'Full-stack web applications'],
        level: 90,
        levelLabel: 'Expert',
      },
      {
        name: 'TypeScript',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        color: '#3178C6',
        tooltip: 'Type-safe JavaScript development',
        useCases: ['Large-scale React applications', 'API development with strict typing'],
        level: 85,
        levelLabel: 'Advanced',
      },
      {
        name: 'HTML',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        color: '#E34F26',
        tooltip: 'Semantic markup for web pages',
        useCases: ['Accessible web structures', 'SEO-optimized content'],
        level: 95,
        levelLabel: 'Expert',
      },
      {
        name: 'CSS',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        color: '#1572B6',
        tooltip: 'Styling and visual design',
        useCases: ['Responsive layouts', 'Animation & transitions'],
        level: 90,
        levelLabel: 'Expert',
      },
    ],
  },
  {
    icon: Layers,
    title: 'Frameworks',
    skills: [
      {
        name: 'React',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        color: '#61DAFB',
        tooltip: 'Primary frontend framework',
        useCases: ['Component-based UI architecture', 'State management with hooks'],
        level: 88,
        levelLabel: 'Advanced',
      },
      {
        name: 'Node.js',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        color: '#339933',
        tooltip: 'Server-side JavaScript runtime',
        useCases: ['REST API development', 'Real-time applications'],
        level: 80,
        levelLabel: 'Advanced',
      },
      {
        name: 'Express',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
        color: '#FFFFFF',
        tooltip: 'Minimal backend framework',
        useCases: ['API routing & middleware', 'Backend service architecture'],
        level: 78,
        levelLabel: 'Proficient',
      },
      {
        name: 'Next.js',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
        color: '#FFFFFF',
        tooltip: 'React framework for production',
        useCases: ['Server-side rendering', 'Static site generation'],
        level: 75,
        levelLabel: 'Proficient',
      },
      {
        name: 'Tailwind',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
        color: '#06B6D4',
        tooltip: 'Utility-first CSS framework',
        useCases: ['Rapid UI prototyping', 'Consistent design systems'],
        level: 92,
        levelLabel: 'Expert',
      },
    ],
  },
  {
    icon: Cloud,
    title: 'Deployment',
    skills: [
      {
        name: 'VPS',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
        color: '#FCC624',
        tooltip: 'Self-managed server hosting',
        useCases: ['Full control deployment', 'Custom server configurations'],
        level: 70,
        levelLabel: 'Proficient',
      },
      {
        name: 'Firebase',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
        color: '#FFCA28',
        tooltip: 'Google cloud platform for apps',
        useCases: ['Real-time database hosting', 'Authentication services'],
        level: 82,
        levelLabel: 'Advanced',
      },
      {
        name: 'Supabase',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
        color: '#3ECF8E',
        tooltip: 'Open-source Firebase alternative',
        useCases: ['PostgreSQL database hosting', 'Edge functions & storage'],
        level: 85,
        levelLabel: 'Advanced',
      },
      {
        name: 'GitHub',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
        color: '#FFFFFF',
        tooltip: 'Version control & CI/CD',
        useCases: ['Source code management', 'GitHub Actions workflows'],
        level: 90,
        levelLabel: 'Expert',
      },
      {
        name: 'Vercel',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
        color: '#FFFFFF',
        tooltip: 'Frontend deployment platform',
        useCases: ['Zero-config deployments', 'Edge network hosting'],
        level: 88,
        levelLabel: 'Advanced',
      },
    ],
  },
  {
    icon: Brain,
    title: 'AI / ML',
    skills: [
      {
        name: 'NLP',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        color: '#3776AB',
        tooltip: 'Natural language processing',
        useCases: ['Text classification & analysis', 'Chatbot development'],
        level: 75,
        levelLabel: 'Proficient',
      },
      {
        name: 'Transformers',
        logo: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg',
        color: '#FFD21E',
        tooltip: 'Used in NLP-based generators',
        useCases: ['Text generation models', 'Sequence-to-sequence tasks'],
        level: 72,
        levelLabel: 'Proficient',
      },
      {
        name: 'TensorFlow',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
        color: '#FF6F00',
        tooltip: 'Deep learning framework',
        useCases: ['Neural network training', 'Model deployment & serving'],
        level: 68,
        levelLabel: 'Intermediate',
      },
      {
        name: 'HuggingFace',
        logo: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg',
        color: '#FFD21E',
        tooltip: 'ML model hub & tools',
        useCases: ['Pre-trained model access', 'Fine-tuning pipelines'],
        level: 78,
        levelLabel: 'Proficient',
      },
      {
        name: 'Embeddings',
        logo: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg',
        color: '#FFD21E',
        tooltip: 'Semantic text embeddings',
        useCases: ['Semantic search systems', 'Text similarity matching'],
        level: 80,
        levelLabel: 'Advanced',
      },
    ],
  },
];
