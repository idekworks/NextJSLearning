'use client';

export default function Page() {

for (let i = 1; i <= 100; i++) {
  const message = getFizzBuzzString(i);
  console.log(message);
}

const data = [1, 2, 3, 5, 8, 13];
const result = map(data, (x: number) => x * 10);
console.log(result);
const result2 = map_ans<number, number>(data, (x: number) => x * 10);
console.log(result2);

 return (
 <div>
 FizzBuzzLog

 </div>
 )
}

 function getFizzBuzzString(i: number) {
  if (i % 3 === 0 && i % 5 === 0) {
      return('FizzBuzz');
  } else if (i % 3 === 0) {
      return('Fizz');
  } else if (i % 5 === 0) {
      return('Buzz');
  } else {
      return(i);
  }
 }

 function map(array: number[], callback: Function): number[] {
   const result: number[] = [];
   array.map(i =>  result.push(callback(i)))
   //result.push(callback(array));
   return result;
 }

 function map_ans<T, U>(array: T[], callback: (value: T) => U): U[] {
  const result: U[] = [];
  for (const eim of array) {
    result.push(callback(eim));
  }
  return result;
 }
