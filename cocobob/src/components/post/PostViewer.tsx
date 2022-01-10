import styled from 'styled-components';
import CommentList from './CommentList';
import CommentWrite from './CommentWrite';
import ContentBody from './ContentBody';
import ContentSideView from './ContentSideView';

const PostContentBlock = styled.div`
  flex-direction: column;
  display: flex;
`;
const ContentBlock = styled.div`
  width: 100%;
  display: flex;
  height: 60vh;
`;
const CommentBlock = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 3rem;
  flex-direction: column;
`;

const PostViewer = () => {
  return (
    <PostContentBlock>
      <ContentBlock>
        <ContentBody />
        <ContentSideView />
      </ContentBlock>
      <CommentBlock>
        <CommentWrite />
        <CommentList />
      </CommentBlock>
    </PostContentBlock>
  );
};
export default PostViewer;
