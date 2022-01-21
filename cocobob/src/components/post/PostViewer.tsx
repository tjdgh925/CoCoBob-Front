import { useEffect } from 'react';
import styled from 'styled-components';
import { PostSuccessData } from '../../types/types';
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
  min-height: 60vh;
  margin-bottom: 2rem;
`;
const CommentBlock = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 3rem;
  flex-direction: column;
`;

interface PostViewerProps {
  post: PostSuccessData | null;
}

const PostViewer = ({ post }: PostViewerProps) => {
  useEffect(() => {
    console.log(post);
  });
  return (
    <PostContentBlock>
      <ContentBlock>
        {post && <ContentBody post={post} />}
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
