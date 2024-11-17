import { useEffect, useState } from "react";
import axios from "axios";
import url from "../../../utils/url.js"
import ProductosPedidoModal from "./ProductosPedidoModal";
import { TbRefresh } from "react-icons/tb";
import { FaEye, FaCheckCircle, FaWhatsapp } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";


const GestionPedidos = () => {
    const [activeTab, setActiveTab] = useState("orders");
    const [pedidos, setPedidos] = useState(null);
    const [pedidosProductosSel, setpedidosProductosSel] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const token = localStorage.getItem("token");
    const [estadoPedido, setEstadoPedido] = useState(2);
    const [PedidosPorEstadoPedido, setPedidosPorEstadoPedido] = useState(null);

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const ObtenerPedidos = async () => {
        try {
            const respuesta = await axios.get(`${url.urlKey}/api/pedido/findAll`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            let ped = respuesta.data;
            let pedidosOrdenados = ped.sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime());
            setPedidos(pedidosOrdenados);

        } catch (error) {
            console.error('Error al obtener datos:', error);
        }
    };

    useEffect(() => {

        ObtenerPedidos();
    }, []);

    const cerrarModal = () => {
        setIsOpen(false);
    };

    const handleStartDateChange = (e) => {
        const date = new Date(e.target.value);
        const formattedDate = date.toISOString().slice(0, 10);
        setStartDate(formattedDate);
    };

    const handleEndDateChange = (e) => {
        const date = new Date(e.target.value);
        const formattedDate = date.toISOString().slice(0, 10);
        setEndDate(formattedDate);
    };
    const handlerCLickPedidos = () => {
        ObtenerPedidos();
    }

    const handlerCLickFiltrarPedidoPorFecha = () => {
        if (endDate && startDate && startDate < endDate) {
            try {
                const ObtenerPedidosFecha = async () => {
                    const respuesta = await axios.get(`${url.urlKey}/api/pedido/findAll/${startDate}/${endDate}`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    })
                    if (respuesta.status == 200) {
                        let ped = respuesta.data
                        let pedidosOrdenados = ped.sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime());
                        setPedidos(pedidosOrdenados)
                    }

                }
                ObtenerPedidosFecha();
            } catch (error) {

            }

        }
    }

    const renderOrderPedidoDate = () => {
        const handlerCLickFiltrarPorEstadoPedido = async () => {
            if (estadoPedido) {
                try {
                    const respuesta = await axios.get(`${url.urlKey}/api/pedido/findAllByEstadoPedido/${estadoPedido}`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        }
                    })
                    if (respuesta.status == 200) {
                        let ped = respuesta.data
                        let pedidosOrdenados = ped.sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime());
                        setPedidosPorEstadoPedido(pedidosOrdenados)
                    }
                } catch (error) {

                }
            }
        }
        const handlerOnChangeEstPedido = (e) => {
            setEstadoPedido(e.target.value)
        }

        const handlerClickOrdenarFecha = () => {
            let pedidoCopia = [...PedidosPorEstadoPedido]
            let pedidosOrdenados = pedidoCopia.sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime());
            setPedidosPorEstadoPedido(pedidosOrdenados)
        }
        return (

            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4 font-julius">Pedidos</h2>
                <div className="flex" >
                    <div>
                        <select onChange={(e) => handlerOnChangeEstPedido(e)} className="border rounded px-2 py-2 mr-2 mb-2 sm:mb-0" aria-label="Filter by category">
                            <option value="2">Pagados</option>
                            <option value="1">Pendientes</option>
                            <option value="3">Cancelados</option>
                        </select>

                    </div>
                    <div className="mb-4 flex flex-wrap items-center">
                        <button onClick={handlerCLickFiltrarPorEstadoPedido}
                            className="bg-[#9BC885] text-white px-4 py-2 rounded hover:bg-[#8AB775] transition-colors">
                            Filtrar
                        </button >

                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full table-auto">
                        <thead>
                            <tr className="bg-gray-200">

                                <th className="px-4 py-2">Nombre</th>
                                <th className="px-4 py-2">Celular</th>
                                <th className="px-4 py-2">Direccion</th>
                                <th className="px-4 py-2">Estado</th>
                                <th className="px-4 py-2">Metodo pago</th>
                                <th className="px-4 py-2 cursor-pointer" onClick={handlerClickOrdenarFecha}>Fecha</th>
                                <th className="px-4 py-2">Envio</th>
                                <th className="px-4 py-2">Precio</th>
                                <th className="px-4 py-2">Productos</th>                            
                            </tr>
                        </thead>
                        <tbody>
                            {PedidosPorEstadoPedido && PedidosPorEstadoPedido.map((ped) => {
                                
                                const estadoColor = ped.estadoPedido.estadoPedido === "pendiente"
                                    ? "bg-yellow-300"
                                    : ped.estadoPedido.estadoPedido === "pagado"
                                        ? "bg-green-500"
                                        : ped.estadoPedido.estadoPedido === "cancelado"
                                            ? "bg-red-500"
                                            : "";
                                return (
                                    <tr key={ped.id} className="border-b font-bold font-sans text-center hover:bg-gray-200">

                                        <td className="xl:px-10 py-2 2xl:px-12">{ped.nombreCliente}</td>
                                        <td className="xl:px-10 py-2 2xl:px-12 text-sm flex mt-2 text-center items-center"><FaWhatsapp className="mr-[1px] text-[25px] bg-green-500 text-white p-1 rounded-full" />{ped.celularCliente}</td>
                                        <td className="xl:px-10 py-2 2xl:px-12 ">{ped.direccionCliente==" "? "Sin Dirección":ped.direccionCliente}</td>
                                        <td className={`xl:px-10 py-2 2xl:px-8 text-center`}>
                                            <p className={`${estadoColor} h-[30px] w-[100px]`}>{ped.estadoPedido.estadoPedido.toUpperCase()}</p>
                                        </td>
                                        <td className="xl:px-10 py-2 2xl:px-8">Efectivo</td>
                                        <td className="xl:px-10 py-2 2xl:px-8 "><div className="w-20 text-sm ml-6">{ped.fecha}</div></td>
                                        <td className="xl:px-8 py-2 2xl:px-8">{ped.envio ? <FaCheckCircle className="text-[20px] text-green-500" /> : <IoCloseCircle className="text-[24px] text-red-500" />}</td>
                                        <td className="xl:px-10 py-2 text-center 2xl:px-8"><div className="w-20 text-sm">${ped.precio}</div></td>
                                        <td className="xl:px-10 py-2 2xl:px-12">
                                            <FaEye onClick={() => { setIsOpen(true); setpedidosProductosSel(ped.productosList); }} className="h-[25px] w-[25px] cursor-pointer" />
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>

                    </table>
                </div>
            </div>
        )
    }
    

    const renderOrderManagement = () => {

        const handlerClickOrdenarFecha = () => {
            let pedidoCopia = [...pedidos];
            let pedidosOrdenados = pedidoCopia.sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime());
            setPedidos(pedidosOrdenados);
        };

        return (
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4 font-julius">Pedidos</h2>
                <div className="mb-4 flex flex-wrap items-center">
                    <input
                        type="date"
                        value={startDate}
                        onChange={handleStartDateChange}
                        className="border rounded px-2 py-1 mr-2 mb-2 sm:mb-0"
                        aria-label="Filter by start date"
                    />
                    <input
                        type="date"
                        value={endDate}
                        onChange={handleEndDateChange}
                        className="border rounded px-2 py-1 mr-2 mb-2 sm:mb-0"
                        aria-label="Filter by end date"
                    />
                    <button onClick={handlerCLickFiltrarPedidoPorFecha}
                        className="bg-[#9BC885] text-white px-4 py-2 rounded hover:bg-[#8AB775] transition-colors">
                        Filtrar
                    </button >
                    <div onClick={handlerCLickPedidos} className="ml-[6px] bg-[#9BC885] text-white px-3 py-[5px] rounded hover:bg-[#8AB775] transition-colors">
                        <TbRefresh className=" text-[30px] cursor-pointer" />
                    </div>

                </div>
                <div className="overflow-x-auto">
                    <table className="w-full table-auto">
                        <thead>
                            <tr className="bg-gray-200">

                                <th className="px-4 py-2">Nombre</th>
                                <th className="px-4 py-2">Celular</th>
                                <th className="px-4 py-2">Direccion</th>
                                <th className="px-4 py-2">Estado</th>
                                <th className="px-4 py-2">Metodo pago</th>
                                <th className="px-4 py-2 cursor-pointer" onClick={handlerClickOrdenarFecha}>Fecha</th>
                                <th className="px-4 py-2">Envio</th>
                                <th className="px-4 py-2">Precio</th>
                                <th className="px-4 py-2">Productos</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pedidos && pedidos.map((ped) => {
                                const estadoColor = ped.estadoPedido.estadoPedido === "pendiente"
                                    ? "bg-yellow-300"
                                    : ped.estadoPedido.estadoPedido === "pagado"
                                        ? "bg-green-500"
                                        : ped.estadoPedido.estadoPedido === "cancelado"
                                            ? "bg-red-500"
                                            : "";

                                return (
                                    <tr key={ped.id} className="border-b font-bold text-center hover:bg-gray-200">

                                        <td className="xl:px-10 py-2 2xl:px-12">{ped.nombreCliente}</td>
                                        <td className="xl:px-10 py-2 2xl:px-12 text-sm flex mt-2 text-center items-center"><FaWhatsapp className="mr-[1px] text-[25px] bg-green-500 text-white p-1 rounded-full" />{ped.celularCliente}</td>
                                        <td className="xl:px-10 py-2 2xl:px-12 ">{ped.direccionCliente==" "? "Sin Dirección":ped.direccionCliente}</td>
                                        <td className={`xl:px-10 py-2 2xl:px-12 text-center`}>
                                            <p className={`${estadoColor} h-[30px] w-[100px]`}>{ped.estadoPedido.estadoPedido.toUpperCase()}</p>

                                        </td>
                                        <td className="xl:px-10 py-2 2xl:px-12">{ped.metodoPago.metodoPago}</td>
                                        <td className="xl:px-10 py-2 2xl:px-12"><div className="w-20 text-sm">{ped.fecha}</div></td>
                                        <td className="xl:px-8 py-2 2xl:px-8">{ped.envio ? <FaCheckCircle className="text-[20px] text-green-500" /> : <IoCloseCircle className="text-[24px] text-red-500" />}</td>
                                        <td className="xl:px-10 py-2 text-center 2xl:px-8"><div className="w-20 text-sm">${ped.precio}</div></td>                                     
                                        <td className="xl:px-10 py-2 2xl:px-12">
                                            <FaEye onClick={() => { setIsOpen(true); setpedidosProductosSel([ped.listaEnsaladas,ped.productosList]); }} className="h-[25px] w-[25px] cursor-pointer" />
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>

                    </table>
                </div>
            </div>
        )
    };

    return (
        <div>
            <div className="container mx-auto py-8">
                <nav className="mb-3">
                    <ul className="flex flex-wrap border-b">
                        <li className="mr-1">
                            <button
                                className={`bg-white inline-block py-2 px-4 font-semibold ${activeTab === "orders"
                                    ? "border-l border-t border-r rounded-t text-[#9BC885]"
                                    : "text-gray-500 hover:text-[#9BC885]"
                                    }`}
                                onClick={() => setActiveTab("orders")}
                            >
                                Gestion Por Fecha
                            </button>
                        </li>
                        <li className="mr-1">
                            <button
                                className={`bg-white inline-block py-2 px-4 font-semibold ${activeTab === "estados"
                                    ? "border-l border-t border-r rounded-t text-[#9BC885]"
                                    : "text-gray-500 hover:text-[#9BC885]"
                                    }`}
                                onClick={() => setActiveTab("estados")}
                            >
                                Gestion Por Estado
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                {activeTab === "orders" && renderOrderManagement()}
                {activeTab === "estados" && renderOrderPedidoDate()}
            </div>
            <ProductosPedidoModal products={pedidosProductosSel} IsOpen={isOpen} onRequestClose={cerrarModal} />
        </div>
    );
};

export default GestionPedidos;
