import React from 'react';
import { FaSearch, FaBell } from 'react-icons/fa';
import { VscSettingsGear } from "react-icons/vsc";

const Header: React.FC = () => {
    return (
        <div className="p-4 flex items-center justify-between">
            <h1 className='text-2xl font-[600] text-[#271E55]'>Viewer Demographics</h1>
            <div className="flex items-center justify-between gap-4">
                <div className="relative w-full">
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Type keywords to search"
                        className=" w-full pl-10 pr-4 py-3 bg-transparent rounded-lg focus:outline-none border text-gray-400 border-[#EEEEEE]"
                    />
                </div>
                <div className="flex items-center space-x-4">
                    <div className='bg-transparent text-gray-400 rounded-lg p-3 text-sm focus:outline-none border border-[#EEEEEE]'>
                        <FaBell className="text-2xl cursor-pointer" />
                    </div>
                    <div className='rounded-lg p-3 text-sm border-[#EEEEEE] bg-[#2E2657] shadow-md'>
                    <VscSettingsGear className="text-2xl cursor-pointer text-white bg-transparent" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;

