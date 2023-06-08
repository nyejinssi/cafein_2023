import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Routes, Link, useMatch, useParams, BrowserRouter} from'react-router-dom';
import { createRoot } from 'react-dom';
import {authService} from '../src/fbase';

// 기본 구성 요소
import Main from './Main';
import NotFound from './404/NotFound';
import Headers from './Headers';
import DropDown from './DropDown';

// 주소 관련(base)
import Modal from './AboutAddress/Modal';
import PopupDom from './AboutAddress/PopupDom';
import PopupPostCode from './AboutAddress/PopupPostCode';
import Portal from './AboutAddress/Portal';
// -----------------  MyPage --------------------------
// Account
import Home from './MyPage/Account/Home';
import ChangeAccount from './MyPage/Account/ChangeAccount';
import Address from './MyPage/Account/Address';
import List from './MyPage/Account/List';
import InfoChange from './MyPage/Account/InfoChange';
import MyAd from './MyPage/Account/MyAd';
import ChangePassword from './MyPage/Account/ChangePassword';
// Cart
import CHome from './MyPage/Cart/CHome';
import CList from './MyPage/Cart/CList';
import PaymentCheck from './MyPage/Cart/PaymentCheck';
import PurchaseDone from './MyPage/Cart/PurchaseDone';
import Delivery from './MyPage/Cart/Delivery';
// Like
import LHome from './MyPage/Like/LHome';
// Review
import Review from './MyPage/Review/Review';
import RList from './MyPage/Review/RList';
import Write from './MyPage/Review/Write';
import Edit from './MyPage/Review/Edit';
import ReviewListW from './MyPage/Review/ReviewListW';

// ShopList
import ShopListS from './MyPage/Shop/ShopListS';
// Shop
// Sign
import UserAddress from './Sign/UserAddress';
import UserInfo from './Sign/UserInfo';
import Auth from './Sign/Auth';
import Logout from './Sign/Logout';
import SignUpDone from './Sign/SignUpDone';
import SignIn from './Sign/SignIn';
import SignUp from './Sign/SignUp';
//----------------------------------------------------------------
// MBTI
import MBTItest from './MBTI/MBTItest';
import MBTIdata from './MBTI/MBTIdata';
//----------------------------------------------------------------
// Shop site
import Accessory from './Shop/Accessory';
import Coffee_machine from './Shop/Coffee_machine';
import Drip_coffee from './Shop/Drip_coffee';
import Event0 from './Shop/Event0';
import Event1 from './Shop/Event1';
import Event2 from './Shop/Event2';
import Event3 from './Shop/Event3';
import Event4 from './Shop/Event4';
import Grinder from './Shop/Grinder';
import OnSale from './Shop/OnSale';
import Shop from './Shop/Shop';
import Tool from './Shop/Tool';
import NewProduct from './Shop/NewProduct';
//----------------------------------------------------------------
import Tmp from './Tmp';
import CartMaker from './CartMaker';

const App = () => {
  const [init, setInit] = useState(false); // init = false
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null); 

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if(user){
        setIsLoggedIn(true);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        {isLoggedIn ? (
          <DropDown/>
        ):(
          <Headers />
        )}
        <Routes>
          {isLoggedIn ? (
            <>
              <Route path="/MyPage/Account/Address/*" element={<Address/>} />
              <Route path="/MyPage/Account/List/*" element={<List/>} />
              <Route path="/MyPage/Account/ChangePassword/*" element={<ChangePassword/>} />
              <Route path="/MyPage/Account/MyAd/*" element={<MyAd/>} />
              <Route path="/MyPage/Account/InfoChange/*" element={<InfoChange/>} />
              <Route path="/MyPage/Account/Home/*" element={<Home/>} />
              <Route path="/MyPage/Account/ChangeAccount/*" element={<ChangeAccount/>} />

              <Route path="/MyPage/Cart/CHome/*" element={<CHome/>} />
              <Route path="/MyPage/Cart/CList/*" element={<CList/>} />
              <Route path="/MyPage/Cart/PaymentCheck/*" element={<PaymentCheck/>} />
              <Route path="/MyPage/Cart/PurchaseDone/*" element={<PurchaseDone/>} />
              <Route path="/MyPage/Cart/Delivery/*" element={<Delivery/>} />

              <Route path="/MyPage/Like/LHome/*" element={<LHome/>} />
              
              <Route path="/MyPage/Review/Edit/*" element={<Edit/>} />
              <Route path="/MyPage/Review/RList/*" element={<RList/>} />
              <Route path="/MyPage/Review/Write/*" element={<Write/>} />
              <Route path="/MyPage/Review/Review/*" element={<Review/>} />
              <Route path="/MyPage/Review/ReviewListW/*" element={<ReviewListW/>} />
              <Route path="/MyPage/Shop/ShopListS/*" element={<ShopListS/>} />
              <Route path="/Sign/UserInfo/*" element={ <UserInfo/>} />
              <Route path="/Sign/UserAddress/*" element={<UserAddress/>} />
              <Route path="/Sign/SignUpDone/*" element={<SignUpDone/>} /> 
              <Route path="/Sign/Logout/*" element={<Logout/>} />    
              
            </>
          ):(
            <>
              <Route path="/Sign/Auth/*" element={<Auth/>} />
            </>
          )
          }
          <Route path="/*" element={<Main />} />
          <Route path="/Tmp" element={<Tmp/>} />

          <Route path="/Sign/SignUp/*" element={<SignUp/>} />
          <Route path="/Sign/SignIn/*" element={<SignIn/>} />
          <Route path="/Shop/Shop/*" element={<Shop/>}/>
          <Route path="/Shop/NewProduct/*" element={<NewProduct/>}/>
          <Route path="/Shop/Event0/*" element={<Event0/>}/>
          <Route path="/Shop/Event1/*" element={<Event1/>}/>
          <Route path="/Shop/Event2/*" element={<Event2/>}/>
          <Route path="/Shop/Event3/*" element={<Event3/>}/>
          <Route path="/Shop/Event4/*" element={<Event4/>}/>
          <Route path="/Shop/Tool/*" element={<Tool/>}/>
          <Route path="/Shop/Coffee_machine/*" element={<Coffee_machine/>}/>
          <Route path="/Shop/OnSale/*" element={<OnSale/>}/>
          <Route path="/Shop/Grinder/*" element={<Grinder/>}/>
          <Route path="/Shop/Accessory/*" element={<Accessory/>}/>
          <Route path="/Shop/Drip_coffee/*" element={<Drip_coffee/>}/>

          <Route path="/MBTI/MBTItest/*" element={<MBTItest/>} />
          
          <Route path="/CartMaker/*" element={<CartMaker/>} />
          
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;