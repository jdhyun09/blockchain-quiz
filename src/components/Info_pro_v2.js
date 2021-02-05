import React from 'react'
import style from './Info_pro_v2.module.css'

const Info_pro_v2 = () => { 
    return ( 
    <div className={style.box}>
    <img className={style.img} src="https://developer.mozilla.org/static/img/favicon144.png"></img>
      <div className={style.text_box} >
        <div className={style.name} >상품명 </div>
        <div className={style.explain} > 가격 </div>
      </div>
  </div>
    ); 
} 
export default Info_pro_v2;