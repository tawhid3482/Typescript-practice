{
  // type guards

  // typeof --> type guard

  type Alphaneumeric = string | number;

  const Add = (T: Alphaneumeric, U: Alphaneumeric) => {
    if (typeof T === "number" && typeof U === "number") {
      return T + U;
    } else {
      return T.toString() + U.toString();
    }
  };

  const res =  Add(2,'47')
  console.log(res)


  // in guard use on object

  type Normal = {
    name:string
  }
  type Admin = {
    name:string;
    role:string
  }

const getUser = (user:Normal | Admin)=>{
    if('role' in user){
        console.log("i'm admin")
    }else{
        console.log("i'm user only")
    }
}

const normal:Normal ={
    name:'akafds'
}
const admin:Admin = {
    name:'asgd',
    role:"admin"
}
getUser(normal)

}
