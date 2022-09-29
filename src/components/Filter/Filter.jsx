import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux/es/exports";
import { filteredValue } from "redux/contactsSlice";
import { nanoid } from "nanoid";
import { Label } from "./Filter.styled";

export const Filter = () => {
    const filterValueFromStore = useSelector(state => state.contacts.filter);

    const inputSearchId = nanoid();
    const dispatch = useDispatch();

    const handleFilter = (event) => {
        const { value } = event.currentTarget;
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
                value={filterValueFromStore}
                onChange={handleFilter}
            />
        </>
    )
}