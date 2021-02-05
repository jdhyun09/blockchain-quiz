import React from 'react';
import style from './Info_product.module.css';
import { PageHeader, Menu, Dropdown, Button, Tag, Typography, Row, Divider } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import Navbar from '../components/Navbar';
const { Paragraph } = Typography;







const IconLink = ({ src, text }) => (
  <a className="example-link">
    <img className="example-link-icon" src={src} alt={text} />
    {text}
  </a>
);

const content = (
  <>
    <Paragraph>
        몇달 안쓰고 올립니다.
        다들 많이 구매해주세요.
    </Paragraph>
  </>
);

const Content = ({ children, extraContent }) => (
  <Row>
    <div style={{ flex: 1 }}>{children}</div>
    <div className="image">{extraContent}</div>
  </Row>
);



class Info_product extends React.Component {
    render(){
        return(
            <>
            <Navbar/>
            <div>
            
            <div className={style.inner}>
                <img className={style.main_img} src="https://developer.mozilla.org/static/img/favicon144.png"></img>
                <Divider/>    
                    <PageHeader
                    title="김승민"
                    subTitle="대여기간: 최대 120일"
                    tags={<Tag color="blue">판매중</Tag>}
                    extra={[
                    <Button key="3"  type="primary" danger>대여하기 </Button>,
                    <Button key="1" type="primary">
                        추천
                    </Button>
                    ]}  
                >
                    <Content>
                    {content}
                    </Content>
                </PageHeader>
            </div>
            <Divider/>
            <button>구매</button>
            </div>
        </>
        )
    }
}

export default Info_product