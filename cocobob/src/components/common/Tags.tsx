import styled from 'styled-components';

interface TagsProps {
  tags: string[] | undefined;
}
const TagBlock = styled.div`
  display: flex;
  & + & {
    padding-left: 1rem;
  }
`;

const Tags = ({ tags }: TagsProps) => {
  return (
    <TagBlock>
      {tags &&
        tags.map((tag) => {
          if (tag !== '') return <span key={tag}>#{tag}&nbsp;&nbsp;</span>;
        })}
    </TagBlock>
  );
};

export default Tags;
