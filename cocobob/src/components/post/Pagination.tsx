import qs from 'qs';
import styled from 'styled-components';
import { withRouter, useLocation, Link } from 'react-router-dom';

const PaginationBlock = styled.div`
  width: 90%;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  align-self: center;
`;

const Button = styled.button``;

const index: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const Pagination = () => {
  const location = useLocation();
  const { page } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  return page && typeof page === 'string' ? (
    <PaginationBlock>
      <Link to={`/post?page=${parseInt(page, 10) - 1}`}>
        <Button disabled={page === '0'}> 이전 </Button>
      </Link>
      {index.map((idx) => {
        return (
          <Link to={`/post?page=${idx}`}>
            <Button disabled={page === idx}> {parseInt(idx, 10) + 1} </Button>
          </Link>
        );
      })}
      <Link to={`/post?page=${parseInt(page, 10) + 1}`}>
        <Button disabled={page === '9'}> 다음 </Button>
      </Link>
    </PaginationBlock>
  ) : (
    <div></div>
  );
};

export default withRouter(Pagination);
