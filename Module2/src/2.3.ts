{
  // generic type
  // const nameArray: string [] = ['ami', 'tumi', 'kamla'],
  const nameArray: Array<string> = ["ami", "tumi", "kamla"];
  const RollArray: Array<number> = [15, 6, 6, 65];

  //   reuseable Generic type
  type GenericType<T> = Array<T>;
  const textARray: GenericType<boolean> = [true, false, true, true];
  const RollArray1: GenericType<number> = [15, 6, 6, 65];
  const nameArray1: GenericType<string> = ["ami", "tumi", "kamla"];

  type User = {
    name: string;
    age: number;
  };

  const user: GenericType<User> = [
    {
      name: "ami",
      age: 15,
    },
    {
      name: "kamal",
      age: 1574,
    },
  ];

  // generic tuple

  type GenericTuple<X, Y> = [X, Y];

  const manush: GenericTuple<string, number> = ["ami", 15];

  const userWithId: GenericTuple<number, { name: string; email: string }> = [
    157,
    { name: "asg", email: "aeorgh" },
  ];
}
