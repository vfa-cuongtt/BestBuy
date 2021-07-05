export default GET = 'GET';
import axios from 'axios';

export const getListItem = () => {
  return axios({
    method: 'GET',
    url: 'http://svcy3.myclass.vn/api/Product',
  })
    .then(resp => {
      console.log(resp);
    })
    .catch(err => {
      console.log(err);
    });
};
