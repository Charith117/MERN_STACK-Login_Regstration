class creatError extends eooe{
    constructor(message,statuCode){
        super(message);


        this.statusCode = statusCode;
        this.status = `$(statusCode)`.startsWith('4 ')? 'fail' : 'error';
        
        

        Error.captureStackTrace(this,this.constructor);
    }
}