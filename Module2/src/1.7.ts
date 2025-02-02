{
  // generic constraint with keyof operator
  // keyof vehicle ke niye union type create korbe

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type OwnerManually = "bike" | "car" | "ship";

  type Owner = keyof Vehicle;
  //   const person : Owner = "car"

  const user = {
    name: "asgd",
    age: 45,
  };

  user.age; // 2 r same
  user["age"];

  // 
  const property = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };
  const user2 = {
    name: "asgd",
    age: 45,
  };

  const result1 = property(user2, "age");
}
