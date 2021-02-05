import React from 'react'
import style from './Product_sm.module.css';
import './Global_css.css'
import Image from 'react-bootstrap/Image'
import { Space } from 'antd';
import styled from "styled-components";

let StyledImage = styled(Image)`
background-image: ${(props) => `url(/img/${props.filename})`};
width:${(props) => props.width};
height:${(props) => props.height};
background-repeat: no-repeat;
background-size: contain;
`;

const Product_sm = (props) => {
    return (
        <div style={{position:'inline-block'}}>
            <Space direction="vertical">
                <StyledImage filename={props.filename} width={props.width} height={props.height} />
            </Space>
            <div style={{marginTop:'15px'}}>이케아 스텐드 책상</div>
            <div>1,200원</div>
        </div>
    )
}

export default Product_sm