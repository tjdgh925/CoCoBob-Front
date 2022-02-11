import styled from 'styled-components';
import ErrorMessage from '../../common/ErrorMessage';
import palette from '../../../lib/styles/palette';
import Spacer from '../../common/Spacer';
import { ResetPasswordState } from '../../../types/types';

interface ResetPasswordFormProps {
  state: ResetPasswordState;
  email: string;
  verification: string;
  password: string;
  passwordConfirm: string;
  sendEmail: (e: any) => void;
  onChange: (e: any) => void;
  checkPassword: (passwordConfirm: string) => boolean;
}

const ResetPasswordFormBlock = styled.div`
  padding-bottom: 1rem;
  h3 {
    margin: 0;
    color: black;
    padding-bottom: 4rem;
  }
`;
const EmailDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1.5px solid black;
  :focus {
    color: ${palette.gray[1]};
    border-bottom: 1px solid blue;
  }
`;

const EmailInput = styled.input`
  font-size: 1rem;
  border: none;
  outline: none;
  width: 90%;
  padding: 1rem;
  :placeholder {
    margin-left: 30px;
  }
  & + & {
    margin-top: 1.5rem;
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
const StyledButton = styled.button`
  display: flex;
  background: none;
  color: ${palette.gray[2]};
  border: 1px solid ${palette.gray[2]};
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 2rem;
  :disabled {
    color: red;
    background-color: ${palette.gray[0]};
  }
`;

const PasswordError = styled.div`
  h4 {
    color: ${palette.error};
  }
`;
const ResetPasswordForm = ({
  state,
  email,
  verification,
  password,
  passwordConfirm,
  onChange,
  sendEmail,
  checkPassword,
}: ResetPasswordFormProps) => {
  const { error, verify, username } = state;

  return !verify ? (
    <ResetPasswordFormBlock>
      <h3>비밀번호 재설정</h3>
      <form id="resetPassword1" autoComplete="off">
        <EmailDiv>
          <EmailInput
            name="email"
            placeholder={'아이디를 입력해주세요.'}
            value={email}
            onChange={onChange}
          />
          <StyledButton disabled={username === email} onClick={sendEmail}>
            전송
          </StyledButton>
        </EmailDiv>
        <Spacer />
        <Spacer />
        <StyledInput
          name="verification"
          placeholder={'인증번호를 입력해주세요.'}
          value={verification}
          onChange={onChange}
          disabled={username !== email}
        />
      </form>
      {error.error?.message !== undefined && (
        <ErrorMessage>{'이메일을 다시 확인해주세요 !'}</ErrorMessage>
      )}
    </ResetPasswordFormBlock>
  ) : (
    <ResetPasswordFormBlock></ResetPasswordFormBlock>
  );
};

export default ResetPasswordForm;
