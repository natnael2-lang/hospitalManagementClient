import React from 'react'
import './CreateRemove.css'

function CreateRemove({handleClick}) {
    
  return (
    <div className="buttons">
        <div className='createButton'>
        <button className='creat-button' onClick={handleClick}>Creat Content</button>
        </div>
        <div className='removeButton'>
        <button className='remove-button'>Remove Content</button>
        </div>

    </div>
  )
}

export default CreateRemove