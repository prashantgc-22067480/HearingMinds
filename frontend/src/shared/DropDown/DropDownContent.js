import React from 'react'

const DropDownContent = props => {
  return (
    <div className={`dropdown-content ${[props.open ? 'content-show' : '']}`}>
        {props.children}
    </div>
  )
}

export default DropDownContent