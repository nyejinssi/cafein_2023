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

const Grinder = () => {
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
            그라인더
        </div>
        <div className="tool_checkbox">
            <label htmlFor="grinder_label1"><input type="checkbox" id="grinder_label1" value="자동"/> 자동</label>
            <label htmlFor="grinder_label2"><input type="checkbox" id="grinder_label2" value="수동"/> 수동</label>
        </div>
    </div>

    <div>
        <div className="tool_content2">
            가격
        </div>
        <div className="tool_checkbox">
            <label htmlFor="price_label1"><input type="checkbox" id="price_label1" value="1만원 ~ 2만원"/> 1만원 ~ 2만원</label>
            <label htmlFor="price_label2"><input type="checkbox" id="price_label2" value="6만원 ~ 8만원"/> 6만원 ~ 8만원</label>
            <label htmlFor="price_label3"><input type="checkbox" id="price_label3" value="25만원 ~ 38만원"/> 25만원 ~ 38만원</label>
            <label htmlFor="price_label4"><input type="checkbox" id="price_label4" value="44만원 ~ 64만원"/> 44만원 ~ 64만원</label>
        </div>
    </div>
    <div>
        <div className="tool_content2">
            브랜드
        </div>
        <div className="tool_checkbox">
            <label htmlFor="brand_label1"><input type="checkbox" id="brand_label1" value="칼리타"/> 칼리타</label>
            <label htmlFor="brand_label2"><input type="checkbox" id="brand_label2" value="드롱기"/> 드롱기</label>
            <label htmlFor="brand_label3"><input type="checkbox" id="brand_label3" value="타임모어"/> 타임모어</label>
            <label htmlFor="brand_label4"><input type="checkbox" id="brand_label4" value="코맥"/> 코맥</label>
            <label htmlFor="brand_label5"><input type="checkbox" id="brand_label5" value="스타벅스"/> 스타벅스</label>
            <label htmlFor="brand_label6"><input type="checkbox" id="brand_label6" value="하리오"/> 하리오</label>
            <label htmlFor="brand_label7"><input type="checkbox" id="brand_label7" value="마리슈타이거"/> 마리슈타이거</label>
            <label htmlFor="brand_label8"><input type="checkbox" id="brand_label8" value="바라짜"/> 바라짜</label>
            <label htmlFor="brand_label9"><input type="checkbox" id="brand_label9" value="빈플러스"/> 빈플러스</label>
            <label htmlFor="brand_label10"><input type="checkbox" id="brand_label10" value="칼딘"/> 칼딘</label>
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

export default Grinder;