import { useNavigate } from "react-router-dom"

function Home(){

const navigate = useNavigate()

const logout = ()=>{

localStorage.removeItem("token")

navigate("/")

}

return(

<div style={{textAlign:"center",marginTop:"150px"}}>

<h1>Welcome </h1>

<p>You are logged in</p>

<button onClick={logout}>
Logout
</button>

</div>

)

}

export default Home