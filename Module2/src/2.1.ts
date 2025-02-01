{
    // type assertion

    let Name : any;

    Name = 'kamal';

    Name = 25;
    (Name as string);



type CustomError = {
    message: string
}

    try{

    }catch(error){
        console.log((error as CustomError).message)
    }



}