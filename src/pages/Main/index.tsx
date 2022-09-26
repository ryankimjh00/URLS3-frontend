import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { backUrl } from '../../variable/url';

const Main = () => {
  const [url, setUrl] = useState('');

  const urlHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  }, []);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post(`${backUrl}/s3`, {
      url
    }).catch(() => window.alert('로그인에러'));
  };
  return (

        <MainContainer>
            <form onSubmit={onSubmit}>
                <Input name="url" onChange={urlHandler} placeholder="Shorten your link" />
                <Button id="postUrl" type="submit">S3</Button>
            </form>
            <div>
                <></>
            </div>
        </MainContainer>
  );
};
const MainContainer = styled.div`
  padding-top: 25px;
  padding-bottom: 25px;
  text-align: center;
  background-color: black;
`;
const Input = styled.input`
  display: inline-block;
  font-weight: 400;
  width: 50%;
  font-size: 20px;
  background-color: #1d1d1f;
  border-radius: 8px;
  border: 0;
  color: white;
  outline: none;
`;
const Button = styled.button`
  display: inline-block;
  box-sizing: content-box;
  font-size: 20px;
  background-color: black;
  color: #2997ff;
  border: 0;
`;
export default Main;
