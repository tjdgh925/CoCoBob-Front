import { SignUpData } from '../../../types/types';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import Spacer from '../../common/Spacer';

const RegisterFormBlock = styled.div`
  h3 {
    margin: 0;
    color: black;
    padding-bottom: 4rem;
  }
`;
const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1.5px solid black;
  outline: none;
  width: 90%;
  padding: 1rem;

  :focus {
    color: ${palette.gray[1]};
    border-bottom: 1px solid blue;
  }
  :placeholder {
    margin-left: 30px;
  }
  & + & {
    margin-top: 1.5rem;
  }
`;

const PasswordError = styled.div`
  h4 {
    color: ${palette.error};
  }
`;

interface RegisterFormProps {
  signUpInfo: SignUpData;
  passwordConfirm: string;
  birthday: Date | null;
  setBirthday: (birthday: Date | null) => void;
  onChange: (e: any) => void;
  checkPassword: (passwordConfirm: string) => boolean;
}
const RegisterForm = ({
  signUpInfo,
  passwordConfirm,
  onChange,
  checkPassword,
  birthday,
  setBirthday,
}: RegisterFormProps) => {
  return (
    <RegisterFormBlock>
      <h3> 계정 정보를 입력해주세요.</h3>
      <form id="register" autoComplete="off">
        <StyledInput
          placeholder="이메일 입력"
          name="username"
          value={signUpInfo.username}
          onChange={onChange}
        />
        <Spacer />
        <StyledInput
          placeholder="비밀번호 입력"
          name="password"
          value={signUpInfo.password}
          onChange={onChange}
          type="password"
        />
        <StyledInput
          placeholder="비밀번호 재입력"
          name="passwordConfirm"
          value={passwordConfirm}
          onChange={onChange}
          type="password"
        />
        {checkPassword(passwordConfirm) && passwordConfirm !== '' ? (
          <PasswordError>
            <h4>비밀번호 불일치!</h4>
          </PasswordError>
        ) : (
          <Spacer />
        )}
      </form>
    </RegisterFormBlock>
  );
};

export default RegisterForm;
