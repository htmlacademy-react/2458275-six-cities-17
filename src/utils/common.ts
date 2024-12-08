const getRatingStarsCount = (rating: number): string => {
  const ratingProcents = `${Math.round(rating) * 20}%`;
  return ratingProcents;
};

export {getRatingStarsCount};
