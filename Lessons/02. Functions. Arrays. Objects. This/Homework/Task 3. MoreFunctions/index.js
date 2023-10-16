const moreFunction = (number) => {
    return function (a) {
            for (let i = 0; i < a.length; i++) {
                a[i] = a[i] / number;
            }
            return a;
        }
};

export default moreFunction;