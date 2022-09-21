
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ImgUpload, onChange } from '../features/ImgUpload';
import axios from 'axios';
import { backUrl } from '../variable/url';
import { AccessToken } from '../variable/token';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { storeThumbnail } from '../redux/slices/ThumbnailSlice';
import { storeImage } from '../redux/slices/ImageSlice';
const thumbnail = useAppSelector(state => state.ThumbnailReducer);
const image = useAppSelector(state => state.ImageReducer);
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

  const UpdateProfile = async () => {
    const dispatch = useAppDispatch();
    await axios.post(`${backUrl}/profile/`, {}, {
      headers: {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        Authorization: `Bearer ${AccessToken}`
      }
    })
      .then(r => dispatch(storeThumbnail(r.data.image)));
  };
  const ReadProfile = async () => {
    console.log(pk);
    const dispatch = useAppDispatch();
    if (pk !== '') {
      await axios.get(`${backUrl}/profile/${pk}/`, {
        headers: {
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          Authorization: `Bearer ${AccessToken}`
        }
      })
        .then(r => { dispatch(storeThumbnail(r.data.thumbnail)); })
        .catch(err => console.log(err));
    }
  };
  const GetImg = async () => {
    const dispatch = useAppDispatch();
    // const thumbnail = useAppSelector(state => state.ThumbnailReducer);
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    await axios.get(`${thumbnail.url}`, {
      headers: {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        Authorization: `Bearer ${AccessToken}`
      }
    })
      .then(r => { dispatch(storeImage(r.data.image)); })
      .catch(err => console.log(err));
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
    void ReadProfile();
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
                  <img src={image.image}/>
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
