import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { backUrl } from '../variable/url';
import { AccessToken } from '../variable/token';
import { CapturedDataType } from '../interface/CapturedDataType';
interface testType{
  s3_id: number
}
// eslint-disable-next-line @typescript-eslint/naming-convention
const TestGetCaptureedData = (props: testType) => {
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
        if (r.data.length === 0)console.log('get CD, but no data');
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
              <div>

                <div>id :{CD.id}</div>
                <div>city: {CD.city}</div>
                <div>created_at: {CD.created_at}</div>
                <div>country: {CD.country}</div>
                <div>js_request_time_UTC: {CD.js_request_time_UTC}</div>
                <div>latitude: {CD.latitude}</div>
                <div>longitude: {CD.longitude}</div>
                <div>page_leave_time: {CD.page_leave_time}</div>
                <div>page_loaded_time: {CD.page_loaded_time}</div>
                <div>referer_url: {CD.referer_url}</div>
                <div>s3: {CD.s3}</div>

              </div>

          );
        })}
      </div>
  );
};
export default TestGetCaptureedData;
