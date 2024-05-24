import React from 'react';
import SalesReport from './SalesReport';
import OrdersList from './OrdersList';
import MonthlySales from './MonthlySales';

const Cards: React.FC = () => {
  return (
    <div className="p-4 flex-1">
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-sm text-gray-500">Total Sales</h3>
          <p className="text-2xl font-bold">$59,690</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-sm text-gray-500">Total Orders</h3>
          <p className="text-2xl font-bold">4,865</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-sm text-gray-500">Total Customers</h3>
          <p className="text-2xl font-bold">2,245</p>
        </div>
      </div>
      <SalesReport />
      <OrdersList />
      <MonthlySales />
    </div>
  );
};

export default Cards;
