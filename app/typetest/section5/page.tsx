'use client';

export default function Page() {
  class User {
    readonly name: string;
    readonly age: number;

    constructor(name: string, age: number) {
        if (name === '') {
            throw new Error('name is empty!!');
        }
        this.name = name;
        this.age = age;
    }

    getMessage(msg: string){
     return `${this.name} (${this.age}) say ${msg}`;
    };

  }
  const uhyo = new User('uhyo' ,26);
  console.log(uhyo.getMessage('hello'));
  return (
  <div>
    obj transform class
  </div>
  )
}
