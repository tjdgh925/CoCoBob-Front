import styled from 'styled-components';
import Button from '../../common/Button';
import palette from '../../../lib/styles/palette';

const ButtonsBlock = styled.div``;

interface ResetPasswordButtonProps {
  verify: boolean;
  resetPassword: (e: any) => void;
}

const ResetPasswordButton = ({
  verify,
  resetPassword,
}: ResetPasswordButtonProps) => {
  return (
    <ButtonsBlock>
      <Button color={palette.main} onClick={resetPassword}>
        다음
      </Button>
    </ButtonsBlock>
  );
};

export default ResetPasswordButton;
