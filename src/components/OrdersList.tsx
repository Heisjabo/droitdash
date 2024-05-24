import React from 'react';

const OrdersList: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h3 className="text-lg font-bold mb-4">Orders List</h3>
      <table className="w-full">
        <thead>
          <tr>
            <th className="border-b p-2 text-left">Order ID</th>
            <th className="border-b p-2 text-left">Customer</th>
            <th className="border-b p-2 text-left">Date</th>
            <th className="border-b p-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-b p-2">12345</td>
            <td className="border-b p-2">John Doe</td>
            <td className="border-b p-2">2024-05-01</td>
            <td className="border-b p-2">Completed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersList;
