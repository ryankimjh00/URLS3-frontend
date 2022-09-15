import React from 'react';
import axios from 'axios';
import { backUrl } from '../../variable/url';
import { rmLogInToken } from '../../variable/token';

const Main = () => {
  const formData = new FormData();
  const LogOut = async () => {
    await axios.post(`${backUrl}/logout/`)
      .then(() => {
        rmLogInToken();
        location.replace('/login');
      }).catch((err) => { console.log(err); });
  };
  const ImgUpload = async () => {
    await axios.post(`${backUrl}/profile/image/`, {
      image: formData
    }, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).catch((err) => { console.log(err); });
  };

  const onChange = (e: any) => {
    const img = e.target.files[0];

    formData.append('file', img);
    console.log(formData);
  };
  return (
        <>
            <div>
                <input type='button'
                       value ='로그아웃'
                       onClick={() => { void LogOut(); }}>
                </input>
            </div>
          <div>
            <input type='file'
                   accept='image/jpg,impge/png,image/jpeg,image/gif'
                   name='profile_img'
                   onChange={onChange}>
            </input>
          </div>
          <div>
            <input type='button' value ='업로드' onClick={() => { void ImgUpload(); }}/>
          </div>

        </>
  );
};

export default Main;
