import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import {toggleMenu} from "../utils/appSlice"
import { YOUTUBE_SEARCH_API } from '../utils/constants'
import { cacheResults } from '../utils/searchSlice'

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSugggestions] = useState(false)

  const dispatch = useDispatch()

  const searchCache= useSelector((store)=>store.search)

  useEffect(()=>{
   const timer = setTimeout(()=> {
    if (searchCache[searchQuery]){
      setSuggestions(searchCache[searchQuery])
    }
    else{
      searchResults()
    }
   }, 200)
   return ()=>{
    clearTimeout(timer)
   }
},[searchQuery])

const searchResults = async () => {
  console.log(searchQuery)
    const data = await fetch(YOUTUBE_SEARCH_API+searchQuery)
    const json = await data.json()
    setSuggestions(json[1])

    dispatch(cacheResults({
      [searchQuery]: json[1]
    }))
     
}
  

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

        {/* input box */}

        <div className='col-span-10 '>
          <div>
            <input className='border border-gray-400 rounded-l-full w-1/2 px-4' placeholder="Search" type='text'
            value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}
            onFocus={()=>setShowSugggestions(true)}
            onBlur={()=>setShowSugggestions(false)}
            />
            <button className='bg-gray-200 px-2 rounded-r-full'>Search</button>
          </div>
          {showSuggestions && searchQuery?
          (<div className='fixed bg-white p-6 shadow-lg rounded-xl'>
          <ul>
            {suggestions.map((item)=>(
              <li className=' hover:bg-slate-200 cursor-pointer px-4 rounded-md'>{item}</li>
            ))}
          
          </ul>
           
        </div>)
        :
        <div></div>}
        </div>
        


        <div className='col-span-1'>
             <img className='h-8 bg-black rounded-full' alt='user' src='https://cdn-icons-png.freepik.com/256/1077/1077063.png?semt=ais_hybrid'/>
        </div>
    </div>
  )
}

export default Head