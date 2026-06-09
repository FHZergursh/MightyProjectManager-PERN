import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

interface loginInterface {
  username: string,
  password: string
}

const LoginPage = () => {
  const [username, SetUsername] = useState('')
  const [password, SetPassword] = useState('')
  //const [validLogin, setValidLogin] = useState<loginInterface>()

  const navigate = useNavigate();

  function updateUsername(e : React.ChangeEvent<HTMLInputElement>) {
    SetUsername(e.target.value)
    console.log(e.target.value) //if you don't do target value its always one char behind on console log
  }

  function updatePassword(e : React.ChangeEvent<HTMLInputElement>) {
    SetPassword(e.target.value)
  }

  const onLoginClick = async () => {
    console.log("login button")

    if (username.length === 0 || password.length === 0) {
      return toast.error("All fields are required");
    } 

    try {
      const res = await fetch(`http://localhost:3000/api/users/login`, {method: "POST", headers: {'Content-Type': 'application/json'}, body: JSON.stringify({username: username, password: password})}) //fetch account matching params, complete this
      const valid = await res.json()
      console.log(valid)

      if (res.status === 400) //fail
      {
        console.log("Failed")
        return;
      }
      else if (res.status === 200) //success
      {
        console.log("Success")
        return navigate('/home')
      }
      else { //bugged out completely
        console.log("weird error caused here")
        return

      }
    } catch (error) {
      console.log("Error with login", error)
    }
  }


  const onRegisterClick = async () => {
    if (username.length === 0 || password.length === 0) {
      toast.error("All fields are required");
      return;
    } 
    
    const res = await fetch(`http://localhost:3000/api/users/`)
    const result = await res.json()
    console.log(result)
    
    console.log("register button")
  }



  return (
    <div className='w-full h-screen flex justify-center items-center'>
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