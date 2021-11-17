import styled from 'styled-components';
import ContentBody from './ContentBody';
import ContentSideView from './ContentSideView';

const PostContentBlock = styled.div`
  display: flex;
  height: 800px;
`;

const PostViewer = () => {
  return (
    <PostContentBlock>
      <ContentBody />
      <ContentSideView />
    </PostContentBlock>
  );
};
export default PostViewer;
