import Button from '../../common/Button';

interface RegisterButtonProps {
  onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const RegisterButton = ({ onSubmit }: RegisterButtonProps) => {
  return <Button onClick={onSubmit}>회원가입</Button>;
};

export default RegisterButton;
