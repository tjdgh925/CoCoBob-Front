import React, { useState } from 'react';
import styled from 'styled-components';

const ProfileImg = styled.img`
  position: relative;
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 50%;
  display: inline-block;
`;

const ProfileImage = () => {
  return (
    <div>
      <ProfileImg src="img/profileimage.png" alt="" width="100" />
    </div>
  );
};

export default ProfileImage;
