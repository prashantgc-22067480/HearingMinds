import React from 'react'

const DropDownItems = props => {
  return (
    <div 
        className='dropdown-item'
        onClick={props.onClick}
    >
        {props.children}
    </div>
  )
}

export default DropDownItems