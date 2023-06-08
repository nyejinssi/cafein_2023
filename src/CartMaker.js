import { dbService, authService, storageService } from './fbase';
import React,  { Component, useEffect, useState } from 'react';
import { getFirestore, addDoc, getDocs, collection, query, onSnapshot, orderBy, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import {ref, uploadString, getDownloadURL } from "firebase/storage";


const CartMaker = () => {
    const [userreview, setUserreview] = useState("");
    const [userreviews, setUserreviews] = useState([]); 
    const user = authService.currentUser;

    const onSubmit = async (event) => {
        event.preventDefault();        
        
       const ReviewContent = {
            ProductID : 3,
            ProductName: "테스트 2",
            ProductImg : 'https://firebasestorage.googleapis.com/v0/b/cafein-d4561.appspot.com/o/productimages%2F%EB%A1%9C%EC%8A%A4%ED%8C%85%EC%9B%90%EB%91%90%EC%BB%A4%ED%94%BC_%ED%99%80%EB%B9%88_%EB%B2%A0%ED%8A%B8%EB%82%A8%EB%A1%9C%EB%B6%80%EC%8A%A4%ED%83%80G1.png?alt=media&token=8bbbeb3f-4d3f-40ba-abad-439a6119178b',
            ProductPrice: 8000,
            userId : user.uid
        };
        await addDoc(collection(dbService, "Like"), ReviewContent);
    };

    return (
        <div>
            <form onSubmit = {onSubmit}> 
                <input type = "submit" value = "저장"/>
            </form>
        </div> 
    );
};

export default CartMaker;
