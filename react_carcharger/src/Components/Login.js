import React, { useState } from 'react';

export default function Login(props) {
    let userName;
    let passWord;
    return (
        <div>
            <input type="text" placeholder="Enter your username"></input><br></br>
            <input type="password" placeholder="Enter your password"></input><br></br><br></br>
            <button >Login</button>
        </div>
    );
}
