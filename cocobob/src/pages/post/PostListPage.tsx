import { useEffect } from 'react';
import styled from 'styled-components';
import qs from 'qs';
import { withRouter, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PostList from '../../components/post/PostList';
import { PostListState, PostSuccessData } from '../../types/types';
import PostSearchTab from '../../components/post/PostSearchTab';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { postsList } from '../../features/postsList/slices';

interface MatchParams {
  username: string;
}

const PostListBlock = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const PostListPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const postListState: PostListState = useTypedSelector(
    (state) => state.postsList
  );

  const posts = postListState.success;
  const error = postListState.error.error;
  const loading = postListState.error.loading;

  useEffect(() => {
    const { page } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    dispatch(postsList());
  }, [dispatch, location.search]);

  return (
    <PostListBlock>
      <PostSearchTab />
      <PostList loading={loading} error={error} posts={posts} />
    </PostListBlock>
  );
};
export default withRouter(PostListPage);
