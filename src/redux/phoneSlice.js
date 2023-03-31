import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsInitialState = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const phoneSlice = createSlice({
    name: 'phones',
    initialState: contactsInitialState,
    reducers: {
        addPhones:{
            reducer(state, action){
                state.push(action.payload);
            },
            prepare(name, number){
                return{
                    payload:{
                        name,
                        number,
                        id: nanoid()
                    },
                };
            },
        },
        deletePhones(state, action){
            return state.filter(item => item.id !== action.payload)
        }
    }
})

export const { addPhones, deletePhones } = phoneSlice.actions;
// Редюсер слайсу
export const phoneReducer = phoneSlice.reducer;
export const getPhones = state => state.contacts;