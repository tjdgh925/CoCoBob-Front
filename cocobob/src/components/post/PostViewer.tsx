import styled from 'styled-components';
import CommentWrite from './CommentWrite';
import ContentBody from './ContentBody';
import ContentSideView from './ContentSideView';

const PostContentBlock = styled.div`
  flex-direction: column;
  display: flex;
  height: 1000px;
`;
const ContentBlock = styled.div`
  width: 100%;
  display: flex;
  height: 80%;
`;
const CommentBlock = styled.div`
  width: 100%;
  display: flex;
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
      </CommentBlock>
    </PostContentBlock>
  );
};
export default PostViewer;
