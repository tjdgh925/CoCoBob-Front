import React from 'react';

type InfoProps = {
  name: string;
  age: number;
  rating: string;
};

const ProfileInfo = ({ name, age, rating }: InfoProps) => {
  return (
    <div>
      {name} / {age} / {rating}
    </div>
  );
};

export default ProfileInfo;
