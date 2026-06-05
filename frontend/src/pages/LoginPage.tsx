import React, { useState } from 'react'

interface loginInterface {
  username: string,
  password: string
}

const LoginPage = () => {
  const [username, SetUsername] = useState('')
  const [password, SetPassword] = useState('')
  const [validLogin, setValidLogin] = useState<loginInterface>()

  function updateUsername(e : React.ChangeEvent<HTMLInputElement>) {
    SetUsername(e.target.value)
    console.log(e.target.value) //if you don't do target value its always one char behind on console log
  }

  function updatePassword(e : React.ChangeEvent<HTMLInputElement>) {
    SetPassword(e.target.value)
    console.log(e.target.value)
  }

  const onLoginClick = async () => {
    console.log("login button")

    //this needs doing, probably need a toast notification to make things sweet on failure to login

    try {
      const res = await fetch(``) //fetch account matching params, complete this
      const valid = await res.json()
      setValidLogin(valid)

      if (validLogin) {
        console.log("Successful login")
        
      } 
      else if (!validLogin) {
        console.log("Incorrect login")
      }
      else {
        console.log("Something really weird happened with login, debug this")
      }
    
    } catch (error) {
      console.log("Error with login", error)
    }
  }

  const onRegisterClick = () => {
    console.log("register button")
  }



  return (
    <div className='bg-gray-700 w-full h-screen flex justify-center items-center'>
      <div className='bg-gray-500 w-[25vw] h-[40vh] flex flex-col gap-8'>
        <h1 className='flex justify-center'>Login</h1>
        <div className='flex px-5 py-3'>
          <h2 className='mr-1'>Username</h2>
          <input type='text' className='bg-white w-[80%]' value={username} onChange={updateUsername}/>
        </div>
        <div className='flex px-5 py-3'>
          <h2 className='mr-2'>Password</h2>
          <input type='text' className='bg-white w-[80%]' value={password} onChange={updatePassword}/>
        </div>
        <div className='h-full flex justify-center items-center gap-10 '> 
          <button className='bg-green-400 p-2 h-15 w-20' onClick={() => {onLoginClick()}}>Login</button>
          <button className='bg-blue-400 p-2 h-15 w-20' onClick={() => {onRegisterClick()}}>Register</button>
        </div>
      </div>

      

    </div>
  )
}

export default LoginPage