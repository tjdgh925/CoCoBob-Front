import qs from 'qs';
import styled from 'styled-components';
import { withRouter, useLocation, Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';

const PaginationBlock = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-self: center;
`;

const PaginationButton = styled.button<{ edge?: boolean }>`
  background: none;
  border: 1px solid ${palette.gray[0]};
  width: 4rem;
  height: 2.5rem;
  font-size: 1rem;
  :disabled {
    color: white;
    background-color: ${palette.gray[0]};
  }
  ${(props) =>
    props.edge
      ? `width: 6rem;
        :disabled{
            color: ${palette.gray[0]};
            background: none;
        }`
      : ``};
`;

const index: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const Pagination = () => {
  const location = useLocation();
  const { page } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  return page && typeof page === 'string' ? (
    <PaginationBlock>
      <Link to={`/post?page=${parseInt(page, 10) - 1}`}>
        <PaginationButton edge disabled={page === '0'}>
          {' '}
          ◀ PREV{' '}
        </PaginationButton>
      </Link>
      {index.map((idx) => {
        return (
          <Link to={`/post?page=${idx}`}>
            <PaginationButton disabled={page === idx}>
              {' '}
              {parseInt(idx, 10) + 1}{' '}
            </PaginationButton>
          </Link>
        );
      })}
      <Link to={`/post?page=${parseInt(page, 10) + 1}`}>
        <PaginationButton edge disabled={page === '9'}>
          {' '}
          NEXT ▶
        </PaginationButton>
      </Link>
    </PaginationBlock>
  ) : (
    <div></div>
  );
};

export default withRouter(Pagination);
