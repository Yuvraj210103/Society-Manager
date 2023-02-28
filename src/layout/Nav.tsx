import React, { useState } from "react";
import {
  MdOutlineMenu,
  MdPeopleAlt,
  MdNote,
  MdDashboard,
} from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { FaBuilding } from "react-icons/fa";
import { ImTicket } from "react-icons/im";
import { AiFillSetting } from "react-icons/ai";
//import img from '../../public/assets/images/logo.jpeg'
const Nav = () => {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <nav className="sticky top-0 z-[2]">
      <div className=" flex px-4 z-[2]  gap-4 bg-white shadow-sm py-6 md:py-8 items-center justify-between md:items-end md:justify-end w-full ">
        <div
          onClick={() => setMobileNav(!mobileNav)}
          className="cursor-pointer flex items-center md:hidden"
        >
          {mobileNav ? <RxCross2 size={25} /> : <MdOutlineMenu size={25} 
          />}
        </div>
        <div className="text-lg font-semibold mr-auto  flex items-center ">
        <i
                className="block h-[44px] w-48 cursor-pointer md:hidden"
                style={{
                  backgroundImage: "url('/assets/images/logoSVG.svg')",
                  backgroundSize: '192px',
                  backgroundRepeat: 'no-repeat',
                }}
              ></i>
          
        </div>
      </div>

      <div
        className={`${
          mobileNav ? "left-0" : "left-[-2000px]"
        } flex flex-col gap-8 bg-white  shadow justify-start w-10/12 md:w-1/5 px-4 pt-8 h-screen absolute duration-300 transition-all ease-in-out md:hidden`}
      >
        <div className="flex items-center gap-4 w-full cursor-pointer">
          <span>
            <MdDashboard size={25} />
          </span>
          <span className="font-medium">Dashboard</span>
        </div>
        <div className="flex items-center gap-4 w-full cursor-pointer">
          <span>
            <FaBuilding size={25} />
          </span>
          <span className="font-medium">Manage Society</span>
        </div>
        <div className="flex items-center gap-4 w-full cursor-pointer">
          <span>
            <MdPeopleAlt size={25} />
          </span>
          <span className="font-medium">Members</span>
        </div>
        <div className="flex items-center gap-4 w-full cursor-pointer">
          <span>
            <ImTicket size={25} />
          </span>
          <span className="font-medium">Complaint Ticket</span>
        </div>
        <div className="flex items-center gap-4 w-full cursor-pointer">
          <span>
            <MdNote size={25} />
          </span>
          <span className="font-medium">Maintainance Master</span>
        </div>
        <div className="flex items-center gap-4 w-full cursor-pointer">
          <span>
            <AiFillSetting size={25} />
          </span>
          <span className="font-medium">Settings</span>
        </div>
      </div>
      
    </nav>
  );
};

export default Nav;
