import React from 'react';
import SalesReport from './SalesReport';
import OrdersList from './OrdersList';
import MonthlySales from './MonthlySales';
import { TfiPulse } from "react-icons/tfi";
import Orders from "./Order"
import TotalOrder from './TotalOrder';

const Cards: React.FC = () => {
  return (
    <div className="p-2 flex-1 flex gap-4">
      <div className='flex flex-col gap-4 w-[70%]'>
      <div className="flex items-start w-full justify-between gap-3">
        <div className="bg-[#D7E1FB] p-4 rounded-md shadow w-full flex items-center justify-around">
          <div>
          <h3 className="text-sm text-[#6A667D] font-[400]">Total Sales</h3>
          <p className="text-2xl font-bold text-[#271E55]">$59,690</p>
          <p className='text-[#6A667D] font-[300] flex items-center gap-1'>since last week <span className='bg-white px-2 rounded text-[#4C6EC8]'>13.4%</span></p>
          </div>
          <TfiPulse className='text-4xl text-[#4C6EC8]' />
        </div>
        <div className="bg-[#F9E0E1] p-4 rounded-md shadow w-full flex items-center justify-around">
          <div>
          <h3 className="text-sm text-[#6A667D] font-[400]">Total Orders</h3>
          <p className="text-2xl font-bold text-[#271E55]">4,865</p>
          <p className='text-[#6A667D] font-[300] flex items-center gap-1'>since last week <span className='bg-white px-2 rounded text-[#CD6E72]'>13.4%</span></p>
          </div>
          <TfiPulse className='text-4xl text-[#CD6E72]' />
        </div>
        <div className="bg-[#DAEAEA] p-4 rounded-md shadow w-full flex items-center justify-around">
          <div>
          <h3 className="text-sm text-[#6A667D] font-[400]">Total Customers</h3>
          <p className="text-2xl font-bold text-[#271E55]">2,245</p>
          <p className='text-[#6A667D] font-[300] flex items-center gap-1'>since last week <span className='bg-white px-2 rounded text-[#518B8B]'>13.4%</span></p>
          </div>
          <TfiPulse className='text-4xl text-[#518B8B]' />
        </div>
      </div>
      <SalesReport/>
      <OrdersList />
      </div>
      <div className='w-[30%] flex flex-col gap-4'>
      <Orders />
      <MonthlySales />
      <TotalOrder />
      </div>
    </div>
  );
};

export default Cards;
