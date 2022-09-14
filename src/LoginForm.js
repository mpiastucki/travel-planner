import React, { useEffect, useState } from "react";

function LoginForm(props) {

    const [submitted, setSubmitted] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function getLoginAuth(){
        const data = {"username": username, "password": password};
        const payload = JSON.stringify(data);
        const response = await fetch("/api/login", {method: 'POST', body: payload});

        return response;
    }

    return (
        <>
        <h1 className="login-title">Login</h1>
        <form className="login-form-container">
            <label for="username">Username</label>
            <input type="text" id="username-input" name="username"  value={username} onChange={(e)=> {
                setUsername(e.currentTarget.value);
            }}/>
            <label for="password">Username</label>
            <input type="password" id="password-input" name="password" value={password} onChange={(e)=>{
                setPassword(e.currentTarget.value);
            }}/>
            <button onClick={getLoginAuth().then(data=>console.log(data))}>Log In</button>
        </form>
        </>
    )
}

export default LoginForm;