import styled from 'styled-components';
import Tags from '../common/Tags';

const ContentInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
`;
const ContentInfoItem = styled.div`
  display: flex;
  height: 3rem;
  align-items: center;
  h3 {
    width: 5rem;
    padding-right: 0.5rem;
    border-right: 2px solid black;
    margin-right: 1rem;
  }
`;

const ContentFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface ContentInfoProp {
  username: string | null;
  tag: string | null;
  views: string | null;
  id: number | null;
  title: string | null;
}

const ContentInfo = ({ username, tag, views, id, title }: ContentInfoProp) => {
  const tags: string[] | undefined = tag?.split(',');

  return (
    <ContentInfoBlock>
      <ContentInfoItem>
        <h3>작성자</h3>
        <span>{username}</span>
      </ContentInfoItem>
      {/* <ContentInfoItem>
        <h3>마감일</h3>
        deadline
      </ContentInfoItem> */}
      <ContentInfoItem>
        <h3>태그</h3>
        <Tags tags={tags} />
      </ContentInfoItem>

      <ContentFooter>
        <ContentInfoItem>
          <h3>조회 수 </h3>
          <span>{views}</span>
        </ContentInfoItem>
      </ContentFooter>
    </ContentInfoBlock>
  );
};

export default ContentInfo;
