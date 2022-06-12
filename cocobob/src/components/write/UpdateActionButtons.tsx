import { useHistory } from 'react-router-dom';
import Button from '../../components/common/Button';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const ButtonBlock = styled.div`
  width: 90%;
  justify-content: end;
  margin-top: 2rem;
  display: flex;
  Button + Button {
    margin-left: 1rem;
  }
`;

interface UpdateActionButtonsProps {
  onPublish: (e: any) => void;
}

const UpdateActionButtons = ({ onPublish }: UpdateActionButtonsProps) => {
  let history = useHistory();

  const onCancel = () => {
    history.goBack();
  };

  return (
    <ButtonBlock>
      <Button onClick={onPublish} color={palette.main}>
        포스트 수정
      </Button>
      <Button onClick={onCancel} color={palette.gray[2]}>
        포스트 취소
      </Button>
    </ButtonBlock>
  );
};

export default UpdateActionButtons;
