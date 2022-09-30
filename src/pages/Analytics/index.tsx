
import React from 'react';
import AnalyticsSidebar from '../../components/AnalyticsSidebar';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import TestGetCaptureedData from '../../components/TestGetCaptureedData';

const Analytics = () => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const s3_id = useSelector((state: RootState) => state.FocusedS3.s3_id);
  // s3_id 를 이용해 컴포넌트들에게 props로 해당s3 분석데이터들 불러오면 됨
  return (
    <div>
        <AnalyticsSidebar/>
        <h1>{s3_id}{s3_id}{s3_id}{s3_id}{s3_id}{s3_id}{s3_id}{s3_id}{s3_id}{s3_id}{s3_id}{s3_id}{s3_id}{s3_id}{s3_id}</h1>
        <TestGetCaptureedData s3_id={s3_id}/>
    </div>
  );
};

export default Analytics;
