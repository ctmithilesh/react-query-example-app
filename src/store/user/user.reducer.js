import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: '2352532525',
    email: 'steve@gmail.com'
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        updateToken: (state, action) => {
            state.token = action.payload
        },
        updateEmail: (state, action) => {
            state.email = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { increment, updateEmail, updateToken } = userSlice.actions

export default userSlice.reducer