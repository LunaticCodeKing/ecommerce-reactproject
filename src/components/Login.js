import React,{useState} from 'react';
import { Link,useHistory } from "react-router-dom";
import { auth } from "./Firebase";
import "../styling/Login.css";

function Login() {
    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
        .then((auth) => {
            history.push('/')
        })
        .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            console.log(auth);
            if(auth){
                history.push('/')
            }
        }).catch(error => alert(error.message))
    }

    return (
        <div className = "login">
            <Link to = "/">
             <img className = "login__logo" 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT13u0fnkcKWbESup_9R8XtFxHmsAmvAMEQPw&usqp=CAU" 
                  alt = ""
              />   
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-Mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type="submit" className = "login__signInButton" onClick = {signIn}>Sign In</button>
                    <button className = "login__registerButton" onClick = {register}>Create your EBUY Account</button>
                </form>
            </div>

        </div>
    )
}

export default Login
