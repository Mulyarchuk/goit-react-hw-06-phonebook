import css from './ContactForm.module.css';
import { useDispatch, useSelector } from "react-redux";
import { addPhones, getPhones } from "redux/phoneSlice";

export default function ContactForm (){
    
  const dispatch = useDispatch();
  const phones = useSelector(getPhones);   
      
  
    
    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.currentTarget;
        const name = form.elements.name.value;
        const number = form.elements.number.value;
        if(phones.some(phone => phone.name.toLowerCase() === name.toLowerCase())){
          return alert(`${name} is already in contacts `)
        }
        dispatch(addPhones(name, number));
        
        form.reset();
      };

       
        return (
        <form className={css.contact__form}onSubmit={handleSubmit}>
        <label className={css.contact__label}>
          Name <input
          className={css.contact__input}
          type="text"
          name="name"
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
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        />
        </label>
        <button type="submit" className={css.contact__button}>Add contact</button>
      </form>)
      }

      
      


