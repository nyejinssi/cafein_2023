import { dbService } from '../fbase';
import React, { useEffect, useState } from 'react';
import DaumPostcode from "react-daum-postcode";
import { getFirestore, addDoc, getDocs, collection, query } from "firebase/firestore";

const PopupPostCode = (props) => {
    let [fullAddress, setFullAddress] = useState("");
    let [extraAddress, setExtraAddress] = useState("");
    
    const handlePostCode = (data) => {
        fullAddress = data.address;
        extraAddress = ''; 
        
        if (data.addressType === 'R') {
          if (data.bname !== '') {
            extraAddress += data.bname;
          }

          if (data.buildingName !== '') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
          }
          fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        setFullAddress(fullAddress);
        setExtraAddress(extraAddress);
    }

    const onSubmit = async (event) => { 
        event.preventDefault();
        try {
            const docRef = await addDoc(collection(dbService, "userAddress"), {
                text: fullAddress,
                text2: extraAddress,
                createdAt: Date.now(),
                });
            setFullAddress("");
            setExtraAddress("");
            console.log("Document written with ID: ", docRef.id);
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    const postCodeStyle = {
        display: "block",
        position: "absolute",
        top: '50%',
        left: '50%',
        transform:'translate(-50%,-50%)',
        width: "600px",
        height: "600px",
        padding: "7px",
        border: "2px solid #666"
      };
 
    return(
        <div>
            <DaumPostcode style={postCodeStyle} onComplete={handlePostCode} /> 
            <button type='button' onClick={() => {props.onClose()}} onSubmit = {onSubmit} className='postCode_btn'>입력</button>
        </div>
    )
}
 
export default PopupPostCode;