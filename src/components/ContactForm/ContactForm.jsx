import {useState} from "react";
import { nanoid } from "nanoid";
import css from './ContactForm.module.css';
import PropTypes from "prop-types";

export default function ContactForm ({addContact}){
    const [name, setName] = useState(``);
    const [number, setNumber] = useState(``);
        
      
    const handleChange = e => {
      const{name, value} = e.target
        switch(name){
          case 'name':
            setName(value);
            break;
    
          case 'number':
            setNumber(value);
            break;
            
          default:
            return;  
        }
      };
    
    const handleSubmit = e =>{
        e.preventDefault();
        const contact = {
            name,
            number,
            id: nanoid(),
          };
       addContact(contact);
       setName(``);
       setNumber(``)
      };

    

   
         
        return (
        <form className={css.contact__form}onSubmit={handleSubmit}>
        <label className={css.contact__label}>
          Name <input
          className={css.contact__input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          />
        </label>
        <label className={css.contact__label}>
        Number <input
        className={css.contact__input}
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        />
        </label>
        <button type="submit" className={css.contact__button}>Add contact</button>
      </form>)
      }

      ContactForm.propTypes={
        addContact: PropTypes.func.isRequired,
      }
      


