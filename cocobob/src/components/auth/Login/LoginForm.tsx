import styled from 'styled-components';
import ErrorMessage from '../../common/ErrorMessage';
import palette from '../../../lib/styles/palette';

const LoginFormBlock = styled.div`
  padding-bottom: 1rem;
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

const LoginForm = () => {
  return (
    <LoginFormBlock>
      <h3>Login</h3>
      <form id="login" autoComplete="off">
        <StyledInput name="username" placeholder={'아이디를 입력해주세요.'} />
        <StyledInput
          name="password"
          type="password"
          placeholder={'비밀번호를 입력해주세요.'}
        />
      </form>
      {/* {error.error?.message !== undefined && (
        <ErrorMessage>{'로 그 인 실 패 !'}</ErrorMessage>
      )} */}
    </LoginFormBlock>
  );
};

export default LoginForm;
