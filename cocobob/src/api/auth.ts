import { LoginData, SignUpData } from '../types/types';
import cocobob from '../api/cocobob';

//로그인
export async function login({ username, password }: LoginData) {
  await cocobob.post('/api/login', { username, password }).then((response) => {
    if (response.data.token) localStorage.setItem('token', response.data.token);
  });
}

// 회원가입
export async function signUp({ username, password }: SignUpData) {
  await cocobob.post('/api/signup', { username, password }).then((response) => {
    if (response.data.token) localStorage.setItem('token', response.data.token);
  });
}

// 로그인 유지를 위해서 토큰 검증
export async function check() {
  const response = await cocobob
    .get('/api/getUsername', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
    .then((response) => {
      return response.data;
    });
  return response;
}
