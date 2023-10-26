import { useState } from "react";
import { Button } from "src/components/ui/button";
import { Card, CardContent } from "src/components/ui/card";
import { Input } from "src/components/ui/input";
import { Label } from "src/components/ui/label";
import { useToast } from "src/components/ui/use-toast";
import { CreateUserWithEmailAndPassword, googleAuth } from "src/core/services/firebase/authentification";

function Login() {
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {toast} = useToast();

  function handleEmail(event : any) {
    setEmail(event.target.value);
  }

  function connectUser() {
    if(!email || !password) {
        return toast({
            title  : "error",
            description : "kindly fill all  requested fields",
            variant : "destructive"
        })
    }

    CreateUserWithEmailAndPassword(email,password)
  }
  function handlePassword(event : any) {
    setPassword(event.target.value)
  }

  return (
    <div className="ml-[35%] mt-[10%]">
      <Card className=" w-[400px]">
        <CardContent>
          <h1 className="text-center text-3xl mt-8"> Authentification</h1>
          <div className="mt-10">
            <Label>Email</Label>
            <Input value={email} onChange={handleEmail} type="email"></Input>
            <Label>Password</Label>
            <Input value={password} onChange={handlePassword} type="password"></Input>
            <Button className="w-[355px] mt-10" onClick={connectUser}>Login</Button>
            <div className="grid text-center mt-10">
                <div className="row">
                    <Button variant={"destructive"} onClick={googleAuth}>Google +</Button>
                    <Button variant={"outline"} className="ml-2">Github</Button>
                </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;
