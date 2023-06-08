import React, { useMemo, useState, useEffect }  from 'react';
import {DropDownList} from "@progress/kendo-react-dropdowns";
import Dropdown from 'react-dropdown';
import { Link } from'react-router-dom';
import logo from './logo_3.png';
import profile from './profile.png'
import './Header.css';
import { dbService, authService } from './fbase';
import userEvent from '@testing-library/user-event';
import {query, collection, where, onSnapshot} from "firebase/firestore";

const DropDown = () => {
    const [userInfo, setUserInfo] = useState(null);
    const user = authService.currentUser;
    const [open, setOpen] = useState(false);
    const handleOpen = () => { setOpen(!open); };
    const handleMenuHome = () => { setOpen(false); };
    const handleMenuOne = () => { setOpen(false); };
    const handleMenuTwo = () => { setOpen(false); };
    const handleMenuThree = () => { setOpen(false); };
    const handleMenuF = () => { setOpen(false); };
    const handleMenuS = () => { setOpen(false); };
    const handleMenuSe= () => { setOpen(false); };
    const handleMenuA= () => { setOpen(false); };
    const handleMenuLogout = () => { setOpen(false); };
    const handleMenuW = () => { setOpen(false); };
    const handleMenus = () => { setOpen(false); };
    const mbti =() => { setOpen(false); };

    useEffect(() => {
        const q = query(
        collection(dbService, 'userInfomation'),
        where('createrId', '==', user.uid)
        );

        onSnapshot(q, (snapshot) => {
            const userArray = snapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id, 
            }));
            setUserInfo(userArray);
            });
        },[user]);    
    
    return (
        <>  
            <div className="header">
            <div className="logo">
                    {/*로고*/}
                    <Link to="/home"><img src={logo} alt="logo" /></Link>
                </div>
                <Link to='/home'><span className="title">Cafe인</span></Link>
                <span className="nav1">
                    <ul>
                        <li>
                            <Link to="/Shop/Shop/*" style={{ fontSize: "2.2vw" }}> 
                                쇼핑
                            </Link>
                        </li>
                        <li>
                            <Link to="/Sign/Logout">로그아웃</Link>
                        </li>
                    </ul>
                </span>
                <div>
                    {userInfo && userInfo.length > 0 ? (
                    <div className='UserNickname'>{userInfo[0].name}</div>
                    ) : (
                    <div> Guest </div>
                    )}
                </div>
            
            <div className="dropdown">
                <button type="button" className="dropdown_btn" id="img_btn" onClick={handleOpen}>
                    <img src={profile} />
                </button>
                <div className="dropdown_submenu">
                    <div className="submenu_shopping">
                    <Link to="/MyPage/Cart/CHome/*" className="dropdown_contents"><li onClick={handleMenuOne} > 장바구니</li></Link>
                    </div>
                    <div className="submenu_interest">
                        <Link to="/MyPage/Like/LHome/*" className="dropdown_contents"><li onClick={handleMenuTwo}> 찜한 상품 </li></Link>
                    </div>
                    <Link to="/MyPage/ShopList/*" className="dropdown_contents"><li onClick={handleMenuThree}>주문목록 </li></Link>
                    <div className="submenu_review">
                            <Link to="/MyPage/Review/Review/*" className="dropdown_contents"><li onClick={handleMenuF} >리뷰관리</li></Link>
                            <Link to="/MyPage/Review/Review/*" className="dropdown_contents"><li onClick={handleMenuW} style={{Color:"gray"}}> 작성 가능한 리뷰 </li></Link>
                            <Link to="/Mypage/Review/RList/*"className="dropdown_contents" style={{Color:"gray"}}>내가 작성한 리뷰</Link>
                    </div>
                    <Link to="/MyPage/Account/Home/*" className="dropdown_contents"><li onClick={handleMenuA}>계정 관리</li></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DropDown;
