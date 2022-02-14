import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { deletePost } from '../../features/post/slices';
import { PostSuccessData } from '../../types/types';
import ContentInfo from '../common/ContentInfo';

import Edit from '../../image/write.png';
import Delete from '../../image/delete.png';

const ContentBodyBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  border: none;
  padding-bottom: 1rem;
  width: 60%;
`;

const ButtonBlock = styled.div`
  display: flex;
  height: 50%;
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

const ImageWrapper = styled.button`
  background: none;
  border: none;
`;

const Image = styled.img`
  align-self: center;
  height: 2rem;
  border-radius: 10px;
  cursor: pointer;
`;

interface ContentBodyProps {
  post: PostSuccessData;
}

const ContentBody = ({ post }: ContentBodyProps) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const onDelete = () => {
    post.id && dispatch(deletePost(post.id));
    history.push('/post?page=0');
  };

  return (
    <ContentBodyBlock>
      <TitleBlock>
        <Title>{post?.title}</Title>
        {post.username === localStorage.getItem('username') ? (
          <ButtonBlock>
            <ImageWrapper>
              <Link to={`/post/update/${post.id}`}>
                <Image src={Edit} alt={'수정'} />
              </Link>
            </ImageWrapper>
            <ImageWrapper onClick={onDelete}>
              {' '}
              <Image src={Delete} alt={'삭제'} />
            </ImageWrapper>
          </ButtonBlock>
        ) : (
          <></>
        )}
      </TitleBlock>
      <ContentInfo
        username={post.username}
        tag={post.tag}
        views={post.view}
        id={post.id}
        title={post.title}
      />
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
