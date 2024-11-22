import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaMoneyBillWave } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from "recharts";
import axios from "axios";
import url from "../../utils/url"

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
          `${url.urlKey}/api/pedido/findAllByEstadoPedido/2`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (respuesta.status === 200) {
          const pedidos = respuesta.data;

          setTotalGanancias(
            pedidos.reduce((acumulador, pedido) => {
              const precio = pedido.precio ? pedido.precio : 0;
              return acumulador + precio;
            }, 0)
          );

          setTotalPedidos(pedidos.length);

          // Obtener fecha actual y ajustar a la zona horaria local
          const today = new Date();
          const sevenDaysAgo = new Date(today);
          sevenDaysAgo.setDate(today.getDate() - 6);

          // Inicializar array para todos los días en el rango
          const daysArray = [];
          for (let d = new Date(sevenDaysAgo); d <= today; d.setDate(d.getDate() + 1)) {
            const currentDate = new Date(d);
            currentDate.setHours(0, 0, 0, 0);
            daysArray.push({
              date: currentDate,
              formattedDate: currentDate.toISOString().split('T')[0],
              sales: 0
            });
          }

          // Agregación de ventas por día con manejo preciso de fechas
          pedidos.forEach((pedido) => {
            // Convertir la fecha del pedido a objeto Date y ajustar a medianoche
            const [year, month, day] = pedido.fecha.split('-').map(num => parseInt(num, 10));
            const pedidoDate = new Date(year, month - 1, day);
            pedidoDate.setHours(0, 0, 0, 0);
            
            const formattedPedidoDate = pedidoDate.toISOString().split('T')[0];
            
            const dayData = daysArray.find(d => {
              const currentDate = new Date(d.date);
              return currentDate.toISOString().split('T')[0] === formattedPedidoDate;
            });

            if (dayData) {
              dayData.sales += pedido.precio || 0;
            }
          });

          // Formatear datos para el gráfico y ordenar por fecha
          const formattedWeeklyData = daysArray.map(day => ({
            name: day.date.toLocaleDateString('es-ES', {
              weekday: 'short',
              day: 'numeric',
              month: 'numeric'
            }),
            sales: day.sales,
            date: day.date
          }))
          .sort((a, b) => a.date - b.date);

          setWeeklyData(formattedWeeklyData);

          // Procesamiento de datos mensuales
          const monthlySales = {};
          pedidos.forEach((pedido) => {
            const [year, month] = pedido.fecha.split('-');
            const fecha = new Date(parseInt(year), parseInt(month) - 1, 1);
            const monthKey = fecha.toLocaleString('es-ES', { month: 'short' });
            
            if (!monthlySales[monthKey]) {
              monthlySales[monthKey] = 0;
            }
            monthlySales[monthKey] += pedido.precio || 0;
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
          <h2 className="text-xl font-semibold mb-4">Ganancias últimos 7 días</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Ventas" fill="#9BC885" />
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
              <Line type="monotone" dataKey="Ventas" stroke="#9BC885" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;