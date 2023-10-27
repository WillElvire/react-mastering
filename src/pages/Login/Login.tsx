
import { useState } from "react";
import { Button } from "src/components/ui/button";
import LoginForm from "src/template/components/forms/LoginForm";
import RegisterForm from "src/template/components/forms/RegisterForm";

function Login() {
 
  const [isClicked , setIsClicked ] = useState(false);

  function handleClicked(event : any) {
     setIsClicked((oldState)=> !oldState)
  }
  return (
    <div >
      {
        isClicked ? <RegisterForm></RegisterForm>  : <LoginForm></LoginForm>
      }
      <div className="text-center mt-10">
      <Button variant={"ghost"} onClick={handleClicked} > {!isClicked ? "Vous n'avez pas de compte ? Inscrivez vous " : " Vous avez un compte , Connectez vous"}</Button>
      </div>
   
    </div>
  );
}

export default Login;
