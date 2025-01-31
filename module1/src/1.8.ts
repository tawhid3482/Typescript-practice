// destructuring

{
  const user = {
    id: 123,
    name: {
      firstName: "kjal",
      lastName: "dkajfd",
    },
    age: 25,
    contactNo: "685+5+6",
    address: "canada",
  };

  const { contactNo , name:{lastName}} = user;


  // array des

  const myFriends = ['chandler','joey','ross','rachel','kamal']
  
  const [, , fr, ...rest]=myFriends



}
