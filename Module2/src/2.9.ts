{
     // condition type

     type ami = number
     type tumi = undefined

     type x  = ami extends null ? true : false

     type y = ami extends null ? true : tumi extends undefined ? undefined : any

 
type Rich = {
    bike:string,
    car:string,
    ship:string,
    plane:string
}

type checkVehicle<T> = T extends keyof Rich ? 'rich':'poor'  

type hasAny = checkVehicle<"bicycle">




}