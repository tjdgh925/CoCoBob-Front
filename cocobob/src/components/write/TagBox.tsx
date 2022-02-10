import { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { PostInputData } from '../../types/types';
import { initialize, updatePost } from '../../features/post/slices';

import Button from '../common/Button';

import styled from 'styled-components';

const TagBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

const Header = styled.h3`
  padding-left: 1rem;
`;

const TagsInput = styled.input`
  height: 2rem;
`;

const TagsBox = styled.div`
  display: flex;
`;

const Tags = styled.h4`
  padding: 1rem;
`;

const TagBox = () => {
  const dispatch = useDispatch();
  const postState: PostInputData = useTypedSelector((state) => state.post.data);
  const title = postState.title;
  const contents = postState.contents;
  const tags: string[] | null = postState.tag.split(',');

  const [tag, setTag] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  const onChange = useCallback((e) => {
    const { value } = e.target;
    setTag(value);
  }, []);

  const onClick = useCallback(
    (e) => {
      if (!tag) return;
      if (tags.includes(tag)) return;
      const temp: string[] = [...tags, tag];
      dispatch(
        updatePost({
          title: title,
          contents: contents,
          tag: temp.toString(),
          // deadline: deadline,
        })
      );
      setTag('');
    },
    [tag, tags, dispatch, title, contents]
  );

  const onRemove = useCallback(
    (e) => {
      const value = e.target.innerText;
      const temp = tags.filter((temp) => temp !== value.substr(1));

      dispatch(
        updatePost({
          title: title,
          contents: contents,
          tag: temp.toString(),
          // deadline: deadline,
        })
      );
    },
    [tags, dispatch, title, contents]
  );

  return (
    <TagBlock>
      <Header>태그</Header>
      <div
        style={{
          display: 'flex',
          width: '25%',
          height: '1rem',
        }}
      >
        <TagsInput placeholder="태그를 입력하세요" onChange={onChange} />
        <Button onClick={onClick}>추가</Button>
      </div>
      <TagsBox>
        {tags &&
          tags.map((tag) => {
            if (tag !== '')
              return (
                <Tags onClick={onRemove} key={tag}>
                  #{tag}
                </Tags>
              );
          })}
      </TagsBox>
    </TagBlock>
  );
};

export default TagBox;
