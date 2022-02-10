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
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
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
  const onTitleChange = useCallback((e) => {
    const { value } = e.target;
    setTitleChange(value);
  }, []);
  const onContentsChange = useCallback((e) => {
    setContentsChange(e);
  }, []);

  const onPublish = () => {
    dispatch(
      changePost({
        id: postId,
        title: titleChange,
        contents: contentsChange,
        tag: '',
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
          onTitleChange={onTitleChange}
          onContentsChange={onContentsChange}
        />
      )}
      <UpdateActionButtons onPublish={onPublish} />
    </UpdatePostPageBlock>
  );
};

export default withRouter(UpdatePostPage);
