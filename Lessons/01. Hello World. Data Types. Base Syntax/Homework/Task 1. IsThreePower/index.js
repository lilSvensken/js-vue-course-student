const isThreePower = (num) => 
{
    let x = 1;
    while (x < num)
    {
        x *= 3;
    }
    return (x == num);
};

export default isThreePower;