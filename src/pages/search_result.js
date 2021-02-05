import React from 'react';
import Product_search_result from '../components/Product_search_result';
import Navbar from '../components/Navbar'
import style from './Search_result.module.css';

  class Search_result extends React.Component {
    render() {
      return (
        <div>
          <Navbar/>
          <img className={style.main_img} src="img/search_result.jpg"></img>

        </div>
      );
    }
  }

export default Search_result;