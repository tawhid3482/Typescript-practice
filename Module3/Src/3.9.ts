{
  //abstraction  : 1. interface 2. abstract

  // idea
  interface Vehicle {
    start(): void;
    stop(): void;
    move(): void;
  }

  // real implementation
  class Car implements Vehicle {
    start(): void {
      console.log("start car");
    }
    stop(): void {
      console.log("stop car");
    }
    move(): void {
      console.log("moving");
    }

    test(): void {
      console.log("sorto poron hobar por daya jabe");
    }
  }

  const toyota = new Car();
  toyota.start();

  // abstract class

  // idea
  abstract class Car1 implements Vehicle {
    abstract start(): void;
    abstract stop(): void;
    abstract move(): void;
    test(): void {
      console.log("sorto poron hobar por daya jabe");
    }
  }

  class MarcityCAr extends Car1 {
    start(): void {
        console.log("start car");
      }
      stop(): void {
        console.log("stop car");
      }
      move(): void {
        console.log("moving");
      }
  }

  
  


}
