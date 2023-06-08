import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { dbService } from '../fbase';
import './Coffee_machine.js';
import './Shop.js';
import './toolcategory.css';
import { Link } from 'react-router-dom';

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

const Tool = () => {

  const [isMoreCoffeeVisible, setMoreCoffeeVisible] = useState(false);

    const handleChange = (value) => {
        console.log(value);
    };

    const toggleMoreCoffee = () => {
        setMoreCoffeeVisible(!isMoreCoffeeVisible);
    };

  const [Tools, setTools] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const ProductCollectionRef = collection(dbService, 'product');
    const querySnapshot = await getDocs(ProductCollectionRef);
    const ToolArray = [];

    querySnapshot.forEach((doc) => {
      const { img, id, isbean, title } = doc.data();
      if (isbean === false) {
        ToolArray.push({
          img,
          id,
          isbean,
          title,
        });
      }
    });

    setTools(ToolArray);
    console.log('모든 도구 정보:', ToolArray);
  }

  return (
<div className = "shop_page">
            <div className ="nav2">
                <ul>
                    <li><Link to='/Shop/Shop' style={{ color: 'burlywood' }}>원두</Link></li>
                    <li><Link to='/Shop/Tool'>도구</Link></li>
                    <li><Link to='/Shop/NewProduct'>신상</Link></li>
                    <li><Link to='/Shop/OnSale'>세일</Link></li>
                    <li><Link to='/Shop/Event0'>기획전</Link></li>
                </ul>
            </div>
            <MyForm handleChange={handleChange}/>
        <div class="body2_content">
            <div class="tool_content">
                <ul>
                    <li>카테고리</li>
                    <li><a><Link to='/Shop/Coffee_machine'>커피머신</Link></a></li>
                    <li><a><Link to='/Shop/Grinder'>그라인더</Link></a></li>
                    <li><a><Link to='/Shop/Accessory'>액세서리</Link></a></li>
                    <li><a><Link to='/Shop/Drip_coffee'>드립커피</Link></a></li>
                </ul>
            </div>
        </div>
            
      <h2>tool:</h2>
      <ul>
  {Tools.map((product) => (
    <React.Fragment key={product.id}>
      <li>{product.title}</li>
      <li>
        <input type="image" src={product.img} alt={product.title} />
      </li>
    </React.Fragment>
  ))}
</ul>
    </div>
  );
};

export default Tool;
