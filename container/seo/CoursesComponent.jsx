const CoursesComponent = () => {
  const courses = [
    {
      //@ Meta Front-End Developer
      title: "Meta Front-End Developer",
      provider: "Coursera",
      completionDate: "January 2023 - August 2023",
      description:
        "As Ankur Halder, I successfully completed the Meta Front-End Developer program, equipping myself with a comprehensive understanding of front-end development. Through this 9-course program, I gained practical knowledge and hands-on experience in HTML, CSS, JavaScript, React, version control, and UX/UI design principles. With these skills, I am well-prepared to contribute to front-end development projects and deliver user-friendly and visually appealing web applications.",
      topics: [
        "Introduction to Front-End Development",
        "Programming with JavaScript",
        "Version Control",
        "HTML and CSS in depth",
        "React Basics",
        "Advanced React",
        "Principles of UX/UI Design",
        "Front-End Developer Capstone",
        "Coding Interview Preparation",
      ],
      certificateLink:
        "https://coursera.org/verify/professional-cert/4GVM3WFXRHB6",
      certificateImageUrl: "/courses/meta-front-end-developer-certificate.png",
      skillsGained: [
        "Frontend Development",
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Version Control",
        "UX/UI Design",
      ],
    },
    //@ Meta Back-End Developer
    {
      title: "Meta Back-End Developer",
      provider: "Coursera",
      completionDate: "June 2023 - February 2024",
      description:
        "Successfully completing the Meta Back-End Developer program, I, Ankur Halder, acquired the technical skills required to become a qualified back-end developer. Through this 9-course program, I gained expertise in programming systems including Python Syntax, Linux commands, Git, SQL, version control, cloud hosting, APIs, JSON, XML, and more. With hands-on experience and a portfolio showcasing my skills, I am well-prepared for interviews and ready to confidently use code to solve problems.",
      topics: [
        "Introduction to Databases for Back-End Development",
        "Version Control",
        "The Full Stack",
        "Introduction to Back-End Development",
        "APIs",
        "Coding Interview Preparation",
        "Django Web Framework",
        "Back-End Developer Capstone",
        "Programming in Python",
      ],
      certificateLink:
        "https://coursera.org/share/2927957967a7315b351bfa6bd46a23f8",
      certificateImageUrl: "/courses/meta-back-end-developer-certificate.png",
      skillsGained: [
        "Backend Development",
        "Python",
        "Linux",
        "Git",
        "SQL",
        "Cloud Hosting",
        "APIs",
        "JSON",
        "XML",
        "Django",
      ],
    },
    //@ Meta Database Engineer
    {
      title: "Meta Database Engineer",
      provider: "Coursera",
      completionDate: "August 2023 - February 2024",
      description:
        "Upon successful completion of the Meta Database Engineer program, I, Ankur Halder, have gained proficiency in SQL syntax and learned how to interact with databases effectively. This 8-course program equipped me with skills to create, manage, and optimize databases, write database-driven applications in Python, and develop a solid understanding of advanced data modeling concepts. With hands-on experience and a portfolio showcasing my expertise, I am well-prepared to contribute to database management and development projects.",
      topics: [
        "Database Engineer Capstone",
        "Version Control",
        "Advanced Data Modeling",
        "Database Structures and Management with MySQL",
        "Advanced MySQL Topics",
        "Coding Interview Preparation",
        "Database Clients",
        "Programming in Python",
        "Introduction to Databases",
      ],
      certificateLink:
        "https://coursera.org/share/5ef6a47322c1b8eebb22bd7ab3e7d524",
      certificateImageUrl: "/courses/meta-database-engineer-certificate.png",
      skillsGained: [
        "Database Management",
        "SQL Syntax",
        "Python",
        "Database Administration",
        "MySQL",
      ],
    },
    //@ Google UX Design
    {
      title: "Google UX Design",
      provider: "Coursera",
      completionDate: "August 2023 - February 2024",
      description:
        "Successfully completing the Google UX Design specialization, I, Ankur Halder, gained comprehensive knowledge and practical skills in user experience (UX) design. Through this 7-course program developed by Google, I learned to follow the design process: empathizing with users, defining pain points, ideating solutions, creating wireframes and prototypes, and testing and iterating on designs. Additionally, I acquired foundational UX research skills, including planning and conducting research studies, as well as synthesizing research results. With hands-on experience and a portfolio showcasing my expertise, I am well-prepared for introductory-level roles in UX design.",
      topics: [
        "Create High-Fidelity Designs and Prototypes in Figma",
        "Conduct UX Research and Test Early Concepts",
        "Design a User Experience for Social Good & Prepare for Jobs",
        "Build Dynamic User Interfaces (UI) for Websites",
        "Foundations of User Experience (UX) Design",
        "Start the UX Design Process: Empathize, Define, and Ideate",
        "Build Wireframes and Low-Fidelity Prototypes",
      ],
      certificateLink:
        "https://coursera.org/share/f67a6bed791511d901a8f0c82cffa946",
      certificateImageUrl:
        "/courses/google-ux-design-professional-certificate.png",
      skillsGained: [
        "User Experience Design",
        "UX Research",
        "Wireframing",
        "Prototyping",
        "Figma",
      ],
    },
    //@ IBM Front-End Developer
    {
      title: "IBM Front-End Developer",
      provider: "Coursera",
      completionDate: "November 2023 - February 2024",
      description:
        "Upon successfully completing the IBM Front-End Developer specialization, I, Ankur Halder, have acquired mastery of practical skills and tools utilized by front-end developers in their daily work. Throughout this 11-course program developed by IBM, I delved into developing web pages using HTML, CSS, JavaScript, and React, while also applying essential user interface and user experience (UI/UX) principles and best practices. Moreover, I honed my ability to manage code effectively using GitHub repositories and branches. Through hands-on labs and projects, I built a comprehensive portfolio to demonstrate my expertise and readiness for professional front-end development roles.",
      topics: [
        "Introduction to HTML, CSS, & JavaScript",
        "Get Started with Cloud Native, DevOps, Agile, and NoSQL",
        "Front-End Development Capstone Project",
        "Developing Websites and Front-Ends with Bootstrap",
        "Developing Front-End Apps with React",
        "Designing User Interfaces and Experiences (UI/UX)",
        "Software Developer Career Guide and Interview Preparation",
        "Getting Started with Front-End and Web Development",
        "Intermediate Web and Front-End Development",
        "Introduction to Software Engineering",
        "Getting Started with Git and GitHub",
      ],
      certificateLink:
        "https://coursera.org/share/af1fbaa9ef21b87b61c7a57302c08c46",
      certificateImageUrl: "/courses/ibm.png",
      skillsGained: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "UI/UX Design",
        "GitHub",
        "Front-End Development",
      ],
    },
    //@ IBM Back-End Development
    {
      title: "IBM Back-End Development",
      provider: "Coursera",
      completionDate: "February 2023 - February 2024",
      description:
        "During the IBM Back-End Development specialization, I, Ankur Halder, have gained proficiency in the latest practical skills and knowledge utilized by back-end developers in their daily work. This 12-course program offered by IBM provided comprehensive training on deploying and scaling applications using Docker, Kubernetes, microservices, and serverless functions. Additionally, I learned to write back-end applications with object-oriented programming languages like Python, while applying continuous integration/continuous development (CI/CD) and monitoring methodologies for software development life-cycle automation. Through hands-on labs and projects, I have built a solid foundation in back-end development, preparing me for entry-level roles in this field.",
      topics: [
        "Django Application Development with SQL and Databases",
        "Python for Data Science, AI & Development",
        "Hands-on Introduction to Linux Commands and Shell Scripting",
        "Developing AI Applications with Python and Flask",
        "Monitoring and Observability for Development and DevOps",
        "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
        "Application Development using Microservices and Serverless",
        "Introduction to Software Engineering",
        "Back-end Application Development Capstone Project",
        "Getting Started with Git and GitHub",
        "Application Security for Developers and DevOps Professionals",
      ],
      certificateLink:
        "https://coursera.org/share/ba5ff8d72ff44cb134d5bf2c75358cef",
      certificateImageUrl: "/courses/ibm.png",
      skillsGained: [
        "Python",
        "Django",
        "SQL",
        "Linux",
        "CI/CD",
        "Microservices",
        "Serverless",
        "Git",
        "GitHub",
        "Application Security",
      ],
    },
    //@ IBM Full Stack Software Developer
    {
      title: "IBM Full Stack Software Developer",
      provider: "Coursera",
      completionDate: "October 2023 - February 2024",
      description:
        "During the IBM Full Stack Software Developer specialization, I, Ankur Halder, have mastered the latest practical skills and tools utilized by full stack developers in their daily work. This 10-course program offered by IBM provided comprehensive training on deploying and scaling applications using Cloud Native methodologies and tools such as Containers, Kubernetes, Microservices, and Serverless. Additionally, I gained proficiency in front-end development languages and tools like HTML, CSS, JavaScript, React, and Bootstrap. Through hands-on labs and projects, including a capstone, I have built a robust GitHub portfolio and acquired the expertise needed to develop Cloud Native Applications.",
      topics: [
        "Full Stack Cloud Development Capstone Project",
        "Django Application Development with SQL and Databases",
        "Developing Back-End Apps with Node.js and Express",
        "Python for Data Science, AI & Development",
        "Developing Front-End Apps with React",
        "Full Stack Software Developer Assessment",
        "Introduction to Cloud Computing",
        "Developing AI Applications with Python and Flask",
        "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
        "Application Development using Microservices and Serverless",
        "Introduction to Web Development with HTML, CSS, JavaScript",
        "Getting Started with Git and GitHub",
      ],
      certificateLink:
        "https://coursera.org/share/919e319973e94f8f743fd474381fe726",
      certificateImageUrl:
        "/courses/ibm-full-stack-software-developer-professional-cert.png",
      skillsGained: [
        "Git (Software)",
        "Cloud Applications",
        "HTML",
        "Cloud Computing",
        "Distributed Version Control (DRCS)",
        "open source",
        "JavaScript",
        "Hybrid Multicloud",
        "Devops",
        "Cascading Style Sheets (CSS)",
        "Iaas PaaS Saas",
        "Cloud Native",
      ],
    },
    //@ IBM Applied Software Engineering Fundamentals
    {
      title: "Applied Software Engineering Fundamentals",
      provider: "Coursera",
      completionDate: "December 2023 - February 2024",
      description:
        "During the IBM Applied Software Engineering Fundamentals specialization, I, Ankur Halder, have acquired mastery of fundamental concepts in Software Engineering. This program equipped me with knowledge of the Software Development Lifecycle (SDLC) and the roles, tools, and technologies used in software development, testing, and deployment. Through hands-on projects, I demonstrated proficiency in writing code using basic programming constructs in Python and developing, deploying, and packaging simple Python web applications. Additionally, I have effectively utilized Git and GitHub repositories and created and executed Bash and Shell scripts using basic Linux commands and terminal operations.",
      topics: [
        "Python for Data Science, AI & Development",
        "Hands-on Introduction to Linux Commands and Shell Scripting",
        "Developing AI Applications with Python and Flask",
        "Introduction to Software Engineering",
        "Getting Started with Git and GitHub",
      ],
      certificateLink:
        "https://coursera.org/share/4d1514dfd624da601f6d753a6fec2746",
      certificateImageUrl:
        "/courses/applied-software-engineering-fundamentals.png",
      skillsGained: [
        "Software Design and Architecture",
        "Python Programming",
        "Git and GitHub",
        "Software Development Lifecycle (SDLC)",
        "Linux",
      ],
    },
    //@ The Complete JavaScript Course 2024: From Zero to Expert!
    {
      title: "The Complete JavaScript Course 2024: From Zero to Expert!",
      provider: "Udemy",
      completionDate: "September 2022 - January 2023",
      description:
        "This certificate above verifies that Ankur Halder successfully completed the course The Complete JavaScript Course 2024: From Zero to Expert! on 01/08/2023 as taught by Jonas Schmedtmann on Udemy.",
      topics: [
        "JavaScript fundamentals",
        "Modern ES6+ features",
        "Modern OOP concepts",
        "Asynchronous JavaScript",
        "Architecting code",
        "Modern tools for 2022 and beyond",
      ],
      certificateLink:
        "https://www.udemy.com/certificate/UC-19c4ac79-892a-47ad-b473-06600f7300c8/",
      certificateImageUrl: "/courses/udemy.png",
      skillsGained: [
        "Advanced JavaScript",
        "Problem-solving",
        "Researching",
        "Workflow management",
      ],
    },
    //@ The Ultimate React Course 2024: React, Redux & More
    {
      title: "The Ultimate React Course 2024: React, Redux & More",
      provider: "Udemy",
      completionDate: "July 2023",
      description:
        "This certificate above verifies that Ankur Halder successfully completed the course The Ultimate React Course 2024: React, Redux & More on 07/28/2023 as taught by Jonas Schmedtmann on Udemy.  The course covers advanced concepts in React development, including state management, routing, performance optimization, advanced React features, and building real-world app features.",
      topics: [
        "React fundamentals",
        "State management with Redux",
        "Advanced React features",
        "React Router",
        "Performance optimization",
        "Styling with Tailwind CSS, CSS Modules, Styled Components",
      ],
      certificateLink:
        "https://www.udemy.com/certificate/UC-3b120d82-005f-43b9-a60e-2fe949bb1f8c/",
      certificateImageUrl: "/courses/udemy.png",
      skillsGained: [
        "Advanced React development",
        "State management with Redux",
        "React Router",
        "Performance optimization",
        "Styling with CSS-in-JS libraries",
      ],
    },
    //@ Node.js, Express, MongoDB & More: The Complete Bootcamp 2024
    {
      title: "Node.js, Express, MongoDB & More: The Complete Bootcamp 2024",
      provider: "Udemy",
      completionDate: "September 2023",
      description:
        "This certificate above verifies that Ankur Halder successfully completed the course Node.js, Express, MongoDB & More: The Complete Bootcamp 2024 on 09/25/2023 as taught by Jonas Schmedtmann on Udemy.  The course covers a comprehensive bootcamp on Node.js, Express, MongoDB, and related technologies. It includes building RESTful APIs, server-side rendered websites, NoSQL data modeling, authentication, authorization, security best practices, payment integration, file uploading, error handling, deployment to production, and more.",
      topics: [
        "Fundamentals of Node.js, core modules, and NPM",
        "Express framework",
        "RESTful API design and development",
        "Server-side website rendering with Pug templates",
        "CRUD operations with MongoDB",
        "Advanced MongoDB features",
        "Fundamentals of Mongoose",
        "Advanced Mongoose features",
        "MVC architecture",
        "Authentication and authorization",
        "Security best practices",
        "Payment integration with Stripe",
        "File uploading",
        "Error handling",
        "Deployment with Heroku",
        "Git and GitHub",
      ],
      certificateLink:
        "https://www.udemy.com/certificate/UC-ea6816f6-5c07-4069-870d-65486f34d3ef/",
      certificateImageUrl: "/courses/udemy.png",
      skillsGained: [
        "Node.js development",
        "Express framework",
        "MongoDB",
        "Mongoose",
        "RESTful API design",
        "Authentication and authorization",
        "Security best practices",
        "Payment integration",
        "Deployment",
        "Git and GitHub",
      ],
    },
    //@ Next.js 14 & React - The Complete Guide
    {
      title: "Next.js 14 & React - The Complete Guide",
      provider: "Udemy",
      completionDate: "September 2023",
      description:
        "This certificate above verifies that Ankur Halder successfully completed the course Next.js 14 & React - The Complete Guide on 09/25/2023 as taught by Maximilian Schwarzmüller on Udemy.The course covers building fullstack React apps with Next.js 14, focusing on features like pre-rendering, SSR, data fetching, file-based routing, authentication, React Server Components, Client Components, and more.",
      topics: [
        "Building fullstack React apps with NextJS 14",
        "App Router vs Pages Router",
        "React Server Components",
        "Client Components",
        "Data fetching",
        "Server Actions",
        "Pre-rendering",
        "SSR (Server-Side Rendering)",
        "File-based routing",
        "Authentication",
      ],
      certificateLink:
        "https://www.udemy.com/certificate/UC-fc0143a4-6b19-4e07-bcee-53f7c1f9fd1d/",
      certificateImageUrl: "/courses/udemy.png",
      skillsGained: [
        "Next.js development",
        "React Server Components",
        "Client Components",
        "Pre-rendering",
        "SSR",
        "Data fetching",
        "Authentication",
      ],
    },
  ];

  return (
    <div>
      <h2>Courses</h2>
      {courses.map((course, index) => (
        <div key={index}>
          <h3>{course.title}</h3>
          <p>
            <strong>Provider:</strong> {course.provider}
          </p>
          <p>
            <strong>Completion Date:</strong> {course.completionDate}
          </p>
          <p>
            <strong>Description:</strong> {course.description}
          </p>
          <p>
            <strong>Topics Covered:</strong>
          </p>
          <ul>
            {course.topics.map((topic, topicIndex) => (
              <li key={topicIndex}>{topic}</li>
            ))}
          </ul>
          <p>
            <strong>Skills Gained:</strong>
          </p>
          <ul>
            {course.skillsGained.map((skill, skillIndex) => (
              <li key={skillIndex}>{skill}</li>
            ))}
          </ul>
          <p>
            <strong>Certificate Link:</strong>{" "}
            <a
              href={course.certificateLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Certificate
            </a>
          </p>
        </div>
      ))}
    </div>
  );
};

export default CoursesComponent;
