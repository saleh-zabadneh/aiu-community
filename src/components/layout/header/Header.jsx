import Logo from "@/components/global/Logo";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from "@/context/AuthContext";
import Logout from "@/features/auth/logout/Logout";
import { Link } from "react-router-dom";
import { NavigationMenuDemo } from "./NavigationMenu";
import LanguageSwitcher from "@/components/global/LanguageSwitcher";

const Header = () => {
  const { user } = useAuth();

  return (
    <header className=" items-center  h-20 px-4 shrink-0 md:px-6 fixed left-[50%] top-8 flex md:w-[90%] 2xl:w-[70%] w-[80%] -translate-x-[50%]  gap-6 rounded-lg border-[1px] p-2 text-sm text-neutral-500 bg-transparent backdrop-blur-md z-50">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="w-6 h-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link href="#" prefetch={false}>
            <Logo width="120" height="100" className="w-6 h-6 " />
            <span className="sr-only">ShadCN</span>
          </Link>
          <div className="grid gap-2 py-6">
            <NavigationMenuDemo />
          </div>
        </SheetContent>
      </Sheet>
      <Link to="/" className="hidden mr-6 lg:flex" prefetch={false}>
        <Logo width="150" height="100" className="w-6 h-6" />
        <span className="sr-only">ShadCN</span>
      </Link>
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          <NavigationMenuDemo />
        </NavigationMenuList>
      </NavigationMenu>
      {user?.user ? (
        <div className="flex gap-2 ml-auto">
          <LanguageSwitcher />
          <Logout />
        </div>
      ) : (
        <div className="flex gap-2 ml-auto">
          {/* <LanguageSwitcher /> */}
          {/* <Link to="/login">
            <Button variant="outline">Sign in</Button>
          </Link> */}
          <Link to="/signup">
            <Button>Sign Up</Button>
          </Link>
        </div>
      )}
    </header>
  );
};
export default Header;

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

// function ShirtIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
//     </svg>
//   );
// }

{
  /* <NavigationMenuLink asChild>
<Link
  href="#"
  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
  prefetch={false}
>
  Home
</Link>
</NavigationMenuLink> */
}
const JoinButton = () => {
  return (
    <button
      className={`
          relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border-[1px] 
          border-neutral-700 px-4 py-1.5 font-medium
         text-neutral-300 transition-all duration-300
          
          before:absolute before:inset-0
          before:-z-10 before:translate-y-[200%]
          before:scale-[2.5]
          before:rounded-[100%] before:bg-neutral-50
          before:transition-transform before:duration-1000
          before:content-[""]
  
          hover:scale-105 hover:border-neutral-50 hover:text-neutral-900
          hover:before:translate-y-[0%]
          active:scale-100`}
    >
      Join waitlist
    </button>
  );
};
