import React from 'react';
import axios from 'axios';
import { backUrl } from '../../variable/url';

const Main = () => {
  const formData = new FormData();
  const ImgUpload = async () => {
    await axios.post(`${backUrl}/profile/image/`, {
      image: formData
    }, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  };

  const onChange = (e: any) => {
    const img = e.target.files[0];

    formData.append('file', img);
    console.log(formData);
  };
  return (
        <>
          <div>
            <input type='file'
                   accept='image/jpg,impge/png,image/jpeg,image/gif'
                   name='profile_img'
                   onChange={onChange}>
            </input>
          </div>
          <div>
              {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
            <input type='button' onClick={ImgUpload}/>
          </div>

        </>
  );
};

export default Main;
