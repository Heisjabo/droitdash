import React from 'react';
import { FaTachometerAlt, FaChartLine, FaFileAlt, FaBell, FaKey, FaRobot, FaFolderOpen, FaArrowRight } from 'react-icons/fa';
import { GoDotFill } from "react-icons/go";
import Accordion from './Accordion';


const profileImageUrl = 'https://via.placeholder.com/150';

const Sidebar: React.FC = () => {
  return (
    <div className="bg-[#2E2657] text-[#D8D0FF] w-64 min-h-screen flex flex-col justify-between p-4 py-8">
      <div>
        <div className="mb-10 flex items-center gap-2">
            <div className='bg-white text-[#CBC4EE] rounded-full p-3 flex justify-center items-center'>
            <FaRobot className="text-3xl" />
            </div>
          
          <h2 className="text-2xl font-bold">Droitdash</h2>
        </div>
        <ul>
          <Accordion title="Dashboard" icon={<FaTachometerAlt className="mr-2" />}>
            <li className="mb-2 flex items-center">
              <FaTachometerAlt className="mr-2" />
              <a href="#" className="hover:text-gray-400">Overview</a>
            </li>
            <li className="mb-2 flex items-center">
              <FaFolderOpen className="mr-2" />
              <a href="#" className="hover:text-gray-400">Reports</a>
            </li>
          </Accordion>
          <li className="mb-4 p-3 flex items-center">
            <FaKey className="mr-2" />
            <a href="#" className="hover:text-gray-400 ml-2">Key Metrics</a>
          </li>
          <Accordion title="Analytics" icon={<FaChartLine className="mr-2" />}>
            <li className="mb-2 flex items-center">
              <GoDotFill className="mr-2 text-[#D8E8FF]" />
              <a href="#" className="hover:text-gray-400">All analytics</a>
            </li>
            <li className="mb-2 flex items-center">
              <GoDotFill className="mr-2 text-[#E0C5E4]" />
              <a href="#" className="hover:text-gray-400">Favorites</a>
            </li>
            <li className="mb-2 flex items-center">
              <GoDotFill className="mr-2 text-[#D8E8FF]" />
              <a href="#" className="hover:text-gray-400">New analytics</a>
            </li>
          </Accordion>
          <Accordion title="Documents" icon={<FaFileAlt className="mr-2" />}>
            <li className="mb-2 flex items-center">
              <FaFileAlt className="mr-2" />
              <a href="#" className="hover:text-gray-400">Policies</a>
            </li>
            <li className="mb-2 flex items-center">
              <FaFileAlt className="mr-2" />
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
        <FaArrowRight className="text-gray-400" />
        </div>
        
        <div>
          <h4 className="font-semibold">John Doe</h4>
          <p className="text-sm text-gray-400">Administrator</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;



