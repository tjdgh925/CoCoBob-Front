import { RouteComponentProps, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import PostViewer from '../../components/post/PostViewer';

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
  const { postId } = match.params;

  return (
    <PostPageBlock>
      <PostViewer />
    </PostPageBlock>
  );
};

export default withRouter(PostPage);
