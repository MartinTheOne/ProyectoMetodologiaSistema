import React, { useState } from "react";
import { FaShoppingCart, FaMoneyBillWave} from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from "recharts";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const weeklyData = [
    { name: "Mon", sales: 4000 },
    { name: "Tue", sales: 3000 },
    { name: "Wed", sales: 5000 },
    { name: "Thu", sales: 2780 },
    { name: "Fri", sales: 1890 },
    { name: "Sat", sales: 2390 },
    { name: "Sun", sales: 3490 },
  ];

  const monthlyData = [
    { name: "Jan", sales: 4000 },
    { name: "Feb", sales: 3000 },
    { name: "Mar", sales: 5000 },
    { name: "Apr", sales: 2780 },
    { name: "May", sales: 1890 },
    { name: "Jun", sales: 2390 },
    { name: "Jul", sales: 3490 },
  ];

  const orders = [
    { id: 1, customer: "John Doe", date: "2023-06-01", status: "Completed" },
    { id: 2, customer: "Jane Smith", date: "2023-06-02", status: "Processing" },
    { id: 3, customer: "Bob Johnson", date: "2023-06-03", status: "Shipped" },
  ];



  const renderDashboard = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Total Orders</h2>
        <div className="flex items-center">
          <FaShoppingCart className="text-4xl text-[#9BC885] mr-4" />
          <span className="text-3xl font-bold">150</span>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Revenue Earned</h2>
        <div className="flex items-center">
          <FaMoneyBillWave className="text-4xl text-[#9BC885] mr-4" />
          <span className="text-3xl font-bold">$15,000</span>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md col-span-1 md:col-span-2">
        <h2 className="text-xl font-semibold mb-4">Weekly Sales Chart</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={weeklyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#9BC885" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md col-span-1 md:col-span-2">
        <h2 className="text-xl font-semibold mb-4">Monthly Sales Chart</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#9BC885" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  const renderOrderManagement = () => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Order Management</h2>
      <div className="mb-4 flex flex-wrap items-center">
        <input
          type="date"
          className="border rounded px-2 py-1 mr-2 mb-2 sm:mb-0"
          aria-label="Filter by start date"
        />
        <input
          type="date"
          className="border rounded px-2 py-1 mr-2 mb-2 sm:mb-0"
          aria-label="Filter by end date"
        />
        <button className="bg-[#9BC885] text-white px-4 py-2 rounded hover:bg-[#8AB775] transition-colors">
          Filter
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Order ID</th>
              <th className="px-4 py-2">Customer Name</th>
              <th className="px-4 py-2">Order Date</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="px-4 py-2">{order.id}</td>
                <td className="px-4 py-2">{order.customer}</td>
                <td className="px-4 py-2">{order.date}</td>
                <td className="px-4 py-2">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

 

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="mb-8">
        <ul className="flex flex-wrap border-b">
          <li className="mr-1">
            <button
              className={`bg-white inline-block py-2 px-4 font-semibold ${
                activeTab === "dashboard"
                  ? "border-l border-t border-r rounded-t text-[#9BC885]"
                  : "text-gray-500 hover:text-[#9BC885]"
              }`}
              onClick={() => setActiveTab("dashboard")}
            >
              Dashboard
            </button>
          </li>
          <li className="mr-1">
            <button
              className={`bg-white inline-block py-2 px-4 font-semibold ${
                activeTab === "orders"
                  ? "border-l border-t border-r rounded-t text-[#9BC885]"
                  : "text-gray-500 hover:text-[#9BC885]"
              }`}
              onClick={() => setActiveTab("orders")}
            >
              Order Management
            </button>
          </li>        
        </ul>
      </nav>
      {activeTab === "dashboard" && renderDashboard()}
      {activeTab === "orders" && renderOrderManagement()}
      
    </div>
  );
};

export default Dashboard;