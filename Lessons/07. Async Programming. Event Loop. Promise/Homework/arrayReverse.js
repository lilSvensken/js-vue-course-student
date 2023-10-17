const arr = [1, 2, 3, 4, 5];
// console.log(arr.reverse());

let arrReversed = []
for (let i = arr.length - 1; i >= 0; i--) {
    arrReversed.push(arr[i]);
}

// console.log(arrReversed);

let arrReversed2 = arr.reduce((acc,current) => {
    return [current, ...acc];
}, [])

console.log(arrReversed2);

const arrayReverse = (arr) => {
    return arr.reduce((acc, current) => {
        const newArr = [current, ...acc];
        return newArr
    }, [])
}

console.log(arrayReverse([1, 2, 3, 4, 5]));