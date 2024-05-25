import React from 'react';
import { FiDownload } from "react-icons/fi";
import { IoIosMore } from "react-icons/io";
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
  } from "chart.js";
  import { Bar } from "react-chartjs-2";
  
  ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
  
  const data = {
    labels: ["January", "February"],
    datasets: [
      {
        label: "10%",
        data: [5, 4],
        backgroundColor: "#6251FC",
      },
      {
        label: "20%",
        data: [5, 4],
        backgroundColor: "#8174FF",
      },
      {
        label: "40%",
        data: [5, 4],
        backgroundColor: "#988DFF",
      },
      {
        label: "60%",
        data: [5, 3],
        backgroundColor: "#B4AAFF",
      },
      {
        label: "80%",
        data: [10, 8],
        backgroundColor: "#E0DDFF",
      },
    ],
  };
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };
  

const Orders: React.FC = () => {

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-4">
      <div className='flex items-center justify-between'>
      <h3 className="text-lg font-medium mb-4 text-[#271E55]">Orders List</h3>
      <div className='flex items-center gap-4'>
      <FiDownload className='text-xl text-[#76728A] cursor-pointer' />
      <IoIosMore className='text-xl text-[#76728A] cursor-pointer' />
      </div>
      </div>
      <div className="col-span-12 relative">
        <Bar data={data} 
        //@ts-ignore
        options={options} className="w-full" />
        </div>
    </div>
  );
};

export default Orders;