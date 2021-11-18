import Button from '../../common/Button';
import palette from '../../../lib/styles/palette';

interface RegisterButtonProps {
  onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const RegisterButton = ({ onSubmit }: RegisterButtonProps) => {
  return <Button color={palette.pink} onClick={onSubmit}>회원가입</Button>;
};

export default RegisterButton;
