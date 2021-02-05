import React from 'react';

  class  Pro_reg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          file : '',
          previewURL : ''
        }
      }

    handleFileOnChange = (event) => {
        event.preventDefault();
        let reader = new FileReader();
        let file = event.target.files[0];
        reader.onloadend = () => {
          this.setState({
            file : file,
            previewURL : reader.result
          })
        }
        reader.readAsDataURL(file);
      }

    render() {
        let profile_preview = null;
        if(this.state.file !== ''){
          profile_preview = <img className='profile_preview' src={this.state.previewURL}></img>
        }
        return (
            <div>
              <h1>상품등록</h1>
              <hr></hr>
              <div>제목</div>
              <input type="text" name="title" value="제목"/>
              <div>카테고리</div>
                <select name="Kategorie">
                        <option value="">카테고리</option>
                        <option value="1" selected="selected">전공책</option>
                        <option value="2" >교양책</option>
                </select>
              <hr></hr>
              <div>예치금 기간 설정</div>
              <input type="date"></input>
              <div>가격</div>
              <input type="number"></input>
              <hr></hr>
              <input type='file' 
                accept='image/jpg,impge/png,image/jpeg,image/gif' 
                name='profile_img' 
                onChange={this.handleFileOnChange}>
              </input>
              {profile_preview}
              <hr></hr>
              <textarea name="content" cols="40" rows="8" ></textarea>
              <hr></hr>
              <button>저장하기</button>
            </div>
          );
    }
  }

export default Pro_reg;