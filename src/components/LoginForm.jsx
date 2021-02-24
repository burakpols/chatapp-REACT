import {useState} from "react";
import axios from "axios";


const LoginForm=()=>{
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const handleSubmit= async (e)=>{
        e.preventDefault()

        const authObject={"Project-ID":"9ff44879-968e-4b3e-9f3c-35ec8c478e23", "User-Name":username, "User-Secret":password}
        try {
            await axios.get("https://api.chatengine.io/chats",{headers: authObject})
            localStorage.setItem("username",username)
            localStorage.setItem("password",password)
            window.location.reload()
        } catch (error) {
            setError("There is problem, check your information.")
            
        }

    }


    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat App</h1>
                <form onSubmit={handleSubmit} >
                    <input value={username} onChange={(e)=>setUsername(e.target.value)} className="input" placeholder="username" type="text" required />
                    <input value={password} onChange={(e)=>setPassword(e.target.value)} className="input" placeholder="password" type="password" required/>
                    <div align="center">
                        <button type="submit" className="button" >
                            <span>start chatting</span>
                        </button>
                    </div>
                    <h3 className="error">{error}</h3>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;