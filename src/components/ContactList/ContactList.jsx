import React from "react";
import { Contact } from "components/Contact/Contact";
import { useSelector } from "react-redux/es/exports";
import { ListOfContacts } from "./ContactList.styled";

export const ContactList = () => {
    const contactsFromStore = useSelector(state => state.contacts.items);
    const filterValueFromStore = useSelector(state => state.contacts.filter);

    let data = null;
    
    if (filterValueFromStore !== "") {
        data = contactsFromStore.filter(contact => contact.name.toLowerCase().includes(filterValueFromStore));
    } else {
        data = contactsFromStore;
    }

    const arrLength = data.length
    if (arrLength > 0) {
        return (
            <ListOfContacts>
                {data.map(({id, name, number}) => 
                <Contact 
                    key={id} 
                    id={id} 
                    name={name} 
                    number={number} 
                    // onDeleteContact={onDeleteContact} 
                    // onChangeContact={onChangeContact} 
                />)}
            </ListOfContacts>
        )
    } return <p>Contact list is empty</p>
}
