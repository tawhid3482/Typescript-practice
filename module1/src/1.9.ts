{
  // type alias
  type Student = {
    name: string;
    gender: string;
    roll: number;
    contact?: number;
  };

  const sutdent1: Student = {
    name: "ami",
    gender: "amle",
    roll: 564,
  };

  const sutdent2: Student = {
    name: "tumi",
    gender: "female",
    roll: 446,
    contact: 6265663615,
  };

  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;
}
