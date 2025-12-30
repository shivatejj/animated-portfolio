export interface ExperienceProject {
  id: string;
  title: string;
  tagline: string;
  ownership: string;
  liveUrl?: string;
  techStack: string[];
  content: string[];
  image: string;
}

export const experienceData: ExperienceProject[] = [
  {
    id: 'attendance-portal',
    title: 'Attendance Portal',
    tagline: 'Modern Attendance Management Made Simple',
    ownership: 'Built individually (not group work)',
    liveUrl: 'https://attendance.yoimedia.fun/',
    techStack: ['React', 'Flask', 'MongoDB', 'Hostinger VPS (KVM2)', 'Ubuntu', 'Nginx', 'Gunicorn'],
    content: [
      'Centralized attendance & leave management system',
      'Real-time check-in / check-out with work hour calculation',
      'Role-based access for Admins and Employees',
      'Detailed attendance history & analytics',
      'Secure authentication & session lifecycle management',
      'Fully deployed on VPS with production-grade server configuration'
    ],
    image: 'experience-attendance'
  },
  {
    id: 'pdf-play',
    title: 'PDF Play',
    tagline: 'Click. Convert. Create. Everything your PDF ever needed.',
    ownership: 'Built entirely individually',
    liveUrl: 'https://pdfplay.in/',
    techStack: ['React', 'Node.js', 'Express.js', 'Firebase', 'PDF-Lib', 'pdf.js', 'Puppeteer', 'Multer', 'Ghostscript', 'Hostinger VPS (KVM2)', 'Nginx', 'PM2'],
    content: [
      'Complete PDF toolkit: Merge, Split, Convert, Compress, Edit',
      'Secure file processing with encrypted workflows',
      'Google OAuth & Email authentication',
      'Batch processing for high efficiency',
      'Fully responsive dashboard-based UI',
      'Production-deployed on VPS with reverse proxy'
    ],
    image: 'experience-pdfplay'
  },
  {
    id: 'payslip-generator',
    title: 'Payslip Generator',
    tagline: 'Automated Payslip Generation for Modern Teams',
    ownership: 'Individually developed',
    liveUrl: undefined,
    techStack: ['React', 'TypeScript', 'Supabase'],
    content: [
      'Automated payslip generation system',
      'Dynamic salary calculation logic',
      'Secure employee data handling',
      'Clean UI for HR and finance workflows',
      'Supabase-powered authentication & storage',
      'Designed for scalability and enterprise use'
    ],
    image: 'experience-payslip'
  },
  {
    id: 'supabase-selfhosted',
    title: 'Supabase Self-Hosted Deployment',
    tagline: 'Enterprise Backend Infrastructure on VPS',
    ownership: 'Individually deployed',
    liveUrl: 'https://supabase.yoimedia.fun/',
    techStack: ['Supabase', 'Hostinger VPS (KVM2)', 'Ubuntu', 'Nginx'],
    content: [
      'Self-hosted Supabase instance on VPS',
      'Reverse-proxied via Nginx',
      'Configured for production stability',
      'Hands-on experience with backend infrastructure & DevOps'
    ],
    image: 'experience-supabase'
  },
  {
    id: 'n8n-automation',
    title: 'n8n Automation System',
    tagline: 'Intelligent Workflow Automation Pipelines',
    ownership: 'Individually built automation workflows',
    liveUrl: undefined,
    techStack: ['n8n', 'Google Console APIs', 'Gmail API', 'Telegram Bot API'],
    content: [
      'Built automation workflows for job alerts',
      'Scheduled triggers for Gmail & Telegram delivery',
      'API key management via Google Console',
      'Reduced manual monitoring through automated pipelines',
      'Practical automation experience for real-world use cases'
    ],
    image: 'experience-n8n'
  }
];
