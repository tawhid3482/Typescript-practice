{
  /// mapped type
  const arrayOfNumber: number[] = [1, 6, 564, 45, 4, 4];

  const arrayOFString: string[] = arrayOfNumber.map((item) => item.toString());
  console.log(arrayOFString);

  type AreaNumber = {
    h: number;
    w: number;
  };

  type AreaString<T> = {
    [key in keyof T]: T[key]; // look up type
  };
  const area1: AreaString<{ h: string; w: number }> = {
    h: "45",
    w: 45,
  };
}
