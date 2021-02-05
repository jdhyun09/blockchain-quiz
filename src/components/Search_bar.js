import React from 'react'
import style from './Search_bar.module.css'

import { Button } from 'antd';

const Search_bar = () => { 
    return (
        <div>
          <header>
            <div className={style.inner}>
              <img src=""></img>

              <Button type="primary">로그인</Button>
              <Button type="primary" danger>회원가입</Button>

              <Button type="text" >이용방법</Button>
              <Button type="text">이용후기</Button>

            </div>
          </header>
          
        </div>
      );
} 
export default Search_bar;

