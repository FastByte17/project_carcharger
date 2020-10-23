import React, { useState } from 'react';

export default function Login(props) {
    let userName;
    let passWord;

    function username_change(event) {
        userName = event.target.value;
    }

    function password_change(event) {
        passWord = event.target.value;
    }

    
    return (
        <div>
            <input onChange={username_change} type="text" placeholder="Enter your username"></input><br></br>
            <input onChange={password_change} type="password" placeholder="Enter your password"></input><br></br><br></br>
            <button >Login</button>
        </div>
    );
}
