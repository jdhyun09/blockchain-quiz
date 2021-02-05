import React from 'react'
import Product_search_result_v2 from './Product_search_result_v2';
import Product_sm from './Product_sm'
import style from './Recom_prod.module.css'
class Recom_prod extends React.Component {
    render() {
      return (
        <div>
          <div className={style.text}>이상품 어때요?</div>
          <div className={style.recom_pro}>
            <Product_sm
              filename="camera.png"
              width="251px"
              height="251px"
            />
            <Product_sm
              filename="bitcoin.png"
              width="251px"
              height="251px"
            />
            <Product_sm
              filename="thumb.png"
              width="251px"
              height="251px"
            />
            <Product_sm
              filename="camera.png"
              width="251px"
              height="251px"
            />
            {/* <Product_search_result_v2/>
            <Product_search_result_v2/>
            <Product_search_result_v2/>
            <Product_search_result_v2/> */}
          </div>
        </div>
      );
    }
  }

export default Recom_prod;