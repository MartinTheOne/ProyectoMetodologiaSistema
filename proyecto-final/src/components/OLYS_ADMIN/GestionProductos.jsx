import { useState } from "react";

import { FaChartLine, FaSearch, FaEdit, FaTrash } from "react-icons/fa"

const GestionProductos = () => {
    const [activeTab, setActiveTab] = useState("products")
    const products = [
        { id: 1, name: "Product A", price: 19.99, stock: 50, category: "Electronics" },
        { id: 2, name: "Product B", price: 29.99, stock: 30, category: "Clothing" },
        { id: 3, name: "Product C", price: 39.99, stock: 20, category: "Home & Garden" },
    ];

    const renderProductManagement = () => (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Product Management</h2>
            <div className="mb-4 flex flex-wrap items-center">
                <input
                    type="text"
                    placeholder="Search products..."
                    className="border rounded px-2 py-1 mr-2 mb-2 sm:mb-0"
                    aria-label="Search products"
                />
                <select className="border rounded px-2 py-1 mr-2 mb-2 sm:mb-0" aria-label="Filter by category">
                    <option value="Bases">Bases</option>
                    <option value="Ingredientes">Ingredientes</option>
                    <option value="Proteinas">Proteinas</option>
                    <option value="Aderezos">Aderezos</option>
                </select>
                <button className="bg-[#9BC885] text-white px-4 py-2 rounded hover:bg-[#8AB775] transition-colors">
                    Add Product
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="border p-4 rounded">
                        <img
                            src={`https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1399&q=80`}
                            alt={product.name}
                            className="w-full h-48 object-cover mb-2 rounded"
                        />
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                        <p className="text-gray-600">${product.price}</p>
                        <p className="text-gray-600">Stock: {product.stock}</p>
                        <p className="text-gray-600">Category: {product.category}</p>
                        <div className="mt-2 flex justify-end">
                            <button className="text-blue-500 mr-2" aria-label={`Edit ${product.name}`}>
                                <FaEdit />
                            </button>
                            <button className="text-red-500" aria-label={`Delete ${product.name}`}>
                                <FaTrash />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div>
            <div className="mb-10">

                <li className="mr-1 list-none ">
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
            <div>
                {activeTab === "products" && renderProductManagement()}
            </div>

        </div>
    )

}
export default GestionProductos;