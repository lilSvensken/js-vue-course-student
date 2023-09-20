const getBudget = (people) => {
<<<<<<< HEAD
	return people.reduce((a, b) => {
		return a + b.budget;
	}, 0);
=======
    return people.reduce((a, b) => a + b.budget, 0) 
>>>>>>> 8042429 (homework)
};

export default getBudget;
