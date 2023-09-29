const getRating = (object) => {
    // Начало
    const {likes, dislikes} = object;
    return likes - dislikes
    // Конец
};

console.log(getRating({likes: 15, dislikes: 5}))