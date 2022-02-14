import { useEffect } from 'react';
import styled from 'styled-components';
import { PostSuccessData, Reply } from '../../types/types';
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
  reply: Reply[] | null;
  replyInput: string;
  onChangeReply: (e: any) => void;
  writeComment: () => void;
}

const PostViewer = ({
  post,
  reply,
  replyInput,
  onChangeReply,
  writeComment,
}: PostViewerProps) => {
  useEffect(() => {
    console.log(post);
    console.log(reply);
  });

  return (
    <PostContentBlock>
      <ContentBlock>
        {post && <ContentBody post={post} />}
        {/* <ContentSideView /> */}
      </ContentBlock>
      <CommentBlock>
        <CommentWrite
          replyInput={replyInput}
          onChangeReply={onChangeReply}
          writeComment={writeComment}
        />
        {reply && <CommentList reply={reply} />}
      </CommentBlock>
    </PostContentBlock>
  );
};
export default PostViewer;
