import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaMoneyBillWave } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from "recharts";
import axios from "axios";

const Dashboard = () => {
  const [totalPedidos, setTotalPedidos] = useState(0);
  const [totalGanancias, setTotalGanancias] = useState(0);
  const [weeklyData, setWeeklyData] = useState([]);
  const [monthlyData, setMonthlyData] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const handlerClickFiltrarPorEstadoPedido = async () => {
      try {
        const respuesta = await axios.get(
          "http://localhost:8080/api/pedido/findAllByEstadoPedido/2",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (respuesta.status === 200) {
          const pedidos = respuesta.data;

          // Calculate total revenue
          setTotalGanancias(
            pedidos.reduce((acumulador, pedido) => {
              const precio = pedido.precio ? pedido.precio : 0;
              return acumulador + precio;
            }, 0)
          );

          setTotalPedidos(pedidos.length);

          // Get dates for the last week
          const today = new Date();
          const sevenDaysAgo = new Date(today);
          sevenDaysAgo.setDate(today.getDate() - 6);

          // Initialize array for all days in the range
          const daysArray = [];
          for (let d = new Date(sevenDaysAgo); d <= today; d.setDate(d.getDate() + 1)) {
            const formattedDate = d.toISOString().split('T')[0];
            daysArray.push({
              date: new Date(d),
              formattedDate: formattedDate,
              sales: 0
            });
          }

          // Aggregate sales by day
          pedidos.forEach((pedido) => {
            const pedidoDate = new Date(pedido.fecha);
            const formattedPedidoDate = pedidoDate.toISOString().split('T')[0];
            
            const dayData = daysArray.find(d => d.formattedDate === formattedPedidoDate);
            if (dayData) {
              dayData.sales += pedido.precio || 0;
            }
          });

          // Format data for the chart and sort by date (oldest to newest)
          const formattedWeeklyData = daysArray.map(day => ({
            name: day.date.toLocaleDateString('en-US', {
              weekday: 'short',
              month: 'numeric',
              day: 'numeric'
            }),
            sales: day.sales,
            date: day.date // Keep date for sorting
          }))
          .sort((a, b) => a.date - b.date);

          setWeeklyData(formattedWeeklyData);

          // Monthly data processing (similar to your original code)
          const monthlySales = {};
          pedidos.forEach((pedido) => {
            const fecha = new Date(pedido.fecha);
            const month = fecha.toLocaleString('default', { month: 'short' });
            if (!monthlySales[month]) {
              monthlySales[month] = 0;
            }
            monthlySales[month] += pedido.precio || 0;
          });

          setMonthlyData(
            Object.keys(monthlySales).map((month) => ({
              name: month,
              sales: monthlySales[month],
            }))
          );
        }
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    handlerClickFiltrarPorEstadoPedido();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Total Pedidos</h2>
          <div className="flex items-center">
            <FaShoppingCart className="text-4xl text-[#9BC885] mr-4" />
            <span className="text-3xl font-bold">{totalPedidos}</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Ganancia Total</h2>
          <div className="flex items-center">
            <FaMoneyBillWave className="text-4xl text-[#9BC885] mr-4" />
            <span className="text-3xl font-bold">${totalGanancias}</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md col-span-1 md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Ganancias ultimos 7 días</h2>
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
          <h2 className="text-xl font-semibold mb-4">Ganancias Mensuales</h2>
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
    </div>
  );
};

export default Dashboard;