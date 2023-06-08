import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className='myPageAccount'>
                <h2>계정 관리</h2>
                <div className="myPageAccountBackground">
                    <table>
                        <tr>
                        <td>
                            <h4 style={{paddingLeft: "10%"}}>계정 정보</h4></td>
                        <td>
                        <Link to="/MyPage/Account/MyAd/*"> <button className='myPageAccountMNprofileButton'>수정</button></Link> {/*link 오류 */} 
                        </td></tr>
                        <tr>
                            <td><h4 style={{paddingLeft: "10%"}}>비밀번호</h4></td>
                            <td><Link to="/MyPage/Account/ChangePassword/*"><button className='myPageAccountMNprofileButton'>변경</button></Link></td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Home;
