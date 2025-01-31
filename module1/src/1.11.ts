{

    const age:number = 18

    if(age >= 18){
        console.log('adult')
    }else{
        console.log('not adult')
    }

// ternary operator
    const isAdult = age >= 18 ? 'adult': 'not adult'
    console.log({isAdult})


// nullish coalescing operator
// it's work only null and undefined
const isAuth  = null
const result1 = isAuth ?? "guest"
console.log(result1)

}