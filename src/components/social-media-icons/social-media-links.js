import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

import { device } from '../../../static/media-query-sizes.js';

import { useStaticQuery, graphql } from 'gatsby';

import { globalThemeColour } from '../../assets/globalStyleConstants.js';

import GithubLogo from './github-logo.js';
import LinkedinLogo from './linkedin-logo.js';
import EmailContactIcon from './email-contact-icon.js';

const SocialMediaLinks = ({ enableDarkMode }) => {
  const contactInfo = useStaticQuery(graphql`
    query ContactInfoQuery {
      site {
        siteMetadata {
          contactInfo {
            email
            github
            linkedin
          }
        }
      }
    }
  `);

  return (
    <SocialMediaLinksContainer enableDarkMode={enableDarkMode}>
      <a target="_blank" href={contactInfo.site.siteMetadata.contactInfo.github}>
        {' '}
        <GithubLogo colour={globalThemeColour} />
      </a>

      <a target="_blank" href={contactInfo.site.siteMetadata.contactInfo.linkedin}>
        <LinkedinLogo colour={globalThemeColour} />
      </a>

      <a target="_blank" href={`mailto:${contactInfo.site.siteMetadata.contactInfo.email}Subject=Hey%20Shabaz`}>
        <EmailContactIcon colour={globalThemeColour} />
      </a>
    </SocialMediaLinksContainer>
  );
};

export default SocialMediaLinks;

const SocialMediaLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;

  /* Align links to bottom of header */
  position: absolute;
  bottom: 40px;

  & > *:not(:first-child) {
    margin-top: 30px;
  }

  @media ${device.laptop} {
    position: fixed;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    border: ${(props) => (props.enableDarkMode ? `1px ${globalThemeColour} solid` : 'none')};
    box-shadow: 10px 0 50px 0 rgba(0, 0, 0, 0.05);
    background-color: ${(props) => (props.enableDarkMode ? '#2d2d2d' : '#FFFFFF')};
    bottom: unset;
    top: 10px;
    right: 10px;
    padding: 10px 10px 8px 10px;
    z-index: 1;

    & > * {
      margin: 0;
      margin-right: 20px;
    }

    & > *:not(:first-child) {
      margin-top: 0;
    }

    /* Adjust margin of Linkedin icon  */
    & > *:last-child {
      margin-top: 2px;
      margin-right: 0;
    }
  }
`;
