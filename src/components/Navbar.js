import React from 'react';
import style from './Navbar.module.css';
import './Global_css.css'
import { Input, Space } from 'antd';
import { Button } from 'react-bootstrap';
import styled from "styled-components";

const { Search } = Input;
// 나중에 검색 이벤트 바인딩
const onSearch = value => console.log(value);

let StyledButton = styled(Button)`
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.color};
  border: none;
  border-radius: 5px;
  width:90px;
`;

 const Navbar = () => {
    return (

        <div className={style.navbar_wrapper}>
        <div className={style.navbar_content}>
            <img src="/img/main_logo.png" className={style.logo}></img>
            <Space direction="horizontal">
            <Search className={style.search_bar} placeholder="동네이름, 물품명 등을 검색해보세요!" onSearch={onSearch} />
            </Space>
            <Space direction="horizontal">
            <span className={style.use}>이용방법</span>
            <span className={style.use}>이용후기</span>
            </Space>
            <Space direction="horizontal">
            <StyledButton bgcolor='rgb(170, 170, 170)' color='white'>
                로그인
            </StyledButton>
            <StyledButton bgcolor='#FC8046' color='white'>회원가입</StyledButton>
            </Space>
        </div>
        </div>
    )
}

export default Navbar
