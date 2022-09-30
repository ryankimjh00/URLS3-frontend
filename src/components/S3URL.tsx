import styled from 'styled-components';
import React from 'react';
import { S3 } from '../interface/S3';

export const S3URL = (props: S3) => {
  return (
       <S3url>{props.url}:{props.s3_url}</S3url>
  );
};

const S3url = styled.h3`
  padding: 10px 0;
  font-weight: 300;
  :hover {
    opacity: 0.9;
    background-color: #FFF5DD;
  }
`;
