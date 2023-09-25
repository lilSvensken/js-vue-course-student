const getRating = (object) => {
  // Начало
  const {like, dislike} = object;
  return like - dislike;
  // Конец
};

export default getRating;
