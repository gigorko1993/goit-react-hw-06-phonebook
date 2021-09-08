import { connect } from "react-redux";
import actions from "../../../redux/contacts/contacts-action";

import s from "./ContactItem.module.css";

const ContactItem = ({ contact, removeContact }) => {
  return contact.map(({ name, number, id }) => {
    return (
      <li className={s.item} key={id}>
        {name}: {number}
        <button
          className={s.button}
          onClick={() => removeContact(id)}
          type="button"
        >
          Delete
        </button>
      </li>
    );
  });
};
const onFiltredContacts = (filterItem, contact) => {
  const lowerCasedFilter = filterItem.toLowerCase();
  const filteredContacts = contact.filter(({ name }) =>
    name.toLowerCase().includes(lowerCasedFilter)
  );
  return filteredContacts;
};

const mapStateToProps = ({ contacts: { filter, contactItems } }) => ({
  contact: onFiltredContacts(filter, contactItems),
});

const mapDispatchToProps = (dispatch) => ({
  removeContact: (id) => dispatch(actions.deleteContact(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
