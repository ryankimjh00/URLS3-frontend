import React from 'react';
import styled from 'styled-components';

import { ImgUpload, onChange } from '../../features/ImgUpload';

const Main = () => {
  return (

        <MainContainer>
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

export default Main;
