import React from 'react';
import styled from 'styled-components';
import QR from 'qrcode.react';

const Main = () => {
  return (
        <MainContainer>
            <MainDiv>
                <form>
                    <Input name="url" placeholder="Shorten your link" />
                    <Button type="submit">S3</Button>
                </form>
            </MainDiv>
                <FirstDiv>
                    <Link id="slink">copy link</Link>
                </FirstDiv>
                <Button onClick={async () => await navigator.clipboard.writeText('copy')}>copy</Button>
            <Br/>
                <SecondDiv>
                    <SDiv>
                        <QR
                            id="qr-gen"
                            size={120}
                            value={'https://github.com/Team-Discipline'}
                            includeMargin={false}
                            fgColor={'black'}
                            style={{ margin: '15%' }}
                         />
                    </SDiv>
                    <SDiv>
                        <Img src={ require('../../image/instagram.png') }/>
                    </SDiv>
                    <SDiv>
                        <Img src={ require('../../image/recent.png') }/>
                    </SDiv>
                    <SDiv>
                        <Img src={ require('../../image/analytics.png') }/>
                    </SDiv>
                    <SDiv>
                        <Img src={ require('../../image/technical-support.png') }/>
                    </SDiv>
                </SecondDiv>
                <ThirdDiv>
                    <TDiv>
                        QR
                    </TDiv>
                    <TDiv>
                        SNS
                    </TDiv>
                    <TDiv>
                        Recent
                    </TDiv>
                    <TDiv>
                        Analysis
                    </TDiv>
                    <TDiv>
                        Technology
                    </TDiv>
                </ThirdDiv>
            <Br/>
            <div style={{ width: '100%', height: '50px' }}></div>
        </MainContainer>
  );
};
const MainContainer = styled.div`
  text-align: center;
  background-color:white;
`;
const MainDiv = styled.div`
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
  background-color: inherit;
  color: #2997ff;
  border: 0;
`;
const FirstDiv = styled.div`
  display: inline-block;
  font-weight: 400;
  outline: none;
  position: center;
  width:40%;
  height:50px;
  font-size:20px;
  margin-top: 4%;
  margin-bottom: 4%;
`;
const Link = styled.div`
  font-weight: 400;
  border:grey 0.1rem solid;
  opacity:0.7;
  outline: none;
  width:95%;
  margin:10px;
`;
const SecondDiv = styled.div`
  display: inline-block;
  outline: none;
  position: center;
  width:100%;
  margin-top: 3%;
  margin-bottom:2%;
`;
const SDiv = styled.div`
  font-weight: 400;
  font-size:20px;
  float:left;
  margin-left:4%;
  width:15%;
  // border:grey 0.15rem solid;
  // border-radius:50%; 
`;
const Br = styled.div`
  background-color: grey;
  opacity: 0.5;
  height: 0.1rem;
  width: 90%;
  margin-left:5%;
  margin-right:5%;
`;
const ThirdDiv = styled.div`
  display: inline-block;
  outline: none;
  position: center;
  width:100%;
  padding-bottom:4%;
`;
const TDiv = styled.div`
  font-weight: 400;
  text-align:center;
  font-size:20px;
  float:left;
  margin-left:4%;
  width:15%;
  color:grey;
`;
const Img = styled.img`
  width:60%;
  margin:20%;
`;

export default Main;
