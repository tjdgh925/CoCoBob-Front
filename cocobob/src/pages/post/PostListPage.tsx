import { useEffect } from 'react';
import styled from 'styled-components';
import qs from 'qs';
import { RouteComponentProps, withRouter, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PostList from '../../components/post/PostList';
import { PostSuccessData } from '../../types/types';

interface MatchParams {
  username: string;
}

const PostListBlock = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const testData: PostSuccessData[] = [
  {
    contents: 'abc',
    deadline: '3456',
    id: 1,
    tag: '',
    title: 'Title',
    username: '이아린',
  },
  {
    id: 2,
    title: 'Title',
    username: '이아린',
    contents: 'abc',
    tag: '',
    deadline: '3456',
  },
];
const PostListPage = ({ match }: RouteComponentProps<MatchParams>) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const { tag, page } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  useEffect(() => {
    // dispatch(postsList());
  }, [dispatch, location.search]);

  return (
    <PostListBlock>
      <PostList loading={false} error={null} posts={testData} />
    </PostListBlock>
  );
};
export default withRouter(PostListPage);
