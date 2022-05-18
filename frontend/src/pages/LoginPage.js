import React, { useState, useContext } from "react"
import { TextField, Button, Box } from "@material-ui/core"

import AuthContext from "../context/AuthContext"

const LoginPage = () => {
  let {loginUser} = useContext(AuthContext)
  const [username, setUsername] = useState("") 
  const [password, setPassword] = useState("")

  return (
    <Box className="center_component">
      <h2 style={{color:"#FFFFFF"}}>Minha UFOP</h2>
      <TextField style={{marginBottom:20, backgroundColor:"#FFFFFF", borderRadius:4}} type="text" key="Username" label="CPF" variant="filled" size="small" onChange={(event) => setUsername(event.target.value)} />
      <TextField style={{marginBottom:20, backgroundColor:"#FFFFFF", borderRadius:4}} type="password"   key="Password" label="Senha" variant="filled" size="small" onChange={(event) => setPassword(event.target.value)} />
      <Button style={{marginBottom:20}} variant="contained" color="primary" onClick={() => loginUser(username, password)}>Entrar</Button>
      <div>
        <small style={{color:"#FFFFFF"}}>Esqueceu sua senha ?  </small>
        <a style={{color:"#FFFFFF"}}>Recuperar senha</a>
      </div>
    </Box>
  )
}

export default LoginPage