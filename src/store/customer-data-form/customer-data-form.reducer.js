import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: '',
    email: '',
    phone: ''
}

export const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        updateName: (state, action) => {

            state.name = action.payload
        },
        updateEmail: (state, action) => {
            state.email = action.payload
        },
        updatePhone: (state, action) => {
            state.phone = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { updateName, updateEmail, updatePhone } = customerSlice.actions

export default customerSlice.reducer