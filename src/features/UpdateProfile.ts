import { useDispatch } from 'react-redux';
import axios from 'axios';
import { backUrl } from '../variable/url';
import { AccessToken } from '../variable/token';
import { storeThumbnail } from '../redux/slices/ThumbnailSlice';

export const UpdateProfile = async () => {
  const dispatch = useDispatch();
  await axios.post(`${backUrl}/profile/`, {}, {
    headers: {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      Authorization: `Bearer ${AccessToken}`
    }
  })
    .then(r => dispatch(storeThumbnail(r.data.image)));
};
