import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import icon from '../../image/search.png';
import { useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import qs from 'qs';

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
  const history = useHistory();
  const params = new URLSearchParams();
  const location = useLocation();

  const [query, setQuery] = useState<string>('');

  const onChange = useCallback((e: any) => {
    setQuery(e.target.value);
  }, []);

  useEffect(() => {
    if (query) {
      params.append('keyword', query);
      params.append('page', '0');
    } else {
      const { page } = qs.parse(location.search, {
        ignoreQueryPrefix: true,
      });
      params.append('keyword', '');
      if (typeof page === 'string') params.append('page', page);
      else params.append('page', '0');
    }
    history.push({ search: params.toString() });
  }, [history, query, location.search]);

  return (
    <SearchTabBlock>
      <SearchInput
        placeholder="검색어를 입력해주세요."
        type="text"
        value={query}
        onChange={onChange}
      />
      <SearchButtonBox>
        {/* <button style={{ border: 'none' }} onClick={onClick}> */}
        <Icon src={icon} />
        {/* </button> */}
      </SearchButtonBox>
    </SearchTabBlock>
  );
};

export default PostSearchTab;
