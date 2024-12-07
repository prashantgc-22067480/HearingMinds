import React, { useState, useRef, useEffect } from 'react'
import DropDownBtn from './DropDownBtn'
import DropDownContent from './DropDownContent'

import './DropDown.css'

export const DropDown = props => {

    const { buttonText, content } = props
    const [open, setOpen] = useState(false)

    const dropDownRef = useRef()

    const handleDropDown = () =>{
        setOpen((prev) => (!prev))
    }

    useEffect(() =>{

        const handleClick = (e) =>{
            if(dropDownRef.current && !dropDownRef.current.contains(e.target)){
                setOpen(false)
            }
            }
        document.addEventListener("click",handleClick)

        return () => {
            document.removeEventListener("click", handleClick)
        }

    },[])

  return (
    <>   
        <div className='dropdown' ref = {dropDownRef}>
            <DropDownBtn 
                open={open} 
                handleDropDown={handleDropDown}
            >{buttonText}
            </DropDownBtn>
            <DropDownContent open={open}>{content}</DropDownContent>
        </div>
    </>


  )
}
