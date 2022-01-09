import styled from 'styled-components';
import Button from '../../common/Button';
import palette from '../../../lib/styles/palette';

const ButtonsBlock = styled.div``;

const ResetPasswordButton = () => {
  return (
    <ButtonsBlock>
      <Button color={palette.main}>다음</Button>
    </ButtonsBlock>
  );
};

export default ResetPasswordButton;
