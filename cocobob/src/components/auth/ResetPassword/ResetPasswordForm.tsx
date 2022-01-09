import styled from 'styled-components';
import ErrorMessage from '../../common/ErrorMessage';
import palette from '../../../lib/styles/palette';
import Spacer from '../../common/Spacer';

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
`;

const PasswordError = styled.div`
  h4 {
    color: ${palette.error};
  }
`;
const ResetPasswordForm = () => {
  const temp = false;
  return temp ? (
    <ResetPasswordFormBlock>
      <h3>비밀번호 재설정</h3>
      <form id="resetPassword1" autoComplete="off">
        <EmailDiv>
          <EmailInput name="username" placeholder={'아이디를 입력해주세요.'} />
          <StyledButton>전송</StyledButton>
        </EmailDiv>
        <Spacer />
        <Spacer />
        <StyledInput
          name="certification"
          placeholder={'인증번호를 입력해주세요.'}
        />
      </form>
      {/* {error.error?.message !== undefined && (
        <ErrorMessage>{'로 그 인 실 패 !'}</ErrorMessage>
      )} */}
    </ResetPasswordFormBlock>
  ) : (
    <ResetPasswordFormBlock>
      <h3>비밀번호 재설정</h3>
      <form id="resetPassword2" autoComplete="off">
        <StyledInput
          placeholder="비밀번호 입력"
          name="password"
          // value={signUpInfo.user_pw}
          // onChange={onChange}
          type="password"
        />
        <StyledInput
          placeholder="비밀번호 재입력"
          name="passwordConfirm"
          // value={passwordConfirm}
          // onChange={onChange}
          type="password"
        />
        {/* {checkPassword(passwordConfirm) && passwordConfirm !== '' ? (
          <PasswordError>
            <h4>비밀번호 불일치!</h4>
          </PasswordError>
        ) : (
          <Spacer />
        )} */}
      </form>
      {/* {error.error?.message !== undefined && (
          <ErrorMessage>{'로 그 인 실 패 !'}</ErrorMessage>
        )} */}
    </ResetPasswordFormBlock>
  );
};

export default ResetPasswordForm;
