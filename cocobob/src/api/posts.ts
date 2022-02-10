import cocobob from './cocobob';
import qs from 'qs';
import { PostChangeData, PostInputData } from '../types/types';

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

export async function readPost(id: number) {
  const response = await cocobob
    .get(`/api/boards/${id}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
    .then((response) => {
      return response.data;
    });
  return response;
}

export async function postsList({ page, keyword }: any) {
  const response = await cocobob
    .get(`/api/boards/search?page=${page}&keyword=${keyword}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
    .then((response) => {
      return response;
    });
  return response;
}

export async function deletePost(id: number) {
  await cocobob.delete(`/api/boards/${id}`, {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  });
}

export async function changePost({ id, title, contents, tag }: PostChangeData) {
  const response = await cocobob
    .put(
      `/api/boards/${id}`,
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
