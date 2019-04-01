import React from 'react';
import styled from 'styled-components';

import { ReactComponent as AwardsSVG } from '../svg/undraw_awards_fieb.svg';

const StyledFooter = styled.footer`
  border-top: 2px solid var(--black);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--black);
`;

const FooterText = styled.p`
  margin: 0 0 0.5em 0;
  color: var(--grey);
  font-size: 0.85em;

  a {
    text-decoration: none;
    color: var(--green);
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <AwardsSVG style={{ width: 100, height: 100 }} />
      <FooterText>
        Data from <a href="https://www.themoviedb.org/">The Movie DB</a>
      </FooterText>
    </StyledFooter>
  );
};

export default Footer;
