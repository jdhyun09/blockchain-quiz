import React from 'react';
import { Input, Tooltip, Divider, Select, Button, DatePicker, Upload, Modal} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import style from './Pro_reg.module.css'
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
const { TextArea } = Input;
const { Option } = Select;
const { RangePicker } = DatePicker;


function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

 
  class  Pro_reg extends React.Component {

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

              <h1><strong className={style.title} >상품등록</strong></h1>
              <Divider />
              <div className={style.section}>
                <div className={style.txt}>제목</div>
                <Input placeholder="제목을 입력해주세요" />
              </div>
              <Divider />

              <div className={style.section}>
                <div className={style.txt} >카테고리</div>
                <div>
                  <Select defaultValue="전공책" style={{ width: 220 }}>
                    <Option value="교양책">Jack</Option>
                    <Option value="기타">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </div>
              </div>
              <Divider />
              

              <div className={style.section}>
                <div className={style.txt}>예치금 기간 설정</div>
                <RangePicker />
              </div>
              <Divider />

              <div className={style.section}>
                <div className={style.txt} >가격</div>
                <Input prefix="" suffix="Clay" />
              </div>
              <Divider />

              <div className={style.section}>
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                onPreview={this.handlePreview}
                onChange={this.handleChange}
              >
                {uploadButton}
              </Upload>
              <Modal
                visible={previewVisible}
                title={previewTitle}
                footer={null}
                onCancel={this.handleCancel}
              >
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
              </Modal>
              </div>
              <Divider />

              <div className={style.section}>
                <TextArea rows={4}/>
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

export default Pro_reg;