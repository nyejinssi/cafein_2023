import React, { useState } from 'react';
import Event0 from './Event0.js';
import Event1 from './Event1.js';
import {Link} from 'react-router-dom';
import event1 from './img/event1.jpg'
import event2 from './img/event2.jpg'
import event3 from './img/event3.jpg'
import event4 from './img/event4.jpg'
import './coffee.css'
import './event.css'


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

const Event_page = () => {

    const handleChange = (value) => {
        console.log(value);
    };

    return (
        <>
       <div className = "shop_page">
            <div className ="nav2">
                <ul>
                    <li><Link to='/Shop/Shop'>원두</Link></li>
                    <li><Link to='/Shop/Tool'>도구</Link></li>
                    <li><Link to='/Shop/NewProduct'>신상</Link></li>
                    <li><Link to='/Shop/OnSale'>세일</Link></li>
                    <li><Link to='/Shop/Event0' style={{ color: 'burlywood' }}>기획전</Link></li>
                </ul>
            </div>
            
        </div>

        <MyForm handleChange={handleChange}/>

        <div className="title_plan">
        <span className="banner_title">
            Weekly Special<br/>
            <span className="title_content">
                꼭 갖고 싶은 그 상품들! 다양한 혜택까지!
            </span>
        </span>
        </div>

        <div className="event_banner">
            <div className="weekly_special">
                <div className="weekly_special_banner">
                    <div className="event_1">
                        <Link to='/Shop/Event1'>
                            <img src={event1} ></img>
                        </Link>
                    </div>
                    <div className="event_2">
                        <Link to='/Shop/Event2'>
                            <img src={event2} ></img>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="ongoing_event">
                <span className="ongoing_title">
                    지금 진행 중인 행사예요
                </span>
            </div>
        </div>
        <div className="ongoing_special_banner">
            <div className="event_3">
                <Link to='/Shop/Event3'>
                    <img src={event3} ></img>
                </Link>
            </div>
            <div className="event_4">
                <Link to='/Shop/Event4'>
                    <img src={event4} ></img>
                </Link>
            </div>
        </div>

        </>  
    );
};

export default Event_page;