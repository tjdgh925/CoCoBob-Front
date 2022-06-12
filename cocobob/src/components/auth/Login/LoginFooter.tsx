import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LoginFooterBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 3rem;
`;

const CheckBoxBlock = styled.div`
  display: flex;
`;

const FindBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  & + & {
    padding-left: 1rem;
  }
`;

const LoginFooter = () => {
  return (
    <LoginFooterBlock>
      <CheckBoxBlock></CheckBoxBlock>
      <FindBlock>
        <StyledLink to="/resetPassword">비밀번호 변경</StyledLink>
      </FindBlock>
    </LoginFooterBlock>
  );
};

export default LoginFooter;
