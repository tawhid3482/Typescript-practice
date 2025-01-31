{
  // nullable types

  const searchname = (value: string | null) => {
    if (value) {
      console.log("searching");
    } else {
      console.log("no search");
    }
  };

  searchname(null);

  ///////// unknown type

  const speedCheck = (value: unknown) => {
    if (typeof value === "number") {
      const convertSpeed = (value * 1000) / 3600;
      console.log(`speed is ${convertSpeed}`);
    } else if (typeof value === "string") {
      const [result, unit] = value.split(" ");
      console.log(result);
      const convertSpeed = (parseFloat(result) * 1000) / 3600;
      console.log(`speed is ${convertSpeed}`);
    } else {
      console.log("no speed");
    }
  };

  speedCheck("25 km");

  /// never type

  function throwError(msg: string): never {
    throw new Error(msg);
  }

  throwError("muskil he bhai");
}
