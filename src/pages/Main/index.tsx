import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { backUrl } from '../../variable/url';
import { AccessToken } from '../../variable/token';

const Main = () => {
  const [url, setUrl] = useState('');
  const [copyUrl, setCopyUrl] = useState('Shorten URL');
  const copy = async () => {
    await navigator.clipboard.writeText(copyUrl);
    alert('Text copied');
  };
  const urlHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  }, []);
    // const s3Handler = async () => {
    //   await axios.get(`${backUrl}/s3`).then(res => console.log(res));
    // };
  const [toggle, setToggle] = useState(true);
  const toggleState = () => setToggle(!toggle);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post(`${backUrl}/s3/`, {
      target_url: url,
      short_by_words: toggle
    }, {
      withCredentials: true,
      headers: {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        Authorization: `Bearer ${AccessToken}`,
        'Content-Type': 'application/json',
        accept: 'application/json'
      }
    })
    //  data.s3_url!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      .then(json => setCopyUrl(json.data.s3_url))
      .catch(() => window.alert('에러'));
  };
  return (
        <MainContainer>
            <MainDiv>
                <form onSubmit={onSubmit}>
                    <Input name="url" onChange={urlHandler} placeholder="paste here to make shorten your URL"/>&nbsp;
                    <Button id="postUrl" type="submit">Make URL</Button>&nbsp;
                    <Button onClick={toggleState}>{toggle ? 'random_encoding' : 'noun-adj_combination'}</Button>
                </form>
            </MainDiv>
            <ServeDiv>
                <FirstDiv>
                    <Link className="slink">{copyUrl}</Link>
                </FirstDiv>&nbsp;
                <Button onClick={copy}>Ctrl+C</Button>
                <div style={{ width: '100%', height: '50px' }}></div>
            </ServeDiv>
        </MainContainer>
  );
};
const MainContainer = styled.div`
  text-align: center;
  background-color: white;
`;
const MainDiv = styled.div`
  padding-top: 25px;
  padding-bottom: 25px;
  text-align: center;
  background-color: black;
`;
const ServeDiv = styled.div`
  display: inline-block;
  font-weight: 400;
  outline: none;
  position: center;
  background-color: white;
  width: 90%;
  height: 500px;
  margin-top: 25px;
  margin-bottom: 25px;

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
  background-color: inherit;
  color: #2997ff;
  border: 2px solid #2997ff;
  border-radius: 10px;
`;
const FirstDiv = styled.div`
  display: inline-block;
  font-weight: 400;
  outline: none;
  position: center;
  width: 40%;
  height: 50px;
  font-size: 20px;
  margin-top: 50px;
  margin-bottom: 50px;
`;
const Link = styled.div`
  font-weight: 400;
  border-radius: 8px;
  border-color: #1d1d1f;
  border: 0.1rem solid;
  outline: none;
  background-color: #fafafa;
`;
// const Line = styled.div`
//   border-left:thin solid grey;
//   height: 200px;
//   width:1px;
//   float:left;
//   margin-left:20px;
//   margin-right:20px;
// `;
export default Main;
