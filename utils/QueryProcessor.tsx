export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.includes("What is your Andrew Id?")) {
    return (
      "ali4"
    );
 }
const add = query.match(/What is (\d+) plus (\d+)/);
  
if (add) {
     const x: number = parseInt(add[1]);
     const y: number = parseInt(add[2]);
return (x+y).toString();
  }

const mult = query.match(/What is (\d+) multiplied by (\d+)/);
if (mult) {
 const x: number = parseInt(mult[1]);
 const y: number = parseInt(mult[2]);
return (x*y).toString();
}
const prime  = query.match(/Which of the following numbers are primes:(\d+),(\d+),(\d+),(\d+),(\d+)/);
function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false; 
    }
  }
  return true;
}
if (prime) {
  const tested = "";
  for(let i = 1;i < prime.length; i++) {
    if(isPrime(prime[i]) {
      tested += prime[i].toString();
    }
  }
  return tested;
}
  
return "";
}

