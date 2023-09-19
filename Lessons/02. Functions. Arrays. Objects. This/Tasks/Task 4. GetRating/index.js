const getRating = (object) => {
  // Начало
  const [like, dislike] = [object.likes, object.dislikes];
  return like - dislike;
  // Конец
};

export default getRating;
