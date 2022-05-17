import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import Sidebar from "./components/Sidebar"

import PrivateRoute from "./utils/PrivateRoute"
import { AuthProvider } from "./context/AuthContext"


const App = () => {
  return (
    <div style={{width:'95%', height:'100%'}}>
      <Router>
        <AuthProvider>
            <Routes>
              <Route key="Home"       exact path="/"      element={<PrivateRoute Component={<HomePage/>}  />} />
              <Route key="*"          path="*"            element="Page inavailable" />
              <Route key="Login"      path="/login"       element={<LoginPage/>} />
            </Routes>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App
