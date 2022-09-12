import React, { Component } from 'react';
import styled from 'styled-components';

class SignUp extends Component {
  render () {
    return (
            <All>
                <head>
                    <title>회원가입 페이지</title>

                </head>

                <body className="vsc-initialized">
                <div className="wrapper">
                    <div className="title">
                        <h1>회원가입</h1>
                    </div>
                    <form>
                        <div className="email">
                            <input id="email" type="text" placeholder="이메일을 입력해 주세요."/>
                            <div id="emailError" className="error"></div>
                        </div>
                        <div className="name">
                            <input id="name" type="text" placeholder="이름을 입력해 주세요."/>
                            <div id="nameError" className="error"></div>
                        </div>
                        <div className="password">
                            <input id="password" type="password" placeholder="비밀번호를 입력해 주세요."/>
                            <div id="passwordError" className="error"></div>
                        </div>
                        <div className="passwordCheck">
                            <input id="passwordCheck" type="password" placeholder="비밀번호를 다시 입력해 주세요."/>
                            <div id="passwordCheckError" className="error"></div>
                        </div>

                        <div className="line">
                            <hr/>
                        </div>
                        <div className="signUp">
                            <button id="signUpButton" disabled={true}>가입하기</button>
                        </div>
                    </form>
                </div>

                </body>
            </All>
    );
  }
}

const All = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export default SignUp;
