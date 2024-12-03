import React, { useEffect, useState } from "react";

export const Home = () => {

    const [userDetails, setUserDetails] = useState({
        fname: '',
        lname: '',
        email: '',
        authorized: false
    })

    useEffect(() => {
        const getData = async () => {
            try {
                console.log('ok')
                const response = await fetch('http://localhost:5000/api/auth/get-user-by-id', {
                    method: "POST",
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    }
                })
                const result = await response.json()

                const {fname , lname, email} = result.data

                setUserDetails({
                    fname: fname,
                    lname: lname,
                    email: email,
                    authorized: true
                })

            } catch (err) {

            }
        }
        getData()
    }, [])


    return (
        
            <div> 
                {userDetails.authorized ? (
                <h1>    
                    {userDetails.fname} <br />
                    {userDetails.email}
                </h1>
            ) : (
                <h1>
                    Home
                </h1>
            )}
            </div>
    )
}