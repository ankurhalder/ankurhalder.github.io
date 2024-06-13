const Contact = () => {
  const contact = {
    email: "ankur.halder12345@gmail.com",
    phone: "+91 97489 03490",
    nationality: "Indian",
  };

  return (
    <div className="contact">
      <h2>Contact Information</h2>
      <ul>
        <li>
          <strong>Email:</strong> {contact.email}
        </li>
        <li>
          <strong>Phone:</strong> {contact.phone}
        </li>
        <li>
          <strong>Nationality:</strong> {contact.nationality}
        </li>
      </ul>
    </div>
  );
};

export default Contact;
