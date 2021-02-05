import React from 'react';
import Check_op from '../components/Check_op';
import Info_pro_v2 from '../components/Info_pro_v2';
import { Button } from 'antd';

  class Product_buy extends React.Component {
    render() {
      return (
        <div>
          <h1>물건 대여</h1>
          <hr></hr>
          <div>대여상품 정보</div>
          <Info_pro_v2/>
          <Check_op/>
          <button>물건 대여하기</button>
          <Button type="primary">Primary Button</Button>
        </div>
      );
    }
  }

export default Product_buy;