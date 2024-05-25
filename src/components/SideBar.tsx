import React from 'react';
import { FaChartLine, FaFileAlt, FaBell, FaKey, FaArrowRight } from 'react-icons/fa';
import { HiOutlineChartBarSquare } from "react-icons/hi2";

import { GoDotFill } from "react-icons/go";
import Accordion from './Accordion';
import { MdDashboard } from "react-icons/md";


const profileImageUrl = 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=3370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const Sidebar: React.FC = () => {
  return (
    <div className="bg-[#2E2559] text-white w-64 min-h-screen flex flex-col justify-between p-4 py-8">
      <div>
        <div className="mb-10 flex items-center gap-2">
            <div className='bg-white text-[#CBC4EE] rounded-full p-2 flex justify-center items-center'>
            <MdDashboard className="text-2xl text-[#6250FC]" />
            </div>
          
          <h2 className="text-2xl font-medium">Droitdash</h2>
        </div>
        <ul className='font-[400]'>
          <Accordion title="Dashboard" icon={<HiOutlineChartBarSquare className="mr-2" />}>
            <li className="mb-2 flex items-center">
            <GoDotFill className="mr-2 text-[#88C4EA]" />
              <a href="#" className="hover:text-gray-400">Overview</a>
            </li>
            <li className="mb-2 flex items-center">
            <GoDotFill className="mr-2 text-[#FF9B5C]" />
              <a href="#" className="hover:text-gray-400">Reports</a>
            </li>
          </Accordion>
          <li className="mb-4 p-3 flex items-center">
            <FaKey className="mr-2" />
            <a href="#" className="hover:text-gray-400 ml-2">Key Metrics</a>
          </li>
          <Accordion title="Analytics" icon={<FaChartLine className="mr-2" />}>
            <li className="mb-2 flex items-center">
              <GoDotFill className="mr-2 text-[#88C4EA]" />
              <a href="#" className="hover:text-gray-400">All analytics</a>
            </li>
            <li className="mb-2 flex items-center">
              <GoDotFill className="mr-2 text-[#FF9B5C]" />
              <a href="#" className="hover:text-gray-400">Favorites</a>
            </li>
            <li className="mb-2 flex items-center">
              <GoDotFill className="mr-2 text-[#88C4EA]" />
              <a href="#" className="hover:text-gray-400">New analytics</a>
            </li>
          </Accordion>
          <Accordion title="Documents" icon={<FaFileAlt className="mr-2" />}>
            <li className="mb-2 flex items-center">
            <GoDotFill className="mr-2 text-[#88C4EA]" />
              <a href="#" className="hover:text-gray-400">Policies</a>
            </li>
            <li className="mb-2 flex items-center">
            <GoDotFill className="mr-2 text-[#FF9B5C]" />
              <a href="#" className="hover:text-gray-400">Guides</a>
            </li>
          </Accordion>
          <li className="mb-4 p-3 flex items-center">
            <FaBell className="mr-2" />
            <a href="#" className="hover:text-gray-400 ml-2">Notifications</a>
          </li>
        </ul>
      </div>
      <div className="mt-4 p-4 bg-[#3E3759] rounded-lg flex items-start gap-4 flex-col">
        <div className='flex items-center justify-between w-full'>
        <img src={profileImageUrl} alt="Profile" className="w-12 h-12 rounded-full mr-3" />
        <FaArrowRight className="text-white" />
        </div>
        
        <div>
          <h4 className="font-semibold">John Doe</h4>
          <p className="text-sm text-white">johndoe@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;



