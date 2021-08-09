import { createPost,getPosts ,postError} from "./postSlice"

import { postDataAPI,getDataAPI} from "./fetchData"

export const createNewsPost = async (post,dispatch) => {
 try{
     const res = await postDataAPI("createNewsPost",post);
    //  console.log(res)
     dispatch(createPost({
         post:res.data
     }))
 } catch (error) {
     dispatch(postError(error.message));
 }
};



export const allPost =()=> async(dispatch) => {
    try{
        const res = await getDataAPI("allPost");
        console.log(res)
        dispatch(getPosts({
            data:res.data
        }));
    }catch(error) {
        dispatch(postError(error.message))
    }
};

