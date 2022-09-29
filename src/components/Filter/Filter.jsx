import { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { filteredValue } from "redux/contactsSlice";
import { nanoid } from "nanoid";
import { Label } from "./Filter.styled";

export const Filter = () => {
const [filter, setFilter] = useState('');

    const inputSearchId = nanoid();

    const dispatch = useDispatch();

    const handleFilter = (event) => {
        const { value } = event.currentTarget;
        setFilter(value);

        dispatch(filteredValue(value.toLocaleLowerCase()));
    }

    return (
        <>
            <Label htmlFor={inputSearchId}>
                Find contacts by name
            </Label>
            <input 
                placeholder="Name"
                id={inputSearchId}
                type="text" 
                name="filter"
                value={filter}
                onChange={handleFilter}
            />
        </>
    )
}