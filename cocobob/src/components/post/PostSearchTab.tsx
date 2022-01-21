import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import icon from '../../image/search.png';

const SearchTabBlock = styled.div`
  width: 100%;
  height: 3rem;
  border-radius: 10px;
  background-color: ${palette.gray[5]};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchButtonBox = styled.div``;
const SearchInput = styled.input`
  height: 90%;
  width: 90%;
  background: none;
  border: none;
  font-size: 1.5rem;
  font-weight: 600;
  color: #222222;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${palette.gray[2]};
  }
`;
const Icon = styled.img`
  height: 30px;
  weight: 30px;
`;

const PostSearchTab = () => {
  return (
    <SearchTabBlock>
      {/* <SearchInputBox> */}
      <SearchInput placeholder="검색어를 입력해주세요." />
      <SearchButtonBox>
        <button style={{ border: 'none' }}>
          <Icon src={icon} />
        </button>
      </SearchButtonBox>
      {/* </SearchInputBox> */}
    </SearchTabBlock>
  );
};

export default PostSearchTab;
