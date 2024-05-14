import React from 'react'
import {useDispatch} from "react-redux"
import {toggleMenu} from "../utils/appSlice"

const Head = () => {

  const dispatch = useDispatch()

  const toggleMenuHandler = () =>{
    dispatch(toggleMenu())
  }

  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-lg'>
        <div className='flex col-span-1'>
        <img 
        onClick={()=>toggleMenuHandler()}
        className='h-10'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png' alt='hamburger-icon'/>
        <img className='h-11 mx-2' src='https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500' alt='yt-logo'/>
        </div>
        <div className='col-span-10 flex justify-center'>
            <input className='border border-gray-400 rounded-l-full w-1/2 px-4' placeholder="Search" type='text'/>
            <button className='bg-gray-200 px-2 rounded-r-full'>Search</button>
        </div>
        <div className='col-span-1'>
             <img className='h-8 bg-black rounded-full' alt='user' src='https://cdn-icons-png.freepik.com/256/1077/1077063.png?semt=ais_hybrid'/>
        </div>
    </div>
  )
}

export default Head