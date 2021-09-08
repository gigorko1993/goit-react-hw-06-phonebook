import { connect } from "react-redux";

import actions from "../../redux/contacts/contacts-action";

import s from "./Filter.module.css";

const Filter = ({ value, onFilterChange }) => {
  const onChange = (e) => {
    onFilterChange(e.currentTarget.value);
  };

  return (
    <>
      <label className={s.label}>
        Find contacts by name
        <input
          className={s.input}
          name="filter"
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </>
  );
};

const mapStateToProps = (state) => ({ value: state.contacts.filter });

const mapDispatchToProps = (dispatch) => ({
  onFilterChange: (val) => dispatch(actions.changeFilter(val)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
