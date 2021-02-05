import React from 'react';
import { Input, Tooltip, Divider, Select, Button, DatePicker, Upload, Modal,  Descriptions, Badge} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import style from './User_info.module.css'
import Product_search_result from '../components/Product_search_result';
import Navbar from '../components/Navbar';
const { Option } = Select;


function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

 
  class User_info extends React.Component {

    state = {
      previewVisible: false,
      previewImage: '',
      previewTitle: '',
      fileList: [
      ],
    };
  
    handleCancel = () => this.setState({ previewVisible: false });
  
    handlePreview = async file => {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
  
      this.setState({
        previewImage: file.url || file.preview,
        previewVisible: true,
        previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
      });
    };
  
    handleChange = ({ fileList }) => this.setState({ fileList });
  
    render() {
      const { previewVisible, previewImage, fileList, previewTitle } = this.state;
      const uploadButton = (
        <div>
          <PlusOutlined />
          <div style={{ marginTop: 8 }}>Upload</div>
        </div>
      );
        let profile_preview = null;
        if(this.state.file !== ''){
          profile_preview = <img className='profile_preview' src={this.state.previewURL}></img>
        }
        return (
          <>
           <Navbar/>
          <div className={style.inner}>
              <h1><strong>개인정보</strong></h1>
              <Divider />
              <div className={style.section}>
                <div className={style.txt}>사용자 지갑 주소</div>
                <div className={style.adress}>1234567890 </div>
              </div>
              <Divider />

              <div className={style.section}>
                <div >현재 보유 코인 </div>
                <div className={style.money}>3533 clay</div>
              </div>
              <Divider />
              

              <div className={style.section}>
                <div className={style.txt}>대여 받은 물품</div>
                <div className={style.Products}>
                  <Product_search_result/>
                  <Product_search_result/>
                </div>
              </div>
              <Divider />

              <div className={style.section}>
                <div className={style.txt} >대여 해준 물품</div>
                <Product_search_result/>
                
              </div>
              <Divider />
              
              <div className={style.button_section}>
                <Button className={style.summit_button} type="primary" size="large" danger>저장하기</Button>
              </div>
              </div>
            </>
          );
    }
  }

export default User_info;






