import homiqImg from '../assets/HOMIQ_ From Plot to Home (1).png';
import pasumaiImg from '../assets/PASUMAI Smart Farming Showcase.png';
import muleAccountImg from '../assets/Mule Account Detection Dashboard.png';
import aiSignLanguageImg from '../assets/AI Sign Language Translation System.png';
import ecommerceImg from '../assets/E-Commerce Website Showcase.png';

// Certificate Asset Imports
import fullStackCert from '../assets/guvi-full-stack-certificate.jpg';
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
    location: "Coimbatore, Tamil Nadu, India | Open to Remote Opportunities"
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
    "I am a Full-Stack MERN Stack Developer and B.Tech Information Technology student specializing in architecting modern web applications, scalable RESTful APIs, and AI-enabled software solutions.",
    "Proficient in React.js, Node.js, Express.js, MongoDB, JavaScript (ES6+), Python, HTML5, and CSS3, with strong focus on clean code architecture and responsive UI design.",
    "I have hands-on experience building full-stack web applications from scratch, designing MongoDB schema models, implementing RESTful API routing, and integrating intelligent AI endpoints.",
    "Actively seeking Full-Stack Developer and AI-enabled Software Developer opportunities to engineer scalable, high-impact digital web products."
  ],
  objective: "To secure a Full-Stack Developer or AI-enabled Software Developer role in a growth-oriented engineering team where I can leverage my expertise in React, Node.js, Express, MongoDB, RESTful APIs, and AI integrations to build production-grade web systems.",
  languages: [
    { name: "Tamil", proficiency: "Native" },
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
    contribution: "Engineered key full-stack modules including homeowner-engineer matchmaking workflows, dynamic material cost calculation logic, MongoDB schemas, RESTful API endpoints, and AI layout planning integration.",
    keyFeatures: [
      "Homeowner & Civil Engineer Matchmaking Portal",
      "Dynamic Construction Cost & Material Quantity Estimator",
      "AI-Assisted Layout & Planning Suggestions Engine",
      "2D Floor Plan & 3D Visualization Preview Module"
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "AI Integration"],
    engineeringHighlights: ["MERN Stack", "RESTful APIs", "MongoDB Schemas", "JWT Authentication", "AI Integration", "Responsive UI"],
    outcome: "Created a unified digital construction management platform that replaces fragmented offline processes with transparent project coordination, engineer matching, and cost control.",
    github: null,
    live: null,
    featured: true,
    visualType: "construction",
    image: homiqImg,
    caseStudy: {
      buttonLabel: "EXPLORE HOMIQ CASE STUDY",
      badgeLabel: "TECHNICAL CASE STUDY // HOMIQ",
      badgeTag: "FULL-STACK MERN + AI",
      problemStatement: "Home construction in developing urban regions is heavily fragmented. Homeowners face non-transparent material pricing, difficulty finding verified civil engineers, and lack visual layout clarity before committing capital.",
      solution: "HOMIQ provides an integrated web platform connecting homeowners directly with verified civil engineers and suppliers. The system embeds AI-assisted layout suggestions, dynamic cost estimation logic, and visual 2D/3D floor plan previews.",
      myContribution: [
        { area: "Frontend Development", detail: "Built modular React components for interactive project dashboards, engineer directory filtering, and dynamic calculator interfaces." },
        { area: "Backend / API Development", detail: "Developed RESTful Express.js API endpoints for user registration, engineer queries, quote creation, and project status updates." },
        { area: "Database Implementation", detail: "Designed MongoDB document models for Users, Projects, Quotations, and Architectural Specs with indexed lookup fields." },
        { area: "Authentication & Security", detail: "Implemented JWT token authentication and role-based route middleware separating Homeowner, Engineer, and Contractor access." },
        { area: "AI Integration", detail: "Connected AI prompt handling services that return structured room layout suggestions based on user spatial inputs." },
        { area: "Cost Estimation Engine", detail: "Engineered client and server-side calculation logic for estimating construction material quantities and budgetary breakdowns from user spatial inputs." }
      ],
      architecture: {
        flow: [
          { step: "Frontend SPA", desc: "React.js client application rendering dynamic forms, dashboards, and visual preview components." },
          { step: "API / Backend Server", desc: "Node.js & Express.js REST API layer with request validation middleware and business logic routing." },
          { step: "Database Layer", desc: "MongoDB document store managing collections for users, projects, quotes, and structural configurations." },
          { step: "Services & Integrations", desc: "JWT session authentication middleware and external AI service endpoints for smart spatial planning." }
        ]
      },
      apiFlow: [
        { step: "1. User Action", detail: "Homeowner enters plot dimensions, room counts, and budget parameters on React UI." },
        { step: "2. Frontend Dispatch", detail: "React component validates inputs and dispatches HTTP POST request to API endpoint." },
        { step: "3. API Endpoint", detail: "Express route handler receives authenticated estimation request with Bearer JWT token." },
        { step: "4. Business Logic", detail: "Express controller validates token role, executes cost algorithm, and formats spatial prompt for AI engine." },
        { step: "5. Database & AI Services", detail: "Database queries rate benchmarks; AI service generates spatial room recommendations." },
        { step: "6. JSON Response", detail: "Backend sends structured JSON payload containing itemized cost estimates and layout recommendations." },
        { step: "7. UI Render", detail: "React updates state and renders interactive cost breakdown tables and 2D floor plan preview cards." }
      ],
      database: {
        technology: "MongoDB (NoSQL Document Store)",
        ormLayer: "Mongoose ODM / Native Drivers",
        models: [
          { name: "Users", fields: "Authentication credentials, user roles (homeowner/engineer/contractor), profile details, and verification status" },
          { name: "Projects", fields: "Homeowner metadata, plot parameters, target budget range, and lifecycle status flags" },
          { name: "Quotations", fields: "Project references, engineer quotes, material/labor breakdown structures, and approval tracking" },
          { name: "FloorPlans", fields: "Spatial dimensions, room configuration parameters, layout data structure, and preview references" }
        ]
      },
      authentication: {
        provider: "JWT (JSON Web Tokens) & bcrypt.js",
        protectedRoutes: "Express authorization middleware guarding project submission, quotation approvals, and engineer dashboard endpoints.",
        userSession: "Stateless token-based authentication with user claims transmitted via HTTP Authorization headers.",
        roleBasedAccess: "Role middleware enforcing explicit access boundaries for Homeowner, Civil Engineer, and Contractor actions."
      },
      aiIntegration: {
        purpose: "Assists homeowners with preliminary spatial room planning, structural feasibility, and material quantity recommendations.",
        flow: "User Spatial Input → Backend AI Service Handler → Prompt Evaluation → Structured JSON Payload → React Floorplan Preview.",
        wording: "Structured prompt parameter evaluation generating room spatial distributions and preliminary construction material estimates."
      },
      engineeringDecisionsList: [
        {
          challenge: "Managing multi-role project workflow transitions between homeowners, civil engineers, and material suppliers.",
          decision: "Architected a centralized MongoDB project document model with explicit state-machine status transition logic.",
          implementation: "Implemented Express route middleware that validates user role permissions and project state before permitting status updates.",
          result: "Prevented invalid state jumps, ensured strict access control, and provided clear project tracking across all user roles."
        },
        {
          challenge: "Synchronizing dynamic cost calculations across varying material rates without causing UI latency.",
          decision: "Divided calculation logic into responsive client-side preview interfaces backed by server-validated rate schemas.",
          implementation: "Used memoized React custom hooks for instant UI updates, validating final estimates via Express API endpoints.",
          result: "Delivered instant visual feedback to users while maintaining accurate, server-validated cost records."
        }
      ],
      futureImprovements: "Integration of real-time WebSocket chat messaging between homeowners and engineers, along with WebGL 3D layout rendering.",
      confidentialityNotice: "Note: Architecture diagrams, database abstractions, and workflows presented in this case study are high-level conceptual overviews prepared for portfolio demonstration purposes. Proprietary implementation details remain confidential."
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
    engineeringHighlights: ["React.js", "Express.js", "Python ML", "REST APIs", "Low-Bandwidth UI"],
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
      myContribution: [
        { area: "Frontend Development", detail: "Created accessible, high-contrast React UI layouts optimized for mobile browser access in rural areas." },
        { area: "Backend API Architecture", detail: "Built Node.js & Express.js REST endpoints handling image upload parsing and diagnostic routing." },
        { area: "ML Service Integration", detail: "Connected Python image classification model scripts to evaluate plant leaf symptoms." }
      ],
      architecture: {
        flow: [
          { step: "React SPA", desc: "Mobile-responsive user interface for selecting crop symptoms or uploading leaf images." },
          { step: "Express API Bridge", desc: "REST server receiving diagnostic payloads and forwarding images to diagnostic scripts." },
          { step: "Python ML Engine", desc: "Image classification scripts processing spatial features against plant pathology datasets." },
          { step: "MongoDB Store", desc: "Database storing crop disease profiles, treatment guides, and historical diagnostic logs." }
        ]
      },
      engineeringDecisionsList: [
        {
          challenge: "Processing crop image diagnostic requests over low-bandwidth rural mobile networks without timing out.",
          decision: "Implemented client-side image compression in JavaScript prior to API dispatch.",
          implementation: "Used HTML5 Canvas API to downscale leaf images to optimal classification resolution before sending payloads.",
          result: "Reduced upload payload size by over 75%, resulting in faster diagnostic responses on 3G mobile networks."
        }
      ],
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
    engineeringHighlights: ["Behavioral Analytics", "Node.js REST APIs", "Rule Engine", "MongoDB Logs"],
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
      myContribution: [
        { area: "Anomaly Detection Logic", detail: "Built rule engine functions evaluating transaction velocity spikes and rapid credential updates." },
        { area: "Backend API & Logging", detail: "Designed Express.js REST API endpoints to capture account audit logs into indexed MongoDB collections." },
        { area: "Risk Dashboard UI", detail: "Developed real-time status indicators classifying user accounts into Low, Medium, or High security risk levels." }
      ],
      architecture: {
        flow: [
          { step: "Event Stream", desc: "Account transaction and login activity events sent to logging API endpoint." },
          { step: "Rule Engine", desc: "Node.js logic evaluating event frequency, transaction amounts, and geographic anomalies." },
          { step: "MongoDB Log Store", desc: "High-throughput indexed database storing event histories and risk score records." },
          { step: "Security Dashboard", desc: "Analyst dashboard displaying flagged accounts and real-time risk status." }
        ]
      },
      engineeringDecisionsList: [
        {
          challenge: "Minimizing false positive fraud alerts while evaluating transaction events in real time.",
          decision: "Created multi-condition rule thresholds requiring correlated suspicious indicators before triggering high-level alerts.",
          implementation: "Structured composite MongoDB query pipelines analyzing 24-hour event windows for velocity anomalies.",
          result: "Significantly reduced false positive flags while accurately detecting high-risk account anomalies."
        }
      ],
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
    engineeringHighlights: ["Computer Vision", "Python ML", "React UI", "Web Speech API"],
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
      myContribution: [
        { area: "React Dashboard UI", detail: "Designed accessible, real-time video feed interface displaying gesture text predictions." },
        { area: "Vision Model Pipeline", detail: "Connected Python ML gesture classification scripts processing hand spatial landmark coordinates." },
        { area: "Text-to-Speech Integration", detail: "Integrated browser Web Speech API for zero-dependency audio voice playback of recognized gestures." }
      ],
      architecture: {
        flow: [
          { step: "Webcam Video Stream", desc: "HTML5 video element capturing live camera frames." },
          { step: "Landmark Extraction", desc: "Extracting 21 3D hand landmark coordinates per frame." },
          { step: "ML Classifier", desc: "Python model predicting matching gesture sign class." },
          { step: "Speech Synthesis", desc: "Web Speech API rendering audible voice output on React UI." }
        ]
      },
      engineeringDecisionsList: [
        {
          challenge: "Maintaining smooth 30 FPS video frame gesture recognition without causing browser UI lag.",
          decision: "Offloaded frame subsampling and landmark coordinate evaluation to lightweight inference model callbacks.",
          implementation: "Utilized `requestAnimationFrame` throttled state updates to decouple video processing from React renders.",
          result: "Achieved fluid 30 FPS video playback and real-time gesture text rendering without UI freeze."
        }
      ],
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
    engineeringHighlights: ["MERN Stack", "JWT Authentication", "MongoDB Schemas", "Cart Management"],
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
      myContribution: [
        { area: "MERN Stack Frontend & Backend", detail: "Built responsive React store pages and connected Node.js/Express REST API endpoints." },
        { area: "JWT Session Security", detail: "Implemented password hashing with bcrypt and JWT token protection for user accounts and checkout." },
        { area: "Database Schema Modeling", detail: "Designed MongoDB collections for Products, Users, Cart Sessions, and Completed Orders." }
      ],
      architecture: {
        flow: [
          { step: "React Shopping SPA", desc: "Catalog grid with search filtering, product detail modals, and cart drawers." },
          { step: "Express REST API", desc: "Routing layers for `/api/products`, `/api/auth`, `/api/cart`, and `/api/orders`." },
          { step: "JWT Middleware", desc: "Authentication verification enforcing session access on cart and checkout operations." },
          { step: "MongoDB Store", desc: "Document database maintaining product inventory and order logs." }
        ]
      },
      engineeringDecisionsList: [
        {
          challenge: "Preventing shopping cart state inconsistencies during concurrent session updates and stock checks.",
          decision: "Utilized atomic MongoDB update operations (`$inc`, `$push`) for consistent cart transaction updates.",
          implementation: "Designed express controller methods that lock inventory state during checkout pipeline processing.",
          result: "Guaranteed accurate cart calculations and order accuracy across user sessions."
        }
      ],
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
