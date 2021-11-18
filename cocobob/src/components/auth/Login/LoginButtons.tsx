import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../common/Button';
import palette from '../../../lib/styles/palette';

const ButtonsBlock = styled.div``;

const LoginButtons = () => {
  return (
    <ButtonsBlock>
      <Button color={palette.pink}>로그인</Button>
      <Link to="/register">
        <Button color={palette.pink} opacity='0.6'>회원가입</Button>
      </Link>
    </ButtonsBlock>
  );
};

export default LoginButtons;
