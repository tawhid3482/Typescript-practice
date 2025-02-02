{
  // inheritance

  class ParentsClass {
    constructor(public name: string, public age: number) {}

    CallFriend(sleep: number) {
      console.log(`My Friend ${this.name} age ${this.age} sleep:${sleep} `);
    }
  }

  class Friend extends ParentsClass {
    constructor(public name: string, public age: number) {
      super(name, age);
    }
  }

  const freind1 = new Friend("sakib", 45);
  const freind2 = new Friend("rakib", 25);

  freind2.CallFriend(4);

  class Teacher extends ParentsClass {
    constructor(
      public name: string,
      public age: number,
      public retired: string
    ) {
      super(name, age);
    }

    takeRetried(retired: string) {
      console.log(`My Teacher ${this.name} age ${this.age} retried:${retired} `);
    }
  }

  const teacher1 = new Teacher("sakib", 45, "no");
  const teacher2 = new Teacher("rakib", 25, "yes");

  teacher1.takeRetried('yes');
}
