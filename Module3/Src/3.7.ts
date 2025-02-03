{
  // static

  class Counter {
    static count: number = 0;
    static increment() {
      return (Counter.count = Counter.count + 1);
    }
    static  decrement(){
        return (Counter.count = Counter.count - 1)
    }
  }


  const increment1 = new Counter()
  console.log(Counter.increment())
  console.log(Counter.increment())

//   const increment2 = new Counter()
//   console.log(increment2.increment())

//   const increment3= new Counter()
//   console.log(increment3.increment())

}
