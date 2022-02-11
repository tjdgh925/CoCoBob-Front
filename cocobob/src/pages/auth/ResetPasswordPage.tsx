import AuthHeader from '../../components/common/AuthHeader';
import ResetPasswordForm from '../../components/auth/ResetPassword/ResetPasswordForm';
import ResetPasswordButton from '../../components/auth/ResetPassword/ResetPasswordButton';
import styled from 'styled-components';
import Spacer from '../../components/common/Spacer';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useCallback } from 'react';
import {
  findPassword,
  updatePassword,
  verifyCode,
} from '../../features/reset/slices';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const ResetPasswordBlock = styled.div`
  position: absolute;
  left: 0;
  top: 8%;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ResetPasswordBox = styled.div`
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.2);
  width: 400px;
  background: white;
  border: #e3e3e3 2px solid;
  padding: 3rem 7rem 5rem 7rem;
  text-align: center;
  border-radius: 20px;
`;

const ResetPasswordPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const ResetPasswordState = useTypedSelector((state) => state.reset);
  const username = ResetPasswordState.username;
  const verify: boolean = ResetPasswordState.verify;
  const final: boolean = ResetPasswordState.final;

  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');

  const [email, setEmail] = useState<string>('');
  const [verification, setVerification] = useState<string>('');

  const sendEmail = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(findPassword(email));
    },
    [dispatch, email]
  );

  const resetPassword = useCallback(
    (e) => {
      if (username && !verify) {
        dispatch(verifyCode({ username: username, password: verification }));
      } else if (username && verify) {
        dispatch(updatePassword({ username: username, password: password }));
        if (final) history.push('/login');
      }
    },
    [username, verify, dispatch, verification, password, final, history]
  );

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'verification') setVerification(value);
    if (name === 'password') setPassword(value);
    if (name === 'passwordConfirm') setPasswordConfirm(value);
  }, []);

  const checkPassword = (passwordConfirm: string): boolean => {
    if (passwordConfirm === password) return false;
    else return true;
  };

  return (
    <ResetPasswordBlock>
      <ResetPasswordBox>
        <AuthHeader />
        <ResetPasswordForm
          state={ResetPasswordState}
          email={email}
          password={password}
          passwordConfirm={passwordConfirm}
          checkPassword={checkPassword}
          verification={verification}
          sendEmail={sendEmail}
          onChange={onChange}
        />
        <Spacer />
        <Spacer />
        <ResetPasswordButton verify={verify} resetPassword={resetPassword} />
      </ResetPasswordBox>
    </ResetPasswordBlock>
  );
};

export default ResetPasswordPage;
