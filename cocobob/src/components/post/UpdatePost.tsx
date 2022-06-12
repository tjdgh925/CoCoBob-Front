import { useMemo } from 'react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';
import TagBox from '../write/TagBox';

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

interface UpdatePostProps {
  titleChange: string;
  contentsChange: string;
  tagChange: string;
  onTitleChange: (e: any) => void;
  onContentsChange: (e: any) => void;
  onTagChange: (str: string) => void;
}

const UpdatePost = ({
  titleChange,
  contentsChange,
  tagChange,
  onTitleChange,
  onContentsChange,
  onTagChange,
}: UpdatePostProps) => {
  // const QuillRef = useRef<ReactQuill>();
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
  return (
    <EditorBlock>
      <TitleInput
        name={'titleChange'}
        placeholder={'제목을 입력하세요'}
        value={titleChange}
        onChange={onTitleChange}
      />
      <ReactQuill
        ref={(element) => {}}
        value={contentsChange}
        onChange={onContentsChange}
        modules={modules}
        theme="snow"
        placeholder="원하는 장소, 시간, 메뉴 대해 구체적으로 작성 부탁드려요!"
      />
      <TagBox tags={tagChange} onTagChange={onTagChange} />
    </EditorBlock>
  );
};

export default UpdatePost;
