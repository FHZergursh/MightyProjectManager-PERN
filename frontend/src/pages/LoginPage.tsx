import React, { useState } from 'react'

const LoginPage = () => {
  const [username, SetUsername] = useState('')
  const [password, SetPassword] = useState('')

  function updateUsername(e) {
    SetUsername(e.target.value)
  }

  function updatePassword(e) {
    SetPassword(e.target.value)
  }

  const onLoginClick = (e) => {
    console.log("login button")
  }

  const onRegisterClick = () => {
    console.log("register button")
  }



  return (
    <div className='bg-gray-700 w-full h-screen flex justify-center items-center'>
      <form className='bg-gray-500 w-[25vw] h-[40vh] flex flex-col gap-8'>
        <h1 className='flex justify-center'>Login</h1>
        <div className='flex px-5 py-3'>
          <h2 className='mr-1'>Username</h2>
          <input type='text' className='bg-white w-[80%]'/>
        </div>
        <div className='flex px-5 py-3'>
          <h2 className='mr-2'>Password</h2>
          <input type='text' className='bg-white w-[80%]' />
        </div>
        <div className='h-full flex justify-center items-center gap-10 '> 
          <button className='bg-green-400 p-2 h-15 w-20' onClick={() => {onLoginClick(password)}}>Login</button>
          <button className='bg-blue-400 p-2 h-15 w-20' onClick={() => {onRegisterClick()}}>Register</button>
        </div>
      </form>

      

    </div>
  )
}

export default LoginPage