
import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';
import { useDispatch } from 'react-redux';
import { deletePhones } from "redux/phoneSlice";

export const ContactListItem =({id,name,number}) =>{
    const dispatch = useDispatch();
    return  (
        <li key={id} className={css.contactList__item}>
            <p>{name}: {number}</p>
        <button type="button" value={id} className={css.contactList__button} onClick = {() => dispatch(deletePhones(id))}>Delete</button>
        </li>)
}

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  };