import React, { useState } from 'react';
import './tool.css'
import './toolcategory.css'
import {Link} from 'react-router-dom';

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

const Accessory = () => {
    const [isMoreCoffeeVisible, setMoreCoffeeVisible] = useState(false);

    const handleChange = (value) => {
        console.log(value);
    };

    const toggleMoreCoffee = () => {
        setMoreCoffeeVisible(!isMoreCoffeeVisible);
    };

    return (
    <>
        <div className = "shop_page">
            <div className ="nav2">
                <ul>
                <li><a><Link to='/Shop/Shop'>원두</Link></a></li>
                    <li><a><Link to ='/Shop/Tool' style={{ color: 'burlywood'}}>도구</Link></a></li>
                    <li><a href="new_product.html">신상</a></li>
                    <li><a href="sale.html">세일</a></li>
                    <li><a><Link to='/Shop/Event0'>기획전</Link></a></li>
                </ul>
            </div>
            
        </div>

        <MyForm handleChange={handleChange}/>

        <div className="body2_content">
            <div className="tool_content">
                <ul>
                    <li>카테고리</li>
                    <li><a><Link to='/Shop/Coffee_machine'>커피머신</Link></a></li>
                    <li><a><Link to='/Shop/Grinder'>그라인더</Link></a></li>
                    <li><a><Link to='/Shop/Accessory'>액세서리</Link></a></li>
                    <li><a><Link to='/Shop/Drip_coffee'>드립커피</Link></a></li>
                </ul>
            </div>
        </div>

        <div className="body3_content">
    <div>
        <div className="tool_content2">
            액세서리
        </div>
        <div className="tool_checkbox">
            <label htmlFor="accessory_label1"><input type="checkbox" id="accessory_label1" value="템퍼" /> 템퍼</label>
            <label htmlFor="accessory_label2"><input type="checkbox" id="accessory_label2" value="계량스푼" /> 계량스푼</label>
            <label htmlFor="accessory_label3"><input type="checkbox" id="accessory_label3" value="넛박스" /> 넛박스</label>
            <label htmlFor="accessory_label4"><input type="checkbox" id="accessory_label4" value="디스트리뷰터" /> 디스트리뷰터</label>
        </div>
    </div>

    <div>
        <div className="tool_content2">
            가격
        </div>
        <div className="tool_checkbox">
            <label htmlFor="price_label1"><input type="checkbox" id="price_label1" value="1만원 ~ 2만원" /> 1만원 ~ 2만원</label>
            <label htmlFor="price_label2"><input type="checkbox" id="price_label2" value="4만원 ~ 6만원" /> 4만원 ~ 6만원</label>
            <label htmlFor="price_label3"><input type="checkbox" id="price_label3" value="6만원 ~ 10만원" /> 6만원 ~ 10만원</label>
            <label htmlFor="price_label4"><input type="checkbox" id="price_label4" value="10만원 ~ 18만원" /> 10만원 ~ 18만원</label>
            <label htmlFor="price_label5"><input type="checkbox" id="price_label5" value="16만원 ~ 34만원" /> 16만원 ~ 34만원</label>
        </div>
    </div>
    <div>
        <div className="tool_content2">
            브랜드
        </div>
        <div className="tool_checkbox">
            <label htmlFor="brand_label1"><input type="checkbox" id="brand_label1" value="풀만" /> 풀만</label>
            <label htmlFor="brand_label2"><input type="checkbox" id="brand_label2" value="CBSC" /> CBSC</label>
            <label htmlFor="brand_label3"><input type="checkbox" id="brand_label3" value="카페클럽" /> 카페클럽</label>
            <label htmlFor="brand_label4"><input type="checkbox" id="brand_label4" value="칼딘" /> 칼딘</label>
            <label htmlFor="brand_label5"><input type="checkbox" id="brand_label5" value="칼리타" /> 칼리타</label>
            <label htmlFor="brand_label6"><input type="checkbox" id="brand_label6" value="이케아" /> 이케아</label>
            <label htmlFor="brand_label7"><input type="checkbox" id="brand_label7" value="UNKNOWN" /> UNKNOWN</label>
            <label htmlFor="brand_label8"><input type="checkbox" id="brand_label8" value="COVING" /> COVING</label>
            <label htmlFor="brand_label9"><input type="checkbox" id="brand_label9" value="빈프로" /> 빈프로</label>
            <label htmlFor="brand_label10"><input type="checkbox" id="brand_label10" value="빈플랜트" /> 빈플랜트</label>
        </div>
    </div>
    <div className="coffee_product_list">
        <h1>상품 리스트</h1>
        <div className="product-list" id="productList"></div>
    </div>
</div>


    </>
    )
};

export default Accessory;