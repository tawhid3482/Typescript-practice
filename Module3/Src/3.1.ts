{

    // OOP Class


  class Animal {
    // name: string;
    // sound: string;

      // parameter properties
    constructor(public name: string, public sound: string) {
    //   this.name = name;
    //   this.sound = sound;
    }

    makeSound(){
        console.log(`the ${this.name} says ${this.sound}`)
    }

  }

  const dog = new Animal('kotta','ghew')
  const cat = new Animal('billay','maw')
  dog.makeSound()

  


}
