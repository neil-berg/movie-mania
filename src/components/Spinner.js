import React from 'react';
import styled, { keyframes } from 'styled-components';

const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
  color: white;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }

`;

const Rotate = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid black;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${rotate} 2s linear infinite;
`;

const Spinner = ({ text }) => (
  <SpinnerContainer>
    <Rotate />
    <p>{text}</p>
  </SpinnerContainer>
);

export default Spinner;
