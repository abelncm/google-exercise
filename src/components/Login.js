import { useRef, useState} from "react";
import './Login.css';

function Login () {

    const list = [
        {
            user: "pedro",
            pass: "somePass@",            
        },
        {
            user: "admin",
            pass: "pass123",            
        },
        {
            user: "tech89",
            pass: "starlight",            
        }
    ]     
        
    const usernameInput = useRef();
    const passwordInput = useRef();
    const [message, setMessage] = useState('');

    function authentication() {
        const username = usernameInput.current.value;
        const password = passwordInput.current.value;

        for(let access of list) {
            if(access.user==username && access.pass==password) {
                setMessage('Welcome back '+username+'!');
                return;
            }
        }

        setMessage('Incorrect credentials!');
    }

    

    return <>
    
        <div>
            <label>Username</label><br/>
            <input ref={usernameInput} type="text" />
        </div>
        <div>
            <label>Password</label><br/>
            <input ref={passwordInput} type="password" />
        </div>

        <button onClick={authentication}>login</button><br/>
        {message && <div className="alert">{message}</div>}
    </>  
}

export default Login