import React from 'react'

function Header() {
  // const {location} = window
  const relocate = () =>{
    location.href = 'https://www.github.com/dineshEth'
  }
  return (
    <div className='w-full flex flex-row shadow-md py-4 rounded-2xl px-2 justify-between items-center'>
        <h1 className=' font-extrabold text-3xl'>TransIt.</h1>
        <button onClick={relocate} className='bg-black hover:bg-black/50 text-white py-2 px-4 rounded-2xl'>Github</button>
    </div>
  )
}

export default Header