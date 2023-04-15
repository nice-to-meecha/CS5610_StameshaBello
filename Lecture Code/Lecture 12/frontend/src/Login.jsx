import React, { useState } from "react";
import axios from "axios";

export default function Login() {
    const [usernameInput, setUsernameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [error, setError] = useState("");

    function setUsername(event) {
        const username = event.target.value;
        setUsernameInput(username);
    }

    function setPassword(event) {
        const password = event.target.value;
        setPasswordInput(password);
    }

    async function submit(event) {
        try {
            const response = await axios.post("/api/users/login", {username: usernameInput, password: passwordInput})
        } catch (e) {
            console.error(e);
            console.log("Username taken");
            setError("Username is taken. Please try again");
        }
    }

    return (<div>
        {!!error && error}
        <div>
            <span>Username: </span><input type="text" value={usernameInput} onInput={setUsername} />
        </div>
        <div>
            <span>Password: </span><input type="text" value={passwordInput} onInput={setPassword} />
        </div>
        <button onClick={submit}>Create Account/Login</button>
    </div>);
}