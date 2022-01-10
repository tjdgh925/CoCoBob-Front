import styled from 'styled-components';
import { Comment } from '../../types/types';

const testComments: Comment[] = [
  {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    username: '사용자1',
  },
  {
    content:
      'Phasellus mattis diam ac dolor feugiat, eu fringilla elit bibendum.',
    username: '사용자2',
  },
  {
    content:
      'Duis imperdiet magna vitae lacus scelerisque, maximus euismod risus fringilla.',
    username: '사용자3',
  },
  {
    content:
      'Pellentesque id odio finibus, imperdiet tellus ac, scelerisque ligula.',
    username: '사용자4',
  },
];

const CommentListBlock = styled.div`
  display: flex;
  flex-direction: column;
`;
const CommentItemBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

interface CommentItemProps {
  comment: Comment;
}

const CommentList = () => {
  return (
    <CommentListBlock>
      {testComments.map((comment) => (
        <CommentItem comment={comment} />
      ))}
    </CommentListBlock>
  );
};

const CommentItem = ({ comment }: CommentItemProps) => {
  const { content, username } = comment;
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
