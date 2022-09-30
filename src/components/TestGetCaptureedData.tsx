import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { backUrl } from '../variable/url';
import { AccessToken } from '../variable/token';
import { CapturedDataType } from '../interface/CapturedDataType';

interface test{
  s3_id: number
}
// eslint-disable-next-line @typescript-eslint/naming-convention
const TestGetCaptureedData = (props: test) => {
  const [CapturedDatas, setCapturedDatas] = useState<CapturedDataType[]>();
  const getS3CD = async () => {
    if (props.s3_id > 0) {
      await axios.get(`${backUrl}/analytics/${props.s3_id}/`, {
        headers: {
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          Authorization: `Bearer ${AccessToken}`
        }
      }

      ).then(r => {
        setCapturedDatas(r.data);
      });
    }
  };
  useEffect(() => {
    void getS3CD();
  }, [props.s3_id]);

  return (
      <div>
        {CapturedDatas?.map(CD => {
          return (
              // eslint-disable-next-line react/jsx-key
              <div>{CD.id}</div>
          );
        })}
      </div>
  );
};
export default TestGetCaptureedData;
