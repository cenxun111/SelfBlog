import React from 'react'

const Navbar = () => {
    return (
        <div className="flex justify-between  bg-gray-400 pt-2 pb-2  px-40 rounded-md">
        <h1 className="text-2xl font-semibold " >homepage</h1>
         {/* {userData.map(user =>
        <h1>{user._id}</h1>)}  */}
        
      
        {/* <div className="relative mx-auto text-gray-600">
          <input
            className="border-2 border-gray-800 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
          />
          <button type="submit" className="absolute right-0 top-0 mt-2 mr-4">尋</button>
        </div> */}
        <div className="flex pr-2">
        <h1 className="text-2xl px-4">
          post
          </h1>
          <h1 className="text-2xl px-4">
          login
          </h1>
          <h1 className="text-2xl px-4">
          {/* <Link to ="/factorycenter">智造中心</Link> */}
          register
           </h1>
          </div>
        </div>
    )
}

export default Navbar
