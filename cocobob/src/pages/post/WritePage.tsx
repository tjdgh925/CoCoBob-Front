import Editor from '../../components/write/Editor';
import WriteActionButtons from '../../components/write/WriteActionButtons';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { PostInputData, PostSuccessData } from '../../types/types';
import { useCallback, useState } from 'react';
import { updatePost, writePost } from '../../features/post/slices';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const WritePageBlock = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const WritePage = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  const success: PostSuccessData | null = useTypedSelector(
    (state) => state.post.success
  );

  const [title, setTitle] = useState<string>('');
  const [contents, setContents] = useState<string>('');
  const [tag, setTag] = useState<string>('');

  const onTitleChange = useCallback((e) => {
    const { value } = e.target;
    setTitle(value);
  }, []);
  const onContentsChange = useCallback((e) => {
    setContents(e);
  }, []);
  const onTagChange = useCallback((str: string) => {
    setTag(str);
  }, []);

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
  useEffect(() => {
    if (success) history.push(`post/${success.id}`);
  }, [history, success]);

  return (
    <WritePageBlock>
      <Editor
        title={title}
        contents={contents}
        tag={tag}
        onTagChange={onTagChange}
        onTitleChange={onTitleChange}
        onContentsChange={onContentsChange}
      />
      <WriteActionButtons onPublish={onPublish} />
    </WritePageBlock>
  );
};

export default WritePage;
