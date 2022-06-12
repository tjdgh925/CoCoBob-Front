import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import React from 'react';

const ErrorBlock = styled.h2`
  padding: 1px;
  color: ${palette.error};
  text-align: center;
`;
interface Props {
  children: React.ReactChild;
}

const ErrorMessage = ({ children }: Props) => {
  return <ErrorBlock>{children}</ErrorBlock>;
};

export default ErrorMessage;
