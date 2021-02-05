import React from 'react'
import style from './Info_seller.module.css'

const Info_seller = () => { 
    return ( 
    <div className={style.info_seller}>
    <img className={style.main_img} src="https://developer.mozilla.org/static/img/favicon144.png"></img>
    <div className={style.inner}>
        <div>
            판매자 이름
        </div>
        <div>
            판매자 정보
        </div>
    </div>
    </div>
    ); 
} 
export default Info_seller;

