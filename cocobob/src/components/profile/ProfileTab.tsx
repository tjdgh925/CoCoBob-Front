import React, { useState } from 'react';
import styled from 'styled-components';
import ProfileInfo from './ProfileInfo';
import ProfileHis from './ProfileHis';
import { RootState } from '../../features';
import { useDispatch, useSelector } from 'react-redux';
import { editProfile } from '../../features/profile/slices';

const Wrapper = styled.div`
  width: 100%;
`;
const Tabs = styled.button<{ selected: boolean }>`
  border: none;
  background-color: rgba(0, 0, 0, 0);
  --webkit-appearance: none;
  --moz-appearance: none;
  appearance: none;
  display: inline-block;
  text-align: center;
  width: auto;
  font-size: 1rem;
  border-bottom: ${(props) =>
    props.selected === true ? '2px #817e7e solid' : 'none'};
`;
const Editbutton = styled.button`
  margin-left: 70%;
`;

const ProfileTab = () => {
  const [tab, setTab] = useState<number>(0);
  const [infoSelected, setInfoSelected] = useState<boolean>(true);
  const [hisSelected, setHisSelected] = useState<boolean>(false);
  const clickHandler = (tabId: number) => {
    setTab(tabId);
  };
  const name = useSelector((state: RootState) => state.profile.name);
  const age = useSelector((state: RootState) => state.profile.age);
  const rating = useSelector((state: RootState) => state.profile.rating);
  const history = useSelector((state: RootState) => state.profile.history);
  const dispatch = useDispatch();
  const testFunction = () => {
    dispatch(editProfile('hello'));
  };

  return (
    <Wrapper>
      <Tabs
        onClick={() => {
          clickHandler(0);
          setInfoSelected(!infoSelected);
          setHisSelected(!hisSelected);
        }}
        selected={infoSelected}
      >
        Information
      </Tabs>
      <Tabs
        onClick={() => {
          clickHandler(1);
          setInfoSelected(!infoSelected);
          setHisSelected(!hisSelected);
        }}
        selected={hisSelected}
      >
        History
      </Tabs>
      <Editbutton type="button" onClick={testFunction}>
        Edit
      </Editbutton>
      <div className="contents">
        {tab === 0 ? (
          <ProfileInfo name={name} age={age} rating={rating} />
        ) : (
          <ProfileHis history={history} />
        )}
      </div>
    </Wrapper>
  );
};

export default ProfileTab;
