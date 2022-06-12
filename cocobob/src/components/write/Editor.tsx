import { useMemo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initialize } from '../../features/post/slices';

import ReactQuill from 'react-quill'; // Typescript
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';
import TagBox from './TagBox';

const TitleInput = styled.input`
  border: none;
  font-size: 40px;
  font-weight: 800;
  padding: 10px 0 0 20px;
  border-bottom: 0.5px solid #dedede;
  margin-bottom: 2rem;
  :focus {
    outline: none;
    border-color: gray;
  }
`;

const EditorBlock = styled.div`
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 90%;
  .ql-editor {
    min-height: 30rem;
    font-size: 20px;
  }
  .quill > .ql-container > .ql-editor.ql-blank::before {
    font-size: 20px;
    font-weight: 500;
    color: gray;
  }
`;

interface EditorProps {
  title: string;
  contents: string;
  tag: string;
  onTitleChange: (e: any) => void;
  onContentsChange: (e: any) => void;
  onTagChange: (str: string) => void;
}

const Editor = ({
  title,
  contents,
  tag,
  onTitleChange,
  onContentsChange,
  onTagChange,
}: EditorProps) => {
  const dispatch = useDispatch();

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: '1' }, { header: '2' }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['link', 'image'],
        ],
      },
    }),
    []
  );

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  return (
    <EditorBlock>
      <TitleInput
        name={'title'}
        placeholder={'제목을 입력하세요'}
        value={title}
        onChange={onTitleChange}
      />

      <ReactQuill
        ref={(element) => {}}
        value={contents}
        onChange={onContentsChange}
        modules={modules}
        theme="snow"
        placeholder="원하는 장소, 시간, 메뉴 대해 구체적으로 작성 부탁드려요!"
      />
      <TagBox tags={tag} onTagChange={onTagChange} />
    </EditorBlock>
  );
};

export default Editor;
