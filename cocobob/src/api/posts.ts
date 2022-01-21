import cocobob from './cocobob';
import qs from 'qs';
import { PostInputData } from '../types/types';

export async function writePost({ title, contents, tag }: PostInputData) {
  const response = await cocobob
    .post(
      '/api/boards',
      { title, contents, tag },
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      }
    )
    .then((response) => {
      return response.data;
    });
  return response;
}

export async function readPost(id: string) {
  const response = await cocobob.get(`/api/posts/${id}`).then((response) => {
    return response.data;
  });
  return response;
}

export async function postsList() {
  // const queryString = qs.stringify(page);
  // console.log(queryString);
  const response = await cocobob
    .get(`/api/boards`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
    .then((response) => {
      return response;
    });
  return response;
}

// export async function postAll() {
//   const response = await cocobob.get('/api/boards').then((response) => {
//     return response;
//   });
//   return response;
// }
