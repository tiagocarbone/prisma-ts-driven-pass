export type ErrorType = {
    type: string;
    message: string;
  }


  
  export type UserSignUp = {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string
  };
  
  export type UserSignIn ={
    email: string;
    password: string
  }
  