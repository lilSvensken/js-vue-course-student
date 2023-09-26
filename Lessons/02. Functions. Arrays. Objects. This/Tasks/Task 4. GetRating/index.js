const getRating = (object) => {
  const raiting = object.likes - object.dislikes;
  return raiting;
};

export default getRating;