import React from 'react';
import style from './Login.module.css'
const Login = () => {
    return(
                <div class="inner_login">
                  
                  <h1 class="app_name">서비스 이름</h1>
                  <img src="https://developer.mozilla.org/static/img/favicon144.png"></img>
                  <div class="login_tistory">
                      <form method="post" id="authForm" action="https://www.tistory.com/auth/login">
                          <input type="hidden" name="redirectUrl" value="https://blogpack.tistory.com/manage"/>
                          <fieldset>
                            <legend class="screen_out">로그인 정보 입력폼</legend>
                            <div class="box_login">
                              <div class="inp_text">
                                <label for="login_adress" class="screen_out">주소</label>
                                <input type="email" id="loginId" name="loginId" placeholder="Adress" />
                              </div>
                            </div>
                            <button type="submit" class="btn_login"  disabled>로그인</button>
                            <div class="login_append">
                                <div class="inp_chk"> 
                                  <input type="checkbox" id="keepLogin" class="inp_radio"  name="keepLogin"/>
                                  <label for="keepLogin" class="lab_g">
                                    <span class="img_top ico_check"></span>
                                    <span class="txt_lab">로그인 상태 유지</span>
                                  </label>
                                </div>
                            </div>  
                          </fieldset>
                      </form>
                  </div>
                </div>
              );
    }


export default Login;