import { useState, useCallback } from 'react';
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
  padding-left: 0.5rem;
`;

const TagsBox = styled.div`
  display: flex;
`;

const Tags = styled.h4`
  padding: 1rem;
  cursor: pointer;
`;

interface TagBoxProps {
  tags: string;
  onTagChange: (str: string) => void;
}

const TagBox = ({ tags, onTagChange }: TagBoxProps) => {
  const [tag, setTag] = useState<string>('');

  const onChange = (e: any) => {
    const { value } = e.target;
    setTag(value);
  };

  const onClick = () => {
    const temp: string[] = tags.split(', ');
    if (tag === '') return;
    if (temp.includes(tag)) return;
    onTagChange(tags + ', ' + tag);
    setTag('');
  };

  const onRemove = useCallback(
    (e) => {
      const value = e.target.innerText;
      const temp: string[] = tags.split(', ');

      const removed: string[] = temp.filter(
        (removed) => removed !== value.substr(1)
      );
      onTagChange(removed.join(', '));
    },
    [onTagChange, tags]
  );

  return (
    <TagBlock>
      <Header>태그</Header>
      <div
        style={{
          display: 'flex',
          width: '25%',
        }}
      >
        <TagsInput
          placeholder="태그를 입력하세요"
          value={tag}
          onChange={onChange}
        />
        <Button onClick={onClick}>추가</Button>
      </div>
      <TagsBox>
        {tags &&
          tags.split(', ').map((tag) => {
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
