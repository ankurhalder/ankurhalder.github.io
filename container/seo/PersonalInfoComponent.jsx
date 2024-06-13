const PersonalInfoComponent = () => {
  const personalInfo = {
    name: "Ankur Halder",
    title: "Aspiring Software Developer",
    age: 23,
    gender: "Male",
    dateOfBirth: "30/05/2001",
    languagesKnown: ["Bengali", "Hindi", "English"],
    address: "13R Ishan Ghosh Road, Kolkata: 700008, West Bengal, India",
    email: "ankur.halder12345@gmail.com",
    website: "ankurhalder.in",

    about:
      "Hi 👋, I'm Ankur Halder. Passionate and enthusiastic about software development, proficient in MERN stack, Django (full stack, REST API, ORM), Python (OOP), JavaScript (OOP), Next.js (full stack), and DSA. Confident and dedicated in creating effective solutions. Moreover, active contributor to open-source projects.",
  };

  return (
    <div>
      <h1>{personalInfo.name}</h1>
      <h2>{personalInfo.title}</h2>
      <p>
        <strong>Age:</strong> {personalInfo.age}
      </p>
      <p>
        <strong>Gender:</strong> {personalInfo.gender}
      </p>
      <p>
        <strong>Date of Birth:</strong> {personalInfo.dateOfBirth}
      </p>
      <p>
        <strong>Languages Known:</strong>{" "}
        {personalInfo.languagesKnown.join(", ")}
      </p>
      <p>
        <strong>Address:</strong> {personalInfo.address}
      </p>
      <p>
        <strong>Email:</strong>{" "}
        <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
      </p>
      <p>
        <strong>Website:</strong>{" "}
        <a
          href={`https://${personalInfo.website}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {personalInfo.website}
        </a>
      </p>
      <p>{personalInfo.about}</p>
    </div>
  );
};

export default PersonalInfoComponent;
