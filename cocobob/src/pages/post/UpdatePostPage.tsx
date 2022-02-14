import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { RouteComponentProps, useHistory, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import UpdatePost from '../../components/post/UpdatePost';
import UpdateActionButtons from '../../components/write/UpdateActionButtons';
import { changePost, initialize, readPost } from '../../features/post/slices';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { PostSuccessData } from '../../types/types';

interface MatchParams {
  postId: string;
}
const UpdatePostPageBlock = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const UpdatePostPage = ({ match }: RouteComponentProps<MatchParams>) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const checkNumber: number = useTypedSelector((state) => state.post.change);
  const success: PostSuccessData | null = useTypedSelector(
    (state) => state.post.success
  );

  const { postId } = match.params;

  useEffect(() => {
    dispatch(readPost(parseInt(postId)));
    if (checkNumber === parseInt(postId)) {
      history.push(`/post/${checkNumber}`);
      dispatch(initialize());
    }
  }, [checkNumber, dispatch, history, postId]);

  const [titleChange, setTitleChange] = useState<any>(success && success.title);
  const [contentsChange, setContentsChange] = useState<any>(
    success && success.contents
  );
  const [tagChange, setTagChange] = useState<any>(success && success.tag);
  const onTitleChange = useCallback((e) => {
    const { value } = e.target;
    setTitleChange(value);
  }, []);
  const onContentsChange = useCallback((e) => {
    setContentsChange(e);
  }, []);
  const onTagChange = useCallback((str: string) => {
    setTagChange(str);
  }, []);

  const onPublish = () => {
    dispatch(
      changePost({
        id: postId,
        title: titleChange,
        contents: contentsChange,
        tag: tagChange,
        // deadline: 'dd',
      })
    );
  };

  return (
    <UpdatePostPageBlock>
      {success && (
        <UpdatePost
          titleChange={titleChange}
          contentsChange={contentsChange}
          tagChange={tagChange}
          onTagChange={onTagChange}
          onTitleChange={onTitleChange}
          onContentsChange={onContentsChange}
        />
      )}
      <UpdateActionButtons onPublish={onPublish} />
    </UpdatePostPageBlock>
  );
};

export default withRouter(UpdatePostPage);
