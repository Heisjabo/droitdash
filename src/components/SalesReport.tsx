import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { FiDownload } from "react-icons/fi";
import { IoIosMore } from "react-icons/io";

  
const SalesReport: React.FC = () => {

  const [chartData] = React.useState({
    series: [
      {
        name: 'Sales',
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
      }
    ],
    options: {
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: 'top',
          },
        }
      },
      dataLabels: {
        enabled: true,
        formatter: (val: number) => `${val}%`,
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ['#304758']
        }
      },
      xaxis: {
        categories: [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ],
        position: 'bottom',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            }
          }
        },
        tooltip: {
          enabled: true,
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: (val: number) => `${val}%`
        }
      },
      title: {
        floating: true,
        offsetY: 330,
        align: 'center',
        style: {
          color: '#444'
        }
      }
    },
  });
  
  return (
    <div className="bg-white p-4 rounded-lg font-[400] w-full border border-[#E6E6F2]">
      <div className='flex items-center justify-between'>
      <div className='flex items-center gap-6'>
      <h3 className="text-lg text-[#3D3270]">Sales Report</h3>
      <div className='bg-white text-[#6A667D] flex justify-center items-center shadow p-1 px-2 rounded-md text-md'>12 Months</div>
      <div className='bg-[#EDEDF5] text-[#6A667D] flex justify-center items-center py-1 px-3 rounded-md text-md'>6 Months</div>
      <div className='bg-[#EDEDF5] text-[#6A667D] flex justify-center items-center py-1 px-3 rounded-md text-md'>30 Months</div>
      <div className='bg-[#EDEDF5] text-[#6A667D] flex justify-center items-center py-1 px-3 rounded-md text-md'>7 Days</div>
      </div>
      <div className='flex items-center gap-4'>
      <FiDownload className='text-xl text-[#76728A] cursor-pointer' />
      <IoIosMore className='text-xl text-[#76728A] cursor-pointer' />
      </div>
      
      </div>
        <div className="col-span-12 relative">
          <div className='absolute top-[10%]'>
            <h2 className='text-[#6A667D]'>Avg. per months</h2>
          <h1 className='text-[#271E55] font-medium text-2xl'>$38,500</h1>

          </div>
        <ReactApexChart 
          //@ts-ignore
        options={chartData.options} 
          series={chartData.series} 
          type="bar" 
          height={350} 
        />
        </div>
    </div>
  );
};

export default SalesReport;
