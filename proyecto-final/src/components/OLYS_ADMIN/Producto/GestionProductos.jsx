import axios from "axios";
import { useEffect, useState } from "react";
import { FaToggleOff, FaToggleOn ,FaTrash} from "react-icons/fa6";
import { BsPencilSquare } from "react-icons/bs";
import { TbRefresh } from "react-icons/tb";
import ModalProducto from "./ModalProducto";
import NuevoProducto from "./NuevoProducto";
import ModalBorrarProd from "./ModalBorrarProd";
import ModalEditarProd from "./ModalEditarProducto";
import url from "../../../utils/url"

const GestionProductos = () => {
    const [activeTab, setActiveTab] = useState("products");
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenModalBorrar,setIsOpenModalBorrar]=useState(false)
    const [isOpenModalEditar,setIsOpenModalEditar]=useState(false)

    const [toggleStates, setToggleStates] = useState({});
    const [productos, setProductos] = useState(null);
    const [productosOriginales, setProductosOriginales] = useState(null);
    const [tipoProducto, setTipoProducto] = useState("Base");
    const [prodFiltrado, setProdFIltrado] = useState(false)
    const [prodSeleccionado, setProdSeleccionado] = useState({});
    const token = localStorage.getItem("token")


    const traerProductos = async () => {
        let respuesta = await axios.get(`${url.urlKey}/api/producto/findAll`);


        if (respuesta.status === 200) {
            setProductos(respuesta.data);
            setProductosOriginales(respuesta.data); // Guarda los productos originales
            setProdFIltrado(false)
        }
    };



    useEffect(() => {
        const notyf = new Notyf({
            duration: 3000,
            position: {
                x: 'center',
                y: 'top',
            },
            types: [
                {
                    type: 'success',
                    background: "#28b463     ",
                    className: "rounded-[10px] text-black text-[15px]"
                }
            ]

        });
        window.notyf = notyf;
        traerProductos();
    }, []);

    const handleToggle = (id) => {
        setToggleStates((prevStates) => ({
            ...prevStates,
            [id]: !prevStates[id],
        }));
    };

    const handlerClickFiltrar = () => {
        if (tipoProducto) {
            let prodFiltrados = productosOriginales.filter(prod => prod.tipoProducto === tipoProducto); // Filtra desde productosOriginales
            setProductos(prodFiltrados);
            setProdFIltrado(true)
        }
    };

    const BuscarProductoPorNombre = (nombre) => {
        const nombreMin = nombre.toLowerCase()
        if (nombre != "") {
            if (!prodFiltrado) {
                const buscarProducto = productosOriginales.filter(prod => prod.nombre.toLowerCase().includes(nombreMin))
                setProductos(buscarProducto)
            }
            else {
                const buscarProducto = productos.filter(prod => prod.nombre.toLowerCase().includes(nombreMin))
                setProductos(buscarProducto)
            }
        }
        else if (prodFiltrado) {
            handlerClickFiltrar()
        }
        else {
            setProductos(productosOriginales)
        }
    }

    const isStock = (product) => {

        const respuesta = async () => {
            try {
                const guardar = await axios.put(
                    `${url.urlKey}/api/producto/update/${product.id}`,
                    {
                        nombre: product.nombre,
                        calorias: product.calorias,
                        tipoProducto: product.tipoProducto,
                        precio: product.precio,
                        cantidad: 0,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });

                if (guardar.status == 200) {
                    window.notyf.success(`Producto "${product.nombre}" sacado de stock`);
                    traerProductos();
                }
            } catch (error) {
                console.error("Error en la actualización del producto:", error);
            }
        };
        respuesta();
        handleToggle(product.id);
        setIsOpen(false);
    };

    const handlerClickOpenModal = (prod) => {
        setProdSeleccionado(prod)
        setIsOpen(true)
    }

    const onRequestClose = () => {
        setIsOpen(false)
    }

    

    const handlerClickPonerStokc = (product) => {
        const respuesta = async () => {
            try {
                const guardar = await axios.put(
                    `${url.urlKey}/api/producto/update/${product.id}`,
                    {
                        nombre: product.nombre,
                        calorias: product.calorias,
                        tipoProducto: product.tipoProducto,
                        precio: product.precio,
                        cantidad: 1,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                if (guardar.status == 200) {
                    window.notyf.success(`Producto "${product.nombre}" en stock reingresado`);
                    traerProductos();
                }
            } catch (error) {
                console.error("Error en la actualización del producto:", error);
            }
        };
        respuesta();
        handleToggle(product.id)
    }

    const Borrar=async(product)=>{
        try {
            const respuesta=await axios.delete(`${url}/api/producto/delete/${product.id}`,{
                headers:{
                    Authorization:`Bearer ${token}`,
                }
            }) 

            if(respuesta.status==200){
                window.notyf.success(`Producto ${product.nombre} Borrado correctamente`)
                traerProductos();
                setIsOpenModalBorrar(false)
            }
        } catch (error) {
            window.notyf.error("Error al borrar Producto");
        }     
    }
    const handlerClickBorrar=(product)=>{
        setProdSeleccionado(product)
        setIsOpenModalBorrar(true)
    
    }

    const handlerClickEditar=(product)=>{
        setProdSeleccionado(product)
        setIsOpenModalEditar(true)   
    }

    return (
        <div className="">
            <div className="container mx-auto py-8">
                <nav className="mb-3">
                    <ul className="flex flex-wrap border-b">
                        <li className="mr-1">
                            <button
                                className={`bg-white inline-block py-2 px-4 font-semibold ${activeTab === "products"
                                    ? "border-l border-t border-r rounded-t text-[#9BC885]"
                                    : "text-gray-500 hover:text-[#9BC885]"
                                    }`}
                                onClick={() => setActiveTab("products")}
                            >
                                Gestion Stock
                            </button>
                            <button
                                className={`ml-1 bg-white inline-block py-2 px-4 font-semibold ${activeTab === "Crear product"
                                    ? "border-l border-t border-r rounded-t text-[#9BC885]"
                                    : "text-gray-500 hover:text-[#9BC885]"
                                    }`}
                                onClick={() => setActiveTab("Crear product")}
                            >
                                Agregar Producto
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>

            <div>
                {activeTab === "Crear product" && <NuevoProducto traerProducto={traerProductos} />}
                {activeTab === "products" && (
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-4 font-julius">Productos</h2>
                        <div className="mb-4 flex flex-wrap items-center">
                            <input
                                onChange={(e) => BuscarProductoPorNombre(e.target.value)}
                                type="text"
                                placeholder="Buscar..."
                                className="border rounded px-2 py-1 mr-2 mb-2 sm:mb-0"
                                aria-label="Search products"
                            />
                            <select onChange={(e) => { setTipoProducto(e.target.value) }} className="border rounded px-2 py-1 mr-2 mb-2 sm:mb-0" aria-label="Filter by category">
                                <option value="Base">Base</option>
                                <option value="Ingrediente">Ingrediente</option>
                                <option value="Proteina">Proteina</option>
                                <option value="Aderezo">Aderezo</option>
                                <option value="Premium">Premium</option>
                                <option value="Queso">Queso</option>
                            </select>
                            <button
                                onClick={handlerClickFiltrar}
                                className="bg-[#9BC885] text-white px-5 py-2 rounded hover:bg-[#8AB775] transition-colors">
                                Filtrar
                            </button>
                            <div onClick={() => traerProductos()} className="ml-[6px] bg-[#9BC885] text-white px-3 py-[5px] rounded hover:bg-[#8AB775] transition-colors">
                                <TbRefresh className="text-[30px] cursor-pointer" />
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full table-auto">
                                <thead>
                                    <tr className="bg-gray-200 text-center">
                                        <th className="px-4 py-2 text-[20px]">Nombre</th>
                                        <th className="px-4 py-2 text-[20px]">Tipo</th>
                                        <th className="px-4 py-2 text-[20px]">Calorias</th>
                                        <th className="px-4 py-2 text-[20px]">Stock</th>
                                        <th className="px-4 py-2 text-[20px]">Eliminar</th>
                                        <th className="px-4 py-2 text-[20px]">Editar</th>
                                    </tr>
                                </thead>
                                <tbody className="">
                                    {productos && productos.map((product) => (
                                        <tr key={product.id} className="border-b font-bold font-sans text-center hover:bg-gray-200">
                                            <td className="xl:px-10 py-2 2xl:px-12 text-[18px] font-julius w-[350px]">{product.nombre}</td>
                                            <td className="xl:px-10 py-2 2xl:px-12 text-[18px] font-julius w-[250px] ">{product.tipoProducto}</td>
                                            <td className="xl:px-10 py-2 2xl:px-12 text-[18px] font-julius">{product.calorias}</td>
                                            <td className="xl:px-1 py-2 2xl:px-1 flex justify-center ">
                                                {product.cantidad == 0 ? (
                                                    <FaToggleOff
                                                        className="mr-[1px] text-[35px] text-gray-500 cursor-pointer"
                                                        onClick={() => handlerClickPonerStokc(product)}
                                                    />
                                                ) : (
                                                    <FaToggleOn
                                                        className="mr-[1px] text-[35px] text-green-500 cursor-pointer"
                                                        onClick={() => handlerClickOpenModal(product)}
                                                    />
                                                )}
                                            </td>
                                            <td className="xl:px-10 py-2 2xl:px-12 text-[23px] font-julius w-36"><FaTrash onClick={()=>handlerClickBorrar(product)} className="text-red-600 cursor-pointer flex justify-center"/></td>
                                            <td className="xl:px-10 py-2 2xl:px-12 text-[23px] font-julius w-36"><BsPencilSquare onClick={()=>{handlerClickEditar(product)}} className="text-yellow-400 cursor-pointer flex justify-center"/></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
            <ModalProducto IsOpen={isOpen} onRequestClose={onRequestClose} IsStock={isStock} prod={prodSeleccionado} />
            <ModalBorrarProd IsOpen={isOpenModalBorrar} onRequestClose={()=>setIsOpenModalBorrar(false)} prod={prodSeleccionado} Borrar={Borrar}/>
            <ModalEditarProd IsOpen={isOpenModalEditar} onRequestClose={()=>setIsOpenModalEditar(false)} prod={prodSeleccionado} traerProducto={traerProductos}/>   
        </div>
    );
};

export default GestionProductos;
