import React, {useState} from 'react';
import axios from 'axios';
import { backUrl } from '../variable/url';
import { AccessToken } from '../variable/token';

// eslint-disable-next-line @typescript-eslint/naming-convention
const TestGetCaptureedData = (s3_id: number) => {
    const CapturedDatas=useState<CapturedData[]>(``);
  const getS3CD = async () => {
    await axios.get(`${backUrl}/analytics/${s3_id}/`, {
      headers: {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        Authorization: `Bearer ${AccessToken}`
      }
    }

    ).then(r=>{

    });
  };

  return (
      <div></div>
  );
};
export default TestGetCaptureedData;
