
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ImgUpload, onChange } from '../features/ImgUpload';
import axios from 'axios';
import { backUrl } from '../variable/url';
import { AccessToken } from '../variable/token';
interface Props{
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  onClickToggleModal: (v: boolean) => void
}

const ProfileComponent = ({ onClickToggleModal }: Props) => {
  const [pk, setPk] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [thumbnail, setThumbnail] = useState('');

  const UpdateProfile = async () => {
    await axios.post(`${backUrl}/profile/`, {}, {
      headers: {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        Authorization: `Bearer ${AccessToken}`
      }
    })
      .then(r => setThumbnail(r.data.image));
  };
  const GetImg = async () => {
    if (pk !== '') {
      await axios.get(`${backUrl}/profile/${pk}/`, {
        headers: {
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          Authorization: `Bearer ${AccessToken}`
        }
      })
        .then(r => { setThumbnail(r.data.thumbnail); })
        .catch(err => console.log(err));
    }
  };

  const getMyUser = async () => {
    await axios.get(`${backUrl}/token/user/`, {
      headers: {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        Authorization: `Bearer ${AccessToken}`
      }
    })
      .then(r => {
        setPk(r.data.pk);
        setUsername(r.data.username);
        setEmail(r.data.email);
        setFirstname(r.data.first_name);
        setLastname(r.data.last_name);
      })
      .catch((err) => { console.log(err); });
  };
  useEffect(() => {
    void getMyUser();
    void GetImg();
    console.log('Teset');
  }, [thumbnail]);
  const closeModal = () => {
    onClickToggleModal(false);
  };

  return (
      <ModalContainer>
          <DialogBox>
              <Header>
                  <h1>Profile Update</h1>

                  <Close onClick={closeModal}>
                      X
                  </Close>
              </Header>
              <BodyContainer>
                  <h3>pk: {pk}</h3>
                  <h3>username: {username}</h3>
                  <h3>email: {email}</h3>
                  <h3>first_name: {firstname}</h3>
                  <h3>last_name: {lastname}</h3>
                  <ImageContainer>
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
                  </ImageContainer>
                  <img src={thumbnail}/>
                  <input type='button' value ='확인' onClick={() => { void UpdateProfile(); }} />
              </BodyContainer>

          </DialogBox>
      </ModalContainer>
  );
};
const ModalContainer = styled.div`
  top: 50px;
  left: 250px;
  width: 50%;
  height: 50%;
  display: flex;
  align-items: center;
  position: fixed;
`;
const Header = styled.div`
    justify-content: space-between;
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;`;
const BodyContainer = styled.div`
  
  justify-content: space-between;
`;
const Close = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  `;
const DialogBox = styled.dialog`
  width: 800px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  border-radius: 3px;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  background-color: white;
  z-index: 10000;
`;
export default ProfileComponent;
