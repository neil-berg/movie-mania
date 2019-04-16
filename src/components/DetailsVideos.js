import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getVideos } from '../helper';

const SubHeader = styled.h3`
  margin: 0;
  padding: 1em 0em 0.75em 1em;
  color: white;
  text-align: left;
  font-size: 1.2em;
  font-weight: 400;

  @media screen and (min-width: 450px) {
    text-align: center;
  }
`;

const VideoContainer = styled.div`
  display: flex;
  overflow: scroll;
  padding-bottom: 2em;
  border-bottom: 1px grey solid;
`;

const StyledVideo = styled.iframe`
  width: 350px;
  height: 100%;
  frameborder: 0;
`;

const DetailsVideos = ({ movie }) => {
  const videos = getVideos(movie);
  const videoList = videos.map(video => {
    return (
      <div style={{ padding: '0 0.5em', margin: '0 auto' }} key={video.key}>
        <StyledVideo src={`https://www.youtube.com/embed/${video.key}`} />
      </div>
    );
  });

  if (videos.length === 0) {
    return null;
  }

  return (
    <div>
      <SubHeader>Videos</SubHeader>
      <VideoContainer videoList={videoList}>{videoList}</VideoContainer>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    movie: state.selectedMovie
  };
};

export default connect(mapStateToProps)(DetailsVideos);
