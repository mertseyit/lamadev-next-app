"use client"
import { useSession } from "next-auth/react";
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({})

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const session = useSession()
    const getUser = async () => {
        if(session.data?.user) {
            const data = await fetch(`http://localhost:3000/api/session-user?email=${session.data.user.email}`, {
                method:"GET"
            })
            const u = await data.json()
            setUser(u)
        }
    }
    useEffect(() => {
        (
            async () => {
                await getUser()
            }
        )()
    },[session.data])
    return (
        <UserContext.Provider value={{
            user, setUser, getUser
        }}>
            {children}
        </UserContext.Provider>
    )
}