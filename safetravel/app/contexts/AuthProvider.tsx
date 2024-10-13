"use client"
import React, { createContext, ReactNode, useEffect, useState } from 'react'

interface AuthContextType {
    authenticated: boolean,
    setAuth: (isAuth: boolean) => void,
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext<AuthContextType | null>(null)

export default function AuthProvider({children}: AuthProviderProps){
    const [authenticated, setAuth] = useState(false)

    useEffect(() => {
        //Check token in cookie
        const checkToken = async() =>{
            //Call api check token
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/check-token`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                'Content-Type': 'application/json',
                }
            });
            
            const data = await response.json()
            
            if(!data.haveToken){
                setAuth(false)
            }else{
                setAuth(true)
            }
        }

        checkToken()
    }, [])

  return (
    <AuthContext.Provider value={{authenticated,setAuth}}>
        {children}
    </AuthContext.Provider>
  )
}


