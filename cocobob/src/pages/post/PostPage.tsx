import { title } from 'process';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import PostViewer from '../../components/post/PostViewer';
import { readPost, unloadPost } from '../../features/post/slices';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { PostState, PostSuccessData } from '../../types/types';

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
  const postState: PostState = useTypedSelector((state) => state.post);

  const post = postState.success;

  const { postId } = match.params;
  useEffect(() => {
    dispatch(readPost(parseInt(postId)));
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, postId]);

  return (
    <PostPageBlock>
      <PostViewer post={post} />
    </PostPageBlock>
  );
};

export default withRouter(PostPage);
