import React from 'react';
import styled from 'styled-components';

const Main = () => {
  return (

        <MainContainer>
          <form>
              <Input name="url" placeholder="Shorten your link" />
              <Button type="submit">S3</Button>
          </form>
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
