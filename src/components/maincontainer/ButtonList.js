import React from 'react'
import Button from './Button'

const list = ["All", "Gaming", "Live", "Cooking", "Soccer"]

const ButtonList = () => {
  return (
    <div className='flex'>
      {list.map((name)=>(
        <Button key={name} name={name}/>
      ))}
    </div>
  )
}

export default ButtonList