import React from 'react'
import { Route, Routes } from 'react-router'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import CreateProjectPage from './pages/CreateProjectPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path ='/home' element={<HomePage />} />
        <Route path ='/project/create' element={<CreateProjectPage />} />
      </Routes>
      

    </div>
  )
}

export default App