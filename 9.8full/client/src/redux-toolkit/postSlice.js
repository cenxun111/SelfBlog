import { createSlice } from '@reduxjs/toolkit'

const initialState={
    allposts:[],
    post:[]
};

export const postSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{
        createPost:(state,action) => {
            state.post = action.payload;
        },
        getPosts:(state,action) =>{
            state.allposts = action.payload.data;
        },
        postError:(state,action) =>{
            state.error = action.payload;
        }
    },


})



export const {createPost,getPosts,postError} = postSlice.actions 

export default postSlice.reducer