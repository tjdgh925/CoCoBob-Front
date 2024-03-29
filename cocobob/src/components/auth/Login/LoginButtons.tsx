import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../common/Button';
import palette from '../../../lib/styles/palette';
import Spacer from '../../common/Spacer';

const ButtonsBlock = styled.div``;

interface LoginButtonsProps {
  onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const LoginButtons = ({ onSubmit }: LoginButtonsProps) => {
  return (
    <ButtonsBlock>
      <Button color={palette.main} onClick={onSubmit}>
        로그인
      </Button>
      <Spacer size={0.5} />
      <Link to="/register">
        <Button color={palette.main} opacity="0.6">
          회원가입
        </Button>
      </Link>
    </ButtonsBlock>
  );
};

export default LoginButtons;
