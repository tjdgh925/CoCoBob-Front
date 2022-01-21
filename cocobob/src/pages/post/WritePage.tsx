import Editor from '../../components/write/Editor';
import WriteActionButtons from '../../components/write/WriteActionButtons';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { PostInputData } from '../../types/types';
import { useCallback } from 'react';
import { updatePost, writePost } from '../../features/post/slices';

const WritePageBlock = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const WritePage = () => {
  const dispatch = useDispatch();

  const postState: PostInputData = useTypedSelector((state) => state.post.data);
  const title = postState.title;
  const contents = postState.contents;
  const tag = postState.tag;

  const changeTitle = useCallback(
    (e) => {
      const { value } = e.target;
      dispatch(
        updatePost({
          title: value,
          contents: contents,
          tag: tag,
        })
      );
    },
    [dispatch, contents, tag]
  );

  const changeBody = useCallback(
    (e) => {
      dispatch(
        updatePost({
          title: title,
          contents: e,
          tag: tag,
        })
      );
    },
    [dispatch, title, tag]
  );

  const onPublish = () => {
    dispatch(
      writePost({
        title,
        contents,
        tag,
        // deadline: 'dd',
      })
    );
  };

  return (
    <WritePageBlock>
      <Editor
        changeTitle={changeTitle}
        changeBody={changeBody}
        title={title}
        contents={contents}
      />
      <WriteActionButtons onPublish={onPublish} />
    </WritePageBlock>
  );
};

export default WritePage;
