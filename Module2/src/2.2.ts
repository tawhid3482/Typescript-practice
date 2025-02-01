{
  // interface

  type User = {
    name: string; // type alias
    age: number;
  };

  type UserWithRoll = User & { roll: number };

  interface User2 {
    name: string; /// aita holo interface
    age: number;
  }

  interface UserWithRoll2 extends User2 {
    role: string;
  }

  const user: UserWithRoll2 = {
    name: "agfl",
    age: 12,
    role: "admin",
  };

  type Roll = number[];
  // array jnno interface use
  interface Roll2 {
    [index: number]: string;
  }

  const rollNumber: Roll2 = ["ami", "tumi"];

  //////  function ar jnnnno interface

  type Add = (num1: number, num2: number) => number;

  interface Adds {
    (num1: number, num2: number): number;
  }

  const add: Adds = (num1, num2) => num1 + num2;
}
