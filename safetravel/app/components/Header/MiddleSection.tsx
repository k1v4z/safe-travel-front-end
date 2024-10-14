import Link from "next/link";
import React, { useEffect, useState } from "react";

const sectionItems = [
  { name: "About", path: "/about" },
  { name: "Home", path: "/" },
  { name: "Planning", path: "/planning" },
  { name: "Forum", path: "/forum" },
  { name: "Weather", path: "/weather" }
];

const MiddleSection = () => {
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <div className="hidden md:flex md:space-x-8 items-center">
      {sectionItems.map((item) => (
        <Link key={item.path} href={item.path} legacyBehavior={true}>
          <a
            className={`${
              currentPath === item.path
                ? "border-b-2"
                : "hover:border-b-2"
            } border-[#b12b2b] font-bold font-poppins`}
          >
            {item.name}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default MiddleSection;
