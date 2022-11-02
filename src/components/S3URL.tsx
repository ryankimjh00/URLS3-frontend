import styled from 'styled-components';
import React from 'react';
import { S3Type } from '../interface/S3Type';

export const S3URL = (props: S3Type) => {
  return (
       <S3url>{props.target_url}:{props.s3_url}</S3url>
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
