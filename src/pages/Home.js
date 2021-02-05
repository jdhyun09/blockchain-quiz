import React from 'react';
import Search_bar from '../components/Search_bar';
import Recom_prod from '../components/Recom_prod';
import Hot_prod from '../components/Hot_prod';
import Navbar from '../components/Navbar'

import style from './Home.module.css';

class Home extends React.Component {
    render() {
      return (
        <div>
          <Navbar/>
          <img className={style.main_img} src="img/main.jpg" usemap="#test"></img>
          <map name="test"  id="test">
          <area shape="rect" coords="0,0,100,100" href="https://www.naver.com/"/>
          </map>
        </div>
      );
    }
  }

export default Home;