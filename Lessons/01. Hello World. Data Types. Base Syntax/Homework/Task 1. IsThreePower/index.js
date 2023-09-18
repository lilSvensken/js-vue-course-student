const isThreePower = (num) => {
     // Если n меньше или равно 0, возвращаем false
     if (num <= 0) return false;

     // Рассчитываем логарифм числа по основанию 3
     let logBase3 = Math.log(num) / Math.log(3);
     
     // Проверяем, является ли полученное значение близким к целому числу
     return Math.abs(logBase3 - Math.round(logBase3)) < 1e-10;
};

//export default isThreePower;