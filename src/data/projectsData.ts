export interface Project {
  id: string;
  title: string;
  description: string[];
  techStack: string[];
  githubUrl?: string;
  image: string;
}

export const projectsData: Project[] = [
  {
    id: 'distractor-generation',
    title: 'Automated Distractor Generation',
    description: [
      'Built an automated distractor generation engine for MCQs',
      'Achieved high-quality semantic distractors using similarity scoring',
      'Reduced manual question preparation effort for educators'
    ],
    techStack: ['Python', 'NLP', 'TensorFlow', 'Sentence Transformers', 'Anvil'],
    githubUrl: 'https://github.com/shivatejj/Automated-Distractors-Generation.git',
    image: 'project-distractor'
  },
  {
    id: 'question-generation',
    title: 'Automated Question Generation',
    description: [
      'Developed a text-to-question generation pipeline',
      'Improved question clarity and reduced preparation time',
      'Designed scalable backend APIs for educator usage'
    ],
    techStack: ['Python', 'Transformer Models', 'HuggingFace', 'Flask API'],
    githubUrl: 'https://github.com/shivatejj/Automated-Question-Generation.git',
    image: 'project-question'
  },
  {
    id: 'anti-doping',
    title: 'Gamified Anti-Doping Education Platform',
    description: [
      'Built a gamified learning platform with quizzes and leaderboards',
      'Improved student engagement through reward-based interaction',
      'Implemented secure authentication and data handling'
    ],
    techStack: ['React', 'Node.js', 'MongoDB', 'JWT Authentication', 'Gamification Logic'],
    githubUrl: 'https://github.com/NiteshSoma/anti-doping.git',
    image: 'project-gaming'
  },
  {
    id: 'plant-identification',
    title: 'Plant Species Identification',
    description: [
      'Developed a CNN-based image classification model',
      'Achieved high accuracy on leaf image datasets',
      'Optimized preprocessing and inference pipeline'
    ],
    techStack: ['CNN', 'TensorFlow', 'Keras', 'Computer Vision'],
    image: 'project-plant'
  }
];
