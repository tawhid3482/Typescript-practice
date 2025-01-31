const user: {
  name: string;
  photo: string;
  age: number;
  IsMale: boolean;
  IsMarried?: boolean; // optional type
  profession:'developer', // type -> literal types
} = {
  name: "kabir ",
  photo: "ghsrergfddgfgng.png",
  age: 15,
  IsMale: false,
  profession:'developer'
};


user.IsMale=true