import { 
  Project, 
  Experience, 
  Education, 
  Certification, 
  Testimonial, 
  BlogPost,
  SpeakingEvent,
  OpenSourceContribution,
  Award,
  Hobby
} from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include product search, filtering, cart management, and checkout.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    demoLink: "https://example.com",
    codeLink: "https://github.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity app for managing tasks and projects with real-time updates, team collaboration, and analytics dashboards.",
    tags: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
    image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    demoLink: "https://example.com",
    codeLink: "https://github.com",
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "An application that uses AI to generate content for blogs, social media, and marketing materials based on user inputs.",
    tags: ["React", "Python", "Flask", "OpenAI API", "MongoDB"],
    image: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    demoLink: "https://example.com",
    codeLink: "https://github.com",
  },
  {
    id: 4,
    title: "Portfolio Template Builder",
    description: "A drag-and-drop website builder specifically designed for portfolios with customizable templates and design options.",
    tags: ["React", "Node.js", "GraphQL", "AWS"],
    image: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    demoLink: "https://example.com",
    codeLink: "https://github.com",
  },
];

export const experiences: Experience[] = [

  {
    id: 1,
    company: "SparkTech",
    position: "Full Stack Developer",
    duration: "2024 - 2025",
    description: [
      "Developed 20+ web applications (e-commerce, medical, baby food, cannabis) using React, Node.js, and MongoDB.",
      "Handled full-stack development, including frontend, backend, and database design.",
      "Managed CI/CD pipelines and deployed apps on VPS and GitHub, ensuring smooth releases.",
      "Implemented bug fixes, feature updates, and performance optimizations across projects."
    ],
    technologies: ["JavaScript", "TypeScript", "Node.Js", "Mongoose", "Stripe", "Passportjs", "VPS Hosting", "Twilio"],
    location: "Banasree, Dhaka"
  },
  {
    id: 2,
    company: "AmarSolution",
    position: "Software Engineer",
    duration: "2025 - Present",
    description: [
      "Developed and maintained 5+ ERP modules (HRM, CRM, Inventory, Invoicing, User Management), serving 200+ active users and improving operational efficiency.",
      "Delivered 10+ major features with minimal bugs, increasing system reliability and client satisfaction by 20%.",
      "Lead the development of SaaS-based e-commerce templates for clients, enabling fast deployment of 23+ ready-to-use stores.",
      "Collaborated with product and QA teams to implement automated testing and bug fixes, improving reliability and reducing errors.",
    ],
    technologies: ["React.js", "Node.js", "MongoDB", "PostgreSQL", "Express.js","Tailwind CSS", "ShadCN", "Next.js"],
    location: "Uttara,Dhaka"
  },
  
  
];

export const education: Education[] = [
  {
    id: 1,
    institution: "Zillur Rahman Premier Bank School & College",
    degree: "Secondary School Certificate",
    duration: "2018 - 2020",
    description: "Completed Secondary School Certificate (SSC) from Zillur Rahman Premier Bank School & College in 2020 under Dhaka Board of Secondary and Higher Secondary Education Science stream. Gained a broad understanding of various scientific subjects, including mathematics, physics, chemistry, and biology."
  },
  {
    id: 2,
    institution: "Narsingdi Polytechnic Institute",
    degree: "Diploma in Computer Science and Engineering",
    duration: "2020 - 2024",
    description: "Completed a 4-year diploma in Computer Science and Engineering under the Bangladesh Technical Education Board (BTEB). Gained hands-on experience in programming, networking, database management, and software development. Completed industrial training and projects in web development and system design."
  }
];

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Complete Web Development with Jhankar Mahbub",
    issuer: "Programming Hero",
    date: "2023",
    link: "https://drive.google.com/file/d/1mMj7_F5ly15CFcpe6NRuVhcOCEoC56lu/view",
    description: "This foundational course introduced me to web development using the MERN stack (MongoDB, Express.js, React, Node.js). I learned to build dynamic, responsive websites and applications, covering HTML, CSS, JavaScript, and React. The course emphasized practical, project-based learning, culminating in the development of a real-world application. Through hands-on projects and assignments, I gained a solid understanding of modern web development practices and tools.",
  },
  {
    id: 2,
    title: "Apollo Next Level Web Development",
    issuer: "Programming Hero",
    date: "2024",
    link: "https://drive.google.com/file/d/1hIzBi0RCb4FH3h7dk3-Bcp683-UA6M1W/view",
    description: "In this advanced course, I deepened my expertise in full-stack development by mastering technologies such as TypeScript, Next.js, Redux, Prisma, PostgreSQL, and Express. The curriculum included over 1,000 video lessons, 10+ assignments, and 2 industry-standard projects. I developed scalable applications, implemented state management with Redux, and integrated databases using Prisma and PostgreSQL. The course also provided job placement support, aiding in the transition from learning to professional development.",
  },
  {
    id: 3,
    title: "Industrial Training",
    issuer: "bdCalling Academy",
    date: "2024",
    link: "",
    description: "During this training, I applied my web development skills in a real-world setting, working on industry projects that required collaboration, problem-solving, and adherence to professional standards. This experience enhanced my understanding of the software development lifecycle and prepared me for the demands of the tech industry."
  },
];


export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "রিয়াজুল ইসলাম",
    position: "ব্যবসায়ী",
    company: "ঢাকা ট্রেডিং কোম্পানি",
    testimonial: "আনন্দো কম্পিউটারের সেবা অসাধারণ! আমার ইন্ডিয়া ভিসা এবং বিমানের টিকেট খুব সহজে এবং দ্রুত করে দিয়েছেন। তাদের প্রফেশনালিজম এবং সাহায্যপূর্ণ আচরণ আমাকে খুবই প্রভাবিত করেছে।",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format"
  },
  {
    id: 2,
    name: "সুমাইয়া আক্তার",
    position: "শিক্ষার্থী",
    company: "ঢাকা বিশ্ববিদ্যালয়",
    testimonial: "পাসপোর্ট এবং জন্ম নিবন্ধনের জন্য আনন্দো কম্পিউটারের কাছে গিয়েছিলাম। তারা সবকিছু খুব সুন্দরভাবে এবং সময়মতো করে দিয়েছেন। তাদের স্টাফরা খুবই সাহায্যকারী এবং ধৈর্যশীল।",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face&auto=format"
  },
  {
    id: 3,
    name: "মোহাম্মদ রহমান",
    position: "সরকারি কর্মচারী",
    company: "বাংলাদেশ সরকার",
    testimonial: "ড্রাইভিং লাইসেন্স এবং পুলিশ ক্লিয়ারেন্স সার্টিফিকেটের জন্য আনন্দো কম্পিউটারের সেবা নিয়েছি। তারা সব প্রসেস খুব সহজ করে দিয়েছে। তাদের সাথে কাজ করা খুবই স্বাচ্ছন্দ্যজনক।",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format"
  },
  {
    id: 4,
    name: "ফাতেমা বেগম",
    position: "গৃহিণী",
    company: "ঢাকা",
    testimonial: "আমার পরিবারের সবার পাসপোর্ট এবং ভোটার আইডি কার্ডের জন্য আনন্দো কম্পিউটারের কাছে গিয়েছিলাম। তারা সবকিছু খুব সুন্দরভাবে এবং ন্যূনতম ঝামেলায় করে দিয়েছেন। খুবই সন্তুষ্ট।",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format"
  },
  {
    id: 5,
    name: "আব্দুল্লাহ আল মামুন",
    position: "ব্যবসায়ী",
    company: "চট্টগ্রাম এক্সপোর্ট",
    testimonial: "TIN এবং VAT নম্বর পেতে আনন্দো কম্পিউটারের সাহায্য নিয়েছি। তাদের এক্সপার্টিজ এবং প্রফেশনাল সার্ভিস আমাকে খুবই সাহায্য করেছে। নিঃসন্দেহে সেরা সার্ভিস প্রোভাইডার।",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&auto=format"
  },
  {
    id: 6,
    name: "নাসরিন সুলতানা",
    position: "শিক্ষিকা",
    company: "সরকারি স্কুল",
    testimonial: "শিক্ষা প্রতিষ্ঠানে ভর্তি এবং সিভি তৈরির জন্য আনন্দো কম্পিউটারের সেবা নিয়েছি। তারা আমার সব প্রয়োজন খুব সুন্দরভাবে বুঝে নিয়েছেন এবং সেরা সাজেশন দিয়েছেন।",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face&auto=format"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Scalable React Applications: Best Practices",
    excerpt: "Learn how to structure large-scale React applications for optimal performance and maintainability.",
    date: "May 15, 2023",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://example.com/blog/1"
  },
  {
    id: 2,
    title: "The Future of Web Development: WASM and Beyond",
    excerpt: "Exploring how WebAssembly is changing the landscape of web development and what it means for JavaScript developers.",
    date: "April 3, 2023",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/7988116/pexels-photo-7988116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://example.com/blog/2"
  },
  {
    id: 3,
    title: "Optimizing Database Performance in Node.js Applications",
    excerpt: "Practical strategies for improving database performance in Node.js applications with real-world examples.",
    date: "March 12, 2023",
    readTime: "10 min read",
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://example.com/blog/3"
  }
];

export const speakingEvents: SpeakingEvent[] = [
  {
    id: 1,
    title: "The Evolution of Frontend Development",
    event: "ReactConf 2023",
    date: "September 2023",
    description: "A talk on how frontend development has evolved over the years and where it's headed in the future.",
    link: "https://example.com/talk/1"
  },
  {
    id: 2,
    title: "Building Accessible Web Applications",
    event: "A11y Summit",
    date: "July 2023",
    description: "Workshop on creating web applications that are accessible to all users, including those with disabilities.",
    link: "https://example.com/talk/2"
  },
  {
    id: 3,
    title: "Microservices Architecture with Node.js",
    event: "NodeCon 2022",
    date: "November 2022",
    description: "A deep dive into implementing microservices architecture using Node.js and Docker.",
    link: "https://example.com/talk/3"
  }
];

export const openSourceContributions: OpenSourceContribution[] = [
  {
    id: 1,
    project: "React",
    description: "Contributed to the React core library by fixing bugs and improving documentation.",
    link: "https://github.com/facebook/react",
    category: "Frontend",
    stars: 190000,
    pullRequests: 35,
    image: "https://raw.githubusercontent.com/facebook/react/main/fixtures/dom/public/react-logo.svg",
    icon: undefined
  },
  {
    id: 2,
    project: "Tailwind CSS",
    description: "Created plugins and contributed to the documentation to help improve the developer experience.",
    link: "https://github.com/tailwindlabs/tailwindcss",
    category: "CSS Framework",
    stars: 47000,
    pullRequests: 12,
    image: "https://tailwindcss.com/_next/static/media/tailwindcss-logotype-white.e8b47d8e.svg",
    icon: undefined
  },
  {
    id: 3,
    project: "Flask",
    description: "Fixed issues related to routing and contributed to the testing framework.",
    link: "https://github.com/pallets/flask",
    category: "Backend",
    stars: 60000,
    pullRequests: 7,
    image: "https://flask.palletsprojects.com/en/2.2.x/_images/flask-logo.png",
    icon: undefined
  }
];
    

export const awards: Award[] = [
  {
    id: 1,
    title: "Developer of the Year",
    issuer: "TechAwards",
    date: "2022",
    description: "Recognized for outstanding contributions to open-source software and technical innovation."
  },
  {
    id: 2,
    title: "Best Web Application",
    issuer: "WebDevConference",
    date: "2021",
    description: "Awarded for developing an innovative e-commerce platform with exceptional user experience."
  },
  {
    id: 3,
    title: "Hackathon Champion",
    issuer: "Global Code Challenge",
    date: "2020",
    description: "First place in a 48-hour hackathon for creating a solution to improve remote learning."
  }
];

export const hobbies: Hobby[] = [
  {
    id: 1,
    title: "Photography",
    description: "Capturing landscapes and street photography during travels.",
    icon: "camera"
  },
  {
    id: 2,
    title: "Reading",
    description: "Enjoy reading technical books and articles in my free time.",
    icon: "book-open"
  },
  {
    id: 3,
    title: "Hiking",
    description: "Exploring nature trails and mountains whenever possible. Specially hilly areas of Bangladesh.",
    icon: "mountain"
  },
  {
    id: 4,
    title: "Cricket",
    description: "Playing cricket with friends and family on weekends.",
    icon: "chess-knight"
  }
];