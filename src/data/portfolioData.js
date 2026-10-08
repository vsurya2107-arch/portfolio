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
  headline: "Full-Stack Developer Building AI-Powered Web Applications",
  shortHeadline: "Full-Stack Developer · AI Integration",
  coreTechnologies: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "AI Integration"
  ],
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
    "Full-Stack Web Apps",
    "MERN Stack Architecture",
    "AI Feature Integration",
    "Database System Design"
  ],
  summary: [
    "I am an enthusiastic Full-Stack Developer and B.Tech Information Technology student with a strong focus on building modern web applications and integrating AI capabilities into real-world products.",
    "I am proficient in React.js, Node.js, Express.js, MongoDB, JavaScript, Python, C++, HTML5, and CSS3.",
    "I have practical experience architecting full-stack MERN applications from scratch, designing database schemas, building RESTful APIs, and implementing smart AI features.",
    "I am seeking full-stack and AI-enabled software developer opportunities to contribute clean, scalable code to impactful web systems."
  ],
  objective: "To obtain a Full-Stack Developer or AI-enabled Software Developer position in a growth-oriented team where I can apply my expertise in React, Node.js, MongoDB, RESTful APIs, and AI integrations, contribute to production web systems, and engineer reliable digital products.",
  languages: [
    { name: "Tamil", proficiency: "Native / Professional Proficiency" },
    { name: "English", proficiency: "Professional Working Proficiency" }
  ],
  personalInterest: {
    title: "Fitness & Bodybuilding",
    description: "A passion for fitness and bodybuilding which builds discipline, consistency, determination, and helps me stay focused on continuous engineering growth."
  }
};

export const skillsData = {
  categories: [
    {
      id: "frontend",
      title: "FRONTEND",
      skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Responsive Web Design"],
      description: "Crafting modular, accessible, and high-performance user interfaces with modern React and state flows."
    },
    {
      id: "backend",
      title: "BACKEND",
      skills: ["Node.js", "Express.js", "RESTful APIs", "Middleware Architecture"],
      description: "Building scalable server-side applications, REST API routing, and backend business logic."
    },
    {
      id: "database",
      title: "DATABASE",
      skills: ["MongoDB", "Schema Architecture", "NoSQL Data Modeling"],
      description: "Designing collection schemas, query operations, and database persistence layers."
    },
    {
      id: "tools",
      title: "TOOLS & DEPLOYMENT",
      skills: ["Git", "GitHub", "Vite", "Postman", "Vercel / Deployment Workflows"],
      description: "Managing version control, collaborative workflows, API testing, and continuous deployment."
    },
    {
      id: "ai",
      title: "AI INTEGRATION",
      skills: ["OpenAI API / Gemini API", "Python ML Pipelines", "AI Gesture Recognition", "AI-Assisted Workflows"],
      description: "Integrating intelligent machine learning services and AI capabilities into full-stack web applications."
    }
  ]
};

export const mainProjects = [
  {
    id: "homiq",
    number: "01",
    title: "HOMIQ",
    subtitle: "Smart Digital Platform for Home Construction",
    category: "Flagship MERN & AI Platform",
    flagship: true,
    description: "HOMIQ is a digital platform engineered to unify and streamline the home construction lifecycle.\nIt connects homeowners directly with civil engineers, contractors, and material suppliers while offering smart digital tools for planning, cost estimation, and layout visualization.",
    problem: "Homeowners struggle with fragmented communication, opaque cost estimates, and lack of visual layout clarity when coordinating home construction with civil engineers and suppliers.",
    contribution: "Architected and built full-stack MERN features including homeowner-engineer matchmaking workflows, digital floor plan preview views, dynamic cost calculation tools, and AI-assisted layout suggestions.",
    keyFeatures: [
      "Homeowner & Civil Engineer Matchmaking Portal",
      "Dynamic Construction Cost & Material Quantity Estimator",
      "AI-Assisted Layout & Planning Suggestions Engine",
      "2D Floor Plan & 3D Visualization Preview Module"
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "AI Integration"],
    outcome: "Created a unified digital construction management platform that replaces fragmented offline processes with transparent project coordination, engineer matching, and cost control.",
    github: null,
    live: null,
    featured: true,
    visualType: "construction",
    image: homiqImg,
    caseStudy: {
      buttonLabel: "EXPLORE HOMIQ CASE STUDY",
      badgeLabel: "FLAGSHIP SYSTEM CASE STUDY // HOMIQ",
      badgeTag: "FULL-STACK MERN + AI",
      problemStatement: "Home construction in developing urban regions is heavily fragmented. Homeowners struggle with non-transparent pricing, unverified contractor selection, and difficulty visualizing architectural layouts prior to construction commitment.",
      solution: "HOMIQ provides an integrated web platform connecting homeowners directly with verified civil engineers and suppliers. The system embeds AI-assisted planning assistance, cost calculation logic, and visual layout previews.",
      myRole: "Full-Stack Developer — Designed MERN backend endpoints, MongoDB schemas, React UI components, and integrated AI planning assistance algorithms.",
      sections: [
        { label: "4. SYSTEM ARCHITECTURE", text: "Decoupled MERN stack architecture featuring a React SPA frontend communicating with a RESTful Express.js/Node.js API backend connected to a MongoDB database." },
        { label: "5. FRONTEND ARCHITECTURE", text: "Component-driven React layout structured into stateful forms, interactive cost calculator modules, modal preview views, and responsive CSS styling." },
        { label: "6. BACKEND ARCHITECTURE", text: "Node.js REST API with Express routing, request validation middleware, modular controller logic, and centralized error handling." },
        { label: "7. DATABASE DESIGN", text: "MongoDB document collections for Users (Homeowners, Engineers, Contractors), Construction Projects, Quotations, and Floor Plan Specifications." },
        { label: "8. AUTHENTICATION", text: "Secure user registration and session management ensuring role-based access for homeowners and engineering professionals." },
        { label: "9. API STRUCTURE", text: "RESTful JSON API endpoints supporting user registration, project creation, engineer queries, cost calculations, and layout generation requests." },
        { label: "10. AI INTEGRATION", text: "AI-assisted planning feature utilizing smart prompt parameters to generate layout recommendations, space utilization advice, and preliminary material estimates." }
      ],
      majorFeatures: [
        "Verified Civil Engineer & Contractor Booking Directory",
        "Automated Construction Cost & Material Quantity Estimator",
        "AI-Assisted Architectural Layout Generator",
        "2D Floor Plan & 3D Visualization Viewer Module"
      ],
      technicalChallenges: "Synchronizing dynamic cost calculations across varying regional material rates while ensuring real-time UI updates in React.",
      solutionsImplemented: "Implemented memoized client-side state calculators backed by structured MongoDB pricing schemas for instant feedback without API latency.",
      engineeringDecisions: "Chose MERN stack due to JavaScript end-to-end consistency, native JSON document handling in MongoDB, and rapid client-side rendering capabilities.",
      futureImprovements: "Integration of WebSocket real-time chat between homeowners and engineers, along with WebGL 3D model interaction."
    }
  },
  {
    id: "pasumai",
    number: "02",
    title: "PASUMAI",
    subtitle: "Crop Disease & Pest Management System",
    category: "AgTech & Machine Learning",
    flagship: false,
    description: "PASUMAI is a smart AgTech platform developed to assist agricultural farmers with crop disease identification and timely pest management advisories.",
    problem: "Farmers in rural regions suffer severe crop yield losses due to delayed identification of plant diseases and lack of accessible diagnostic tools.",
    contribution: "Built responsive MERN stack frontend views and integrated Python-based machine learning diagnostic workflows for crop health evaluations.",
    keyFeatures: [
      "Real-Time Image & Symptom Disease Diagnostics",
      "Actionable Pest Control & Advisory Guidance",
      "Environmental & Soil Health Monitoring Advisories",
      "Low-Bandwidth Accessible Web Interface"
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Python"],
    outcome: "Delivered an accessible AgTech application facilitating early crop disease detection and practical treatment recommendations for farmers.",
    github: null,
    live: null,
    featured: true,
    visualType: "agriculture",
    image: pasumaiImg,
    caseStudy: {
      buttonLabel: "EXPLORE PASUMAI CASE STUDY",
      badgeLabel: "TECHNICAL CASE STUDY // PASUMAI",
      badgeTag: "AGTECH & MACHINE LEARNING",
      problemStatement: "Farmers in rural regions suffer severe crop yield losses due to delayed identification of plant diseases and lack of accessible diagnostic tools.",
      solution: "PASUMAI provides a smart AgTech web system for crop disease diagnostics, pest management advisories, and environmental condition monitoring.",
      myRole: "Full-Stack Developer — Built responsive MERN stack user interfaces and integrated Python-driven machine learning diagnostic workflows.",
      sections: [
        { label: "AGRICULTURE WORKFLOW", text: "Farmers upload crop leaf photos or select symptom categories to initiate dynamic diagnostic checks." },
        { label: "DISEASE & PEST MANAGEMENT", text: "Diagnostic classification matches reported symptoms against crop pathology logic to output specific treatment advisories." },
        { label: "SOIL & ENVIRONMENTAL MONITORING", text: "Provides recommendations based on regional weather, humidity, and soil condition indicators." },
        { label: "BACKEND & API ARCHITECTURE", text: "Express.js REST endpoints handle image payload parsing, invoke Python diagnostic models, and return structured JSON responses." }
      ],
      majorFeatures: [
        "Real-Time Image & Symptom Crop Disease Diagnostics",
        "Actionable Pest Control & Field Advisory Guidance",
        "Environmental & Soil Condition Monitoring Dashboard",
        "Low-Bandwidth Accessible Web Interface"
      ],
      technicalChallenges: "Processing image diagnostic requests over low-bandwidth rural mobile networks without timing out.",
      solutionsImplemented: "Implemented client-side image compression prior to API dispatch and optimized JSON diagnostic responses.",
      engineeringDecisions: "Combined React SPA frontend with Python backend diagnostic routines for computational flexibility.",
      futureImprovements: "Adding Progressive Web App (PWA) offline caching for field use in remote agricultural areas."
    }
  },
  {
    id: "mule-account",
    number: "03",
    title: "Mule Account Detection System",
    subtitle: "Fraud Prevention & Behavioral Analysis",
    category: "Cybersecurity & Analytics",
    flagship: false,
    description: "A cybersecurity system designed to identify and flag suspicious or illicit mule accounts through automated behavioral pattern analysis.",
    problem: "Digital financial platforms face severe security risks from unauthorized money mule accounts used for money laundering and fraudulent transfers.",
    contribution: "Implemented rule-based anomaly detection algorithms and backend account behavior monitoring REST endpoints using Node.js, Python, and MongoDB.",
    keyFeatures: [
      "Behavioral Anomaly & Fraud Risk Analytics",
      "Rule Engine Suspicious Pattern Detection",
      "Real-Time Account Scoring Dashboard",
      "Proactive Account Lock & Security Alerting"
    ],
    technologies: ["JavaScript", "Node.js", "Express.js", "MongoDB", "Python"],
    outcome: "Established an automated fraud detection framework identifying suspicious account behavior early to maintain digital application security.",
    github: null,
    live: null,
    featured: true,
    visualType: "security",
    image: muleAccountImg,
    caseStudy: {
      buttonLabel: "EXPLORE MULE ACCOUNT DETECTION CASE STUDY",
      badgeLabel: "SECURITY CASE STUDY // MULE ACCOUNT DETECTION",
      badgeTag: "CYBERSECURITY & ANALYTICS",
      problemStatement: "Digital financial platforms face severe security threats from money mule accounts created to facilitate illegal money movements and fraudulent transactions.",
      solution: "An automated security system analyzing account activity patterns, transfer frequencies, and behavioral anomalies to flag suspicious accounts early.",
      myRole: "Full-Stack Developer & Security Analyst — Implemented rule-based anomaly detection logic and backend behavior monitoring REST APIs in Node.js and Python.",
      sections: [
        { label: "BEHAVIORAL ANALYSIS ENGINE", text: "Monitors account access patterns, velocity spikes in fund movements, and frequent credential modifications." },
        { label: "SUSPICIOUS PATTERN DETECTION", text: "Rule-based engine flags unusual transaction behaviors against preset financial fraud risk profiles." },
        { label: "ACCOUNT RISK SCORING", text: "Calculates real-time risk scores (Low, Medium, High) triggering automated security alerts or manual verification." },
        { label: "BACKEND & DATA FLOW", text: "Express.js API endpoints record event logs in MongoDB and return real-time status indicators to security dashboards." }
      ],
      majorFeatures: [
        "Behavioral Anomaly & Fraud Risk Analytics",
        "Rule Engine Suspicious Pattern Detection",
        "Real-Time Account Scoring Dashboard",
        "Proactive Account Lock & Security Alerting"
      ],
      technicalChallenges: "Minimizing false positive risk flags while maintaining high-speed real-time transaction event evaluation.",
      solutionsImplemented: "Created multi-condition rule thresholds requiring multiple correlated suspicious events before flagging an account.",
      engineeringDecisions: "Selected MongoDB indexed logs for high-throughput behavioral event reads and fast query performance.",
      futureImprovements: "Integrating graph database analysis to detect multi-account mule networks and collusion chains."
    }
  },
  {
    id: "ai-sign-language",
    number: "04",
    title: "AI Sign Language Translation",
    subtitle: "Real-Time Machine Learning Gesture Translator",
    category: "AI & Web Technologies",
    flagship: false,
    description: "An AI-powered web application that interprets real-time sign language hand gestures into clean text and synthesized speech.",
    problem: "Communication barriers between sign language speakers and non-signers create accessibility hurdles in daily digital and in-person interactions.",
    contribution: "Developed frontend gesture dashboard with React and connected computer vision ML gesture recognition models for live stream interpretation.",
    keyFeatures: [
      "Real-Time Hand Gesture Computer Vision Recognition",
      "Machine Learning Gesture-to-Text Stream Engine",
      "Integrated Text-to-Speech Audio Output Pipeline",
      "Inclusive & Accessible UI Dashboard"
    ],
    technologies: ["Python", "JavaScript", "React.js", "HTML5", "CSS3"],
    outcome: "Built an interactive AI web tool converting sign language gestures into text and speech for enhanced communication accessibility.",
    github: null,
    live: null,
    featured: true,
    visualType: "ai-gesture",
    image: aiSignLanguageImg,
    caseStudy: {
      buttonLabel: "EXPLORE AI SIGN LANGUAGE CASE STUDY",
      badgeLabel: "ACCESSIBILITY & AI CASE STUDY // SIGN LANGUAGE TRANSLATOR",
      badgeTag: "AI VISION & WEB TECH",
      problemStatement: "Communication barriers between sign language speakers and non-signers create accessibility hurdles in daily digital and in-person interactions.",
      solution: "An AI gesture recognition web tool converting video sign language hand gestures into readable text streams and synthesized speech audio output.",
      myRole: "Frontend & AI Developer — Developed the React gesture dashboard and connected computer vision ML gesture classification models.",
      sections: [
        { label: "REAL-TIME GESTURE RECOGNITION", text: "Captures web camera video frames to extract hand landmark coordinates in real time." },
        { label: "VISION MACHINE LEARNING STREAM", text: "Python-driven classification model evaluates spatial landmark coordinates to recognize sign language gestures." },
        { label: "GESTURE-TO-TEXT PIPELINE", text: "Sequential gesture predictions are translated into coherent text words and displayed on the interactive React UI." },
        { label: "TEXT-TO-SPEECH AUDIO PIPELINE", text: "Integrated Web Speech API synthesizes generated text into audible speech output for seamless communication." }
      ],
      majorFeatures: [
        "Real-Time Hand Gesture Computer Vision Recognition",
        "Machine Learning Gesture-to-Text Stream Engine",
        "Integrated Text-to-Speech Audio Output Pipeline",
        "Inclusive & Accessible UI Dashboard"
      ],
      technicalChallenges: "Maintaining smooth 30 FPS video frame gesture recognition without causing browser UI thread lag.",
      solutionsImplemented: "Utilized lightweight frame subsampling and offloaded landmark coordinate evaluation to optimized inference models.",
      engineeringDecisions: "Used Web Speech API for native, zero-dependency browser text-to-speech audio rendering.",
      futureImprovements: "Expanding dataset coverage to support continuous sentence translation and two-handed complex signs."
    }
  },
  {
    id: "ecommerce",
    number: "05",
    title: "E-Commerce Website",
    subtitle: "Full-Stack Online Shopping & Authentication System",
    category: "Full-Stack Web Application",
    flagship: false,
    description: "A full-stack e-commerce application delivering smooth product discovery, user account authentication, cart management, and order placement workflows.",
    problem: "Modern online shoppers require fast product filtering, intuitive shopping carts, and secure account management across desktop and mobile browsers.",
    contribution: "Designed and developed full-stack store architecture with user authentication, MongoDB schema models, cart state handling, and order API routes.",
    keyFeatures: [
      "Product Browsing & Dynamic Filter Search",
      "Secure JWT User Authentication & Account System",
      "Persistent Shopping Cart & Order Checkout Workflow",
      "Full-Stack Express & MongoDB Persistence"
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "CSS3"],
    outcome: "Created a responsive full-stack e-commerce web application with reliable database operations and secure user account flows.",
    github: null,
    live: null,
    featured: true,
    visualType: "ecommerce",
    image: ecommerceImg,
    caseStudy: {
      buttonLabel: "EXPLORE E-COMMERCE CASE STUDY",
      badgeLabel: "FULL-STACK CASE STUDY // E-COMMERCE PLATFORM",
      badgeTag: "FULL-STACK MERN APP",
      problemStatement: "Modern online shoppers require fast product filtering, intuitive shopping carts, and secure account management across desktop and mobile devices.",
      solution: "A full-stack MERN e-commerce application featuring JWT user authentication, persistent shopping cart management, catalog search, and order checkout APIs.",
      myRole: "Full-Stack Developer — Architected MongoDB collection schemas, built Express.js REST APIs, and authored responsive React UI components.",
      sections: [
        { label: "PRODUCT CATALOG & SEARCH", text: "Dynamic search and category filtering supported by MongoDB indexed product collections." },
        { label: "JWT AUTHENTICATION & SESSIONS", text: "Secure user registration, password hashing with bcrypt, and token-based protected API routes." },
        { label: "SHOPPING CART MANAGEMENT", text: "Persistent cart state synchronized between client React state and user database sessions." },
        { label: "ORDER CHECKOUT WORKFLOW", text: "Full checkout pipeline processing item quantities, price calculations, shipping data, and order history." }
      ],
      majorFeatures: [
        "Product Browsing & Dynamic Filter Search",
        "Secure JWT User Authentication & Account System",
        "Persistent Shopping Cart & Order Checkout Workflow",
        "Full-Stack Express & MongoDB Persistence"
      ],
      technicalChallenges: "Preventing cart state inconsistencies during concurrent user updates and product stock checks.",
      solutionsImplemented: "Utilized atomic MongoDB update operations ($inc, $push) for consistent transaction handling.",
      engineeringDecisions: "Chose MERN stack architecture for end-to-end JavaScript data handling and fast client-side rendering.",
      futureImprovements: "Integrating Stripe payment gateway processing and automated email order receipt notifications."
    }
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
    title: "AI Feature Integration",
    description: "Connecting OpenAI, Gemini APIs, and machine learning endpoints into full-stack web applications."
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
