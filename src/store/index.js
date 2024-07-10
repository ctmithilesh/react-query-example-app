import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/user.reducer'
import customerDataFormReducer from './customer-data-form/customer-data-form.reducer'

export const store = configureStore({
    reducer: {
        user: userReducer,
        customer: customerDataFormReducer
    },
})