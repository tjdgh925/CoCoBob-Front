import { useCallback, useState } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';

const CommentWriteBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 2rem;
`;
const CommentWriteBox = styled.div`
  display: flex;
`;
const CommentInput = styled.textarea`
  resize: none;
  width: 80%;
  height: 100px;
  font-size: 15px;
`;

const CommentButtons = styled.div`
  display: flex;

  width: 20%;
`;

const CommentWrite = () => {
  const [comment, setComment] = useState<string>('');
  const onChange = useCallback((e) => {
    const { value } = e.target;
    setComment(value);
  }, []);

  return (
    <CommentWriteBlock>
      <h3>댓글작성</h3>
      <CommentWriteBox>
        <CommentInput
          value={comment}
          placeholder="댓글을 남겨주세요."
          onChange={onChange}
        />
        <CommentButtons>
          <Button color={palette.gray[3]}>취소</Button>
          {comment === '' ? (
            <Button color={palette.gray[3]}>댓글</Button>
          ) : (
            <Button color={palette.main}>댓글</Button>
          )}
        </CommentButtons>
      </CommentWriteBox>
    </CommentWriteBlock>
  );
};

export default CommentWrite;
