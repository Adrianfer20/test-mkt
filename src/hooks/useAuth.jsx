import { useEffect, useState } from "react"
import { currentUserFirebase, loginFirebase, logoutFirebase, registerFirebase, updateUserFirebase } from "../firebase/auth";


const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const suscribe = async () => {
      const user = await currentUserFirebase();
      setUser(user)
      setLoading(false)
    }

    return () => suscribe()
  }, [])

  const register = async (email, password) => {
    try {
      setLoading(true)
      const response = await registerFirebase(email, password);
      if (!response.email) return console.log("error:", response);
      setUser(response);
      setLoading(false)
      return { success: true }
    }
    catch (error) {
      console.log("error:", error);
      return { success: false, error }
    }
  }

  const login = async (email, password) => {
    try {
      setLoading(true)
      const response = await loginFirebase(email, password);
      if (!response.email) return console.log("error:", response);
      setUser(response);
      setLoading(false)
      return { success: true }
    }
    catch (error) {
      console.log("error:", response);
      return { success: false, error }
    }
  }

  const logout = async () => {
    try {
      const response = await logoutFirebase()
      if (!response.success) return console.log("error al salir");
      setUser(null)
      return { success: true }
    } catch (error) {
      return { success: false, error }
    }

  }

  const updateUser = async ({ displayName, photoURL }) => {
    try {
      const response = await updateUserFirebase({ displayName, photoURL });
      if (!response.success) return console.log(response);
      setUser(response);
      return { success: true }
    } catch (error) {
      console.log("error:", error);
      return { success: false, error }
    }
  }

  return { user, loading, login, logout, register, updateUser }
}

export default useAuth;