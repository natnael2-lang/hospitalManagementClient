import React from 'react'
import "./item.css"


const Item = (props) => {
  return (
    <div className='employee-each'>
        <img  src={props.image} />
        <div className='item-'>
          {props.name}
        </div>
       
      
    </div>
  )
}

export default Item
