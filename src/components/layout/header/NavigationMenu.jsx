import * as React from "react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import Logo from "@/components/global/Logo";
import { Camera } from "@phosphor-icons/react";

const faculties = [
  {
    title: "Informatics Engineering",
    to: "/students/faculity/information-technology",
    description: "A modal dialog .",
  },
  {
    title: "Civil engineering",
    to: "/students/faculity/civil-engineering",
    description: "For users .",
  },
  {
    title: "Architectural Engineering",
    to: "/students/faculity/architectural-engineering",
    description: "Displays an indicator.",
  },
  {
    title: "Business Administration",
    to: "/students/faculity/business-administration",
    description: "Visually or semantically.",
  },
  {
    title: "Fine Arts",
    to: "/students/faculity/fine-art",
    description: "A set of layered section.",
  },
  {
    title: "Drama",
    to: "/students/faculity/drama",
    description: "A popup that displays.",
  },
];
const community = [
  {
    title: "Developers Community",
    to: "/blog/it",
    description: "The New Stackoverflow .",
  },
  {
    title: "AIU Community",
    to: "/community/posts",
    description: "The New AIU Cloud",
  },
  {
    title: "advertisements ",
    to: "/advertisements",
    description: "AIU Advertisements.",
  },
];
export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList
        className={"flex-wrap justify-start  gap-3 md:gap-0 md:justify-center"}
      >
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link to={`/students/services/all-category`}>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
            </Link>
          </NavigationMenuLink>
          <NavigationMenuContent>
            <ul className=" grid gap-3 p-4 md:w-[400px] lg:w-[400px] lg:grid-cols-[1fr_1fr]">
              <li className="row-span-1 ">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex flex-col justify-end w-full h-full p-6 no-underline rounded-md outline-none select-none bg-muted focus:shadow-md"
                    to="/students/services/all-category/2"
                  >
                    <Camera className="w-6 h-6" />
                    <div className="mt-4 mb-2 text-lg font-medium">
                      Photography
                    </div>
                    {/* <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p> */}
                  </Link>
                </NavigationMenuLink>
              </li>
              <li className="row-span-1">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex flex-col justify-end w-full h-full p-6 no-underline rounded-md outline-none select-none bg-muted focus:shadow-md"
                    to="/students/services/all-category/1"
                  >
                    <PencilIcon className="w-6 h-6" />
                    <div className="mt-4 mb-2 text-lg font-medium">
                      Graphic Design
                    </div>
                    {/* <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p> */}
                  </Link>
                </NavigationMenuLink>
              </li>
              <li className="row-span-1">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex flex-col justify-end w-full h-full p-6 no-underline rounded-md outline-none select-none bg-muted focus:shadow-md"
                    to="/students/services/all-category/4"
                  >
                    <HeadphonesIcon className="w-6 h-6" />
                    <div className="mt-4 mb-2 text-lg font-medium">
                      Video Editing
                    </div>
                    {/* <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p> */}
                  </Link>
                </NavigationMenuLink>
              </li>
              <li className="row-span-1">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex flex-col justify-end w-full h-full p-6 no-underline rounded-md outline-none select-none bg-muted focus:shadow-md"
                    to="/students/services/all-category/3"
                  >
                    <PenIcon className="w-6 h-6" />
                    <div className="mt-4 mb-2 text-lg font-medium">
                      Content Creation
                    </div>
                    {/* <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p> */}
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* <NavigationMenuItem>
          <NavigationMenuTrigger>Faculties</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-full gap-3  p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {faculties.map((faculity) => (
                <ListItem
                  key={faculity.title}
                  title={faculity.title}
                  to={faculity.to}
                >
                  {faculity.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger>Community</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-full gap-3  p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {community.map((community) => (
                <ListItem
                  key={community.title}
                  title={community.title}
                  to={community.to}
                >
                  {community.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
        {/* <NavigationMenuItem>
          <Link to="/community/posts" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Community Newsfeed
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem> */}
        <NavigationMenuItem>
          <Link to="/advertisements" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Advertisements
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/blog/it" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Developer Community
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/students/it/courses" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Courses
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/voice-generation" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Voice Generation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <Link to="/chatbot" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Chatbot
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li className="bg-transparent text-neutral-500 backdrop-blur-md">
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

export const NavigationMenuItemLink = ({ link, linkName }) => {
  return (
    <NavigationMenuItem>
      <Link to={`${link}`} legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          {linkName}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};

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
