import cocobob from './cocobob';
import { Reply, ReplyInput } from '../types/types';

export async function writeReply({ postId, content }: ReplyInput) {
  await cocobob.post(
    `/api/boards/${postId}/reply`,
    { content },
    {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    }
  );
}

export async function getReply(postId: number) {
  const response = await cocobob
    .get(`/api/boards/${postId}/reply`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
    .then((response) => {
      return response.data;
    });
  return response;
}
