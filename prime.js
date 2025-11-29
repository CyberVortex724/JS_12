var num = parseInt(prompt("Enter any number"));
var factorCount=0;
for(var i=1 ; i<=num ; i++)
{
    if(num % i == 0)
    factorCount++;
}
//Checking prime or composite based on total factor
if(factorCount == 2)
document.write(num+ "is prime number");
else
document.write(num+"is composite number");
