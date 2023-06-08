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

const Coffee_machine = () => {
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
            <div className="coffe_machine1">
                <div className="tool_content2">
                    커피머신
                </div>
                <div className="tool_checkbox">
                    <label htmlFor="coffee_machine_label1">
                        <input type="checkbox" id="coffee_machine_label1" value="에스프레소 머신"/>
                        에스프레소 머신
                    </label>
                    <label htmlFor="coffee_machine_label2">
                        <input type="checkbox" id="coffee_machine_label2" value="캡슐 커피머신"/> 캡슐 커피머신
                    </label>
                </div>
            </div>

            <div className="tool_content2">
                용도
            </div>
                <div className="tool_checkbox">
                    <label htmlFor="use_label1"><input type="checkbox" id="use_label1" value="가정용"/> 가정용</label>
                    <label htmlFor="use_label2"><input type="checkbox" id="use_label2" value="업소용"/> 업소용</label>
                </div>

            <div className="tool_content2">
                가격
            </div>
                <div className="tool_checkbox">
                    <label htmlFor="price_label1"><input type="checkbox" id="price_label1" value="20만원이하"/> 20만원이하</label>
                    <label htmlFor="price_label2"><input type="checkbox" id="price_label2" value="20만원 ~ 50만원"/> 20만원 ~ 50만원</label>
                    <label htmlFor="price_label3"><input type="checkbox" id="price_label3" value="50만원 ~ 100만원"/> 50만원 ~ 100만원</label>
                    <label htmlFor="price_label4"><input type="checkbox" id="price_label4" value="100만원이상"/> 100만원이상</label>
                </div>

            <div className="tool_content2">
                조작방식
            </div>
                <div className="tool_checkbox">
                    <label htmlFor="operation_method_label1"><input type="checkbox" id="operation_method_label1" value="전자동"/> 전자동</label>
                    <label htmlFor="operation_method_label2"><input type="checkbox" id="operation_method_label2" value="반자동"/> 반자동</label>
                    <label htmlFor="operation_method_label3"><input type="checkbox" id="operation_method_label3" value="수동식"/> 수동식</label>
                    <label htmlFor="operation_method_label4"><input type="checkbox" id="operation_method_label4" value="전동식"/> 전동식</label>
                </div>

            <div className="tool_content2">
                브랜드
            </div>
                <div className="tool_checkbox">
                    <label htmlFor="brand_label1"><input type="checkbox" id="brand_label1" value="네스프레소"/> 네스프레소</label>
                    <label htmlFor="brand_label2"><input type="checkbox" id="brand_label2" value="필립스"/> 필립스</label>
                    <label htmlFor="brand_label3"><input type="checkbox" id="brand_label3" value="드롱기"/> 드롱기</label>
                    <label htmlFor="brand_label4"><input type="checkbox" id="brand_label4" value="플랜잇"/> 플랜잇</label>
                    <label htmlFor="brand_label5"><input type="checkbox" id="brand_label5" value="브레빌"/> 브레빌</label>
                    <label htmlFor="brand_label6"><input type="checkbox" id="brand_label6" value="테팔"/> 테팔</label>
                    <label htmlFor="brand_label7"><input type="checkbox" id="brand_label7" value="밀리타"/> 밀리타</label>
                    <label htmlFor="brand_label8"><input type="checkbox" id="brand_label8" value="유라"/> 유라</label>
                    <label htmlFor="brand_label9"><input type="checkbox" id="brand_label9" value="가찌아"/> 가찌아</label>
                    <label htmlFor="brand_label10"><input type="checkbox" id="brand_label10" value="EL ROCIO"/> EL ROCIO</label>
                </div>
        </div>

    </>
    )
};

export default Coffee_machine;