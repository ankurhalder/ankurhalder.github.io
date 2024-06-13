const InternshipsComponent = () => {
  const internships = [
    {
      title: "Student Intern",
      company: "CODSOFT",
      location: "Virtual/Work from Home",
      startDate: "October 10, 2023",
      endDate: "October 11, 2023",
      topic: "Web Development",
      certificationCredential:
        "https://drive.google.com/file/d/1UTuhpUyL-AEO9VyOQgXhRHm-IyR-CVvb/view",
      description:
        "During my internship at CODSOFT, I had the opportunity to work remotely and gain hands-on experience in web development. I collaborated with the development team to create and enhance web applications, focusing on front-end and back-end development tasks. My responsibilities included implementing new features, troubleshooting issues, and optimizing website performance. Throughout the internship, I deepened my understanding of web technologies such as HTML, CSS, JavaScript, React.js, Node.js, and MongoDB and gained practical experience with frameworks and libraries. Additionally, I learned to effectively communicate and collaborate in a virtual work environment, demonstrating adaptability and teamwork.",
    },
    {
      title: "Web Development Intern",
      company: "OCTANET SERVICES PVT LTD.",
      location: "Remote",
      startDate: "February 1, 2024",
      endDate: "March 1, 2024",
      topic: "Web Development",
      certificationCredential:
        "https://verification.givemycertificate.com/v/0c66c11f-47ae-452e-80d5-53141dc1a3de",
      description:
        "During the internship period, Ankur Halder demonstrated exceptional dedication, enthusiasm, and a strong willingness to learn. They actively engaged in various projects and tasks assigned to them, exhibiting remarkable skills and a high level of professionalism.",
    },
    {
      title: "Intern",
      company: "InternPe",
      location: "Remote",
      startDate: "January 29, 2024",
      endDate: "February 25, 2024",
      topic: "Python Programming",
      certificationCredential: "",
      description:
        "During their working period, Ankur Halder was found to be a sincere and dedicated intern with a professional attitude and very good knowledge of the job.",
    },
  ];

  return (
    <div>
      <h2>Internships</h2>
      {internships.map((internship, index) => (
        <div key={index}>
          <h3>{internship.title}</h3>
          <p>
            <strong>Company:</strong> {internship.company}
          </p>
          <p>
            <strong>Location:</strong> {internship.location}
          </p>
          <p>
            <strong>Start Date:</strong> {internship.startDate}
          </p>
          <p>
            <strong>End Date:</strong> {internship.endDate}
          </p>
          <p>
            <strong>Topic:</strong> {internship.topic}
          </p>
          <p>
            <strong>Description:</strong> {internship.description}
          </p>
          {internship.certificationCredential && (
            <p>
              <a
                href={internship.certificationCredential}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default InternshipsComponent;
