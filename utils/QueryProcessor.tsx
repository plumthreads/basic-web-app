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
     const x: num = parseInt(add[1]);
     const y: num = parseInt(add[2]);
return (x+y).toString();
  }

const mult = query.match(/What is (\d+) multiplied by (\d+)/);
if (mult) {
 const x: num = parseInt(mult[1]);
 const y: num = parseInt(mult[2]);
return (x*y).toString();
}  
return "";
}
