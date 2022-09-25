import React from 'react';
import styled from 'styled-components';
const S3URL = styled.h3`
  padding: 10px 0;
  font-weight: 300;
  :hover {
    opacity: 0.9;
    background-color: #FFF5DD;
  }
`;
const SideBarWrap = styled.div`
  z-index: 5; 
  
  background-color: #e7e4e1; 
  height: 100%;  width:20%;  
  left: 0;  top: 57px;  
  position: fixed;  
  transition: 0.5s ease;  &.open {    right: 0;    transition: 0.5s ease;  }`;
const Links = styled.div`

  font-size: 12px;

  align-items: center;
  cursor: pointer;
  
  > h3 {
    font-weight: 500;
  }
  > h3 > span {
    padding: 15px;
  }
  
`;
const AnalyticsSidebar = () => {
  return (
      <SideBarWrap>
              <Links>
                  <S3URL>링크1</S3URL>

                  <S3URL>링크2</S3URL>
                  <S3URL>링크3</S3URL>
              </Links>
  </SideBarWrap>
  );
};
export default AnalyticsSidebar;
