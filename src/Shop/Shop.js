import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Tool from './Tool.js';

import './coffee.css'


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

const Shop = () => {
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
                    <li><Link to='/Shop/Shop' style={{ color: 'burlywood' }}>원두</Link></li>
                    <li><Link to='/Shop/Tool'>도구</Link></li>
                    <li><Link to='/Shop/NewProduct'>신상</Link></li>
                    <li><Link to='/Shop/OnSale'>세일</Link></li>
                    <li><Link to='/Shop/Event0'>기획전</Link></li>
                </ul>
            </div>  
        </div>

        <MyForm handleChange={handleChange}/>
        
        <div className="body_content">
            <div className="coffee_mix">
                <div className="coffee_mix_choice">
                    원두 혼합 유무
                </div>
                <div className="coffee_mix_checkbox">
                    <label htmlFor="coffee_mix_label1">
                        <input type="checkbox" id="coffee_mix_label1" />
                        블렌딩 (2가지 이상의 원두를 혼합)
                    </label>

                    <label htmlFor="coffee_mix_label2">
                        <input type="checkbox" id="coffee_mix_label2" />
                        싱글 오리진 (1가지 원두만 이용)
                    </label>
                </div>
            </div>

            <div className="coffee_taste">
                <div className="coffee_mix_choice">
                    커피 맛(다중 선택 가능)
                </div>
                <div className="coffee_mix_checkbox">
                    <label htmlFor="coffee_taste_label1">
                        <input type="checkbox" id="coffee_taste_label1" />
                        계피
                    </label>

                    <label htmlFor="coffee_taste_label2">
                        <input type="checkbox" id="coffee_taste_label2" />
                        바닐라
                    </label>

                    <label htmlFor="coffee_taste_label3">
                        <input type="checkbox" id="coffee_taste_label3" />
                        브렛퍼스트 블렌드
                    </label>

                    <label htmlFor="coffee_taste_label4">
                        <input type="checkbox" id="coffee_taste_label4" />
                        블루베리
                    </label>

                    <label htmlFor="coffee_taste_label5">
                        <input type="checkbox" id="coffee_taste_label5" />
                        아마레토
                    </label>
                    <br />
                    <label htmlFor="coffee_taste_label6">
                        <input type="checkbox" id="coffee_taste_label6" />
                        아이리시 크림
                    </label>
                    <label htmlFor="coffee_taste_label7">
                        <input type="checkbox" id="coffee_taste_label7" />
                        초콜렛 라즈베리
                    </label>
                    <label htmlFor="coffee_taste_label8">
                        <input type="checkbox" id="coffee_taste_label8" />
                        캐러멜
                    </label>
                    <label htmlFor="coffee_taste_label9">
                        <input type="checkbox" id="coffee_taste_label9" />
                        펌킨 스파이스
                    </label>
                    <label htmlFor="coffee_taste_label10">
                        <input type="checkbox" id="coffee_taste_label10" />
                        헤이즐넛
                    </label>
                    <label htmlFor="coffee_taste_label11">
                        <input type="checkbox" id="coffee_taste_label11" />
                        기타
                    </label>
                </div>
            </div>

            <div className="coffee_grind">
                <div className="coffee_mix_choice">
                    분쇄 타입
                </div>
                <div className="coffee_mix_checkbox">
                    <label htmlFor="coffee_grind_label1">
                        <input type="checkbox" id="coffee_grind_label1" />
                        생두
                    </label>
                    <label htmlFor="coffee_grind_label2">
                        <input type="checkbox" id="coffee_grind_label2" />
                        원두
                    </label>
                    <label htmlFor="coffee_grind_label3">
                        <input type="checkbox" id="coffee_grind_label3" />
                        분쇄커피
                    </label>
                </div>
            </div>

            <div className="coffee_price">
                <div className="coffee_mix_choice">
                    가격
                </div>
                <div className="coffee_mix_checkbox">
                    <label htmlFor="coffee_price_label1">
                        <input type="checkbox" id="coffee_price_label1" />
                        8천원 ~ 1만 2천원
                    </label>

                    <label htmlFor="coffee_price_label2">
                        <input type="checkbox" id="coffee_price_label2" />
                        1만 2천원 ~ 2만원
                    </label>

                    <label htmlFor="coffee_price_label3">
                        <input type="checkbox" id="coffee_price_label3" />
                        2만원 ~ 3만원
                    </label>
                    
                    <label htmlFor="coffee_price_label4">
                        <input type="checkbox" id="coffee_price_label4" />
                        3만원 ~
                    </label>
                </div>
            </div>

            <div className="coffee_caffein">
                <div className="coffee_mix_choice">카페인 유무</div>
                <div className="coffee_mix_checkbox">
                    <label htmlFor="coffee_caffein_label1">
                        <input type="checkbox" id="coffee_caffein_label1" />
                        카페인
                    </label>
                    <label htmlFor="coffee_caffein_label2">
                        <input type="checkbox" id="coffee_caffein_label2" />
                        디카페인
                    </label>
                </div>
            </div>

            <div className="more_button">
                <button onClick={toggleMoreCoffee}  className="more_button" id="more_button" style={{ cursor: 'pointer' }}>
                    더보기
                </button>
            </div>

            <div className="more_coffee" style={{ display: isMoreCoffeeVisible ? 'block' : 'none' }} id="more_coffee">
                <div className="coffee_roasting">
                    <div className="coffee_mix_choice">로스팅 단계</div>
                    <div className="coffee_mix_checkbox">
                        <label htmlFor="coffee_roasting_label1">
                            <input type="checkbox" id="coffee_roasting_label1" />
                            라이트
                        </label>
                        <label htmlFor="coffee_roasting_label2">
                            <input type="checkbox" id="coffee_roasting_label2" />
                            미디엄
                        </label>
                        <label htmlFor="coffee_roasting_label3">
                            <input type="checkbox" id="coffee_roasting_label3" />
                            다크
                        </label>
                    </div>
                </div>

                <div className="coffee_fair_trade">
                    <div className="coffee_mix_choice">공정무역 여부</div>
                    <div className="coffee_mix_checkbox">
                        
                        <label htmlFor="coffee_fair_label1">
                            <input type="checkbox" id="coffee_fair_label1" />
                            공정무역 O
                        </label>

                        <label htmlFor="coffee_fair_label2">
                            <input type="checkbox" id="coffee_fair_label2" />
                            공정무역 X
                        </label>
                    </div>
                </div>

                <div className="coffee_level">
                    <div class="coffee_mix_choice">등급</div>
                    <div className="coffee_mix_checkbox">
                        <label htmlFor="coffee_level_label1">
                            <input type="checkbox" id="coffee_level_label1" /> AA
                        </label>
                        <label htmlFor="coffee_level_label2">
                            <input type="checkbox" id="coffee_level_label2" /> G1
                        </label>
                        <label htmlFor="coffee_level_label3">
                            <input type="checkbox" id="coffee_level_label3" /> G2
                        </label>
                        <label htmlFor="coffee_level_label4">
                            <input type="checkbox" id="coffee_level_label4" /> G3
                        </label>
                        <label htmlFor="coffee_level_label5">
                            <input type="checkbox" id="coffee_level_label5" /> G4
                        </label>
                        <br/> 
                        <label htmlFor="coffee_level_label6">
                            <input type="checkbox" id="coffee_level_label6" /> NY2
                        </label>
                        <label htmlFor="coffee_level_label7">
                            <input type="checkbox" id="coffee_level_label7" /> PB
                        </label>
                        <label htmlFor="coffee_level_label8">
                            <input type="checkbox" id="coffee_level_label8" /> SHB
                        </label>
                        <label htmlFor="coffee_level_label9">
                            <input type="checkbox" id="coffee_level_label9" /> SHG
                        </label>
                        <label htmlFor="coffee_level_label10">
                            <input type="checkbox" id="coffee_level_label10" /> 수프리모
                        </label>
                        <label htmlFor="coffee_level_label11">
                            <input type="checkbox" id="coffee_level_label11" /> 기타
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};


export default Shop;