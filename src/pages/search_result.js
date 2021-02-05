import React from 'react';



class Search_bar extends React.Component {
    render() {
      return (
        <div>
          <input type="text" placeholder="검색어 입력"></input>
          <button>검색</button>
        </div>
      );
    }
  }
  
  class Search_result extends React.Component {
    render() {
      return (
        <div>
          <img></img>
          <div>상품명</div>
          <div>상품설명</div>
        </div>
      );
    }
  }
  