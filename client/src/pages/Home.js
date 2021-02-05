import React from 'react';
import Search_bar from '../components/Search_bar';
import Recom_prod from '../components/Recom_prod';
import Hot_prod from '../components/Hot_prod';

import style from './Home.module.css';

class Home extends React.Component {
    render() {
      return (
        <div>
          <Search_bar/>
          <img className={style.main_img} src="https://developer.mozilla.org/static/img/favicon144.png"></img>
          <Recom_prod/>
          <hr></hr>
          <Hot_prod/>
        </div>
      );
    }
  }

export default Home;