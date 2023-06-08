import { dbService, authService } from '../../fbase';
import React, { useEffect, useState } from 'react';
import { collection, query, where, onSnapshot, getDocs, deleteDoc, doc } from 'firebase/firestore';

// 찜한 상품 ( Like.js )
const LHome = () => {
  const [userLike, setUserLike] = useState([]);
  const user = authService.currentUser;

  useEffect(() => {
    const q = query(
      collection(dbService, 'Like'),
      where('userId', '==', user.uid)
    );
        
    onSnapshot(q, (snapshot) => {
      const userArray = snapshot.docs.map((doc)=>({
        ...doc.data(), 
        id: doc.id,}));
      setUserLike(userArray);
    },[user]);
  });

  return (
    <div>
        <div className="myPageLike2">
        {userLike.map((L) => (
          <div key={L.id} L={L} >
              <img src={L.ProductImg}/><br />
              {L.ProductName} <br />
              {L.ProductPrice}
          </div>  ))}
    </div>
    </div>
  );
};

export default LHome;