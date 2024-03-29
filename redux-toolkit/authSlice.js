import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading:false,
    isAuth: false,
    error:"",
    userData:{},
};

export const loginSlice = createSlice({
    name:"login",
    initialState,
    reducers:{
        loginLoading:(state) =>{
            state.isLoading = true;
        },
        loginSuccess:(state,action) =>{
            state.isLoading = false;
            state.userData = action.payload;
        },
        loginError:(state,action)=> {
            state.isLoading = false;
            state.error = action.payload;
        },

    },
})

export const {loginLoading,loginSuccess,loginError} = loginSlice.actions


export default loginSlice.reducer