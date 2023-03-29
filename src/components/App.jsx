import {useState, useEffect} from "react";
import  ContactForm  from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

export default function App () {

  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

 const addContact = text =>{
  if (contacts.some(contact=> contact.name.toLowerCase() === text.name.toLowerCase())){
    alert (`${text.name} is already in contacts.`);
    return;
  }
  setContacts([text, ...contacts]);
 } ;

const deleteContact = contactId =>{
  setContacts(contacts.filter(contact => contact.id !== contactId)
  )
};

const changeFilter = e => {
  setFilter(e.currentTarget.value);
};

const getVisibleContacts = () => {
  const NormolisedFilter = filter.toLowerCase();
  return contacts.filter((contact => contact.name.toLowerCase().includes(NormolisedFilter)))
};

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: `column`,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        color: '#010101'
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm  addContact={addContact}/>
      {contacts.length>0 ? <h2>Contacts</h2> : <h2>There are no contacts</h2>}
      {contacts.length>0 &&  <Filter value = {filter} onChange = {changeFilter}/>}
      <ContactList getVisibleContacts={getVisibleContacts} deleteContact={deleteContact} />
    </div>
  );
    };

