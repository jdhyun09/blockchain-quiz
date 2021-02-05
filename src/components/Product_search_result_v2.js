import React from 'react'
import style from './Product_search_result_v2.module.css'


const Product_search_result_v2 = () => { 
    return (
        <div className={style.box}>
          <img className={style.img} src="https://developer.mozilla.org/static/img/favicon144.png"></img>
            <div className={style.text_box} >
              <div className={style.name} >상품명 </div>
              <div className={style.price} > 가격 </div>
            </div>
        </div>
      );
} 

export default Product_search_result_v2;

