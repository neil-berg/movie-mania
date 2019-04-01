export const nowPlayingDates = () => {
  const currentDate = new Date(Date.now());
  const oneMonthAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
  const currentDateStr = `${currentDate.getFullYear()}-${currentDate.getMonth() +
    1}-${currentDate.getDate()}`;
  const oneMonthAgoStr = `${oneMonthAgo.getFullYear()}-${oneMonthAgo.getMonth() +
    1}-${oneMonthAgo.getDate()}`;

  return [oneMonthAgoStr, currentDateStr];
};
