import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { AccessToken } from '../variable/token';
import { storeImage } from '../redux/slices/ImageSlice';
import { RootState } from '../redux/store';

export const GetImg = async () => {
  const dispatch = useDispatch();
  const thumbnail = useSelector((state: RootState) => state.Thumbnail.url);
  // const thumbnail = useAppSelector(state => state.ThumbnailReducer);
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  await axios.get(`${thumbnail}`, {
    headers: {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      Authorization: `Bearer ${AccessToken}`
    }
  })
    .then(r => { dispatch(storeImage(r.data.image)); })
    .catch(err => console.log(err));
};
