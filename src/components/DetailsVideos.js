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
  justify-content: ${props =>
    props.videoList.length > 1 ? 'space-between' : 'center'}
  padding-bottom: 1em;
  border-bottom: 1px lightgrey solid;
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
