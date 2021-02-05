import React from 'react';
import style from './Navbar.module.css';
import './Global_css.css'
import { Input, Space, Menu, Dropdown, Divider} from 'antd';
import { Button } from 'react-bootstrap';
import styled from "styled-components";
import { Link } from "react-router-dom";
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

const menu = (
    <Menu className={style.Menu}>
        <div  className={style.al_title}>대여 알림</div>
        <Divider/>
            <div className={style.inner}>
                <div className={style.left}>
                    <div>
                        <div className={style.time}>17:25   </div>
                        <div className={style.title}>대여 요청  </div>
                    </div>
                </div>
                <div className={style.right}>
                    <div className={style.text}> 
                        <strong>tmdals8030</strong>님 께서 <strong>[키다리아저씨 책상]</strong> 해당 품목을 대여하고 싶어 하십니다! <br></br>
                        요청에 응해주세요!
                    </div>
                    <div className={style.link}> 
                        해당 게시글 보러가기
                    </div>
                </div>
            </div>   
        <Divider/>
            <div className={style.inner}>
                <div className={style.left}>
                    <div>
                        <div className={style.time}>17:25   </div>
                        <div className={style.title}>대여 요청  </div>
                    </div>
                </div>
                <div className={style.right}>
                    <div className={style.text}> 
                        <strong>tmdals8030</strong>님 께서 <strong>[키다리아저씨 책상]</strong> 해당 품목을 대여하고 싶어 하십니다! <br></br>
                        요청에 응해주세요!
                    </div>
                    <div className={style.link}> 
                        해당 게시글 보러가기
                    </div>
                </div>
            </div>   
        <Divider/>
    </Menu>
  );
  



 const Navbar = () => {
    return (
        <div className={style.navbar_wrapper}>
        <div className={style.navbar_content}>
            <Link to="/home">
            <img src="/img/main_logo.png" className={style.logo}></img>
            </Link>
            <Space direction="horizontal">
            <Search className={style.search_bar} placeholder="동네이름, 물품명 등을 검색해보세요!" onSearch={onSearch} />
            </Space>
            <Space className={style.buttons}  direction="horizontal">
            <div className={style.use}>이용방법</div>
            <div className={style.use}>이용후기</div>
            </Space>
            <Space direction="horizontal">
            <Link to="/login">
            <StyledButton className={style.log_b} bgcolor='rgb(170, 170, 170)' color='white'>
                로그인
            </StyledButton>
            </Link>
            <StyledButton  className={style.b_b} bgcolor='#FC8046' color='white'>대여알림</StyledButton>
            <Dropdown overlay={menu} placement="bottomCenter" arrow>
                <img className={style.bang}src="img/bang.png"></img>
            </Dropdown>
            </Space>
        </div>
        </div>
    )
}

export default Navbar
