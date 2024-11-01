import axios from "axios";
import { useEffect, useState } from "react";
import { FaToggleOff, FaToggleOn } from "react-icons/fa6";

const GestionProductos = () => {
    const [activeTab, setActiveTab] = useState("products");
    const [toggleStates, setToggleStates] = useState({});
    const [productos, setProductos] = useState(null);

    useEffect(() => {

        const traerProductos = async () => {
            let respuesta = await axios.get("http://localhost:8080/api/producto/findAll")

            if (respuesta.status == 200) {
                setProductos(respuesta.data)
            }
        }
        traerProductos();
    }, [])


    const handleToggle = (id) => {
        setToggleStates((prevStates) => ({
            ...prevStates,
            [id]: !prevStates[id],
        }));
    };

    const renderProductManagement = () => {
        return (
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Productos</h2>
                <div className="mb-4 flex flex-wrap items-center">
                    <input
                        type="text"
                        placeholder="Buscar..."
                        className="border rounded px-2 py-1 mr-2 mb-2 sm:mb-0"
                        aria-label="Search products"
                    />
                    <select className="border rounded px-2 py-1 mr-2 mb-2 sm:mb-0" aria-label="Filter by category">
                        <option value="Bases">Bases</option>
                        <option value="Ingredientes">Ingredientes</option>
                        <option value="Proteinas">Proteinas</option>
                        <option value="Aderezos">Aderezos</option>
                    </select>
                    <button className="bg-[#9BC885] text-white px-5 py-2 rounded hover:bg-[#8AB775] transition-colors">
                        Filtrar
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full table-auto">
                        <thead>
                            <tr className="bg-gray-200 text-center">
                                <th className="px-4 py-2">Nombre</th>
                                <th className="px-4 py-2">Tipo</th>
                                <th className="px-4 py-2">Precio</th>
                                <th className="px-4 py-2">Stock</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productos && productos.map((product) => (
                                <tr key={product.id} className="border-b font-bold font-sans text-center items-center">
                                    <td className="xl:px-10 py-2 2xl:px-12">{product.nombre}</td>
                                    <td className="xl:px-10 py-2 2xl:px-12 text-sm">{product.tipoProducto}</td>
                                    <td className="xl:px-10 py-2 2xl:px-12">${product.precio}</td>
                                    <td className="xl:px-10 py-2 2xl:px-8  ">
                                        {toggleStates[product.id] ? (
                                            <FaToggleOff
                                                className="mr-[1px]  text-[25px] text-gray-500 cursor-pointer"
                                                onClick={() => handleToggle(product.id)}
                                            />
                                        ) : (
                                            <FaToggleOn
                                                className="mr-[1px] text-[25px] text-green-500 cursor-pointer"
                                                onClick={() => handleToggle(product.id)}
                                            />
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };

    return (
        <div className="mt-10">
            <div className="mb-10">
                <li className="mr-1 list-none">
                    <button
                        className={`bg-white inline-block py-2 px-4 font-semibold ${activeTab === "products"
                                ? "border-l border-t border-r rounded-t text-[#9BC885]"
                                : "text-gray-500 hover:text-[#9BC885]"
                            }`}
                        onClick={() => setActiveTab("products")}
                    >
                        Product Management
                    </button>
                </li>
            </div>
            <div>{activeTab === "products" && renderProductManagement()}</div>
        </div>
    );
};

export default GestionProductos;
