import React, { useContext, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signOut,signInWithEmailAndPassword } from "firebase/auth";
import './Login.css'
import { UserContext } from '../../App';
import { useNavigate, useLocation } from 'react-router';
import UserProfile from '../UserProfile/UserProfile';


const Login = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser)
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
    });

    let navigate= useNavigate();;
    let location = useLocation();
    const destination = location?.state?.from || '/'

    const firebaseConfig = {
        apiKey: "AIzaSyDA8W9s9JZjU350XIGxG5HCidS0lfOzUn4",
        authDomain: "online-news-protal.firebaseapp.com",
        projectId: "online-news-protal",
        storageBucket: "online-news-protal.appspot.com",
        messagingSenderId: "937969492177",
        appId: "1:937969492177:web:111d848f5d7b12a7caa5f0"
    };
    initializeApp(firebaseConfig);
    const provider = new GoogleAuthProvider()
    const auth = getAuth();


    const handleGoogleSingIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result)
                const { displayName, email, photoURL } = result.user;
                const signedInUser = {name:displayName,email:email,image:photoURL }
                setLoggedInUser(signedInUser);
                setUserToken();
                navigate(destination);

                fetch('http://localhost:5000/user',{
                    method: 'POST',
                    headers:{'Content-Type': 'application/json'},
                    body: JSON.stringify(loggedInUser)
                  })
                  .then(res=>res.json())
                  .then(data=>{
                    console.log(data)
                  })
             
               
            }).catch((error) => {

            });
    }
    const handleSingOut=()=>{
        signOut(auth).then(() => {
            const singedOutUser={
                isSignedIn:false,
                name:'',
                email:'',
                photo:'',
                error:'',
                success:false
                  }
         setUser(singedOutUser);
          }).catch((error) => {
            
          });
    }


    const handleBlur = (e) => {
        let isFromValid = true;
        if (e.target.name === "email") {
            isFromValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === "password") {
            const isPasswordValid = e.target.value.length > 8;
            const passwordHash = /\d{1}/.test(e.target.value);
            isFromValid = isPasswordValid && passwordHash;
        }
        if (isFromValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }


    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            createUserWithEmailAndPassword(auth, user.email, user.password)
                .then((res) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = 'true';
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    setUserToken();
                    // history.replace(from);
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                });
        }
        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(auth, user.email, user.password)
                .then((res) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    setUserToken();
                    // history.replace(from);
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });   
        }
        e.preventDefault();
    }

    const setUserToken=()=>{
        auth.currentUser.getIdToken( true).then(function(idToken) {
            sessionStorage.setItem('token',idToken);
          }).catch(function(error) {
            // Handle error
          });
    }

    return (
        <div>
             {/* <button onClick={handleSingOut}>logout</button>  */}
            <div className="container">
                <form onSubmit={handleSubmit} class="form-1">
                    <h1>Login</h1>
                    {newUser && <label for="name">Your Name</label>}
                    {newUser && <input onBlur={handleBlur} type="text" name="name" id="name" required />}
                    <label for="email">Email</label>
                    <input onBlur={handleBlur} type="email" name="email" id="email" required />
                    <label for="password">Password</label>
                    <input onBlur={handleBlur} type="password" name="password" id="password" required />
                    {/* <span>Forgot Password</span> */}
                    <span onClick={() => setNewUser(!newUser)}>Create your New Account ?</span>
                    <button id="button">{newUser ? 'Sing UP' : 'Sing In'}</button>
                    <p style={{ color: 'red' }}>{user.error}</p>
                    {user.success && <p style={{ color: 'green' }}> User{newUser ? 'Created' : 'Logged In'} success</p>} 
                    <div  class="icons">
                    <a onClick={handleGoogleSingIn}  target="blank"><i class="fab fa-google"></i></a>
                    </div>
                    
                </form>
            </div>
        </div>
    );
};

export default Login;