import {ChatEngine} from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";


const App=()=>{
    if(!localStorage.getItem("username")) return <LoginForm/>
    return(
        <ChatEngine
            height= "100vh"
            projectID="9ff44879-968e-4b3e-9f3c-35ec8c478e23"
            userName={localStorage.getItem("username")}
            userSecret={localStorage.getItem("password")}
            renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps} />}/>
    )
}

export default App;