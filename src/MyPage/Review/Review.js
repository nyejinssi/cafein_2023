
import { Link } from'react-router-dom';
import './Review.css';
import { dbService, authService } from '../../fbase';
import { collection, query, where, onSnapshot, getDocs, deleteDoc, doc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import ReviewListW from './ReviewListW';

const Review = () => {
  const user = authService.currentUser;
  const [userWReview, setUserWReview] = useState([]);
  useEffect(() => {
    const q = query(collection(dbService, 'WReview'), where('userid', '==', user.uid), where('deliveryDone', '==', true), where('ReviewWrite', '==', false));
    onSnapshot(q, (snapshot) => {
        const userArray = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setUserWReview(userArray);
      });
  });


    return (
        <>
        <div id="myPageReview" className="col-9">
          <h2 style={{ marginTop: "5%", marginLeft: "30%", marginBottom: "2%" }}>
            리뷰 관리
          </h2>
          <ul style={{ listStyle: "none" }}>
            <li>
              <h3
                style={{
                  fontWeight: 600,
                  textDecoration: "none",
                  position: "relative",
                  float:"left",
                  left:"28%"
                }}
              >
                작성 가능한 리뷰
              </h3>
            </li>
            <li>
              <h3>
               <Link to="/MyPage/Review/RList/*"
                  style={{
                    fontWeight: 600,
                    textDecoration: "none",
                    color: "#6F6F6F",
                    float:"left",
                    position: "relative",
                    left:"35%"
                  }}
                >
                  내가 작성한 리뷰
                </Link>
              </h3>
            </li>
          </ul>
        </div>

        
        <div className="myPageReview2" style={{ marginTop: "6%" }}>
          <hr />
          <div className="myPageReviewContents" id="myPageReviewedContents1">
            {userWReview.map((R) => (
              <ReviewListW 
              key={R.id}
              R = {R}
              isOwner = {true}/>
            ))}
            
          </div>
          </div>
        </>
    );
};

export default Review;