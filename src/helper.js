export const nowPlayingDates = () => {
  const currentDate = new Date(Date.now());
  const oneMonthAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
  const currentDateStr = `${currentDate.getFullYear()}-${currentDate.getMonth() +
    1}-${currentDate.getDate()}`;
  const oneMonthAgoStr = `${oneMonthAgo.getFullYear()}-${oneMonthAgo.getMonth() +
    1}-${oneMonthAgo.getDate()}`;

  return [oneMonthAgoStr, currentDateStr];
};
export const comingSoonDates = () => {
  const currentDate = new Date(Date.now());
  const oneMonthFromNow = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
  const currentDateStr = `${currentDate.getFullYear()}-${currentDate.getMonth() +
    1}-${currentDate.getDate()}`;
  const oneMonthFromNowStr = `${oneMonthFromNow.getFullYear()}-${oneMonthFromNow.getMonth() +
    1}-${oneMonthFromNow.getDate()}`;

  return [currentDateStr, oneMonthFromNowStr];
};

// Shorten long movie summaries to the first 25 words
export const overviewSnippet = overview => {
  const words = overview.split(' ');
  const snippet =
    words.length > 20
      ? words
          .slice(0, 20)
          .concat('...')
          .join(' ')
      : words.join(' ');
  return snippet;
};

// Format the release date as Mon DD YYYY
export const formatDate = date =>
  new Date(date)
    .toString()
    .split(' ')
    .slice(1, 4)
    .join(' ');

// Set green/yellow/red icon colors based on score
export const ratingToColor = rating => {
  let color = '';
  if (rating >= 7.5) {
    color = 'var(--green)';
  } else if (rating >= 5.1 && rating < 7.5) {
    color = 'var(--yellow)';
  } else if (rating < 5 && rating >= 0.1) {
    color = 'var(--red)';
  } else {
    color = 'lightgrey';
  }
  return color;
};

export const getReleaseYear = movie =>
  new Date(movie.release_date).getFullYear();

export const getCertification = movie => {
  try {
    const certificate = movie.release_dates.results
      .filter(item => item.iso_3166_1 === 'US')[0]
      .release_dates.filter(item => item.certification !== '')[0].certification;
    return certificate;
  } catch (err) {
    return undefined;
  }
};

export const getGenres = movie => {
  try {
    return movie.genres
      .map(item => item.name)
      .slice(0, 2)
      .join(',');
  } catch (err) {
    return undefined;
  }
};

export const getVideos = movie => {
  try {
    const trailers = movie.videos.results.filter(
      item => item.type === 'Trailer'
    );
    const teasers = movie.videos.results.filter(item => item.type === 'Teaser');
    const clips = movie.videos.results.filter(item => item.type === 'Clip');
    const featurettes = movie.videos.results.filter(
      item => item.type === 'Featurette'
    );

    return [...trailers, ...teasers, ...clips, ...featurettes].slice(0, 4);
  } catch (err) {
    return undefined;
  }
};
