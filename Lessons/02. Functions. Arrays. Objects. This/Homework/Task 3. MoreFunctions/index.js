const moreFunction = (number) => {
    return (answer) => {
        for (let i = 0; i <  answer.length; i++) answer[i] = answer[i] / number;
        return answer;
    }
};

export default moreFunction;