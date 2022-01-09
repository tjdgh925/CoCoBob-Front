import AuthHeader from '../../components/common/AuthHeader';
import ResetPasswordForm from '../../components/auth/ResetPassword/ResetPasswordForm';
import ResetPasswordButton from '../../components/auth/ResetPassword/ResetPasswordButton';
import styled from 'styled-components';
import Spacer from '../../components/common/Spacer';

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
  return (
    <ResetPasswordBlock>
      <ResetPasswordBox>
        <AuthHeader />
        <ResetPasswordForm />
        <Spacer />
        <Spacer />
        <ResetPasswordButton />
      </ResetPasswordBox>
    </ResetPasswordBlock>
  );
};

export default ResetPasswordPage;
