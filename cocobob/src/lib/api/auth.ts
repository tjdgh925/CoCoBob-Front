import { SignUpData } from '../../types/types';
import client from './client';

// 회원가입
export const signUp = ({ username, password }: SignUpData) =>
  client.post('/api/signup', {
    username,
    password,
  });
