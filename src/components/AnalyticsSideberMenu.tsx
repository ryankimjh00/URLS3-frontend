import React from 'react';
import { backUrl } from '../variable/url';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { AccessToken } from '../variable/token';
import styled from 'styled-components';
import { onUpdate } from '../redux/slices/UpdateSlice';

const AnalyticsSideberMenu = () => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const s3_id = useSelector((state: RootState) => state.FocusedS3.s3_id);
  const dispatch = useDispatch();
  const deleteS3 = async () => {
    await axios.delete(`${backUrl}/s3/${s3_id}/`, {
      headers: {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        Authorization: `Bearer ${AccessToken}`
      }
    }
    ).then(() => {
      dispatch(onUpdate());
      console.log('delete S3');
    });
  };
  return (
      <Menu>
          <h3 onClick={deleteS3}>S3 삭제</h3>
      </Menu>
  );
};
const Menu = styled.div`
    background-color: white;
    color: black;
    border-radius: 5px;
    text-align: center;
    > h3 {
        border-bottom: 1px solid #49274b;
    }
    > h3:hover {
        cursor: pointer;
        opacity: 0.6;
    }
`;
export default AnalyticsSideberMenu;
