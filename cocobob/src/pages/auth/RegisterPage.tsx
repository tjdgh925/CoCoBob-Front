import { useState, useCallback, useRef, useEffect } from 'react';

import AuthHeader from '../../components/common/AuthHeader';
import RegisterForm from '../../components/auth/Register/RegisterForm';
import RegisterButton from '../../components/auth/Register/RegisterButton';
import styled from 'styled-components';

import { SignUpData } from '../../types/types';
import { useDispatch } from 'react-redux';
import { register } from '../../features/auth/slices';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const [birthday, setBirthday] = useState<Date | null>(new Date());
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');

  const [signUpInfo, setSignUpInfo] = useState<SignUpData>({
    email: '',
    user_pw: '',
    sex: '',
    birth: '',
  });

  const RegisterBlock = styled.div`
    position: absolute;
    left: 0;
    top: 8%;
    bottom: 0;
    right: 0;
    // background: #e3e3e3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const RegisterBox = styled.div`
    box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.2);
    width: 400px;
    background: white;
    border: #e3e3e3 2px solid;
    padding: 3rem 7rem 5rem 7rem;
    text-align: center;
    border-radius: 20px;
  `;

  const Spacer = styled.div`
    padding: 2rem;
  `;

  const checkPassword = (passwordConfirm: string): boolean => {
    if (passwordConfirm === signUpInfo.user_pw) return false;
    else return true;
  };

  useEffect(() => {
    if (birthday !== null) {
      const temp =
        parseInt(birthday.toISOString().slice(0, 10).replace(/-/g, '')) + 1;
      setSignUpInfo({
        ...signUpInfo,
        birth: temp.toString(),
      });
    }
  }, [birthday]);

  const onSubmit = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      dispatch(register(signUpInfo));
    },
    [signUpInfo, dispatch]
  );

  const onChange = useCallback(
    (e) => {
      console.log(e.target);
      const { name, value } = e.target;
      if (name === 'passwordConfirm') {
        setPasswordConfirm(value);
      } else
        setSignUpInfo({
          ...signUpInfo,
          [name]: value,
        });
    },
    [signUpInfo]
  );

  return (
    <RegisterBlock>
      <RegisterBox>
        <AuthHeader />
        <RegisterForm
          signUpInfo={signUpInfo}
          passwordConfirm={passwordConfirm}
          onChange={onChange}
          checkPassword={checkPassword}
          birthday={birthday}
          setBirthday={setBirthday}
        />
        {/* {error.error?.message !== undefined ? (
          <ErrorMessage>{'회 원 가 입  실 패 !'}</ErrorMessage>
        ) : (
          <Spacer />
        )} */}
        <RegisterButton onSubmit={onSubmit} />
      </RegisterBox>
    </RegisterBlock>
  );
};

export default RegisterPage;
