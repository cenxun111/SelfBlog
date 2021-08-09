import React from 'react'
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux'
import rightpic from '../../images/rightpic.jpeg'

const Center = () => {
    const {posts} =useSelector(state=>state)
    const dispatch = useDispatch()
    console.log(posts.allposts)
    return (
        // <div>he</div>
    <div>
            {posts.allposts.map(post=>(
                <div key={post._id}>
 <div className="flex items-center flex-col mt-10 text-2xl  text-blue-500">
 <h1 className='flex flex-col justify-center  text-4xl mb-2 text-green-500'>
 推荐
 </h1>

 <h1 className='flex flex-col mt-6 justify-center  text-3xl '>{post.title}</h1>
 <h1 className='flex flex-col mb-3 justify-center  text-3xl '>text</h1>
 <img src= {rightpic} className="w-11/12 h-auto rounded-md"/>
 
 <h1 className='flex flex-col pt-8 justify-center  text-3xl '>title</h1>
 <h1 className='flex flex-col pb-3 justify-center  text-3xl '>text</h1>
 <img src= {rightpic} className="w-11/12 h-auto rounded-md"/>
 </div>
 </div>
            ) )}
</div> 
    )
}


export default Center
