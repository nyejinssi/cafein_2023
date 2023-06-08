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

const Drip_coffee = () => {
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
                드립커피
            </div>

            <div className="tool_checkbox">
                <label htmlFor="drip_coffee_label1"><input type="checkbox" id="drip_coffee_label1" value="필터"/> 필터</label>
                <label htmlFor="drip_coffee_label2"><input type="checkbox" id="drip_coffee_label2" value="드립포트"/> 드립포트</label>
                <label htmlFor="drip_coffee_label3"><input type="checkbox" id="drip_coffee_label3" value="드립서버"/> 드립서버</label>
                <label htmlFor="drip_coffee_label4"><input type="checkbox" id="drip_coffee_label4" value="드립백 필터"/> 드립백 필터</label>
                <label htmlFor="drip_coffee_label5"><input type="checkbox" id="drip_coffee_label5" value="드리퍼"/> 드리퍼</label>
            </div>
        </div>

        <div>
            <div className="tool_content2">
                가격
            </div>
            <div className="tool_checkbox">
                <label htmlFor="price_label1"><input type="checkbox" id="price_label1" value="1만원이하"/> 1만원이하</label>
                <label htmlFor="price_label2"><input type="checkbox" id="price_label2" value="1만원 ~ 2만원"/> 1만원 ~ 2만원</label>
                <label htmlFor="price_label3"><input type="checkbox" id="price_label3" value="2만원 ~ 5만원"/> 2만원 ~ 5만원</label>
                <label htmlFor="price_label4"><input type="checkbox" id="price_label4" value="5만원이상"/> 5만원이상</label>
            </div>
        </div>
        <div>
            <div className="tool_content2">
                브랜드
            </div>
            <div className="tool_checkbox">
                <label htmlFor="brand_label1"><input type="checkbox" id="brand_label1" value="하리오"/> 하리오</label>
                <label htmlFor="brand_label2"><input type="checkbox" id="brand_label2" value="칼리타"/> 칼리타</label>
                <label htmlFor="brand_label3"><input type="checkbox" id="brand_label3" value="아돌프"/> 아돌프</label>
                <label htmlFor="brand_label4"><input type="checkbox" id="brand_label4" value="다카히로"/> 다카히로</label>
                <label htmlFor="brand_label5"><input type="checkbox" id="brand_label5" value="킨토"/> 킨토</label>
                <label htmlFor="brand_label6"><input type="checkbox" id="brand_label6" value="빈플러스"/> 빈플러스</label>
                <label htmlFor="brand_label7"><input type="checkbox" id="brand_label7" value="에콜그린"/> 에콜그린</label>
                <label htmlFor="brand_label8"><input type="checkbox" id="brand_label8" value="제임스티스푼"/> 제임스티스푼</label>
                <label htmlFor="brand_label9"><input type="checkbox" id="brand_label9" value="고노"/> 고노</label>
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

export default Drip_coffee;