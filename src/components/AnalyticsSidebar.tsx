import React from 'react';
import styled from 'styled-components';
import { S3URL } from './S3URL';

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
                  <S3URL url="url" s3="s3"/>

              </Links>
  </SideBarWrap>
  );
};
export default AnalyticsSidebar;
