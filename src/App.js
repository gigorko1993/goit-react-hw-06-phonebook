import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
import s from "./App.module.css";

export default function App() {
  const [contact, setContact] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (localStorage.getItem("contacts")?.length > 0) {
      setContact(JSON.parse(localStorage.getItem("contacts")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contact));
  }, [contact]);

  const addContact = (newContact) => {
    const contactCheck = contact.find(({ name }) => name === newContact.name);

    if (contactCheck !== undefined) {
      alert(`${newContact.name} is already in contact`);
      return;
    }

    setContact((prevContact) => [...prevContact, newContact]);
  };

  const removeContact = (id) => {
    setContact(contact.filter((contact) => contact.id !== id));
  };

  const onChange = (e) => {
    setFilter(e.currentTarget.value);
  };

  const lowerCasedFilter = filter.toLowerCase();
  const filteredContacts = contact.filter(({ name }) =>
    name.toLowerCase().includes(lowerCasedFilter)
  );

  return (
    <div>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2 className={s.title}>Contacts</h2>
      <Filter value={filter} onChange={onChange} />
      <ContactList removeContact={removeContact} contacts={filteredContacts} />
    </div>
  );
}
