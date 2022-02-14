import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { RouteComponentProps, useHistory, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import PostViewer from '../../components/post/PostViewer';
import { readPost, unloadPost } from '../../features/post/slices';
import { getReply, writeReply } from '../../features/reply/slices';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { PostState, ReplyState } from '../../types/types';

interface MatchParams {
  postId: string;
}
const PostPageBlock = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const PostPage = ({ match }: RouteComponentProps<MatchParams>) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const postState: PostState = useTypedSelector((state) => state.post);
  const ReplyState: ReplyState = useTypedSelector((state) => state.reply);

  const post = postState.success;
  const reply = ReplyState.result;
  const [replyInput, setReplyInput] = useState<string>('');
  const { postId } = match.params;

  const writeComment = () => {
    dispatch(
      writeReply({
        postId: parseInt(postId),
        content: replyInput,
      })
    );
  };

  const onChangeReply = useCallback(
    (e) => {
      const { value } = e.target;
      setReplyInput(value);
    },
    [replyInput]
  );

  useEffect(() => {
    dispatch(readPost(parseInt(postId)));
    dispatch(getReply(parseInt(postId)));
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, postId]);

  useEffect(() => {
    if (ReplyState.writeSuccess) history.go(0);
  }, [ReplyState.writeSuccess]);

  return (
    <PostPageBlock>
      <PostViewer
        post={post}
        reply={reply}
        replyInput={replyInput}
        onChangeReply={onChangeReply}
        writeComment={writeComment}
      />
    </PostPageBlock>
  );
};

export default withRouter(PostPage);
