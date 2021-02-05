import React from 'react';
import Info_seller from '../components/Info_seller';
import style from './Info_product.module.css';
import Search_bar from '../components/Search_bar';
const Info_product = () => {
    return(
        <div>
        <Search_bar/>
        <img className={style.main_img} src="https://developer.mozilla.org/static/img/favicon144.png"></img>
        <div>
            <Info_seller/>
        </div>
        <div className={style.pro_exp}>
            물건설명
        </div>
        <button>구매</button>
        </div>
    )
}

export default Info_product