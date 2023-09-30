const isSequenceContinuous = (numbers) => {
    if (numbers.length < 2)
        return false;
    for (let j = 0; j < numbers.length - 1; j++)
    {
        if (numbers[j] + 1 !== numbers[j + 1])
        {
            return false;
        }
    }
    return true;
};

export default isSequenceContinuous;