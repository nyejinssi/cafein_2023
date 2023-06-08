import React, { useEffect, useState } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { dbService, authService } from '../fbase'
import { Link } from 'react-router-dom';

import './NewProduct.css'


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

const NewProduct = () => {
  const [nearestProductsIsBean1, setNearestProductsIsBean1] = useState([]);
  const [nearestProductsIsBean0, setNearestProductsIsBean0] = useState([]);

  const handleChange = (value) => {
    console.log(value);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const NewProductCollectionRef = collection(dbService, 'product');
    const querySnapshot = await getDocs(NewProductCollectionRef);
    const NewProductArray = [];

    querySnapshot.forEach((doc) => {
      const { img, date, id, isbean, title } = doc.data();
      NewProductArray.push({
        img,
        date: date && date.toDate(),
        id,
        isbean,
        title,
      });
    });

    console.log('모든 상품 정보:', NewProductArray);

    const now = new Date();

    const nearestProductsIsBean1Array = NewProductArray
      .filter((product) => product.isbean === true && product.date)
      .sort((a, b) => Math.abs(now - a.date) - Math.abs(now - b.date))
      .slice(0, 3);

    console.log('isbean 값이 1인 상품 중 가장 가까운 상품 3개:', nearestProductsIsBean1Array);
    setNearestProductsIsBean1(nearestProductsIsBean1Array);

    const nearestProductsIsBean0Array = NewProductArray
      .filter((product) => product.isbean === false && product.date)
      .sort((a, b) => Math.abs(now - a.date) - Math.abs(now - b.date))
      .slice(0, 3);

    console.log('isbean 값이 0인 상품 중 가장 가까운 상품 3개:', nearestProductsIsBean0Array);
    setNearestProductsIsBean0(nearestProductsIsBean0Array);
  }

  return (
    <div>
      <div className = "shop_page">
        <div className ="nav2">
            <ul>
                <li><Link to='/Shop/Shop'>원두</Link></li>
                <li><Link to='/Shop/Tool'>도구</Link></li>
                <li><Link to='/Shop/NewProduct' style={{ color: 'burlywood' }}>신상</Link></li>
                <li><Link to='/Shop/OnSale'>세일</Link></li>
                <li><Link to='/Shop/Event0'>기획전</Link></li>
            </ul>
        </div>  
      </div>

      <MyForm handleChange={handleChange}/>

      <div className="popular">
        <div className="pop_coffee">
          <b style={{ color: 'red' }}>핫</b> 원두 신상 top3
        </div>

        <div className="pop_coffee_content">
          <ul>
            {nearestProductsIsBean1.map((product, index) => (
              <li key={product.id}>
                {String(index + 1).padStart(2, '0')} {/* 순번을 01 형식으로 출력 */}
                <div className='newp_id'>
                  {/* 제품 id */}
                </div>
                <div className='newp_all'>
                  <input type="image" className="newp_img" src={product.img} alt={product.title} /> {/* 제품 사진 */}
                  <div className='newp_name'>
                    [원산지][원두]
                    <p>{product.title}</p> {/* 제품 이름 */}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="pop_tool">
            <b style={{ color: 'red' }}>핫</b> 도구 신상 top3
          </div>

          <div className="pop_tool_content">
            <ul>
              {nearestProductsIsBean0.map((product, index) => (
                <li key={product.id}>
                  {String(index + 1).padStart(2, '0')} {/* 순번을 01 형식으로 출력 */}
                  <div className='newp_id'>
                    {/* 제품 id */}
                  </div>
                  <div className='newp_all'>
                    <input type="image" className="newp_img" src={product.img} alt={product.title} /> {/* 제품 사진 */}
                    <div className='newp_name'>
                      [원산지][원두]
                      <p>{product.title}</p> {/* 제품 이름 */}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
      </div>
    </div>
  );
};


export default NewProduct;