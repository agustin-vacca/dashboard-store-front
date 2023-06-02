// import React from "react";
import {
  RiHome6Line,
  RiPieChartLine,
  RiMailLine,
  RiNotification2Line,
  RiSettings5Line,
  RiLogoutBoxRLine,
} from "react-icons/ri";
import { CiDiscount1 } from "react-icons/ci";

const Sidebar = (props) => {

  const {showMenu} = props;

  return (
    <div 
    className={`bg-[#1F1D2B] fixed top-0 lg:left-0 w-24 h-full flex flex-col justify-between py-6 rounded-r-xl transition-all
    ${showMenu ? 'left-0' : '-left-full' } 
    `}>
      <div>
        <ul className="pl-2">
          {/* Logo */}
          <li>
            <h1 className="text-2xl text-gray-300 uppercase font-bold text-center my-5">
              {" "}
              Logo{" "}
            </h1>
          </li>
          {/* Home */}
          <li className="p-4 rounded-l-xl bg-[#262837]">
            <a href="#" className="flex p-4 rounded-xl bg-[#ec7c6a] text-white">
              <RiHome6Line className="text-2xl justify-center" />
            </a>
          </li>
          {/* Offer */}
          <li className="p-4 rounded-l-xl hover:bg-[#262837] group transition-colors">
            <a
              href="#"
              className="flex p-4 rounded-xl text-[#ec7c6a] group-hover:bg-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <CiDiscount1 className="text-2xl justify-center " />
            </a>
          </li>
          {/* Pie */}
          <li className="p-4 rounded-l-xl hover:bg-[#262837] group transition-colors">
            <a
              href="#"
              className="flex p-4 rounded-xl text-[#ec7c6a] group-hover:bg-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiPieChartLine className="text-2xl justify-center " />
            </a>
          </li>
          {/* Mail */}
          <li className="p-4 rounded-l-xl hover:bg-[#262837] group transition-colors">
            <a
              href="#"
              className="flex p-4 rounded-xl text-[#ec7c6a] group-hover:bg-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiMailLine className="text-2xl justify-center " />
            </a>
          </li>
          {/* Notification */}
          <li className="p-4 rounded-l-xl hover:bg-[#262837] group transition-colors">
            <a
              href="#"
              className="flex p-4 rounded-xl text-[#ec7c6a] group-hover:bg-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiNotification2Line className="text-2xl justify-center " />
            </a>
          </li>
          {/* Setting */}
          <li className="p-4 rounded-l-xl hover:bg-[#262837] group transition-colors">
            <a
              href="#"
              className="flex p-4 rounded-xl text-[#ec7c6a] group-hover:bg-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiSettings5Line className="text-2xl justify-center " />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="pl-2">
          {/* Logout */}
          <li className="p-4 rounded-l-xl hover:bg-[#262837] group transition-colors">
            <a
              href="#"
              className="flex p-4 rounded-xl text-[#ec7c6a] group-hover:bg-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiLogoutBoxRLine className="text-2xl justify-center " />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
