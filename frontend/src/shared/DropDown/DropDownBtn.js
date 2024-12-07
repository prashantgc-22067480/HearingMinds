import React from 'react'

const DropDownBtn = props => {
  return (
    <div 
        onClick={props.handleDropDown}
        className={`dropdown-btn ${props.open ? "btn-show" : ''}`}
   >
        {props.children}
    </div>
  )
}

export default DropDownBtn