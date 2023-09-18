const getBoomerangsCount = (numbers) => {
     let count = 0;
  for(let i = 0; i < numbers.length-2; i ++){
    if((numbers[i]===numbers[i+2]) && numbers[i]!=numbers[i+1]){
      count ++;
    }
  }
  return count;
};
export default getBoomerangsCount;

/* #### Задание

Реализуйте функцию, которая возвращает количество бумерангов в массиве.

### Теория

Бумеранг — деревянная метательная палица. В программировании бумеранг - массив из 3-х
чисел, первое и последнее из которых равны между собой, а среднее отличается.