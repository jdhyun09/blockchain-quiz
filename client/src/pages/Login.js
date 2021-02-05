import React from 'react';
import style from './Login.module.css'
import {  Input, Divider, Upload, message, Button } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import Navbar from '../components/Navbar'

const { Dragger } = Upload;

const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const Login = () => {
    return(
          <>
              <Navbar />
                <div className={style.Inner_login}>
                  <h1><strong>로그인</strong></h1>
                  <Divider/>
                  <div>
                  <div className={style.txt}>지갑 파일</div>

                  <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                  </Dragger>
                  </div>
                  <Divider/>
                  <div className={style.section}>
                    <div className={style.txt}>비밀번호</div>
                    <Input.Password placeholder="input password" />
                  </div>
                <div className={style.button_section}>
                <Button className={style.summit_button} type="primary" size="large" danger>로그인</Button>
                </div>
              </div>
                
          </>
          );
    }


export default Login;