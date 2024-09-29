import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from "@/context/AuthContext";
import Logout from "@/features/auth/logout/Logout";
import LanguageSwitcher from "@/components/global/LanguageSwitcher";
import { DropdownMenuIcon } from "@radix-ui/react-icons";
const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description: "A modal dialog .",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description: "For sighted users.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description: "Displays an indicator .",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description: "A set of layered sections .",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description: "A popup that displays.",
  },
];
const faculties = [
  {
    title: "Informatics Engineering",
    href: "/students/faculity/information-technology",
    description: "A modal dialog .",
  },
  {
    title: "Civil engineering",
    href: "/students/faculity/civil-engineering",
    description: "For users .",
  },
  {
    title: "Architectural Engineering",
    href: "/students/faculity/architectural-engineering",
    description: "Displays an indicator.",
  },
  {
    title: "Business Administration",
    href: "/students/faculity/business-administration",
    description: "Visually or semantically.",
  },
  {
    title: "Fine Arts",
    href: "/students/faculity/fine-art",
    description: "A set of layered section.",
  },
  {
    title: "Drama",
    href: "/students/faculity/drama",
    description: "A popup that displays.",
  },
];
const Header = () => {
  const { user } = useAuth();

  return (
    <header className="z-50 flex items-center w-full h-20 px-4 bg-transparent shrink-0 md:px-6 backdrop-blur-md">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <DropdownMenuIcon className="w-6 h-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link to="/" prefetch={false}>
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
          <LanguageSwitcher />
          <Link to="/login">
            <Button variant="outline">Sign in</Button>
          </Link>
          <Link to="/signup">
            <Button>Sign Up</Button>
          </Link>
        </div>
      )}
    </header>
  );
};

export const NavbarSimpleTest = () => {
  return (
    <section className="h-44">
      <Header />
    </section>
  );
};

const Logo = () => {
  return (
    <svg
      width="24"
      height="auto"
      viewBox="0 0 50 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="ml-2 fill-neutral-50"
    >
      <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" />
      <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" />
    </svg>
  );
};

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList
        className={"flex-wrap justify-around gap-3 md:gap-0 md:justify-center"}
      >
        <NavigationMenuItem>
          <NavigationMenuTrigger>Features</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[400px] lg:grid-cols-[1fr_1fr]">
              <li className="row-span-1">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex flex-col justify-end w-full h-full p-6 no-underline rounded-md outline-none select-none bg-muted focus:shadow-md"
                    to="/global-services/it"
                  >
                    <CodeIcon className="w-6 h-6" />
                    <div className="mt-4 mb-2 text-lg font-medium">Coding</div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li className="row-span-1">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex flex-col justify-end w-full h-full p-6 no-underline rounded-md outline-none select-none bg-muted focus:shadow-md"
                    to="/global-services/graphic-design"
                  >
                    <PencilIcon className="w-6 h-6" />
                    <div className="mt-4 mb-2 text-lg font-medium">
                      Graphic Design
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li className="row-span-1">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex flex-col justify-end w-full h-full p-6 no-underline rounded-md outline-none select-none bg-muted focus:shadow-md"
                    to="/global-services/voice-over"
                  >
                    <HeadphonesIcon className="w-6 h-6" />
                    <div className="mt-4 mb-2 text-lg font-medium">
                      Voice Over
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li className="row-span-1">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex flex-col justify-end w-full h-full p-6 no-underline rounded-md outline-none select-none bg-muted focus:shadow-md"
                    to="/global-services/presentation"
                  >
                    <PenIcon className="w-6 h-6" />
                    <div className="mt-4 mb-2 text-lg font-medium">
                      Presentation
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-full gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Faculties</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-full gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {faculties.map((faculty) => (
                <ListItem
                  key={faculty.title}
                  title={faculty.title}
                  href={faculty.href}
                >
                  {faculty.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/chatroom" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              ChatRoom
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/blog" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Blog
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/chatbot" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Chatbot
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
);
ListItem.displayName = "ListItem";

export const NavigationMenuItemLink = ({ link, linkName }) => {
  return (
    <NavigationMenuItem>
      <Link to={link} legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          {linkName}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};

export default Header;

function CodeIcon(props) {
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function HeadphonesIcon(props) {
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
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    </svg>
  );
}

function PenIcon(props) {
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
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
    </svg>
  );
}

function PencilIcon(props) {
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
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  );
}

function PresentationIcon(props) {
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
      <path d="M2 3h20" />
      <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
      <path d="m7 21 5-5 5 5" />
    </svg>
  );
}
