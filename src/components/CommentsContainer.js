import React from 'react'
import Comment from './Comment'

const CommentsContainer = () => {
  return (
    <div className='m-5 p2'>
        <h1 className='text-2xl font-bold'>Comments:</h1>
        <Comment/>
    </div>
  )
}

export default CommentsContainer