export const profile = {
  firstName: 'Thumuganti',
  lastName: 'Rithwik',
  initials: 'TR',
  email: 'thumugantirithwik@gmail.com',
  phoneDisplay: '+91 89785 77319',
  phoneHref: 'tel:+918978577319',
  github: 'https://github.com/thumugantirithwik',
  githubLabel: 'github.com/thumugantirithwik',
  linkedin: 'https://www.linkedin.com/in/thumuganti-rithwik-5087b6444',
  resumePath: '/Thumuganti-Rithwik-Resume.pdf',
  resumeFileName: 'Thumuganti-Rithwik-Resume.pdf',
  photo: '/images/rithwik.jpg',
}

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export const education = [
  {
    period: '2023 — 2027',
    title: 'Bachelor of Computer Science',
    detail: 'Artificial Intelligence & Full Stack Development · Chaitanya Deemed to be University',
  },
  {
    period: '2021 — 2023',
    title: 'Intermediate',
    detail: 'Sr. Junior College · 94%',
  },
  {
    period: '2009 - 2021',
    title: 'SSC',
    detail: 'Geetham Concept School · 98%',
  },
]

export const certifications = [
  {
    provider: 'Mastercard',
    title: 'Cybersecurity Job Simulation',
    issued: 'Issued Nov 2026',
    credentialId: '6af5543aa5441ec97164ab3c',
    icon: 'shield' as const,
  },
  {
    provider: 'Tata Consultancy Services',
    title: 'Cybersecurity Analyst Job Simulation',
    issued: 'Issued Nov 2026',
    credentialId: '6af472bcc4008628fcecb829',
    icon: 'analyst' as const,
  },
]

export const projects = [
  {
    title: 'Gesture Based Volume Control',
    description:
      'Controls computer volume with hand gestures—no keyboard or mouse needed. Computer vision and machine learning recognize movements in real time for a touch-free, accessible experience.',
    tags: ['Python', 'Computer Vision', 'Machine Learning'],
    category: 'Interaction · Computer Vision',
    icon: 'hand' as const,
    href: 'https://github.com/thumugantirithwik',
  },
  {
    title: 'Food Waste Management System',
    description:
      'A responsive web experience that helps reduce food waste through food donation, listings, and request management—connecting surplus food from donors with NGOs and people in need.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web · Social Impact',
    icon: 'sprout' as const,
    href: 'https://github.com/thumugantirithwik',
  },
]

export const technicalSkills = [
  { label: 'C++', icon: 'code' as const },
  { label: 'Python', icon: 'python' as const },
  { label: 'HTML / JavaScript', icon: 'html' as const },
  { label: 'Data Structures', icon: 'structure' as const },
  { label: 'OOP', icon: 'oop' as const },
  { label: 'Front-End', icon: 'frontend' as const },
  { label: 'Web Development', icon: 'web' as const },
]

export const strengths = [
  { label: 'Communication', icon: 'communication' as const },
  { label: 'Time Management', icon: 'time' as const },
  { label: 'Positive Thinking', icon: 'positive' as const },
  { label: 'Teamwork', icon: 'team' as const },
  { label: 'Problem Solving', icon: 'problem' as const },
  { label: 'Quick Learner', icon: 'quick' as const },
]
