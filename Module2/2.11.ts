{
  // pick type

  type Person = {
    name: string;
    age: number;
    email?: string;
    cont: string;
  };

  type Name = Pick<Person, "name" | "age">;

  // omit type  omit mane holo name age bade onno gule nibe .
  type contactInfo = Omit<Person, "name" | "age">;

  // required type aita sob optional field kay required kore dibe
  type PersonRese = Required<Person>;

  // Partial type aita required ar biporid

  type PersonPar = Partial<Person>;

  // read only

  type PersonReadonly = Readonly<Person>;

  const Person1: PersonReadonly = {
    name: "ami",
    age: 54,
    // email:'adsg',
    cont: "47512",
  };

  //   Person1.name = "adf";

  // record type
  // type myObj= {
  //     a:string,
  //     b:string
  // }
  type myObj = Record<string, string>;

  const Obg1: myObj = {
    a: "asd",
    b: "agds",
    c: "ag",
  };

  const EmptyObj: Record<string, unknown> = {};
}
