import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Login, Search_result,Home,Info_product, Product_buy, Pro_reg, User_info } from './pages';
import './App.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';  // 부트스트랩 사용위해 필수

class App extends Component {
  render() {
    return (
      <Router>
        <div className="hi">
          <Route exact path='/Login' component={Login}/>
          <Route path='/Search_result' component={Search_result}/>
          <Route path='/Home' component={Home}/>
          <Route path='/Info_product' component={Info_product}/>
          <Route path='/Product_buy' component={Product_buy}/>
          <Route path='/Pro_reg' component={Pro_reg}/>
          <Route path='/User_info' component={User_info}/>
        </div>
      </Router>
    );
  }
}

export default App;