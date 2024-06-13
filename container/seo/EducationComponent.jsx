const EducationComponent = () => {
  const education = [
    {
      degree: "B.Tech, Computer Science",
      institution: "University Of Engineering & Management, New Town",
      status: "Currently Pursuing",
      expectedGraduation: "2025",
    },
    {
      degree: "Senior Secondary (XII), Science",
      institution: "SHRI RITAM VIDYAPITH (WBCHSE board)",
      yearOfCompletion: "2021",
      percentage: "76.60%",
    },
    {
      degree: "Secondary (X)",
      institution: "Behala Aryya Vidyamandir (WBBSE board)",
      yearOfCompletion: "2017",
      percentage: "85.70%",
    },
  ];

  return (
    <div>
      <h2>Education</h2>
      {education.map((edu, index) => (
        <div key={index}>
          <h3>{edu.degree}</h3>
          <p>
            <strong>Institution:</strong> {edu.institution}
          </p>
          {edu.status && (
            <p>
              <strong>Status:</strong> {edu.status}
            </p>
          )}
          {edu.expectedGraduation && (
            <p>
              <strong>Expected Graduation:</strong> {edu.expectedGraduation}
            </p>
          )}
          {edu.yearOfCompletion && (
            <p>
              <strong>Year of Completion:</strong> {edu.yearOfCompletion}
            </p>
          )}
          {edu.percentage && (
            <p>
              <strong>Percentage:</strong> {edu.percentage}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default EducationComponent;
