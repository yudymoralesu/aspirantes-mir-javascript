function sum(number)
{
    let i = 0;
    let counter=1;
    while (i < number)
    {
        counter = counter+i;
        i = i+1;
    }
    console.log (+counter);
}
console.log(sum(4)); // 1 + 2 + 3 + 4 = 10
console.log(sum(10)); // 55
console.log(sum(15)); // 120