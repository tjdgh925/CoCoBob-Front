import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../common/Button';

const ButtonsBlock = styled.div``;

const LoginButtons = () => {
  return (
    <ButtonsBlock>
      <Button color={'green'}>로그인</Button>
      <Link to="/register">
        <Button>회원가입</Button>
      </Link>
    </ButtonsBlock>
  );
};

export default LoginButtons;
