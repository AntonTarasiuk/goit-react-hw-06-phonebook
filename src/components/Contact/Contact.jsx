import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { removeContact } from 'redux/contactsSlice';
import PropTypes from 'prop-types';

import { ContactEl, ContactNumber, DeleteButton } from "./Contact.styled";

export const Contact = ({ id, name, number }) => {
    const dispatch = useDispatch();

    return (
        <ContactEl>
            {name}: <ContactNumber>{number}</ContactNumber>
            <DeleteButton type="button" onClick={() => dispatch(removeContact(id))}>Delete</DeleteButton>
            {/* <button type="button" onClick={() => dispatch(editContact(id))}>
                Edit
            </button> */}
        </ContactEl>
    )
}

Contact.propTypes = {
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}