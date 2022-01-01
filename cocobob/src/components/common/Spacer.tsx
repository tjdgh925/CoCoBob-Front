import styled from 'styled-components';

interface SpacerProps {
  size?: number;
}

const Space = styled.div<SpacerProps>`
  ${(props) => (props.size ? `padding: ${props.size}rem` : `padding: 1rem`)}
`;

const Spacer = ({ size }: SpacerProps) => {
  return <Space size={size} />;
};

export default Spacer;
