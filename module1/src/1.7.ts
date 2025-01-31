{
  // spread operator
  // rest operator
  // destructuring

  // learn spread operator

  const friend: string[] = ["ami", "tumi", "kal"];
  const friend2: string[] = ["ami", "tumi", "kal"];

  friend.push(...friend2);


  const students = {
    name:'kabir',
    name2:'sakib',
    name3:"jamal"
  }
  const students2 = {
    name4:'kabir',
    name5:'sakib',
    name6:"jamal"
  }

  const studentsList = {
    ...students,
    ...students2
  }

  // learn rest operator

  const greetFriends = (...friends:string[] )=>{
    friends.forEach((frd:string)=>console.log(`hi ${frd}`))
  }

  greetFriends('ami','tumi','jamal')

}
