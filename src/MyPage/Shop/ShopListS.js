import { dbService, authService, storageService } from '../../fbase';
import React, { useState, useEffect } from 'react';
import './ShopList.css';
import Col from 'react-bootstrap/Col';
import Pic from '../../profile.png';
import { getFirestore, addDoc, collection, query, updateDoc, where, onSnapshot, getDocs, deleteDoc, doc } from 'firebase/firestore';


const ShopListS = () => {
  const user = authService.currentUser;
  const [PaymentCheck, setPaymentCheck] = useState([]);


  useEffect(() => {
    const q = query(collection(dbService, "PaymentCheck"), where('userId', '==', user.uid));
            onSnapshot(q, (snapshot) => {
                const userArray = snapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id, 
                }));
            setPaymentCheck(userArray);
            console.log(PaymentCheck);
            });            
  }, []);


  return (
    <>  
      hello
    </>
  );
};

export default ShopListS;