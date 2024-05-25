import React from 'react';
import { FiDownload } from "react-icons/fi";
import { IoIosMore, IoIosStar } from "react-icons/io";
import { GoDotFill } from "react-icons/go";

const imgUrl = "https://plus.unsplash.com/premium_photo-1673866484792-c5a36a6c025e?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const img2Url = "https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

const OrdersList: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-4">
      <div className='flex items-center justify-between'>
        <h3 className="text-lg font-medium mb-4 text-[#271E55]">Orders List</h3>
        <div className='flex items-center gap-4'>
          <FiDownload className='text-xl text-[#76728A] cursor-pointer' />
          <IoIosMore className='text-xl text-[#76728A] cursor-pointer' />
        </div>
      </div>
      <table className="w-full">
        <thead>
          <tr className='font-[300] text-sm text-[#7C788D] bg-[#FAFAFD]'>
            <th className="border-b p-2 text-left">Num</th>
            <th className="border-b p-2 text-left">Customer</th>
            <th className="border-b p-2 text-left">Order</th>
            <th className="border-b p-2 text-left">Cost</th>
            <th className="border-b p-2 text-left">Due Date</th>
            <th className="border-b p-2 text-left">Rating</th>
            <th className="border-b p-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className='font-[300] text-[#7C788D]'>
            <td className="p-2"><p className='rounded-full h-8 w-8 font-[400] flex items-center justify-center bg-transparent border border-[#76728A]'>1</p></td>
            <td className="p-2 flex items-center gap-2"><img src={imgUrl} className='rounded-full h-[50px] w-[50px] object-cover'/>John C.</td>
            <td className="p-2"><p className='bg-[#EFEEFF] text-[#6250FC] w-3/4 rounded p-1 flex justify-center items-center'>#5844-12</p></td>
            <td className="p-2">$97.50</td>
            <td className="p-2">7 feb, 2023</td>
            <td className="p-2">
            <div className="flex items-center">
              <IoIosStar className="text-[#FBC219]" />
              <IoIosStar className="text-[#FBC219]" />
              <IoIosStar className="text-[#FBC219]" />
              <IoIosStar className="text-[#FBC219]" />
              <IoIosStar className="text-[#FBC219]" />
            </div>
            </td>
            <td className="p-2 items-center text-[#1DA91A] font-[400]"><div className='flex items-center'><GoDotFill className="mr-2 text-[#1DA91A]" />Completed</div></td>
          </tr>
          <tr className='font-[300] text-[#7C788D]'>
            <td className="p-2"><p className='rounded-full h-8 w-8 font-[400] flex items-center justify-center bg-transparent border border-[#76728A]'>2</p></td>
            <td className="p-2 flex items-center gap-2"><img src={img2Url } className='rounded-full h-[50px] w-[50px] object-cover'/>Matthew K.</td>
            <td className="p-2"><p className='bg-[#EFEEFF] text-[#6250FC] w-3/4 rounded p-1 flex justify-center items-center'>#4734-01</p></td>
            <td className="p-2">$70.90</td>
            <td className="p-2">6 feb, 2023</td>
            <td className="p-2">
            <div className="flex items-center">
              <IoIosStar className="text-[#FBC219]" />
              <IoIosStar className="text-[#FBC219]" />
              <IoIosStar className="text-[#FBC219]" />
              <IoIosStar className="text-[#FBC219]" />
              <IoIosStar className="text-[#FBC219]" />
            </div>
            </td>
            <td className="p-2 items-center text-[#FD8643] font-[400]"><div className='flex items-center'><GoDotFill className="mr-2 text-[#FD8643]" />Pending</div></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersList;
