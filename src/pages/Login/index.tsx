import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { backUrl } from '../../variable/url';
import { getCookie, setCookie } from '../../variable/token';

const LogIn = () => {
  const [Username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);
  const onChangeUsername = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  }, []);
  const login = async () => {
    await axios.post(`${backUrl}/login/`, {
      username: Username,
      password

    })
      .then((res) => {
        setCookie('LoginToken', res.data);
        location.replace('/main');
      }).catch(() => window.alert('로그인에러'));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login().then(res => { console.log(res); }).catch(err => { console.log(err); });
  };
  return (
      <Container>
        <head>
          <title>로그인 페이지</title>
        </head>

        <body className="vsc-initialized">
        <div className="wrapper">
          <div className="title">
            <h1>로그인</h1>
          </div>
          <form onSubmit={onSubmit}>
            <div className="Username">
              <input id="Username" type="text" value={Username} onChange={onChangeUsername} placeholder="이름을 입력해 주세요."/>
              <div id="nameError" className="error"></div>
            </div>
            <div className="password">
              <input id="password" type="password" value={password} onChange={onChangePassword} placeholder="비밀번호를 입력해 주세요."/>
              <div id="passwordError" className="error"></div>
            </div>

            <div className="line">
              <hr/>
            </div>

            {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
            <button id="signUpButton" type="submit">로그인</button>

          </form>

        </div>

        </body>
      </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
export default LogIn;
