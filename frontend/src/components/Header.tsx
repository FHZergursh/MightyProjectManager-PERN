import React from 'react'

const Header = () => {
  return (
    <nav className='h-[7vh] bg-blue-200 flex justify-between'>
      <div className='bg-red-200 w-[20%] text-center text-black'>
        Big spot for logo here
      </div>

      <div className='bg-gray-400 w-full flex gap-[10%] justify-center items-center'>
        <div className='text-3xl'>Navbar 1</div>
        <div className='text-3xl'>Navbar 2</div>
        <div className='text-3xl'>Navbar 3</div>
        <div className='text-3xl'>Navbar 4</div>
      </div>

      <div className='bg-blue-500 w-[12vw] flex items-center justify-center'>
        <div>profile picture here</div>
      </div>


      

    </nav>
  )
}

export default Header