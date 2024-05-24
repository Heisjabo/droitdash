import React from 'react';
import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';

const Header: React.FC = () => {
    return (
        <div className="p-4 flex items-center justify-between">
            <h1 className='text-xl font-medium'>Viewer Demographics</h1>
            <div className="flex items-center justify-between gap-4">
                <div className="relative">
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="pl-10 pr-4 py-2 bg-transparent rounded-lg focus:outline-none border text-gray-400 border-[#EEEEEE]"
                    />
                </div>
                <div className="flex items-center space-x-4">
                    <div className='bg-transparent text-gray-400 rounded-lg p-2 text-sm focus:outline-none border border-[#EEEEEE]'>
                        <FaBell className="text-2xl cursor-pointer" />
                    </div>
                    <div className='bg-transparent text-gray-400 rounded-lg p-2 text-sm focus:outline-none border border-[#EEEEEE] bg-[#2E2657]'>
                    <FaUserCircle className="text-2xl cursor-pointer text-gray-400 bg-transparent" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;

