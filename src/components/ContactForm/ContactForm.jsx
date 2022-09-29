import { useState }  from "react";
import { useDispatch } from "react-redux/es/exports";
import { addContact } from "redux/contactsSlice";
import { useSelector } from "react-redux/es/exports";
import Notiflix from 'notiflix';
import { nanoid } from "nanoid";

import { Form, Input, SubmitButton } from "./ContactForm.styled";

export const ContactForm = () => {
    const dispatch = useDispatch();
    const stateContacts = useSelector((state) => state.contacts.items);
    const contactsNames = stateContacts.map(contact => contact.name.toLowerCase());

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const inputNameId = nanoid();
    const inputNumberId = nanoid();

    const handleInputChange = (event) => {
        const { name, value } = event.currentTarget

        switch (name) {
            case 'name':
            setName(value);    
            const nextLabel = event.currentTarget.nextSibling
            value.length === Number(event.currentTarget.maxLength) && nextLabel.focus()
                break;
            
            case 'number':
            setNumber(value);    
                break;
        
            default:
                return;
        }
    }

    const handleSubmitForm = (event) => {
        event.preventDefault();

        contactsNames.includes(name.toLowerCase())
            ? Notiflix.Notify.failure(`${name} is already in contacts`)
            : dispatch(addContact({ id: nanoid(), name, number })) && resetForm();
    }

    const resetForm = () => {
        setName('');
        setNumber('');
    }

    return (
        <Form onSubmit={handleSubmitForm}>
            <label htmlFor={inputNameId}>Name</label>
                <Input
                id={inputNameId}
                type="text"
                value={name}
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                maxLength="10"
                required
                onChange={handleInputChange}
                />
            <label htmlFor={inputNumberId}>Number</label>
                <Input
                id={inputNumberId}
                type="tel"
                value={number}
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                maxLength="10"
                required
                onChange={handleInputChange}
                />
            <SubmitButton type="submit">Add contact</SubmitButton>
        </Form>
    )
}