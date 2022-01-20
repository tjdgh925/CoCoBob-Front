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
