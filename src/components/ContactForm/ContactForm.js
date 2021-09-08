import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import React, { useState } from "react";
// import { connect } from "react-redux";
import actions from "../../redux/contacts/contacts-action";
import s from "./ContactForm.module.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector((state) => state.contacts.contactItems);
  const dispatch = useDispatch();

  // const addContacts = () => {
  //   dispatch(actions.addContact({ contacts: { name, number } }));
  // };

  const onChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const contactCheck = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (contactCheck) {
      alert(`${name} is already in contact`);
      return;
    }
    dispatch(actions.addContact({ contacts: { name, number } }));
    // addContacts({ name, number });
    setName("");
    setNumber("");
  };

  return (
    <form className={s.form} onSubmit={onSubmit}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          onChange={onChange}
          type="text"
          value={name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className={s.label}>
        Number
        <input
          className={s.input}
          onChange={onChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          value={number}
          required
        />
      </label>
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

// const mapStateToProps = (state) => ({ contacts: state.contacts.contactItems });

// const mapDispatchToProps = (dispatch) => ({
//   submitNewContact: (contact) => dispatch(actions.addContact(contact)),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
export default ContactForm;
