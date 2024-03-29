import styled from 'styled-components';
import map from '../../image/map.png';

const Test = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

const Image = styled.div``;

const Menu = styled.div`
  background-color: #dbad21;
  height: 100%;
`;

const ContentSideView = () => {
  return (
    <Test>
      <img src={map} alt="지도" />
      <Menu />
    </Test>
  );
};

export default ContentSideView;
