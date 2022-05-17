import { createContext, useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()
export default AuthContext

export const AuthProvider = ({children}) => {
    let is_token_in_storage = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null
    let is_user_in_storage = localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null
    
    let [authTokens, setAuthTokens] = useState(() => is_token_in_storage)
    let [user, setUser] = useState(() => is_user_in_storage)
    let [loading, setLoading] = useState(true)

    let history = useNavigate()

    let loginUser = async (username, password) => {
        let response = await fetch("http://127.0.0.1:8000/api/auth/login/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({"username":username, "password":password})
        })

        let data = await response.json()

        if (response.status === 200) {
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            history("/", { replace: true })
        } else {
            alert(data.detail)
        }
    }

    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        history("/login", { replace: true })
    }

    let updateToken = async () => {
        console.log('Update token called!')
        let response = await fetch("http://127.0.0.1:8000/api/auth/login/refresh/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({"refresh":authTokens?.refresh})
        })
        let data = await response.json()

        if (response.status === 200) {
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
        } else logoutUser()

        if (loading) setLoading(false)
    }

    let contextData = {
        user:user,
        authTokens: authTokens,
        loginUser: loginUser,
        logoutUser: logoutUser,
    }

    useEffect(() => {
        if (loading) updateToken()

        let fourMinutes = 1000 * 60 * 4
        let interval = setInterval(() => {
            if (authTokens) {
                updateToken()
            }
        }, fourMinutes)
        return () => clearInterval(interval)
    }, [authTokens, loading])

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? null : children}
        </AuthContext.Provider>

    )
}