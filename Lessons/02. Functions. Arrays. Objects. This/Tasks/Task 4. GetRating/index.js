const getRating = (object) => {
    // Начало
    const [first, second] = [object.likes, object.dislikes];
    return first - second;
    // Конец
};

export default getRating;