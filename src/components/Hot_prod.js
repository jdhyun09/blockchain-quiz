import React from 'react'
import Product_search_result_v2 from './Product_search_result_v2';
import style from './Hot_prod.module.css'
class Hot_prod extends React.Component {
    render() {
      return (
        <div>
          <div className={style.text}>지금 가장 핫한 상품</div>
          <div className={style.hot_pro}>
            <Product_search_result_v2/>
            <Product_search_result_v2/>
            <Product_search_result_v2/>
            <Product_search_result_v2/>
          </div>
        </div>
      );
    }
  }


  export default Hot_prod;