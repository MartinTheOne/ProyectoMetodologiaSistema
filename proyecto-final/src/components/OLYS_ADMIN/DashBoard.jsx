import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaMoneyBillWave } from "react-icons/fa";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from "recharts";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [totalPedidos, setTotalPedidos] = useState(0);
  const [totalGanancias, setTotalGanancias] = useState(0);
  const [weeklyData, setWeeklyData] = useState([]);
  const [monthlyData, setMonthlyData] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const handlerCLickFiltrarPorEstadoPedido = async () => {
      try {
        const respuesta = await axios.get(`http://localhost:8080/api/pedido/findAllByEstadoPedido/2`, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });

        if (respuesta.status === 200) {
          const pedidos = respuesta.data;

          // Calcular ganancias totales
          setTotalGanancias(pedidos.reduce((acumulador, pedido) => {
            const precio = pedido.precio ? pedido.precio : 0;
            return acumulador + precio;
          }, 0));

          setTotalPedidos(pedidos.length);

          // Calcular ventas diarias y mensuales
          const weeklySales = Array(7).fill(0);
          const monthlySales = {};

          pedidos.forEach(pedido => {
            const fecha = new Date(pedido.fecha);
            const dayOfWeek = fecha.getDay(); // Obtiene el día de la semana (0 = domingo, 6 = sábado)
            const month = fecha.toLocaleString("default", { month: "short" }); // Ej. "Jan", "Feb"

            weeklySales[dayOfWeek] += pedido.precio || 0; // Sumar ventas diarias

            // Agrupar por mes
            if (!monthlySales[month]) {
              monthlySales[month] = 0;
            }
            monthlySales[month] += pedido.precio || 0;
          });

          // Formatear datos para los gráficos
          setWeeklyData([
            { name: "Sun", sales: weeklySales[0] },
            { name: "Mon", sales: weeklySales[1] },
            { name: "Tue", sales: weeklySales[2] },
            { name: "Wed", sales: weeklySales[3] },
            { name: "Thu", sales: weeklySales[4] },
            { name: "Fri", sales: weeklySales[5] },
            { name: "Sat", sales: weeklySales[6] },
          ]);

          setMonthlyData(Object.keys(monthlySales).map(month => ({
            name: month,
            sales: monthlySales[month],
          })));
        }
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    handlerCLickFiltrarPorEstadoPedido();
  }, []);

  const renderDashboard = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Total Orders</h2>
        <div className="flex items-center">
          <FaShoppingCart className="text-4xl text-[#9BC885] mr-4" />
          <span className="text-3xl font-bold">{totalPedidos}</span>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Revenue Earned</h2>
        <div className="flex items-center">
          <FaMoneyBillWave className="text-4xl text-[#9BC885] mr-4" />
          <span className="text-3xl font-bold">${totalGanancias}</span>
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

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="mb-8">
        <ul className="flex flex-wrap border-b">
          <li className="mr-1">
            <button
              className={`bg-white inline-block py-2 px-4 font-semibold ${activeTab === "dashboard"
                ? "border-l border-t border-r rounded-t text-[#9BC885]"
                : "text-gray-500 hover:text-[#9BC885]"}`
              }
              onClick={() => setActiveTab("dashboard")}
            >
              Dashboard
            </button>
          </li>
        </ul>
      </nav>
      {activeTab === "dashboard" && renderDashboard()}
    </div>
  );
};

export default Dashboard;
