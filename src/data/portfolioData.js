import homiqImg from '../assets/HOMIQ_ From Plot to Home (1).png';
import pasumaiImg from '../assets/PASUMAI Smart Farming Showcase.png';
import muleAccountImg from '../assets/Mule Account Detection Dashboard.png';
import aiSignLanguageImg from '../assets/AI Sign Language Translation System.png';
import ecommerceImg from '../assets/E-Commerce Website Showcase.png';

// Certificate Asset Imports
import fullStackCert from '../assets/1777473246591.jfif';
import jsCert from '../assets/1778850476718.jfif';
import mongoBasicsCert from '../assets/1784541436640.jfif';
import mongoAiStrategyCert from '../assets/1784541436591.jfif';
import mongoAiAgentsCert from '../assets/1784541436742.jfif';
import mongoVectorSearchCert from '../assets/1784541436759.jfif';
import mongoRagCert from '../assets/1784541437785.jfif';

export const personalData = {
  name: "V. SURYA",
  headline: "B.Tech Information Technology Student | MERN Stack Development Enthusiast | Aspiring Software Developer",
  shortHeadline: "MERN Stack Enthusiast & IT Engineering Student",
  contact: {
    phone: "+91 8270793109",
    phoneRaw: "+918270793109",
    email: "vsurya2107@gmail.com",
    github: "https://github.com/vsurya2107-arch",
    linkedin: "https://www.linkedin.com/in/v-surya-689436387",
    location: "Tamil Nadu, India"
  },
  assets: {
    portrait: "/surya_portrait.png",
    resumePdf: "/V_Surya_Resume.pdf"
  },
  education: {
    degree: "B.Tech – Information Technology",
    institution: "Suguna College of Engineering"
  },
  areasOfInterest: [
    "Software Development",
    "MERN Stack Development",
    "Web Technologies",
    "Database Systems"
  ],
  summary: [
    "I am an enthusiastic B.Tech Information Technology student with a strong passion for software development and modern technologies.",
    "I am proficient in MERN Stack, JavaScript, MongoDB, Python, C++, HTML, and CSS.",
    "I have experience building full-stack web applications from scratch and solving real-world problems.",
    "I am seeking an internship opportunity to apply my skills, gain industry experience, and contribute to meaningful projects."
  ],
  objective: "To obtain an internship opportunity in a growth-oriented organization where I can apply my knowledge of MERN Stack development, software development, and web technologies, gain practical industry experience, and continuously improve my technical and professional skills while contributing effectively to the team.",
  languages: [
    { name: "Tamil", proficiency: "Native / Professional Proficiency" },
    { name: "English", proficiency: "Professional Working Proficiency" }
  ],
  personalInterest: {
    title: "Fitness & Bodybuilding",
    description: "A passion for fitness and bodybuilding which builds discipline, consistency, determination, and helps me stay focused on personal and professional growth."
  }
};

export const skillsData = {
  categories: [
    {
      id: "mern",
      title: "MERN STACK",
      skills: ["MongoDB", "Express.js", "React.js", "Node.js"],
      description: "Building scalable full-stack web applications with modern JavaScript ecosystem."
    },
    {
      id: "programming",
      title: "PROGRAMMING LANGUAGES",
      skills: ["JavaScript", "Python", "C++"],
      description: "Strong core logic, object-oriented principles, and algorithm development."
    },
    {
      id: "web",
      title: "WEB TECHNOLOGIES",
      skills: ["HTML5", "CSS3", "Responsive Web Design"],
      description: "Crafting semantic, accessible, and high-performance user interfaces."
    },
    {
      id: "database",
      title: "DATABASE",
      skills: ["MongoDB"],
      description: "Designing schema architecture, collection modeling, and database operations."
    },
    {
      id: "tools",
      title: "TOOLS & TECHNOLOGY",
      skills: ["Git", "GitHub"],
      description: "Version control, collaborative workflows, and code repository management."
    }
  ]
};

export const mainProjects = [
  {
    id: "homiq",
    number: "01",
    title: "HOMIQ",
    subtitle: "Smart Digital Platform for Home Construction",
    description: "HOMIQ is a digital platform designed to simplify the complete home construction process.\nIt connects homeowners with engineers, contractors, material suppliers, and other construction professionals.\nThe platform helps users manage planning, design, cost estimation, financing, and construction activities.\nIt provides smart tools such as AI-assisted planning, 2D floor plans, 3D visualization, and cost estimation.\nThe goal is to make home construction more organized, transparent, and easier to manage.",
    category: "MERN Stack Platform",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript"],
    github: null,
    live: null,
    featured: true,
    visualType: "construction",
    image: homiqImg
  },
  {
    id: "pasumai",
    number: "02",
    title: "PASUMAI",
    subtitle: "Crop Disease & Pest Management System",
    description: "PASUMAI is a smart agriculture system developed to help farmers identify crop diseases and pest problems.\nThe system provides timely information and practical recommendations based on crop conditions.\nIt can support farmers in monitoring important factors such as soil and environmental conditions.\nThe platform is designed with simple and accessible features that can be useful even in rural environments.\nIts goal is to help farmers reduce crop losses and improve agricultural productivity.",
    category: "AgTech & Machine Learning",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Python"],
    github: null,
    live: null,
    featured: true,
    visualType: "agriculture",
    image: pasumaiImg
  },
  {
    id: "mule-account",
    number: "03",
    title: "Mule Account Detection System",
    subtitle: "Fraud Prevention & Behavioral Analysis",
    description: "This system is designed to identify and prevent fake or suspicious accounts using behavioral analysis.\nIt analyzes user activities and account behavior to detect unusual patterns and potential risks.\nRule-based logic is used to identify activities that may indicate fraudulent account usage.\nThe system helps improve account security by detecting suspicious behavior at an early stage.\nIt can be useful for reducing fraud and maintaining a safer digital environment.",
    category: "Cybersecurity & Analytics",
    technologies: ["JavaScript", "Node.js", "Python", "MongoDB", "Express.js"],
    github: null,
    live: null,
    featured: true,
    visualType: "security",
    image: muleAccountImg
  },
  {
    id: "ai-sign-language",
    number: "04",
    title: "AI Sign Language Translation",
    subtitle: "Real-Time Machine Learning Gesture Translator",
    description: "This project is an AI-based application that translates sign language gestures into text or speech.\nIt uses machine learning and computer vision techniques to recognize hand gestures in real time.\nThe system processes the detected gestures and converts them into understandable communication.\nIt is designed to support better communication between sign language users and others.\nThe project demonstrates how AI can be used to create more accessible and inclusive technology.",
    category: "AI & Web Technologies",
    technologies: ["Python", "JavaScript", "React.js", "HTML5", "CSS3"],
    github: null,
    live: null,
    featured: true,
    visualType: "ai-gesture",
    image: aiSignLanguageImg
  },
  {
    id: "ecommerce",
    number: "05",
    title: "E-Commerce Website",
    subtitle: "Full-Stack Online Shopping & Authentication System",
    description: "This project is a full-stack e-commerce platform designed for a smooth online shopping experience.\nUsers can browse products, view product details, manage their cart, and place orders.\nThe application includes user authentication and secure account management features.\nIt provides a structured interface for managing products and customer interactions.\nThe project demonstrates practical implementation of modern full-stack web development technologies.",
    category: "Full-Stack Application",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "CSS3"],
    github: null,
    live: null,
    featured: true,
    visualType: "ecommerce",
    image: ecommerceImg
  }
];

export const secondaryProjects = [
  {
    id: "live-news",
    title: "Live News Application",
    description: "Fetches and displays live news dynamically for an interactive user experience.",
    technologies: ["JavaScript", "HTML5", "CSS3", "REST APIs"],
    github: null,
    live: null
  },
  {
    id: "weather-app",
    title: "Weather Application",
    description: "Displays real-time weather information through an interactive UI.",
    technologies: ["JavaScript", "React.js", "CSS3", "Weather API"],
    github: null,
    live: null
  },
  {
    id: "movie-search",
    title: "Movie Search Application",
    description: "Searches and explores movie-related information dynamically.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Movie API"],
    github: null,
    live: null
  },
  {
    id: "todo-app",
    title: "Todo Application",
    description: "Task management application for creating, organizing, and managing daily tasks.",
    technologies: ["React.js", "JavaScript", "CSS3"],
    github: null,
    live: null
  },
  {
    id: "signup-auth",
    title: "Sign-Up & Authentication System",
    description: "User registration and authentication system for secure access and management.",
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT"],
    github: null,
    live: null
  },
  {
    id: "book-management",
    title: "Book Management System",
    description: "Application to manage book-related information and basic data operations.",
    technologies: ["Node.js", "MongoDB", "Express.js"],
    github: null,
    live: null
  }
];

export const certificationsData = [
  {
    id: "cert-1",
    title: "Full Stack Development",
    issuer: "GUVI",
    collaboration: "In collaboration with HCL & IIT Guidance",
    description: "Comprehensive training on full stack development using modern web technologies.",
    type: "single",
    image: fullStackCert
  },
  {
    id: "cert-2",
    title: "JavaScript",
    issuer: "GUVI",
    collaboration: "In collaboration with HCL & IIT Guidance",
    description: "Certification in core JavaScript concepts and practical web development.",
    type: "single",
    image: jsCert
  },
  {
    id: "cert-3",
    title: "MongoDB",
    issuer: "MongoDB Official Platform",
    collaboration: "5 Verified Credentials",
    description: "Completed 5 MongoDB certifications covering database fundamentals, AI data strategy, AI agents, vector search, and RAG architectures.",
    type: "multi",
    certificatesCount: 5,
    representativeImage: mongoBasicsCert,
    certificates: [
      {
        id: "mongo-1",
        title: "MongoDB Basics for Students",
        issuer: "MongoDB",
        image: mongoBasicsCert
      },
      {
        id: "mongo-2",
        title: "AI Data Strategy with MongoDB",
        issuer: "MongoDB",
        image: mongoAiStrategyCert
      },
      {
        id: "mongo-3",
        title: "AI Agents with MongoDB",
        issuer: "MongoDB",
        image: mongoAiAgentsCert
      },
      {
        id: "mongo-4",
        title: "Vector Search Fundamentals",
        issuer: "MongoDB",
        image: mongoVectorSearchCert
      },
      {
        id: "mongo-5",
        title: "RAG with MongoDB",
        issuer: "MongoDB",
        image: mongoRagCert
      }
    ]
  }
];

export const technicalActivitiesData = {
  activities: [
    "Participated in Technical Workshops",
    "Presented Papers in Academic Events",
    "Participated in Hackathons",
    "Participated in Academic Technology Events"
  ],
  outcomes: [
    "Technical Knowledge",
    "Problem-Solving",
    "Teamwork",
    "Communication Skills"
  ]
};

export const mentoringData = {
  role: "Student Technical Mentor",
  mentoredCount: 21,
  headline: "21 JUNIOR STUDENTS MENTORED",
  points: [
    "Teaching MERN Stack Development to 21 junior students.",
    "Helping juniors understand front-end, back-end, and database concepts.",
    "Monitoring their progress and supporting skill development.",
    "Guiding students across different development domains.",
    "Strengthened leadership, communication, and team coordination skills."
  ]
};

export const servicesData = [
  {
    title: "Full-Stack Web Applications",
    description: "Architecting end-to-end web applications with robust front-ends and reliable back-end infrastructure."
  },
  {
    title: "Responsive Websites",
    description: "Designing fast, pixel-perfect, and mobile-friendly websites that look stunning across all devices."
  },
  {
    title: "MERN Stack Applications",
    description: "Building modern web experiences leveraging MongoDB, Express.js, React.js, and Node.js."
  },
  {
    title: "Database-driven Applications",
    description: "Designing structured NoSQL MongoDB databases and connecting them to full-stack application APIs."
  },
  {
    title: "Authentication Systems",
    description: "Implementing secure user registration, session management, and login authentication flows."
  },
  {
    title: "Interactive Web Experiences",
    description: "Creating dynamic, scroll-driven UI components with smooth animations and intuitive user feedback."
  }
];
