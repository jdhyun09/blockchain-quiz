import React from 'react'
import Product_search_result_v2 from './Product_search_result_v2';
import style from './Recom_prod.module.css'
class Recom_prod extends React.Component {
    render() {
      return (
        <div>
          <div className={style.text}>이상품 어때요?</div>
          <div className={style.recom_pro}>
            <Product_search_result_v2/>
            <Product_search_result_v2/>
            <Product_search_result_v2/>
            <Product_search_result_v2/>
          </div>
        </div>
      );
    }
  }

export default Recom_prod;