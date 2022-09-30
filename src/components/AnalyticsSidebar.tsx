import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { S3URL } from './S3URL';
import { backUrl } from '../variable/url';
import axios from 'axios';
import { AccessToken } from '../variable/token';
import { useDispatch } from 'react-redux';
import { storeFocusedS3 } from '../redux/slices/FocusedS3Slice';
import { S3 } from '../interface/S3';

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
  const dispatch = useDispatch();
  const [S3List, setS3List] = useState<S3[]>([]);
  const getS3List = async () => {
    await axios.get(`${backUrl}/s3/`, {
      headers: {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        Authorization: `Bearer ${AccessToken}`
      }
    }

    ).then(r => {
      setS3List(r.data);
    }).catch(e => console.log(e));
  };
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const FocusingS3 = (s3_id: number) => {
    dispatch(storeFocusedS3(s3_id));
    console.log(s3_id);
  };
  useEffect(() => {
    void getS3List();
  }, []);
  return (
      <SideBarWrap>
              <Links>
                  {
                      S3List.map(s3 => {
                        return (
                        // eslint-disable-next-line react/jsx-key
                            <span onClick={FocusingS3(s3.id)}><S3URL id={s3.id} url={s3.url} issuer={s3.issuer} s3_url={s3.s3_url} target_url={s3.target_url} created_at={s3.created_at} updated_at={s3.updated_at}/></span>
                        );
                      })

                  }

              </Links>
  </SideBarWrap>
  );
};
export default AnalyticsSidebar;
