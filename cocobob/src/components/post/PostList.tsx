import { Link } from 'react-router-dom';
import styled from 'styled-components';
import image from '../../image/test2.png';
import ErrorMessage from '../common/ErrorMessage';

import Tags from '../common/Tags';
import { PostSuccessData } from '../../types/types';
import palette from '../../lib/styles/palette';

interface PostItemProps {
  post: PostSuccessData;
}
interface PostListProps {
  posts: PostSuccessData[] | null;
  loading: boolean;
  error: Error | null;
}
const PostListBlock = styled.div`
  width: 100%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  color: black;
`;
const PostGridBlock = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: grid;
  grid-template-rows: repeat(auto-fill, minmax(10rem, auto));
  grid-template-columns: repeat(auto-fill, minmax(30%, auto));
  gap: 2rem 2rem;
  place-items: stretch stretch;
`;

const PostItemBlock = styled.div`
  padding: 3px 10px 3px 10px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border-radius: 10px;
  background-color: white;
  :hover {
    transform: scale(1.1);
  }
`;
const Image = styled.img`
  align-self: center;
  height: 10rem;
  border-radius: 10px;
`;

const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h3`
  color: ${palette.main};
`;
const Username = styled.h5`
  color: ${palette.gray[2]};
`;

const PostFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;
const PostItem = ({ post }: PostItemProps) => {
  const { title, username, tag, view } = post;
  return (
    <PostItemBlock>
      <Image src={image} alt="Image" />
      <PostInfo>
        <Title>{title}</Title>
        <Username> {username}</Username>
      </PostInfo>
      <PostFooter>
        <Tags tags={tag.split(', ')} />
        <span>{view}</span>
      </PostFooter>
    </PostItemBlock>
  );
};

const PostList = ({ posts, loading, error }: PostListProps) => {
  if (error) {
    return <ErrorMessage>에러가 발생!!</ErrorMessage>;
  }
  return (
    <PostListBlock>
      {posts && (
        <PostGridBlock>
          {posts.map((post) => (
            <StyledLink to={`/post/${post.id}`} key={post.id}>
              <PostItem post={post} key={post.id} />
            </StyledLink>
          ))}
        </PostGridBlock>
      )}
    </PostListBlock>
  );
};

export default PostList;
