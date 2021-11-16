import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../features';
// import { ProfileState, editProfile, toggleEdit } from '../../features/profile/slices';
import styled from 'styled-components';
import ProfileTab from '../../components/profile/ProfileTab';
import ProfileImage from '../../components/profile/ProfileImage';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 5%;
`;

const IntroBox = styled.div`
  padding: 4;
  text-align: center;
`;

const ProfilePage = () => {
  const intro = useSelector((state: RootState) => state.profile.intro);
  return (
    <React.Fragment>
      <Container>
        <ProfileImage />
      </Container>
      <Container>
        <IntroBox>{intro}</IntroBox>
        <ProfileTab />
      </Container>
    </React.Fragment>
  );
}

export default ProfilePage;
