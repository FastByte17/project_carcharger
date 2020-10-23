import React, { useState } from 'react';

export default function Login(props) {
    const [userid, setUserID] = useState("");
    const [password, setPassword] = useState("");

    function lengthCheck() {
        return userid.length > 0 && password.length > 0;
    }
    return (
        <div>
            <h1>{props.heading}</h1>
            <p>{props.paragraph}</p>
            <button >Login</button>
        </div>
    )
}
