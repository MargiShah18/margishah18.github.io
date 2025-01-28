import type {
  NavBarLink,
  SocialLink,
  Identity,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent,
  ExperiencePageContent,
  EducationPageContent,
  CertificationPageContent,
  ResearchPageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Margi Shah",
  logo: "/logo.webp",
  email: "margishah1803@gmail.com",
  phone: "(343)-598-8479",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "About",
    url: "/",
  },
  {
    title: "Education",
    url: "/education",
  },
  {
    title: "Experience",
    url: "/experience",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Certifications",
    url: "/certifications",
  },
  {
    title: "Research",
    url: "/research",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: "https://github.com/MargiShah18/", // Add your GitHub URL
    icon: "mdi:github",
    external: true,
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/margishah1833/", // Add your LinkedIn URL
    icon: "mdi:linkedin",
    external: true,
  },
  {
    title: "Google Scholar",
    url: "https://scholar.google.ca/citations?user=F6hmXtUAAAAJ", // Add your Google Scholar URL
    icon: "mdi:google",
    external: true,
  },
  {
    title: "Mail",
    url: "mailto:margishah1803@gmail.com",
    icon: "mdi:email",
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Margi Shah - Software Developer",
    description:
      "Software Developer specializing in ReactJS, Node.js, Machine Learning and Full Stack Development",
    image: identity.logo,
  },
  role: "Software Developer & Machine Learning Engineer",
  description:
    "Software developer with expertise in full-stack development and machine learning, currently pursuing Master's in Engineering at the University of Ottawa.",
  skills: {
    languages: ["JavaScript", "Python", "C++", "SQL", "HTML", "CSS"],
    frameworks: [
      "Express",
      "ReactJS",
      "NodeJS",
      "NextJS",
      "Prisma ORM",
      "TailwindCSS",
      "MongoDB",
      "TensorFlow",
      "PyTorch",
      "Keras",
      "Scikit-learn",
      "Numpy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "SciPy",
      "Streamlit",
      "OpenCV",
      "NLTK",
      "Flask",
      "Django",
      "Redis",
    ],
    cloud: ["AWS (EC2, S3)", "Heroku"],
    devops: ["Kubernetes", "Docker", "CI/CD", "Jenkins", "Git"],
    other: [
      "API Development",
      "Jira",
      "Code Review",
      "SQL/NoSQL Databases",
      "Unit Testing",
      "Agile Methodologies",
    ],
  },
  socialLinks: socialLinks,
  links: [
    {
      title: "View Detailed Experience",
      url: "/experience",
    },
    {
      title: "View  Projects",
      url: "/projects",
    },
  ],
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Margi Shah",
    description:
      "Portfolio of software development and machine learning projects",
    image: identity.logo,
  },
  subtitle: "Featured Projects",
  projects: [
    {
      title: "AWS Content Moderation System",
      description:
        "Designed cloud architecture for image uploads with AI-generated tags via AWS Recognition. Developed batch-processing SQS for content moderation using AWS services.",
      image: "/p1aws.png",
      year: "2024",
      url: "https://github.com/MargiShah18/AWS_Content_Moderation",
    },
    {
      title: "Job Portal Web Application",
      description:
        "Built a scalable job portal using ReactJS, NodeJS, and MongoDB, handling 500+ job postings and 3000+ user registrations in the first month.",
      image: "/p2job.png",
      year: "2024",
      url: "https://github.com/MargiShah18/JobHunt_Portal",
    },
    {
      title: "Emotion-Music-Recommendation",
      description:
        "Developed an emotion recognition system using FER2013 dataset and Spotify's API to recommend music playlists based on detected facial expressions.",
      image: "/p3emo.png",
      year: "2024",
      url: "https://github.com/MargiShah18/Emotion-Music-Recommendation",
    },
    {
      title: "Symptoms Based Disease detection RAG Chatbot",
      description:
        "Developed a chatbot that detects potential diseases based on symptoms by leveraging a Retrieval-Augmented Generation (RAG) model for accurate, context-driven suggestions.",
      image: "/p4rag.png",
      year: "2024",
      url: "https://github.com/MargiShah18/RAG-Chatbot",
    },
    {
      title: "Smart ATS Resume System",
      description:
        "Developed a Smart ATS Resume System that automates resume screening by analyzing candidate resumes against job descriptions using AI algorithms to recommend the best-fit candidates.",
      image: "/p5ats.png",
      year: "2024",
      url: "https://github.com/MargiShah18/Smart_ATS_System",
    },
    {
      title: "Superstore Sales Dashboard and Forecast",
      description:
        "Developed a Superstore Sales Dashboard and Forecasting system in Power BI that visualizes sales data and predicts future trends using historical data to support decision-making and optimize business strategies.",
      image: "/p6dashboardsales.png",
      year: "2024",
      url: "https://github.com/MargiShah18/SuperStore-Dashboard-and-forecast",
    },
    {
      title: "HR Analystics Dashboard",
      description:
        "Developed an HR Analytics Dashboard to help the company's HR team analyze attrition rates by gender, job role, years of service, education level, and department, providing valuable insights for retention strategies.",
      image: "/p7dashboardhr.png",
      year: "2024",
      url: "https://github.com/MargiShah18/HR-Analystics-Dashboard",
    },
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Tim Witzdam",
    description: "Thoughts, stories and ideas.",
    image: identity.logo,
  },
  subtitle: "Thoughts, stories and ideas.",
};

export const experiencePageContent: ExperiencePageContent = {
  seo: {
    title: "Experience | Margi Shah",
    description:
      "Professional experience in software development and machine learning",
    image: identity.logo,
  },
  subtitle: "Professional Experience",
  experience: [
    {
      title: "Freelance Web Developer",
      company: "Freelance Projects",
      duration: "Jan 2023 — Present",
      description: [
        "Worked on various projects involving ReactJS, Node.js, MongoDB, and Redis, building scalable web applications and ensured efficient backend communication.",
        "Created an Internal Tool for Social Media Management using ReactJS and Django, allowing clients to manage posts across multiple platforms, improving team efficiency by 40%.",
        "Delivered a Job Portal Web Application, integrating MongoDB and ReactJS to build dynamic search features and user interfaces that enhanced user experience and engagement.",
        "Set up and maintained CI/CD pipelines with Jenkins, automating deployment processes and ensuring smooth updates and reliable production releases across various projects.",
      ],
    },
    {
      title: "Teaching Assistant",
      company: "University of Ottawa",
      duration: "Sept 2024 — Present",
      description: [
        "Led tutorials for 120 students in Advanced Programming with C++ (CSI2372), simplified complex topics like memory management, pointers, and object-oriented design, resulting in improved assignment performance.",
        "Mentored students on data structures and algorithms, guiding them in implementing linked lists, binary trees, and sorting algorithms to enhance practical coding skills.",
      ],
    },
    {
      title: "Machine Learning Developer Intern",
      company: "Dhyey Technologies",
      duration: "Aug 2023 — April 2024",
      description: [
        "Solely led the development and deployment of a medical imaging solution for a client, utilizing PyTorch and TensorFlow to design and train Convolutional Neural Networks (CNNs) for accurate image classification and segmentation tasks.",
        "Leveraged OpenCV for image preprocessing, including noise reduction and image normalization, while utilizing Keras to fine-tune models like U-Net and ResNet50 to improve segmentation and object detection in medical scans.",
        "Implemented an end-to-end pipeline integrating Scikit-learn for model evaluation and Streamlit for interactive visualization, allowing the client to efficiently assess and monitor model performance on real-time medical images.",
      ],
    },
    {
      title: "Software Developer Intern",
      company: "WebBrains Technologies Pvt. Ltd",
      duration: "May 2022 — Jul 2022",
      description: [
        "Built a scalable and reliable e-commerce web application using Python and Django, optimizing backend performance to support increased user traffic and ensure consistent performance.",
        "Designed and implemented a comprehensive online shopping platform with HTML, CSS, JavaScript, and Django, integrating seamless payment processing and user authentication features for an enhanced shopping experience.",
      ],
    },
  ],
};

export const educationPageContent: EducationPageContent = {
  seo: {
    title: "Education | Margi Shah",
    description: "Academic background and qualifications",
    image: identity.logo,
  },
  subtitle: "Academic Background",
  education: [
    {
      degree: "Master of Engineering in Electrical and Computer Engineering",
      institution: "University of Ottawa",
      duration: "Sep 2024 — Present",
      description:
        "Currently pursuing masters with focus on advanced computing and machine learning.",
    },
    {
      degree: "Bachelor of Technology, Computer Science",
      institution: "Charotar University of Science & Technology",
      duration: "Aug 2020 — May 2024",
      description:
        "Completed bachelor's degree with focus on computer science fundamentals and software development.",
      gpa: "9.65/10.00",
    },
  ],
};

export const certificationsPageContent: CertificationPageContent = {
  seo: {
    title: "Certifications | Margi Shah",
    description: "Professional certifications and achievements",
    image: identity.logo,
  },
  subtitle: "Professional Certifications",
  certifications: [
    {
      title: "Web Development Master Class",
      issuer: "Certification Authority", // Add actual issuer
      date: "2023",
    },
    {
      title: "Master in Artificial Intelligence (AI)",
      issuer: "Certification Authority", // Add actual issuer
      date: "2023",
    },
    {
      title: "AWS Services for Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
    },
  ],
};

export const researchPageContent: ResearchPageContent = {
  seo: {
    title: "Research | Margi Shah",
    description: "Academic research papers and publications",
    image: identity.logo,
  },
  subtitle: "Research Publications",
  papers: [
    {
      title:
        "A Transfer Learning Framework for Facial Emotion Recognition: Leveraging Pre-Trained Convolutional Neural Networks",
      authors: [
        "K Desai",
        "HN Patel",
        "D Dashlaniya",
        "P Desai",
        "M Shah",
        "P Goel",
      ],
      publication:
        "2024 2nd International Conference on Advancement in Computation & Computer Technologies",
      date: "2024",
      url: "https://ieeexplore.ieee.org/abstract/document/10551190",
    },
    {
      title:
        "Harnessing Artificial Intelligence for Precise Pulmonary Disease Diagnosis",
      authors: [
        "M Sahetai",
        "S Patel",
        "M Shah",
        "D Chauhan",
        "R Patel",
        "R Jani",
      ],
      publication:
        "2023 International Conference on Self Sustainable Artificial Intelligence",
      date: "2023",
      url: "https://ieeexplore.ieee.org/abstract/document/10331667",
    },
    {
      title:
        "A Novel Intrusion Detection System based on Machine Learning for Internet of Things (IoT) Devices",
      authors: ["D Chauhan", "M Shah", "H Joshi"],
      publication:
        "2023 3rd International Conference on Smart Data Intelligence (ICSMDI)",
      date: "2023",
      url: "https://ieeexplore.ieee.org/abstract/document/10127874",
    },
    {
      title:
        "Stress Detection Across Demographics: Leveraging Linear Regression Analysis",
      authors: [
        "K Shah",
        "D Patel",
        "D Chauhan",
        "M Shah",
        "Y Patel",
        "N Dubey",
        "S Patel",
        "A Patel",
      ],
      publication:
        "International Conference on Information and Communication Technology",
      date: "2024",
      url: "https://link.springer.com/chapter/10.1007/978-981-97-6675-8_42", // Add actual paper URL when available
    },
    {
      title:
        "Enhanced Brain Tumor Localization Techniques: A Paradigm Shift in Diagnosis",
      authors: [
        "D Chauhan",
        "S Patel",
        "M Shah",
        "A Bhatt",
        "P Bhandari",
        "M Chauhan",
      ],
      publication:
        "2023 International Conference on Artificial Intelligence for Innovations",
      date: "2023",
      url: "https://ieeexplore.ieee.org/abstract/document/10489201",
    },
    {
      title:
        "Ethereum Blockchain Wallets: A Kotlin-based Implementation Perspective",
      authors: [
        "A Bhatt",
        "D Chauhan",
        "M Shah",
        "S Patel",
        "J Sudani",
        "K Vachhani",
      ],
      publication: "2023 7th International Conference on I-SMAC",
      date: "2023",
      url: "https://ieeexplore.ieee.org/abstract/document/10290281", // Add actual paper URL when available
    },
    {
      title:
        "Technological Trends and Their Impact on Society: A Comprehensive Analysis",
      authors: [
        "M Shah",
        "D Chauhan",
        "S Patel",
        "A Bhatt",
        "C Patel",
        "R Patel",
        "A Patel",
        "J Patel",
      ],
      publication:
        "World Conference on Information Systems for Business Management",
      date: "2023",
      url: "https://link.springer.com/chapter/10.1007/978-981-99-8346-9_33",
    },
  ],
};
