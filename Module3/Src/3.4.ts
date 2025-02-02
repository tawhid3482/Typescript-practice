{
  // instanceof guard

  class Animal {
    constructor(public name: string, public sound: string) {}

    makeSound() {
      console.log(`sound sound:${this.sound}`);
    }
  }

  class Dog extends Animal {
    constructor(name: string, sound: string) {
      super(name, sound);
    }
    makeBark() {
      console.log("iam barking");
    }
  }
  class Cat extends Animal {
    constructor(name: string, sound: string) {
      super(name, sound);
    }
    makeMeaw() {
      console.log("iam Meawing");
    }
  }

  // smart way handle korte chaile function use kora hy

  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };
  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  const getAnimal = (animal: Animal) => {
    if ( //animal instanceof Dog 
        isDog(animal)
    ) {
      animal.makeBark();
    } else if (
        //animal instanceof Cat
        isCat(animal)) {
      animal.makeMeaw;
    } else {
      animal.makeSound();
    }
  };

  const dog = new Dog("dog", "ghaw");

  const cat = new Cat("cat", "maw");

  cat.makeMeaw();
  getAnimal(dog);
}
