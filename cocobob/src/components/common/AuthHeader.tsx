import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const AuthHeaderBlock = styled.div`
  padding-bottom: 2rem;
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
`;

const AuthHeaderText = styled.h2`
  color: ${palette.main};
  text-decoration: none;
`;

const AuthHeader = () => {
  return (
    <AuthHeaderBlock>
      <StyledLink to="/">
        <AuthHeaderText>CO-CO-BOB</AuthHeaderText>
      </StyledLink>
    </AuthHeaderBlock>
  );
};

export default AuthHeader;
