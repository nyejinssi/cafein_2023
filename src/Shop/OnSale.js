import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { dbService } from '../fbase';
import { Link } from 'react-router-dom';
import './onsale.css'

const MyForm = ({ handleChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
      setInputValue(event.target.value);
      handleChange(event.target.value);
  };

  return (
      <div className="search">
          <input
          name="searching"
          type="search"
          className="input"
          placeholder="검색어를 입력하세요"
          onChange={handleInputChange}
          />
          <button type="button" className="search_button" id="search_button" style={{ cursor: 'pointer' }}>   
              검색
          </button>
      </div>
  );
};

const OnSale = () => {

  const [isMoreCoffeeVisible, setMoreCoffeeVisible] = useState(false);

    const handleChange = (value) => {
        console.log(value);
    };

    const toggleMoreCoffee = () => {
        setMoreCoffeeVisible(!isMoreCoffeeVisible);
    };
    const [OnSale, setOnSale] = useState([]);

    async function fetchProducts() {
    const OnSaleCollectionRef = collection(dbService, 'product');
    const querySnapshot = await getDocs(OnSaleCollectionRef);
    const OnSaleArray = [];

    querySnapshot.forEach((doc) => {
      const { img, id, title, issale, price, sale } = doc.data();
      if (issale === true) {
        const discountedPrice = price - (price * (sale / 100));
        OnSaleArray.push({
          issale,
          img,
          sale,
          id,
          title,
          price,
          discountedPrice
        });
      }
    });

    OnSaleArray.sort((a, b) => b.sale - a.sale);

    setOnSale(OnSaleArray);

    
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  

  return (
    <div>
      <div className = "shop_page">
            <div className ="nav2">
                <ul>
                    <li><Link to='/Shop/Shop'>원두</Link></li>
                    <li><Link to='/Shop/Tool'>도구</Link></li>
                    <li><Link to='/Shop/NewProduct'>신상</Link></li>
                    <li><Link to='/Shop/OnSale'style={{ color: 'burlywood' }}>세일</Link></li>
                    <li><Link to='/Shop/Event0'>기획전</Link></li>
                </ul>
            </div>  
      </div>

      <MyForm handleChange={handleChange}/>

      <div className='sale_p'>
        <div className='sale_title'>
          핫 세일!!
          <div className="sale_title2">
            이건 꼭 사야해!
          </div>
        </div>
        <br/>
        <br/>


      <ul>
        {OnSale.map((product, index) => (
          <ul>
            <div className='p_id'>
            <React.Fragment key={product.Fragmentid}> {/*제품 id */}
            </React.Fragment>
            </div>
            <div className='p_name'>
            <li>{index + 1}. {product.title} {/* 순번과 제품 이름 출력 */}</li>
            </div>
            <div className="p_all">

            <li>
              <input type="image" className = "sale_img" src={product.img} alt={product.title} /> {/*제품 가격 */}
            </li>
            <div className="pp_price">

            <div className='p_price'>
            <li>가격 : {product.price.toLocaleString()} 원</li>
            </div>
            <div className='p_saleprice'>
            <li>
                      {(
                        product.price - product.price * (product.sale / 100)
                      ).toLocaleString()}{' '}
                      원
                    </li>
            </div>
            </div>
            </div>
  
          </ul>
        ))}
      </ul>
        </div>
    </div>
  );
};

export default OnSale;