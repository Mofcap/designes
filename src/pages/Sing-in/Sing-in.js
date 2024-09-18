import React from "react";
import SignInForm from "../../components/Forms/Sing-in-Form";


function Singin (){
    return(
      <div className="main bg-dark"> 
        <div className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <SignInForm />
   
      </div>
      </div>
    );


}

export default Singin;