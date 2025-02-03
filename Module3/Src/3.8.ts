{
  // polymorphism

  class Person {
    getSleep() {
      console.log("sleep 8 hours");
    }
  }
  class Student extends Person {
    getSleep() {
      console.log("sleep 6 hours");
    }
  }

  const getSleepingHours = (T: Person) => {
    T.getSleep();
  };

  const person1 = new Person();
  const person2 = new Student();

  getSleepingHours(person2);

  class Shape {
    getArea(): number {
      return 0;
    }
  }

  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius
    }

  }
  class Reactangle extends Shape {
    w: number;
    h: number;
    constructor(w: number, h:number) {
      super();
      this.w = w;
      this.h = h;
    }

    getArea(): number {
        return this.h * this.w
    }

  }

  const getShapeArea = (T:Shape)=>{
    console.log(T.getArea())
  }

  const shape1 = new Shape()
  const shape2 = new Circle(12)
  const shape3 = new Reactangle(15,45)

  getShapeArea(shape3)





}
