import ContactCard from "./ContactCard";

export default function ContactList({ contacts }) {
  return (
    <div className="flex flex-col pt-5 gap-4">
      {contacts &&
        contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
    </div>
  );
}
