const roundAndRootNumber = (num) => {
    if (num < 0) return 'error'
    return Math.floor(Math.sqrt(num) * 100 ) / 100 + ''
};

export default roundAndRootNumber;