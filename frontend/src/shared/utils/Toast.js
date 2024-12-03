import {toast} from 'react-toastify'

export const handleSuccess = (msg)=>{
    toast.success(msg, {
        position: 'top-center',
        autoClose: 1500,
        closeOnClick: true,
        pauseOnHover: false
    })
}

export const handleFailure = (msg)=>{
    toast.error(msg, {
        position: 'top-center',
        autoClose: 1500,
        closeOnClick: true,
        pauseOnHover: false,
    })
}