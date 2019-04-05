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
    words.length > 25
      ? words
          .slice(0, 25)
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
