import { Avatar } from "@radix-ui/react-avatar";
import { LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AvatarFallback, AvatarImage } from "src/components/ui/avatar";
import { Button } from "src/components/ui/button";
import { authenticate } from "src/redux/userSlice";

function Menu() {
  const user = useSelector((state: any) => state.auth.value);
  const [isLoggedIn , setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();

  useEffect(()=>{

    function isUserSingnedIn() {
      if (!!user?.email) {
        setIsLoggedIn(true);
      }else{
        setIsLoggedIn(false);
      }
    
    }
   
    const intervalId = setInterval(() => {
      isUserSingnedIn(); // Fetch data every 2 minutes
    }, 500);

    return () => clearInterval(intervalId);
  },[user?.email])


  function logout() {
    dispatch(authenticate({}))
  }
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <span className="font-bold sm:inline-block">Todo 🗑️</span>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link to={"/"}>
              <a
                className="transition-colors hover:text-foreground/80 text-foreground"
                href="/"
              >
                Accueil
              </a>
            </Link>
            <Link to={"/todo"}>
              <a
                className="transition-colors hover:text-foreground/80 text-foreground"
                href="/todo"
              >
                Todo List
              </a>
            </Link>


            {
              !isLoggedIn ? 
              
              <Link to={"/login"}>
              <Button
                className="transition-colors hover:text-foreground/80 text-foreground"
                variant={"outline"}
              >
                Login
              </Button>
            </Link>
              
              : 

              <>
              <Avatar>
                 <AvatarFallback>{user?.email}</AvatarFallback>
              </Avatar>
              <Button
                className="transition-colors text-white"
                onClick={logout}
              >
                Logout
              </Button>
              </>
              
            }
           
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Menu;
