import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const Root = ({store}) => {
    return (
        <BrowserRouter>
            <Route path="/" component={App}/>
        </BrowserRouter>
    );
};

export default Root;