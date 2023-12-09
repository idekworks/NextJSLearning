'use client';

export default function Page() {
 type Option<T> = {
   tag: 'some';
   value: T;
 } | {
   tag: 'nothing';
 };

 function getOptionValue(data: Option<number>): void {
   if (isSome(data.tag)){
   console.log(data.value);
   }
 }

 function isSome(tag: string): boolean {
   return tag === 'some' ? true : false;
 }

 const some: Option<number> = {
  tag: 'some',
  value: 9999999999,
 }

 const nothing: Option<number> = {
    tag: 'nothing',
 }

getOptionValue(some);
getOptionValue(nothing);

 return (
  <div>
  Union
  </div>
 )
}
