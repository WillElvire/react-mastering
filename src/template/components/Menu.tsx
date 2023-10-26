import { Link } from "react-router-dom";
import { Button } from "src/components/ui/button";

function Menu() {
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


            <Link to={"/login"}>
              <Button
                className="transition-colors hover:text-foreground/80 text-foreground"
                variant={"outline"}
              >
                Login
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Menu;
