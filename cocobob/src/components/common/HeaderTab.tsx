import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Responsive from './Responsive';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { logout, refresh } from '../../features/auth/slices';
import Button from './Button';
import palette from '../../lib/styles/palette';

const HeaderBlock = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  z-index: 10;
`;

const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${palette.gray[0]};
  }
`;

const Spacer = styled.div`
  height: 4rem;
`;

const UserInfo = styled.div`
  font-weight: 800;
  margin-right: 1rem;
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
  color: ${palette.main};
`;

const LogoImage = styled.img`
  width: 20px;
  height: auto;
  margin: 0 10px;
`;

const HeaderTab = () => {
  const LoginPageState = useTypedSelector((state) => state.auth);
  const data = localStorage.getItem('username');
  const auth = LoginPageState.auth;
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
    localStorage.removeItem('username');
    localStorage.removeItem('token');
  };
  const doRefresh = () => {
    dispatch(refresh());
  };
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <StyledLink to="/" className="logo">
            <LogoImage src="img/Connect.png" />
            COCOBOB
          </StyledLink>
          {auth ? (
            <div className="right">
              <UserInfo>{data}</UserInfo>
              <Button color={palette.main} onClick={onLogout}>
                로그아웃
              </Button>
            </div>
          ) : (
            <div className="right">
              <Link to="/login">
                <Button color={palette.main} onClick={doRefresh}>
                  로그인
                </Button>
              </Link>
            </div>
          )}
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default HeaderTab;
