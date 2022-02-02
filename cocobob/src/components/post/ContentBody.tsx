import styled from 'styled-components';
import { PostSuccessData } from '../../types/types';
import ContentInfo from '../common/ContentInfo';

const ContentBodyBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  border: none;
  padding-bottom: 1rem;
  width: 60%;
`;

const Separator = styled.div`
  align-self: center;
  width: 100%;
  padding-top: 3rem;
  padding-right: 1rem;
  border-bottom: 2px solid #aaadab;
`;

const Body = styled.div`
  align-self: center;
  width: 95%;
  padding-top: 3rem;
`;

interface ContentBodyProps {
  post: PostSuccessData;
}

const ContentBody = ({ post }: ContentBodyProps) => {
  return (
    <ContentBodyBlock>
      <Title>{post?.title}</Title>
      <ContentInfo username={post.username} tag={post.tag} views={post.view} />
      <Separator />
      <Body
        dangerouslySetInnerHTML={{
          __html: `${post?.contents.toString()}`,
        }}
      />
    </ContentBodyBlock>
  );
};

export default ContentBody;
