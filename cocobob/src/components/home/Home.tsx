import styled, { keyframes } from 'styled-components';
import palette from '../../lib/styles/palette';
import Image1 from '../../image/Start_img1';
import Image2 from '../../image/Start_img2';
import Image3 from '../../image/Start_img3';
import Image4 from '../../image/Start_img4';

const StartBox = styled.div`
  display: flex;
  overflow: hidden;
`;
const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
`;
const RightBox = styled.div`
  width: 60%;
  overflow: hidden;
  height: 90vh;
`;

const H2 = styled.h2`
  color: ${palette.main};
  font-weight: 700;
  font-size: 55px;
`;

const H3 = styled.h3`
  color: ${palette.main};
  margin-top: 0;
  margin-bottom: 1rem;
  font-weight: 600;
  font-size: 40px;
`;
const H5 = styled.h5`
  color: ${palette.main};
  margin-top: 0;
  font-weight: 500;
  font-size: 20px;
`;

const slide = keyframes`
  0% {
    margin-top: 0px;
  }
  100% {
    margin-top: -800px;
  }
`;

const ImgBox = styled.div`
  & svg:nth-child(1) {
    animation: ${slide} 10s infinite linear alternate;
  }
  & svg:nth-child(2) {
    animation: ${slide} 10s infinite linear alternate-reverse;
  }
  & svg:nth-child(3) {
    animation: ${slide} 10s infinite linear alternate;
  }
  & svg:nth-child(4) {
    animation: ${slide} 10s infinite linear alternate-reverse;
  }
  svg {
    display: block;
    float: left;
    margin-right: 24px;
  }
`;

const StartPage = () => {
  return (
    <StartBox>
      <LeftBox>
        <H2>CO CO BOB</H2>
        <H3>
          같이 밥 먹을 사람
          <br /> 필요하세요?
        </H3>
        <H5>COCOBOB 에서 밥 먹을 친구를 찾아보세요!</H5>
      </LeftBox>
      <RightBox>
        <ImgBox>
          <Image1 />
          <Image2 />
          <Image3 />
          <Image4 />
        </ImgBox>
      </RightBox>
    </StartBox>
  );
};

export default StartPage;
