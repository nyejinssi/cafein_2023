import React, { useEffect, useState } from 'react';
import { Link } from'react-router-dom';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import ReviewEdit from './Edit';
import { authService, dbService } from '../../fbase';
import Edit from './Edit';

const RList = () => {
    const [userReviews, setUserReviews] = useState([]);
    const user = authService.currentUser;

    useEffect(() => {
        const q = query(
        collection(dbService, 'userReviews'),
        where('creatorId', '==', user.uid)
        );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const userReviewArray = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id, }));
      setUserReviews(userReviewArray);
    }); }, [user]);

    return (
        <>
        <div id="myPageReview" className="col-9">
          <h2 style={{ marginTop: "5%", marginLeft: "30%", marginBottom: "2%" }}>
            리뷰 관리
          </h2>
    <ul style={{ listStyle: "none" }}>
      <li>
        <h3>
          <Link to="/Mypage/Review/*"
            style={{
              fontWeight: 600,
              textDecoration: "none",
              float: "left",
              marginLeft: "28%",
              color: "#6F6F6F"
            }}>
            작성가능한 리뷰
    
          </Link>
        </h3>
      </li>
      <li>
        <h3
          style={{
            marginLeft: "5%",
            fontWeight: 600,
            textDecoration: "none",
            float: "left",
            position: "relative"
          }}
        >
          내가 작성한 리뷰
        </h3>
      </li>
    </ul>
  </div>
  <div
    className="myPageReview2"
    style={{ marginTop: "6%" }}
    id="myPageReviewed"
  >
        {userReviews.map((userReview) => (
            <Edit
            key={userReview.id}
            reviewObj={userReview}
            isOwner={true} 
            />
        ))}
        </div>
        </>
    );
};

/* 
{userWReview.map((R) => (
              <div key={R.id} R={R}>
                <img src={R.ProductImg} id="imgConts" />
                {R.ProductName}
                <Link to="/Mypage/Review/Write/*"><button className="btn btn-primary" onClick={DataWrite}> 리뷰 작성하기 </button></Link>
              </div>
            ))}
*/

export default RList;
