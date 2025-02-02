{
  // interface -generic

  interface Developer<T, X=OnBeforeUnloadEventHandlerNonNull> {
    name: string;
    computer: {
      brand: string;
      model: string;
      year: number;
    };
    watch: T;
    car?: X;
  }

  const poorDev: Developer<string> = {
    name: "adsf",
    computer: {
      brand: "adsfg",
      model: "adsfg",
      year: 45,
    },
    watch: "casio",
  };

  type watchType = { brand: string; model: string; year: number };

  const poorDev2: Developer<watchType, null> = {
    name: "adsf",
    computer: {
      brand: "adsfg",
      model: "adsfg",
      year: 45,
    },
    watch: {
      brand: "apple",
      model: "something",
      year: 45,
    },
  };
}
