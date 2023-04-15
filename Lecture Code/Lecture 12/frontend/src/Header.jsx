import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
    const [username, setUsername] = useState("");

    useEffect(() => {
        axios.get("/api/users/isLoggedIn")
            .then(res => {
                console.log(res)
                setUsername(res.data.username);
            })
            .catch(err => {
                console.error(err);
            })
    }, []);

    async function logOutUser() {
        axios.post("/api/users/logOut")
            .then(data => {
                setUsername("");
            })
            .catch(err => {
                console.error(err);
            })
    }

    if (!username) {
        return(<div className="header">
            <Link to="/login"/>
        </div>);
    }

    return(<div>
        <div className="header">
            {username ? `Welcome, ${username}!` : "Welcome, Stranger!"}
            <button onClick={logOutUser}>Log Out</button>
        </div>
    </div>)
}