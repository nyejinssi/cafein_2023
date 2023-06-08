import React, { useState } from 'react';
import { authService } from '../fbase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import UserInfo from './UserInfo';
import './Auth.css';
import logo from './logo_2.jpg';
import GoogleLogin from './btn_google_signin_light_normal_web.png';

const Auth = () => {
    const navigate = useNavigate();
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true); 
    const [error, setError] = useState(""); 

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [word, setWord] = useState("");
    const [User, setUser] = useState(null);

    const onSubmit = (event) => {
        event.preventDefault();
        try{
            let data;
            if(newAccount){
                try{ 
                    setErrorMsg("");
                    createUserWithEmailAndPassword(authService, email, password);
                    sendEmailVerification(authService, email);
                    setEmail("");
                    setPassword("");
                     // auth객체의 currentUser.emailVerified 값이 true인 경우에만 로그인되도록 코드 짜기                    
                    } catch({code, error}){
                        switch (error.code) {
                            case 'auth/weak-password':
                                setErrorMsg("비밀번호는 8자 이상 16자 이하입니다.");
                                break;
                            case 'auth/invalid-email':
                                setErrorMsg("잘못된 이메일 주소입니다.");
                                break;
                            case 'auth/email-already-in-use':
                                setErrorMsg("이미 존재하는 이메일입니다.");
                                break;}
                } 
            } else {
                try{
                    signInWithEmailAndPassword(authService, email, password)
                } catch({code, error}){
                    alert(errorMsg[code]);
                }
            }
        } catch(error){
            setError(error.message);
        }
        console.log("Success Sign");
    };

    const toggleAccount = () => setNewAccount((prev) => !prev);

    const onSocialClick = async (event) => {
        const { target: {name},} = event;
        let provider;
        if (name === "google"){ provider = new GoogleAuthProvider(); }
        const data = await signInWithPopup(authService, provider);
        console.log("Success Sign With Google Auth");
        navigate('../Sign/UserInfo');
    };

    const onChange = (event) => {
        const {target: {name, value}} = event;
        if(name === "email"){ 
            setEmail(value);
        } else if(name === "password"){
                setPassword(value);
    }};       

        return (
                <>
                <div className='table-container'>
                    <table>              
                            <tr>
                                <td className='logoWrap'> <img src={logo} className="logo_img" alt="logo" /> </td>
                                <td className="LoginTitle"> Cafe인 </td>
                            </tr>
                    </table>
                </div>
                <div className='LoginConts'>
                    <form onSubmit={onSubmit}>
                        <input name="email" type="text" className='LoginEmail' placeholder="Email" required value={email} onChange={onChange} />
                        <input name="password"  className='LoginPassword' type="password" placeholder="Password" required value={password} onChange={onChange} />
                        {errorMsg && <div className="error-message"> {errorMsg} </div>}
                        <input type="submit" className = 'AuthSubmit' value={newAccount ? "회원가입" : "로그인"} />
                        {error}
                    </form>
                        <div className='SignToggle' onClick={toggleAccount}>{newAccount ? "로그인" : "회원가입"}</div>
                        <img className='G-SingIn' src={GoogleLogin} onClick={onSocialClick} name="google" alt="구글로 로그인" />
                </div>
            </>
             );
        }
    

export default Auth; 
