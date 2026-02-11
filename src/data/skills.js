// src/data/skills.js
const skills = [
  {
    category: 'Frontend Development',
    items: [
      { name: 'React.js', level: 90, icon: '⚛️' },
      { name: 'JavaScript', level: 85, icon: '🟨' },
      { name: 'TypeScript', level: 80, icon: '🔷' },
      { name: 'HTML5 & CSS3', level: 95, icon: '🌐' },
      { name: 'Tailwind CSS', level: 88, icon: '🎨' },
      { name: 'Next.js', level: 75, icon: '▲' }
    ]
  },
  {
    category: 'Backend Development',
    items: [
      { name: 'Node.js', level: 82, icon: '🟢' },
      { name: 'Express.js', level: 80, icon: '🚀' },
      { name: 'Python', level: 78, icon: '🐍' },
      { name: 'PHP', level: 70, icon: '🐘' },
      { name: 'REST API', level: 85, icon: '🔗' },
      { name: 'GraphQL', level: 65, icon: '📊' }
    ]
  },
  {
    category: 'Database & Tools',
    items: [
      { name: 'MySQL', level: 80, icon: '🗄️' },
      { name: 'MongoDB', level: 75, icon: '🍃' },
      { name: 'Git & GitHub', level: 90, icon: '📚' },
      { name: 'Docker', level: 70, icon: '🐳' },
      { name: 'AWS', level: 65, icon: '☁️' },
      { name: 'Linux', level: 75, icon: '🐧' }
    ]
  },
  {
    category: 'Design & Others',
    items: [
      { name: 'UI/UX Design', level: 80, icon: '🎨' },
      { name: 'Figma', level: 85, icon: '🎯' },
      { name: 'Photoshop', level: 70, icon: '🖼️' },
      { name: 'Agile/Scrum', level: 75, icon: '🔄' }
    ]
  },
  {
    category: 'Organizations',
    items: [
      { name: 'Himpunan Mahasiswa Teknologi Informasi', role: 'Anggota', icon: '🎓' },
      { name: 'Komunitas Frontend Indonesia', role: 'Kontributor', icon: '💻' },
      { name: 'Open Source Club', role: 'Volunteer', icon: '🌟' }
    ]
  }
];

export default skills;
