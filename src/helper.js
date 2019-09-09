import numeral from 'numeral';
import moment from 'moment';

export const nowPlayingDates = () => {
  const currentDate = new Date(Date.now());
  const oneMonthAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
  const currentDateStr = moment(currentDate).format('YYYY-MM-DD');
  const oneMonthAgoStr = moment(oneMonthAgo).format('YYYY-MM-DD');
  return [oneMonthAgoStr, currentDateStr];
};
export const comingSoonDates = () => {
  const currentDate = new Date(Date.now());
  const oneMonthFromNow = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
  const currentDateStr = moment(currentDate).format('YYYY-MM-DD');
  const oneMonthFromNowStr = moment(oneMonthFromNow).format('YYYY-MM-DD');
  return [currentDateStr, oneMonthFromNowStr];
};

// Shorten long movie summaries to the first 20 words
export const overviewSnippet = overview => {
  const words = overview.split(' ');
  const snippet =
    words.length > 20
      ? words
          .slice(0, 20)
          .concat('...')
          .join(' ')
          .replace(/\s\.\.\./, '...')
      : words.join(' ');
  return snippet;
};

// Format the release date as Mon DD YYYY
export const formatReleaseDate = date =>
  moment(date, 'YYYY-MM-DD').format('MMM D YYYY');

export const formatBirthDeathDate = date =>
  moment(date, 'YYYY-MM-DD').format('MMMM Do, YYYY');

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
  moment(movie.release_date, 'YYYY-MM-DD').format('YYYY');

export const getCertification = movie => {
  try {
    const certificate = movie.release_dates.results
      .filter(item => item.iso_3166_1 === 'US')[0]
      .release_dates.filter(item => item.certification !== '')[0].certification;
    return certificate;
  } catch (err) {
    return 'NA';
  }
};

export const getGenres = movie => {
  try {
    return movie.genres
      .map(item => item.name)
      .slice(0, 2)
      .join(', ');
  } catch (err) {
    return 'NA';
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

    return [...trailers, ...teasers, ...clips, ...featurettes].slice(0, 5);
  } catch (err) {
    return [];
  }
};

export const getVoteCount = movie => {
  try {
    return Number(movie.vote_count).toLocaleString();
  } catch (err) {
    return 'NA';
  }
};

export const getBudgetAndRevenue = movie => {
  try {
    const budget = numeral(movie.budget)
      .format('0a')
      .toUpperCase();
    const revenue = numeral(movie.revenue)
      .format('0a')
      .toUpperCase();
    return [budget, revenue];
  } catch (err) {
    return ['NA', 'NA'];
  }
};

export const getFeaturedCast = cast => {
  try {
    return cast.slice(0, 10);
  } catch (err) {
    return [];
  }
};

export const getDirectors = crew => {
  try {
    return crew
      .filter(item => item.job === 'Director')
      .map(item => item.name)
      .join(', ');
  } catch (err) {
    return [];
  }
};

export const getWriters = crew => {
  try {
    return crew
      .filter(item => item.job === 'Writer')
      .map(item => item.name)
      .join(', ');
  } catch (err) {
    return [];
  }
};

export const getSearchValue = movie => {
  try {
    return movie.values.title;
  } catch (err) {
    return '';
  }
};

export const getGenreKey = genre => {
  const genreToKey = {
    action: 28,
    adventure: 12,
    animation: 16,
    comedy: 35,
    crime: 80,
    documentary: 99,
    drama: 18,
    family: 10751,
    fantasy: 14,
    horror: 27,
    music: 10402,
    mystery: 9648,
    romance: 10749,
    scifi: 878,
    thriller: 53
  };

  return genreToKey[genre];
};

export const createMovieSlug = movie =>
  `/movie/${movie.id}-${movie.title
    .toLowerCase()
    .replace(/[.,:;?!-'"/]/gi, '')
    .split(' ')
    .join('-')}`;

export const createPersonSlug = person =>
  `/person/${person.id}-${person.name
    .toLowerCase()
    .replace(/[.,:;?!-'"/]/gi, '')
    .split(' ')
    .join('-')}`;
