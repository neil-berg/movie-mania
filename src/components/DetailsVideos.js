import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getVideos } from '../helper';

const VideoContainer = styled.div`
  display: flex;
  overflow: scroll;
  justify-content: space-between;
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

  return (
    <div style={{ background: 'var(--black)' }}>
      <h2
        style={{
          margin: '0',
          padding: '0.5em',
          color: 'white',
          textAlign: 'center'
        }}
      >
        Videos
      </h2>
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
