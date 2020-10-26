import React, { useState } from 'react';
import axios from 'axios';

export default function Login(props) {
    let userName;
    let passWord;

    function username_change(event) {
        userName = event.target.value;
    }

    function password_change(event) {
        passWord = event.target.value;
    }

    function logInButtonClick(props) {
        console.log('pressed');
        axios.post('http://localhost:4000/login',
            {},
            {
                auth: {
                    username: userName,
                    password: passWord
                }
            })
            .then(response => {
                props.SetLoggedIn()
                props.history.push('/maps');
                console.log('Login successful');
            })
            .catch(error => console.log(error));


        console.log('finished');
    }

    return (
        <div>
            <p>Please Login below</p>
            <input onChange={username_change} type="text" placeholder="Enter your username"></input><br></br>
            <input onChange={password_change} type="password" placeholder="Enter your password"></input><br></br><br></br>
            <button type="submit" onClick={() => logInButtonClick(props)}>Login</button>
        </div>
    );
}
