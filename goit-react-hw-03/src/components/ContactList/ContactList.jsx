import Contact from "../Contact/Contact";

function ContactList({ contacts, onDeleteContact }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        marginTop: "20px",
        gap: "10px",
      }}
    >
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          onDelete={onDeleteContact}
        />
      ))}
    </div>
  );
}

export default ContactList;
