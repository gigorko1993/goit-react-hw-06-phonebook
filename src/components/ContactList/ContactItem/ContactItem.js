import { useSelector, useDispatch } from "react-redux";

import { getFiltredContacts } from "../../../redux/contacts/contacts-selectors";

import actions from "../../../redux/contacts/contacts-action";

import s from "./ContactItem.module.css";

const ContactItem = () => {
  const contact = useSelector(getFiltredContacts);
  const dispatch = useDispatch();

  return contact.map(({ name, number, id }) => {
    return (
      <li className={s.item} key={id}>
        {name}: {number}
        <button
          className={s.button}
          onClick={() => dispatch(actions.deleteContact(id))}
          type="button"
        >
          Delete
        </button>
      </li>
    );
  });
};

export default ContactItem;