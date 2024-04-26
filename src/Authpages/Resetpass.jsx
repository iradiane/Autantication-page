import React from 'react'

const Resetpass = () => {
  return (
    
    <div>           
    <h1 className="text-2xl text-red-600 font-bold">RESET ACCOUNT PASSWORD</h1>
    <h3></h3>
    <div className="mt-5 flex flex-col gap-5">

      <div>
        <input
          type="password"
          id="password"
          placeholder="Enter new password"
          value=''
          className=" bg-red-300 px-3 py-2 rounded-md border border-blue-700 w-[80%]"
        />
      </div>
      <div>
        <input
          type="password"
          id=""
          placeholder="Confirm new password"
          value=''
          className=" bg-red-300 px-3 py-2 rounded-md border border-blue-700 w-[80%]"
        />
      </div>
        <button className="bg-blue-300 mx-9 py-2 rounded-md text-white w-[80%] border border-blue-700">Reset Password</button>
      </div>
    </div>
  )  
}

export default Resetpass