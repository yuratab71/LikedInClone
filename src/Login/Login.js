import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import { auth } from '../firebase';
import styles from "./Login.module.css";
import {login} from "../features/counter/userSlice";

function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const register = () => {
        if (!name) {
            return alert("Please enter a full name!");
        };

        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic
            }).then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL: profilePic
                })
                );
            })       
        }).catch(error => alert(error));

        };
    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoUrl: userAuth.user.photoUrl
            }))
        }).catch(error => alert(error));
    }


    return (
        <div className={styles.login}>
            <img src="https://blog-assets.hootsuite.com/wp-content/uploads/2025/05/linkedin-for-business-9-620x151.png"/>
        
        <form>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Full name(required if registering)" type="text"/>
        
            <input value={profilePic} onChange={e => setProfilePic(e.target.value)} placeholder="Profile pic URL(optional)" type="text"/>
        
            <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" type="email"/>

            <input value={password} onChange={e => setPassword(e.target.value)} palceholder="Password" type="password"/>  

            <button type="submit" onClick={loginToApp}>Sign In</button>
        </form>
        <p>Not a member?
            <span className={styles.login_register} onClick={register}>Register Now</span>
        </p>
        </div>
    )
}

export default Login
