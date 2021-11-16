import React from 'react';

type His = {
  name: string;
  rating: string;
};

type HisProps = {
  history: His[];
};

const ProfileHis = ({ history }: HisProps) => {
  return (
    <div>
      {history.map((his) => (
        <div>
          {his.name} | {his.rating}
        </div>
      ))}
    </div>
  );
};

export default ProfileHis;
