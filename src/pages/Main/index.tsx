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
  width: 50%;
  overflow: inherit;
`;
const Button = styled.button`
  border-radius: 5px;
`;
export default Main;
