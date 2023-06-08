import React, { useEffect, useState } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { dbService, authService } from '../fbase'
import { Link } from 'react-router-dom';

const NewProduct = () => {
  const [nearestProductsIsBean1, setNearestProductsIsBean1] = useState([]);
  const [nearestProductsIsBean0, setNearestProductsIsBean0] = useState([]);

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
                    <li><Link to='/Shop/Shop' style={{ color: 'burlywood' }}>원두</Link></li>
                    <li><Link to='/Shop/Tool'>도구</Link></li>
                    <li><Link to='/Shop/NewProduct'>신상</Link></li>
                    <li><Link to='/Shop/OnSale'>세일</Link></li>
                    <li><Link to='/Shop/Event0'>기획전</Link></li>
                </ul>
            </div>
            
        </div>

      <h2>isbean 값이 1인 상품 중 가장 가까운 상품 3개:</h2>
  <ul>
  {nearestProductsIsBean1.map((product) => (
    <React.Fragment key={product.id}>
      <li>{product.title}</li>
      <li>
        <input type="image" src={product.img} alt={product.title} />
      </li>
    </React.Fragment>
  ))}
</ul>

<h2>isbean 값이 0인 상품 중 가장 가까운 상품 3개:</h2>
<ul>
  {nearestProductsIsBean0.map((product) => (
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

export default NewProduct;
