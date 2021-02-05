import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Login, Search_result,Home,Info_product } from './pages';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="hi">
          <Route exact path='/Login' component={Login}/>
          <Route path='/Search_result' component={Search_result}/>
          <Route path='/Home' component={Home}/>
          <Route path='/Info_product' component={Info_product}/>
        </div>
      </Router>
    );
  }
}

export default App;