import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "src/components/ui/button";
import { Card, CardContent } from "src/components/ui/card";
import { Input } from "src/components/ui/input";
import { Label } from "src/components/ui/label";
import { useToast } from "src/components/ui/use-toast";
import { CreateUserWithEmailAndPassword, SignWithEmailAndPassword, googleAuth } from "src/core/services/firebase/authentification";
import { addToStorage } from "src/core/services/storage/storage";
import { authenticate } from "src/redux/userSlice";

function LoginForm () {
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {toast} = useToast();
    const dispatch = useDispatch()
  
    function handleEmail(event : any) {
      setEmail(event.target.value);
    }
  
    async function auth20() {
      const response = await googleAuth();
      if(!!response?.email){
        dispatch(authenticate(response));
        addToStorage({key : "user" , value : response})
        return toast({
          title  : "success",
          description : "Account successfully created",
          variant : "default"
        })
      }
    }
  
    async function connectUser() {
      if(!email || !password) {
          return toast({
              title  : "error",
              description : "kindly fill all  requested fields",
              variant : "destructive"
          })
      }
  
      if(/^[A-Z0-9+_.-]+@[A-Z0-9.-]+$/.test(email)) {
        return toast({
          title  : "error",
          description : "field does'nt match email",
          variant : "destructive"
        })
      }
  
      if(password.length < 6) {
        return toast({
          title  : "error",
          description : "the password length must be 6 characteres",
          variant : "destructive"
        })
      }
      const response = await SignWithEmailAndPassword(email,password);
  
      if(!!response?.user) {
        dispatch(authenticate(response.user));
        addToStorage({key : "user" , value : response.user})
        return toast({
          title  : "success",
          description : "Account successfully created",
          variant : "default"
        })
      }

      return toast({
        title  : "error",
        description : "Invalid credentials",
        variant : "destructive"
      })
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
                      <Button variant={"destructive"} onClick={auth20}>Google +</Button>
                      <Button variant={"outline"} className="ml-2">Github</Button>
                  </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
}

export default LoginForm;