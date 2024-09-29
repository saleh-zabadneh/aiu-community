import { MaxWidthWrapper } from "@/components/hover.dev/utils/MaxWidthWrapper";
import React from "react";
import { SiInstagram, SiX, SiYoutube } from "react-icons/si";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="relative py-12 overflow-hidden">
      <MaxWidthWrapper className="relative z-20 grid grid-cols-12 gap-x-1.5 gap-y-6">
        <LogoColumn />
        <GenericColumn
          title="Community"
          links={[
            {
              title: "Posts",
              to: "/blog/it",
            },
            {
              title: "Developer Community",
              to: "/community/posts",
            },
            {
              title: "Advertisements",
              to: "/advertisements",
            },
          ]}
        />
        <GenericColumn
          title="Services"
          links={[
            {
              title: "Graphic Design",
              to: "/#",
            },
            {
              title: "Graphic Design",
              to: "/#",
            },
            {
              title: "Photography",
              to: "/#",
            },
          ]}
        />
        <GenericColumn
          title="AIU Community"
          links={[
            {
              title: "About Us",
              to: "/about",
            },
            {
              title: "Developer Team",
              to: "/team",
            },
            {
              title: "Contact Us",
              to: "/contact",
            },
          ]}
        />

        <GenericColumn
          title="Account"
          links={[
            {
              title: "Login",
              to: "/login",
            },
            {
              title: "Signup",
              to: "/signup",
            },
          ]}
        />
      </MaxWidthWrapper>
    </footer>
  );
};

const LogoColumn = () => {
  return (
    <div className="col-span-6 md:col-span-4">
      <Link href="/">
        <img src="/aiu.svg" className="h-18 w-36" />
      </Link>
      <span className="inline-block mt-3 text-xs text-zinc-400">
        © AIU Community Dev Team - All rights reserved.
      </span>
    </div>
  );
};

const GenericColumn = ({ title, links }) => {
  return (
    <div className="col-span-6 space-y-2 text-sm md:col-span-2">
      <span className="block text-zinc-50">{title}</span>
      {links.map((l) => (
        <Link
          key={l.title}
          to={l.to}
          className="flex items-center gap-1.5 text-zinc-400 transition-colors hover:text-zinc-200 hover:underline"
        >
          {l.Icon && <l.Icon />}
          {l.title}
        </Link>
      ))}
    </div>
  );
};
