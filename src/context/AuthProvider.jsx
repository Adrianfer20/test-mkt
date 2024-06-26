import React, { createContext } from 'react'
import useAuth from '../hooks/useAuth'


export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const {user, loading, login, logout, register, updateUser} = useAuth();

    return (
        <AuthContext.Provider value={{user, loading, login, logout, register, updateUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;