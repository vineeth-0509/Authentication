export const errorHandler=(statusCode,message)=>{
    //here Error is an javascript constructor and a custom error which throws the error
    const error=new Error();
    error.statusCode=statusCode;
    error.message=message;
    return error;
}