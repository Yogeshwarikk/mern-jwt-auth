import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Login() {

  const navigate = useNavigate()

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const API = "http://localhost:5000/api/auth/"

  const handleLogin = async () => {

    try{

      const res = await axios.post(API + "login",{
        email,
        password
      })

    
      console.log("JWT TOKEN :", res.data.token)

      localStorage.setItem("token",res.data.token)

      alert("Login Success")

      navigate("/home")

    }catch(err){

      console.log(err)
      alert("Invalid credentials")

    }

  }

  return(

    <div style={styles.wrapper}>

      <div style={styles.box}>

        <h2>Login</h2>

        <input
        placeholder="Email"
        style={styles.input}
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />

        <input
        type="password"
        placeholder="Password"
        style={styles.input}
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />

        <button style={styles.btn} onClick={handleLogin}>
          Login
        </button>

        <p onClick={()=>navigate("/register")} style={styles.link}>
          Create account
        </p>

      </div>

    </div>

  )
}

const styles={

wrapper:{
height:"100vh",
display:"flex",
justifyContent:"center",
alignItems:"center",
background:"#6c63ff"
},

box:{
background:"#fff",
padding:"30px",
borderRadius:"10px",
width:"300px",
textAlign:"center"
},

input:{
width:"100%",
padding:"10px",
margin:"10px 0"
},

btn:{
width:"100%",
padding:"10px",
background:"#6c63ff",
color:"#fff",
border:"none",
cursor:"pointer"
},

link:{
marginTop:"10px",
cursor:"pointer",
color:"blue"
}

}

export default Login