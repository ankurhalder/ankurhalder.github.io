const SkillsComponent = () => {
  const skills = [
    {
      category: "Programming Languages",
      list: ["JavaScript", "Python", "C"],
    },
    {
      category: "Web Development",
      list: ["React.js", "Next.js", "HTML5", "CSS", "Bootstrap"],
    },
    {
      category: "Frontend Frameworks/Libraries",
      list: ["Advanced React", "React.js"],
    },
    {
      category: "Backend Frameworks/Libraries",
      list: ["Express.js", "Node.js", "Django", "Django REST Framework"],
    },
    {
      category: "UI/UX",
      list: ["UX/UI", "Figma (Software)"],
    },
    {
      category: "Database",
      list: ["SQL", "NoSQL", "MongoDB", "Mongoose ODM", "PL/SQL"],
    },
    {
      category: "Cloud Technologies",
      list: ["Google Cloud Dataflow", "Amazon Web Services (AWS)", "IBM Cloud"],
    },
    {
      category: "DevOps/CI/CD",
      list: [
        "Cloud Native Practices",
        "Continuous Integration and Continuous Delivery (CI/CD)",
        "DevOps",
        "GitFlow",
        "Version Control",
        "Git",
        "GitHub",
        "Docker",
        "Kubernetes",
        "OpenShift",
        "Serverless Computing",
      ],
    },
    {
      category: "Other",
      list: [
        "Software Development Life Cycle (SDLC)",
        "Containers",
        "Microservices",
        "Application Security",
        "Linux",
        "REST APIs",
        "Object-Relational Mapping (ORM)",
      ],
    },
  ];

  return (
    <div>
      <h2>Skills</h2>
      {skills.map((skill, index) => (
        <div key={index}>
          <h3>{skill.category}</h3>
          <ul>
            {skill.list.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SkillsComponent;
