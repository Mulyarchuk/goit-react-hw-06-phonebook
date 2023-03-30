

import css from './Filter.module.css'
import { useDispatch } from "react-redux";
import { setStatusFilter } from "redux/filterSlice";

export const Filter = ()=>{
    const dispatch = useDispatch();

    const onChange = e => {
        const filter = e.target.value;
        dispatch(setStatusFilter(filter))
        };

    return (
        <label className={css.filter__label}>Find contacts by name
        <input type="text"
        className={css.filter__input}
        onChange={onChange} />
    </label>
    )
    
}

