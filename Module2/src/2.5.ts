{
  // function generic

  const funGen = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = funGen<string>('adsf')

  const funGenTuple = <T,Q>(param1: T,param2:Q): [T,Q] => {
    return [param1,param2];
  };

  const res2 = funGenTuple<string,number>('adsf',45)

}
