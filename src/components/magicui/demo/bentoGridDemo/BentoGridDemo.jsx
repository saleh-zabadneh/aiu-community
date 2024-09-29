// Importing icons from packages
import { cn } from "@/lib/utils";
import {
  CalendarIcon,
  GlobeIcon,
  FileTextIcon,
  InputIcon,
  PlayIcon,
} from "@radix-ui/react-icons";
import { Share2Icon } from "lucide-react";
import Marquee from "../../Marquee";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { AnimatedBeamMultipleOutputDemo } from "../animatedBeam/AnimatedBeamMultiOutput";
import { Calendar } from "@/components/ui/calendar";
import { BentoCard, BentoGrid } from "../../BentoGrid";
import { Button } from "@/components/ui/button";

// Importing utility functions and components

// Sample data
const files = [
  {
    name: "bitcoin.pdf",
    body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
  },
  {
    name: "finances.xlsx",
    body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
  },
];

// Notification item interface
let notifications = [
  {
    name: "Payment received",
    description: "Magic UI",
    time: "15m ago",
    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "Payment received",
    description: "Magic UI",
    time: "15m ago",
    icon: "💸",
    color: "#00C9A7",
  },
];

// Creating multiple notifications
notifications = Array.from({ length: 10 }, () => notifications).flat();

// Notification component
const Notification = ({ name, description, icon, color, time }) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] transform cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex items-center justify-center w-10 h-10 rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center text-lg font-medium whitespace-pre dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

// Features array
const features = [
  {
    Icon: FileTextIcon,
    name: "Save your files",
    description: "Upload your project submition in whatever format you want .",
    href: "/",
    cta: "Learn more",
    className: "col-span-3 bg-secondary  lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] bg-background [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer  overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white ">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: GlobeIcon,
    name: "Full Access to All Lectures",
    description:
      "Display and Download Your Lectures and Explore All Teacher Assets  .",
    href: "/",
    cta: "Learn more",
    className: "bg-secondary  col-span-3 lg:col-span-2",
    background: (
      <Command className="absolute  right-10 top-10 w-[70%] origin-top translate-x-0 border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:-translate-x-10">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>screenshot.png</CommandItem>
            <CommandItem>bitcoin.pdf</CommandItem>
            <CommandItem>finances.xlsx</CommandItem>
            <CommandItem>logo.svg</CommandItem>
            <CommandItem>keys.gpg</CommandItem>
            <CommandItem>seed.txt</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    ),
  },
  {
    Icon: Share2Icon,
    name: "All of The Best in One Place.",
    description:
      "We gatherd the essentials from every platform to create a cohesive unfined experience .",
    href: "/",
    cta: "Learn more",
    className: "bg-secondary col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: PlayIcon,
    name: "Stay Up to Date",
    description:
      "With the instructor announcement feature, you won't miss a thing.",
    className: "bg-accent col-span-3 lg:col-span-1",
    href: "/",
    cta: "Learn more",
    background: (
      <div className="flex items-center justify-center mt-24">
        <Button variant="outline">
          {/* <PlayIcon className="w-6 h-6" /> */}
          Announcements
        </Button>
      </div>
    ),
  },
];

// BentoDemo component
export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-5xl mx-auto ">
      {features.map((feature, idx) => (
        <BentoCard className="bg-background" key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
