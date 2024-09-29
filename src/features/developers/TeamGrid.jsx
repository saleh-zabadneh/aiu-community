import React from "react";
import { FaUser } from "react-icons/fa";
import { FiBookOpen, FiEye, FiPhoneCall } from "react-icons/fi";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export const GridCards = () => {
  return (
    <div className="p-4 text-neutral-50 md:p-12">
      <div className="grid max-w-5xl grid-cols-1 mx-auto border divide-y md:grid-cols-3 md:divide-x md:divide-y-0">
        <TitleCard />
        <Card
          to="/https://www.linkedin.com/in/tarek-barhoum-9a860087/"
          title="Project Manger "
          readTime="Dr. Tarek Barhoum"
          src="/images/dTarekBarhom.jpeg"
        />
        <Card
          to="/https://www.linkedin.com/in/homam-altakrity?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          title="Team Leader"
          readTime="Eng. Homam Altakrity"
          src="/images/homam.png"
        />
      </div>
      <div className="grid max-w-5xl grid-cols-1 mx-auto border-b divide-y divide-neutral-700 border-x border-neutral-700 md:grid-cols-3 md:divide-x md:divide-y-0">
        <Card
          to="/https://www.linkedin.com/in/saleh-zabadneh/"
          title="Frontend Tech Lead"
          readTime="Saleh Juma Zabadneh"
          src="/images/saleh.jpeg"
        />
        <Card
          to="https://www.linkedin.com/in/anas-hallak-34967624b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          title="Backend Tech Lead"
          readTime="Anas Halkak"
          src="/images/anas.jpg"
        />
        <Card
          to="/https://www.linkedin.com/in/maria-al-hosni-0a1423282/"
          title="AI Engineer"
          readTime="Maria Alhosni"
          src="/images/maria.jpg"
        />
      </div>
      <div className="grid max-w-5xl grid-cols-1 mx-auto border-b divide-y divide-neutral-700 border-x border-neutral-700 md:grid-cols-3 md:divide-x md:divide-y-0">
        <Card
          to="#"
          title="Mobile Tech Lead"
          readTime="Simon Azar"
          src="/images/simon.jpg"
        />
        <Card
          to="/https://www.linkedin.com/in/mahmoud-midani-74005b243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          title="AI Engineer"
          readTime="Mahmoud Midani"
          src="/images/mahmoud.jpg"
        />
        <Card
          to="/https://www.linkedin.com/in/ghiath-shwieki-647064318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          title="AI Engineer"
          readTime="Ghiath Shwieki"
          src="/images/ghiath.jpg"
        />
      </div>
    </div>
  );
};

const Card = ({ to, title, readTime, src }) => {
  return (
    <a
      href={to}
      target="_blank"
      className="relative flex flex-col justify-end h-56 p-6 overflow-hidden transition-colors group md:h-80 md:p-9"
    >
      <div className="absolute left-3 top-5 z-10 flex items-center gap-1.5 text-[1.2rem] uppercase text-neutral-100 transition-colors duration-500 group-hover:text-neutral-600">
        <FaUser className="text-base" />
        <span>{readTime}</span>
      </div>
      <h2 className="relative z-10 text-3xl leading-tight transition-transform duration-500 group-hover:-translate-y-3">
        {title}
      </h2>

      <FiPhoneCall className="absolute z-10 text-2xl transition-colors right-3 top-4 text-neutral-400 group-hover:text-neutral-50" />

      <div
        className="absolute top-0 bottom-0 left-0 right-0 transition-all opacity-60 group-hover:opacity-100 group-active:scale-105 group-active:opacity-30 group-active:blur-0 group-active:grayscale-0"
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Corners />
    </a>
  );
};

const Corners = () => (
  <>
    <span className="absolute left-[1px] top-[1px] z-10 h-3 w-[1px] origin-top scale-0 bg-emerald-300 transition-all duration-500 group-hover:scale-100" />
    <span className="absolute left-[1px] top-[1px] z-10 h-[1px] w-3 origin-left scale-0 bg-emerald-300 transition-all duration-500 group-hover:scale-100" />
    <span className="absolute bottom-[1px] right-[1px] z-10 h-3 w-[1px] origin-bottom scale-0 bg-emerald-300 transition-all duration-500 group-hover:scale-100" />
    <span className="absolute bottom-[1px] right-[1px] z-10 h-[1px] w-3 origin-right scale-0 bg-emerald-300 transition-all duration-500 group-hover:scale-100" />
    <span className="absolute bottom-[1px] left-[1px] z-10 h-3 w-[1px] origin-bottom scale-0 bg-emerald-300 transition-all duration-500 group-hover:scale-100" />
    <span className="absolute bottom-[1px] left-[1px] z-10 h-[1px] w-3 origin-left scale-0 bg-emerald-300 transition-all duration-500 group-hover:scale-100" />
    <span className="absolute right-[1px] top-[1px] z-10 h-3 w-[1px] origin-top scale-0 bg-emerald-300 transition-all duration-500 group-hover:scale-100" />
    <span className="absolute right-[1px] top-[1px] z-10 h-[1px] w-3 origin-right scale-0 bg-emerald-300 transition-all duration-500 group-hover:scale-100" />
  </>
);

const TitleCard = () => {
  return (
    <a
      to="#"
      target="_blank"
      className="relative flex flex-col justify-between h-56 p-6 group bg-neutral-950 md:h-80 md:p-9"
    >
      <h2 className="text-4xl leading-tight uppercase">
        <span className="transition-colors duration-500 text-neutral-400 group-hover:text-emerald-300">
          AIU Community
        </span>
        <br />
        Developer Team
      </h2>
      <div className="flex items-center gap-1.5 text-xs uppercase text-neutral-400 transition-colors duration-500 group-hover:text-neutral-50">
        <FiBookOpen className="text-base" />
        <span>Watch and learn </span>
      </div>

      <FiArrowUpRight className="absolute text-2xl transition-colors duration-500 right-3 top-4 text-neutral-400 group-hover:text-emerald-300" />
    </a>
  );
};
