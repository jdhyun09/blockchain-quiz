import React from 'react'
import style from './Search_bar.module.css'
const Search_bar = () => { 
    return (
        <div>
          <header>
            <div className={style.inner}>
              <h1>블록빌리지</h1>
              <input type="text" placeholder="검색어를 입력해주세요~!"></input>
              <button>검색</button>
              
              <button>이용방법</button>
              <button>이용후기</button>
              <button>로그인</button>
              <button>회원가입</button>
            </div>
          </header>
          
        </div>
      );
} 
export default Search_bar;

