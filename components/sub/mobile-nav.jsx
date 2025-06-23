"use client";
import React, { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { Tooltip } from "antd";
import Link from "next/link";
import { NAV_LINKS, SOCIALS } from "@/constants";

const TooltipTitle = ({ setToggle }) => (
  <div className="shadow-[#2A0E61]/50">
    <div className="flex flex-col items-center justify-between w-full h-auto mr-[15px] rounded-full text-gray-200">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.title}
          href={link.link}
          className="cursor-pointer py-2 hover:text-[rgb(112,66,248)] transition"
          onClick={() => { setToggle(false);}}
        >
          {link.title}
        </Link>
      ))}
    </div>
    <div className="flex flex-col gap-5 pt-5 mt-4 border-t-2 items-center">
      {SOCIALS.map(({ link, name, icon: Icon }) => (
        <Link href={link} target="_blank" rel="noreferrer noopener" key={name} onClick={() => { setToggle(false);}} >
          <Icon className="h-6 w-6 text-white" />
        </Link>
      ))}
    </div>
  </div>
);

const MobileNav = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Tooltip
      trigger="click"
      visible={toggle}
      title={<TooltipTitle setToggle={setToggle} />}
      placement="bottomLeft"
    >
      <div
        className="text-white text-2xl cursor-pointer"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {toggle ? <RiCloseLine /> : <RiMenu3Line />}
      </div>
    </Tooltip>
  );
};

export default MobileNav;
