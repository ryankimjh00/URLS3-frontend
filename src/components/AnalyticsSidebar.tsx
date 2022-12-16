import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { S3URL } from './S3URL';
import { backUrl } from '../variable/url';
import axios from 'axios';
import { AccessToken } from '../variable/token';
import { useDispatch, useSelector } from 'react-redux';
import { storeFocusedS3 } from '../redux/slices/FocusedS3Slice';

import { RootState } from '../redux/store';
import { S3Type } from '../interface/S3Type';
import AnalyticsSideberMenu from './AnalyticsSideberMenu';
//하
const SideBarWrap = styled.div`
  z-index: -1; 
  
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
  const [x, setx] = useState(0);
  const [y, sety] = useState(0);
  const [S3List, setS3List] = useState<S3Type[]>([]);
  const UpdateState = useSelector((state: RootState) => state.Update.x);
  const [sideS3Menu, setOnOffsideS3Menu] = useState(false);
  const sideS3MenuRef = useRef<HTMLDivElement>(null);
  const getS3List = async () => {
    await axios.get(`${backUrl}/s3/`, {
      headers: {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        Authorization: `Bearer ${AccessToken}`
      }
    }

    ).then(r => {
      window.alert('생성된 S3가 없습니다.');
      setS3List(r.data);
    }).catch(e => console.log(e));
  };
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const FocusingS3 = useCallback((s3_id: number) => {
    dispatch(storeFocusedS3(s3_id));
  }, []);
  const onClickshowChannelMenu = useCallback(() => {
    setOnOffsideS3Menu(prev => !prev);
  }, []);
  useEffect(() => {
    void getS3List();
    // channelMenuRef 를 이용해 이외의 영역이 클릭되면 채널메뉴 없애기
    function handleClickOutside (e: MouseEvent): void {
      if ((sideS3MenuRef.current != null) && !sideS3MenuRef.current.contains(e.target as Node)) {
        setOnOffsideS3Menu(false);
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [UpdateState, sideS3MenuRef]);
  return (
      <SideBarWrap>
              <Links>
                  {
                      S3List.map(s3 => {
                        return (
                        // eslint-disable-next-line react/jsx-key
                            <span ref={sideS3MenuRef}
                                  onClick={() => {
                                    FocusingS3(s3.id);
                                    console.log('clidke0');
                                  }
                                  }
                                  onContextMenu={e => {
                                    e.preventDefault();
                                    FocusingS3(s3.id);
                                    console.log('사이드바 메뉴열기!');
                                    setx(e.clientX);
                                    sety(e.clientY);
                                    sideS3Menu && onClickshowChannelMenu();
                                    onClickshowChannelMenu();
                                  }}><S3URL key={s3.id} id={s3.id} target_url={s3.target_url} issuer={s3.issuer} s3_url={s3.s3_url} created_at={s3.created_at} updated_at={s3.updated_at}/></span>
                        );
                      })

                  }

              </Links>
        {sideS3Menu && (
            <div style={{ position: 'absolute', top: y - 57, left: x }}>
              <AnalyticsSideberMenu/>
            </div>
        )}
    </SideBarWrap>

  );
};
export default AnalyticsSidebar;
