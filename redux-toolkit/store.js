import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../redux-toolkit/authSlice'
export const store = configureStore({
  reducer: {
      login:loginReducer,
  },
})