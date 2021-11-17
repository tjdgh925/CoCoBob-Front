import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px;
    padding: 0px;
    z-index: -2;
`;
const MainDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 70vh;
    background-color: #D3B6DA;
    margin: 0;
    align-items: center;
    justify-content: center;
    z-index: -2;
`;
const BobImg = styled.img`
    position: relative;
    width: 20vw;
    height: auto;
    display: inline-block;
    margin: 10vh 10vw;
    z-index: -1;
`;
const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    z-index: -2;
`;
const MainText = styled.div`
    font-size: 2rem;
    white-space: pre-wrap;
    color: white;
    margin: 2vh 0;
    z-index: -2;
`;
const SubText = styled.div`
    font-size: 1rem;
    color: white;
    white-space: pre-wrap;
    margin-bottom: 4vh;
    z-index: -2;
`;
const LoginBtn = styled.button`
    background-color: white;
    border-radius: 70px;
    border-color: black;
    width: 20vw;
    height: 8vh;
    font-size: 1.5rem;
    z-index: -2;
`;
const SubDiv = styled.div`
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 30vh;
    background-color: #812C96;
    opacity: 0.2;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    z-index: -2;
`;
const MainText2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    white-space: pre-wrap;
    color: white;
    margin: 0;
    z-index: -2;
`;
const StepDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 150vh;
    z-index: -2;
`;
const StepMainText = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 1.6rem;
    white-space: pre-wrap;
    padding: 12vh 0 0 0;
    z-index: -2;
`;
const StepSubText = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: .7rem;
    white-space: pre-wrap;
    padding: 3vh 0 0 0;
    z-index: -2;
`;
const StepOne = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 50vh;
    margin: 0;
    padding: 0;
    z-index: -2;
`;
const OneImg = styled.img`
    position: relative;
    width: 30vw;
    height: auto;
    display: inline-block;
    margin: 0 12vw;
    padding: 8vh 0;
    z-index: -1;
`;
const StepTwo = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 50vh;
    margin: 0;
    padding: 0;
    z-index: -2;
`;
const StepThree = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 50vh;
    margin: 0;
    padding: 0;
    z-index: -2;
`;

const Home = () => {
    const mainText = "학교에서 밥친구 찾을 땐?\nCO-CO-BOB !";
    const subText = "지금 내 근처에 있는 헝그리한 친구, 힝구를 찾아보세요.\n새로운 사람과 함께 식사하며 인사이트와 즐거움을 얻으세요.\n대한민국 일등 밥친구앱 힝구와 함께!";
    const mainText2 = "세상엔 먹을 음식도, 만날 사람도 너무나 많습니다.\n                  힝구로 한번에 해결하세요 !";
    const Step1Main = "STEP ONE\n학교 이메일로 학생 인증하기";
    const Step1Sub = "지금 당장 같이 밥먹을 학교 친구를 찾아보세요!\n 안전하게 학교 학생들과만 매칭되어요!";
    const Step2Main = "STEP TWO\n내가 먹고 싶은 거 같이 먹을\n사람 찾기";
    const Step2Sub = "먹고 싶은 음식, 시간, 연령대가 맞는 친구들을 찾아보세요!\n게시물 검색으로 원하는 친구들을 만날 수 있어요!";
    const Step3Main = "STEP THREE\n같이 먹을 친구한테 신청하기";
    const Step3Sub = "원하는 게시물을 찾아서 신청하세요!\n마음 맞는 친구들과 좋은 식사하세요!";
    return (
        <Container>
            <MainDiv>
                <BobImg src="img/BOB.png" alt="" />
                <TextDiv>
                    <MainText>{mainText}</MainText>
                    <SubText>{subText}</SubText>
                    <LoginBtn>로그인</LoginBtn>
                </TextDiv>
            </MainDiv>
            <SubDiv>
                <MainText2>{mainText2}</MainText2>
            </SubDiv>
            <StepDiv>
                <StepOne>
                    <OneImg src="img/CatholicLogo.png" alt="" />
                    <TextDiv>
                        <StepMainText>{Step1Main}</StepMainText>
                        <StepSubText>{Step1Sub}</StepSubText>
                    </TextDiv>
                </StepOne>
                <StepTwo>
                    <OneImg src="img/step2.png" alt="" />
                    <TextDiv>
                        <StepMainText>{Step2Main}</StepMainText>
                        <StepSubText>{Step2Sub}</StepSubText>
                    </TextDiv>
                </StepTwo>
                <StepThree>
                    <OneImg src="img/step3.png" alt="" />
                    <TextDiv>
                        <StepMainText>{Step3Main}</StepMainText>
                        <StepSubText>{Step3Sub}</StepSubText>
                    </TextDiv>
                </StepThree>
            </StepDiv>
        </Container>
    )
}

export default Home;