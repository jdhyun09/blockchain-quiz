import React from 'react';
import Search_bar from '../components/Search_bar';
import Product_search_result from '../components/Product_search_result';

import Header from '../components/Header';

  class Search_result extends React.Component {
    render() {
      return (
        <div>
          <Header/>
          <Search_bar/>
          <Product_search_result/>
          <Product_search_result/>
        </div>
      );
    }
  }

export default Search_result;