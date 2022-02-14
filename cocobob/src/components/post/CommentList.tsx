import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Reply } from '../../types/types';

const CommentListBlock = styled.div`
  display: flex;
  flex-direction: column;
`;
const CommentItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${palette.gray[2]};
`;

interface CommentItemProps {
  content: string;
  username: string;
}
interface CommentListProps {
  reply: Reply[];
}

const CommentList = ({ reply }: CommentListProps) => {
  return (
    <CommentListBlock>
      {reply.map((reply) => (
        <CommentItem
          key={reply.rno}
          content={reply.content}
          username={reply.username}
        />
      ))}
    </CommentListBlock>
  );
};

const CommentItem = ({ content, username }: CommentItemProps) => {
  return (
    <CommentItemBlock>
      <h4>{username}</h4>
      {content}
    </CommentItemBlock>
  );
};

// const PostItem = ({ post }: PostItemProps) => {
//   const { title, username, tag } = post;
//   return (
//     <PostItemBlock>
//       <Image src={image} alt="Image" />
//       <PostInfo>
//         <Title>{title}</Title>
//         <Username> {username}</Username>
//       </PostInfo>
//       <Tags tags={tag.split(', ')} />
//     </PostItemBlock>
//   );
// };

// const PostList = ({ posts, loading, error }: PostListProps) => {
//   if (error) {
//     return <ErrorMessage>에러가 발생!!</ErrorMessage>;
//   }
//   return (
//     <PostListBlock>
//       {/* {showWriteButtons && ( */}

//       {/* <Link to="write">
//         <WriteButton>새 글 작성하기</WriteButton>
//       </Link> */}

//       {/* )} */}

//       {!loading && posts && (
//         <Test>
//           {() => console.log(posts)}
//           {posts.map((post) => (
//             <StyledLink to={`/post/${post.id}`}>
//               <PostItem post={post} key={post.id} />
//             </StyledLink>
//           ))}
//         </Test>
//       )}
//     </PostListBlock>
//   );
// };

export default CommentList;
