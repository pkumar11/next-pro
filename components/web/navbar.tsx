import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { ThemeToggle } from "./theme-toogle";

const Navbar = () => {
  return (
    <nav className="w-full  py-5 flex items-center justify-between">
      <div className="flex items-center gap-8 ">
        <Link href="/">
          <h1 className="text-3xl font-bold">
            Next<span className="text-primary">Pro</span>
          </h1>
        </Link>

        <div className="flex items-center gap-2">
          <Link className={buttonVariants({ variant: "ghost" })} href="/">
            Home
          </Link>
          <Link className={buttonVariants({ variant: "ghost" })} href="/blog">
            Blog
          </Link>
          <Link className={buttonVariants({ variant: "ghost" })} href="/create">
            Create
          </Link>
        </div>
      </div>
         <div className="flex items-center gap-2">
        {/* <div className="hidden md:block mr-2"> */}
 <Link className={buttonVariants()} href="/auth/sign-up">
              Sign up
            </Link>
            <Link
              className={buttonVariants({ variant: "outline" })}
              href="/auth/login"
            >
              Login
            </Link>
        {/* </div> */}
      <ThemeToggle />
        </div>
    </nav>
  );
};

export default Navbar;
