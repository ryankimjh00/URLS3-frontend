import React from 'react';
import styled from 'styled-components';
import { LogOut } from '../../features/Logout';
import { ImgUpload, onChange } from '../../features/ImgUpload';

const Main = () => {
  return (

        <MainContainer>
            <MainHeader>
                <input type='button'
                       value ='로그아웃'
                       onClick={() => { void LogOut(); }}>
                </input>
            </MainHeader>
          <div>
            <input type='file'
                   accept='image/jpg,impge/png,image/jpeg,image/gif'
                   name='profile_img'
                   onChange={onChange}>
            </input>
          </div>
          <div>
            <input type='button' value ='업로드' onClick={() => { void ImgUpload(); }}/>
          </div>

        </MainContainer>
  );
};
const MainContainer = styled.div`
`;
const MainHeader = styled.div`
  background-color: antiquewhite;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export default Main;
