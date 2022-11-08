import React, { useState } from 'react';
import AnalyticsSidebar from '../../components/AnalyticsSidebar';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import TestGetCaptureedData from '../../components/TestGetCaptureedData';
import styled from 'styled-components';
import axios from 'axios';
import { backUrl } from '../../variable/url';

const Analytics = () => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const s3_id = useSelector((state: RootState) => state.FocusedS3.s3_id);
  // s3_id 를 이용해 컴포넌트들에게 props로 해당s3 분석데이터들 불러오면 됨
  return (
    <div>
        <AnalyticsSidebar/>
        <TestArea><TestGetCaptureedData s3_id={s3_id}/></TestArea>
    </div>
  );
};
const userLocation = () => {
  const [countries, setCountries] = useState([]);
  const getData = async () => {
    await axios.get(`${backUrl}/analytics/${user_id}`, {
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then(async (res) => await res.json())
      .then(async (data) => { setCountries(data); });
  };
  return (
        <div className="App">
          {/* <Geographies></Geographies> */}
          {/* <ComposableMap></ComposableMap> */}
          {/* <Geography></Geography> */}
        </div>
  );
};

export default userLocation();
const TestArea = styled.div`
  position: absolute;
  top: 300px;
  left: 300px;
  z-index: 10;
  font-size: large;
`;
