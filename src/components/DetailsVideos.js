import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getVideos } from '../helper';

const SubHeader = styled.h3`
  margin: 0;
  padding: 0.5em;
  color: var(--green);
  text-align: center;
  font-size: 1.25em;
`;

const VideoContainer = styled.div`
  display: flex;
  overflow: scroll;
  justify-content: space-between;
  padding-bottom: 1em;

  @media screen and (min-width: 700px) {
    justify-content: center;
  }
`;

const StyledVideo = styled.iframe`
  width: 350px;
  height: 100%;
  frameborder: 0;
  margin: 0.5em;
`;

const DetailsVideos = ({ movie }) => {
  const videos = getVideos(movie);
  const videoList = videos.map(video => {
    return (
      <StyledVideo
        key={video.key}
        src={`https://www.youtube.com/embed/${video.key}`}
      />
    );
  });

  if (videos.length === 0) {
    return null;
  }

  return (
    <div style={{ background: 'var(--black)' }}>
      <SubHeader>Videos</SubHeader>
      <VideoContainer>{videoList}</VideoContainer>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    movie: state.selectedMovie
  };
};

export default connect(mapStateToProps)(DetailsVideos);
