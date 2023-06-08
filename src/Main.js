import React from 'react';
import {Link} from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <h1>메인페이지</h1>
            <Link to="/Tmp"> 임시 창 </Link> <br/>
            <Link to="/Sign/SignUp"> 회원가입 </Link> <br/>
            <Link to="/Sign/SignIn"> 로그인 </Link> <br/>
            <Link to="/MBTI/MBTItest"> 엠비티아이 테스트 </Link> 
            <Link to="/Sign/UserInfo">사용자 정보 </Link>
            <Link to="/CartMaker"> 카트 메이커 </Link>
            <Link to="/CartMaker">카트 정보 만들기</Link> <br/>
            <Link to="/MyPage/C1"> 장바구니 </Link>
            <Link to="/coffeembti/mbtiTest"> 커피 엠비티아이</Link><br/>
            <Link to="/MyPage/PaymentCheck"> 페이먼트 체크 </Link><br/>
            <Link to="/MyPage/Account/MyAd"> 주소 확인</Link><br/>
            <Link to="/Tmp"> 임시 창 </Link>    <Link to='/Shop/Shop'>원두</Link>
            <Link to='/Shop/Tool'>도구</Link>
            <Link to='/Shop/Event0'>기획전</Link>
        </div>
    );
};

export default Main;
