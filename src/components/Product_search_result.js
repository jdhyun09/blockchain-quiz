import React from 'react'
import style from './Product_search_result.module.css'
import { Divider } from 'antd';

//import { Comment, Tooltip, List } from 'antd';
import moment from 'moment';


const Product_search_result = () => { 


    return (
        <div className={style.box}>
        <img src="img/coin.png"></img>
        <Divider type="vertical" />
        <div>제품명</div> 
        <Divider type="vertical" />
        <div>대여 기간</div>       
        </div>
      );
} 
export default Product_search_result;

