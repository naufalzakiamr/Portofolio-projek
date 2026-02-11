// src/data/projects.js
const projects = [
  {
    id: 1,
    name: 'E-Commerce Platform',
    description: 'Platform e-commerce modern dengan React, Node.js, dan MongoDB. Fitur lengkap termasuk payment gateway, admin dashboard, dan real-time notifications.',
    image: '/project-images/ecommerce.jpg', // Ganti dengan foto project Anda
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Socket.io'],
    github: 'https://github.com/username/ecommerce-platform',
    demo: 'https://ecommerce-demo.vercel.app',
    status: 'Completed'
  },
  {
    id: 2,
    name: 'Task Management App',
    description: 'Aplikasi manajemen tugas dengan fitur kolaborasi tim, drag & drop, deadline tracking, dan integrasi kalender.',
    image: '/project-images/taskmanager.jpg', // Ganti dengan foto project Anda
    technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
    github: 'https://github.com/username/task-manager',
    demo: 'https://taskmanager-demo.vercel.app',
    status: 'Completed'
  },
  {
    id: 3,
    name: 'Weather Dashboard',
    description: 'Dashboard cuaca interaktif dengan visualisasi data, prediksi 7 hari, dan notifikasi cuaca ekstrem menggunakan API real-time.',
    image: '/project-images/weather.jpg', // Ganti dengan foto project Anda
    technologies: ['React', 'Chart.js', 'OpenWeather API', 'PWA'],
    github: 'https://github.com/username/weather-dashboard',
    demo: 'https://weather-demo.vercel.app',
    status: 'Completed'
  },
  {
    id: 4,
    name: 'Learning Management System',
    description: 'Platform pembelajaran online dengan video streaming, quiz interaktif, progress tracking, dan sertifikat digital.',
    image: '/project-images/lms.jpg', // Ganti dengan foto project Anda
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'AWS S3'],
    github: 'https://github.com/username/lms-platform',
    demo: 'https://lms-demo.vercel.app',
    status: 'In Progress'
  },
  {
    id: 5,
    name: 'Real Estate Platform',
    description: 'Platform properti dengan pencarian advanced, virtual tour 360°, mortgage calculator, dan sistem booking viewing.',
    image: '/project-images/realestate.jpg', // Ganti dengan foto project Anda
    technologies: ['React', 'Express', 'MySQL', 'Google Maps API'],
    github: 'https://github.com/username/real-estate',
    demo: 'https://realestate-demo.vercel.app',
    status: 'Completed'
  },
  {
    id: 6,
    name: 'Portfolio Website',
    description: 'Website portfolio responsif dengan animasi modern, dark/light theme, dan optimasi SEO menggunakan React dan Tailwind CSS.',
    image: '/project-images/portfolio.jpg', // Ganti dengan foto project Anda
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    github: 'https://github.com/username/portfolio',
    demo: 'https://portfolio-demo.vercel.app',
    status: 'Completed'
  }
];

export default projects;