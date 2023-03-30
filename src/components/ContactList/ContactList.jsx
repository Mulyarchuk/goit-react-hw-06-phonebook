
import { ContactListItem } from "components/ContactListItem/ContactListItem";
import { useSelector } from "react-redux";
import { getStatusFilter } from "redux/filterSlice";
import { getPhones } from "redux/phoneSlice";
import css from './ContactList.module.css';

export const ContactList = () => {
    const contacts = useSelector(getPhones);
    const filter = useSelector(getStatusFilter);

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );

    return(
        <ul className={css.contactList__list}>
            {filteredContacts.map(contact => {
                const {name, number, id} = contact || {}
                return <ContactListItem key = {id} name={name} number={number} id={id}/>
            })}
        </ul>
    )
}



