import React from 'react';
import { PiIntersectDuotone } from "react-icons/pi";
import { MdOutlinePercent } from "react-icons/md";
import { VscSettingsGear } from "react-icons/vsc";
import { IoFilterOutline } from "react-icons/io5";

const NavBar: React.FC = () => {
  return (
    <ul className="text-[#76728A] font-[400] flex items-center gap-6 border-b border-[#EEEEEE] mb-2 px-4">
      <li className='flex items-center gap-2 text-[#271E55] font-[500] border-b-2 border-[#271E55] py-2'><PiIntersectDuotone /> <a href="#" className="hover:text-gray-400 ">Value Comparison</a></li>
      <li className='flex items-center gap-2'>< MdOutlinePercent /> <a href="#" className="hover:text-gray-400">Average Values</a></li>
      <li className='flex items-center gap-2'><VscSettingsGear /><a href="#" className="hover:text-gray-400">Configure Analysis</a></li>
      <li className='flex items-center gap-2'><IoFilterOutline /><a href="#" className="hover:text-gray-400">Filter Analysis</a></li>
    </ul>
  );
};

export default NavBar;
