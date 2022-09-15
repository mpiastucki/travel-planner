import React, { useEffect, useState } from "react";

function LoginForm(props) {

    const [submitted, setSubmitted] = useState(false);
    const [username, setUsername] = useState("mpiastucki");
    const [password, setPassword] = useState("manju");

    async function getLoginAuth(){



        const data = {"username": username, "password": password};
        const payload = JSON.stringify(data);
        const response = await fetch("/api/login", {method: 'POST', body: payload, headers: {'Content-Type': 'application/json'}});
        console.log(response.body)
        return response.body;
    }

    return (
        <>
        <h1 className="login-title">Login</h1>
            <label for="username">Username</label>
            <input type="text" id="username-input" name="username" onChange={(e)=> setUsername(e.currentTarget.value)}/>
            <label for="password">Username</label>
            <input type="password" id="password-input" name="password" onChange={(e)=> setPassword(e.currentTarget.value)}/>
            <button onClick={getLoginAuth}>Log In</button>
        </>
    )
}

export default LoginForm;