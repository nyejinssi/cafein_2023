import { dbService, authService } from '../../fbase';
  import React, { useEffect, useState } from 'react';
  import { collection, query, where, onSnapshot, getDocs, deleteDoc, doc } from 'firebase/firestore';
  import { Link } from 'react-router-dom';
  import './Cart.css';
  import Container from 'react-bootstrap/Container';
  import Col from 'react-bootstrap/Col';
  import Row from 'react-bootstrap/Row';
import { Checkbox } from '@progress/kendo-react-inputs';
import { useNavigate } from 'react-router-dom';

// 장바구니
  const CHome = () => {
    const [userCart, setUserCart] = useState([]);
    const [userPrice, setUserPrice] = useState(0);
    const [checkedItems, setCheckedItems] = useState({});
    const user = authService.currentUser;
    const navigate = useNavigate();
    const handleCheckboxChange = (event) => {
      const { name, checked } = event.target;
      setCheckedItems((prevItems) => ({
        ...prevItems,
        [name]: checked,
      }));
    };
    
    const handleOrder = () => {
      const selectedItems = userCart.filter((item) => checkedItems[item.id]);
    
      let totalPrice = 0;
      for (let i = 0; i < selectedItems.length; i++) {
        const productCount = selectedItems[i].countNumber;
        const productPrice = selectedItems[i].ProductPrice;
        const pr = productPrice * productCount;
        totalPrice += pr;
      }
    
      setUserPrice(totalPrice);
      console.log(" 데이터 전달 성공");
      navigate('/MyPage/Cart/PaymentCheck');
    };
    

    useEffect(() => {
      const q = query(collection(dbService, 'Cart'), where('userId', '==', user.uid));
    
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const userArray = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setUserCart(userArray);
      });
    
    
      return unsubscribe;
    }, [user, userCart, checkedItems]);

    return (
        <>
         
          <Col lg="3" md="3" sm="1" xs="1">
          <div className="myCafeIn">
                <Link to="/Home/*">My CafeIn</Link>
                  <ul className="list-group list-group-flush" style={{ listStyle: "none" }}>
                      <li>
                      <Link to="/MyPage/Cart/*" style={{color:'#8D5124', fontWeight:550}}>장바구니</Link>
                      </li>
                      <hr/>
                      <li>
                      <Link to="/MyPage/Like/*"> 찜한 상품</Link>
                      </li>
                      <hr />
                      <li>
                      <Link to="/MyPage/ShopList/*">주문목록</Link>
                      </li>
                      <hr />
                      <li>
                      <Link to="/MyPage/Review/*">리뷰관리</Link>
                      </li>
                      <li>
                      <Link to="/MyPage/Review/*" style={{ color: "#6F6F6F" }}>작성 가능한 리뷰</Link>
                      </li>
                      <li>
                      <Link to="/MyPage/Reviewlist/*" style={{ color: "#6F6F6F" }}>내가 작성한 리뷰 </Link></li>
                      <hr/>
                      <li>
                        <Link to="/MyPage/Account/*">계정 관리</Link>
                        </li>
                  </ul>
              </div>
              </Col> 

        <div className="myPageCart">
          <h2 style={{ marginTop: "5%", marginBottom: "1%", marginLeft: "1%" }}>
            장바구니
          </h2>
          <hr />
          <ul className="cartHeader">

  <li style={{ flex: "2" }}>원두 정보</li>
  <li style={{ flex: "1" }}>수량</li>
  <li style={{ flex: "2" }}>상품 금액</li>
  <li style={{ flex: "1" }}>주문</li>
</ul>
<hr />

          {userCart.map((userCart) => (
              <div 
              key={userCart.id} 
              cart={userCart}
              >
          <input
            type="checkbox"
            name={userCart.id}
            checked={!!checkedItems[userCart.id]}
            onChange={handleCheckboxChange}
            value={userCart.id}
          />

           <img src={userCart.ProductImg} className=''/><br />
          {userCart.ProductName} <br />
             {userCart.ProductPrice} <br />
             {userCart.countNumber}
             </div>  ))}
        </div>

        <table className="cartCalc">
          <tbody>
          <tr>
  <td style={{ borderRight: "none" }}>최종 결제 금액(Cafe인은 전 상품 배송비 무료)</td>
</tr>
<tr>
<th style={{ borderRight: "none" }}>{userPrice}</th>
</tr>
          </tbody>
        </table>
        <div style={{ justifyContent: "center", display: "flex", marginBottom: "3%", marginLeft: "15%" }}>
        <span>
        <button
  type="button"
  className="btn btn-primary btn-lg"
  id="getOrder"
  onClick={handleOrder}
>
  주문하기
</button>
        </span>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossOrigin={true.toString()}></script>
      </>
    );
  }

export default CHome;