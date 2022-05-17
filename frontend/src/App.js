import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"

import PrivateRoute from "./utils/PrivateRoute"
import { AuthProvider } from "./context/AuthContext"


const App = () => {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <div className="name">
            <Routes>
              <Route key="Home"       exact path="/"      element={<PrivateRoute Component={<HomePage/>}  />} />
              <Route key="*"          path="*"            element="Page inavailable" />
              <Route key="Login"      path="/login"       element={<LoginPage/>} />
            </Routes>
          </div>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App
