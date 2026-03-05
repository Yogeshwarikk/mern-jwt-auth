import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Register(){

const navigate = useNavigate()

const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")

const API="http://localhost:5000/api/auth/"

const handleRegister = async ()=>{

try{

await axios.post(API+"register",{
name,
email,
password
})

alert("Register success")

navigate("/")

}catch{

alert("Register failed")

}

}

return(

<div style={styles.wrapper}>

<div style={styles.box}>

<h2>Register</h2>

<input
placeholder="Name"
style={styles.input}
value={name}
onChange={(e)=>setName(e.target.value)}
/>

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

<button style={styles.btn} onClick={handleRegister}>
Register
</button>

<p onClick={()=>navigate("/")} style={styles.link}>
Already have account
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
border:"none"
},

link:{
marginTop:"10px",
cursor:"pointer",
color:"blue"
}

}

export default Register