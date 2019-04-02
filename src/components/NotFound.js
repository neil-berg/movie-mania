import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Logo } from '../svg/undraw_may_the_force_bgdm.svg';

const SVGContainer = styled.div`
  height: 100%
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NotFound = () => {
  return (
    <SVGContainer>
      <p>This page doesn't exist!</p>
      <Logo style={{ width: 400, height: 400 }} />
      <p>Still, may the force be with you.</p>
    </SVGContainer>
  );
};

export default NotFound;
