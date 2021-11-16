import AuthHeader from '../../components/common/AuthHeader';
import LoginForm from '../../components/auth/Login/LoginForm';
import LoginFooter from '../../components/auth/Login/LoginFooter';
import LoginButtons from '../../components/auth/Login/LoginButtons';
import styled from 'styled-components';

const LoginBlock = styled.div`
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

const LoginBox = styled.div`
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.2);
  width: 400px;
  background: white;
  border: #e3e3e3 2px solid;
  padding: 3rem 7rem 5rem 7rem;
  text-align: center;
  border-radius: 20px;
`;

const LoginPage = () => {
  return (
    <LoginBlock>
      <LoginBox>
        <AuthHeader />
        <LoginForm />
        <LoginFooter />
        <LoginButtons />
      </LoginBox>
    </LoginBlock>
  );
};

export default LoginPage;
