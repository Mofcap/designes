import React from "react";
import SignInForm from "../../components/Forms/Sing-in-Form";


function Singin (){
    return(
        <div class="sign-in-content">
        <i class="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <SignInForm />
   
      </div>
    );


}

export default Singin;