import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Carrito = () => {
    const { cart, total, sumarCantidad, restarCantidad, eliminarProducto } = useContext(CartContext);

    if (cart.length === 0) {
        return (
            <div className="container mx-auto p-4 text-center py-20">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Tu carrito está vacío</h2>
                <p className="text-gray-600 mb-8">Parece que aún no has añadido ningún instrumento.</p>
                <Link to="/catalogo" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition inline-block">
                    Ir al Catálogo
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">Tu Carrito de Compras</h1>
            
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Lista de productos */}
                <div className="lg:w-2/3 bg-white p-4 md:p-6 rounded-lg shadow-md">
                    {cart.map((item) => (
                        <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-200 py-4 last:border-0 gap-4 sm:gap-2">
                            
                            {/* Información del producto */}
                            <div className="flex items-center gap-4 w-full sm:w-auto">
                                <img src={item.img} alt={item.name} className="w-20 h-20 object-cover rounded flex-shrink-0" />
                                <div className="flex flex-col">
                                    <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{item.name}</h3>
                                    <p className="text-gray-600 text-sm">${item.price.toLocaleString()} c/u</p>
                                </div>
                            </div>
                            
                            {/* Controles: Cantidad, Total y Eliminar */}
                            <div className="flex items-center justify-between w-full sm:w-auto gap-4">
                                
                                {/* Controles de cantidad */}
                                <div className="flex items-center border border-gray-300 rounded-lg flex-shrink-0">
                                    <button 
                                        onClick={() => restarCantidad(item.id)}
                                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-l-lg transition text-lg leading-none"
                                    >
                                        -
                                    </button>
                                    <span className="px-3 py-1 font-medium text-gray-800 min-w-[1.5rem] text-center">{item.count}</span>
                                    <button 
                                        onClick={() => sumarCantidad(item.id)}
                                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-r-lg transition text-lg leading-none"
                                    >
                                        +
                                    </button>
                                </div>

                                {/* Precio Total del Item */}
                                <span className="font-bold text-gray-900 whitespace-nowrap min-w-[100px] text-right">
                                    ${(item.price * item.count).toLocaleString()}
                                </span>

                                {/* Botón Eliminar */}
                                <button 
                                    onClick={() => eliminarProducto(item.id)}
                                    className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-full transition flex-shrink-0"
                                    title="Eliminar producto"
                                >
                                    <i className="fas fa-trash-alt"></i>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Resumen de compra */}
                <div className="lg:w-1/3 bg-gray-50 p-6 rounded-lg shadow-md h-fit sticky top-4">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Resumen</h2>
                    <div className="flex justify-between mb-2 text-gray-600">
                        <span>Subtotal</span>
                        <span>${total.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between mb-4 text-gray-600">
                        <span>Envío</span>
                        <span className="text-right">Calculado al finalizar</span>
                    </div>
                    <div className="border-t border-gray-300 pt-4 mb-6">
                        <div className="flex justify-between font-bold text-lg text-gray-900">
                            <span>Total</span>
                            <span>${total.toLocaleString()}</span>
                        </div>
                    </div>
                    <button className="w-full py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition shadow-md">
                        Proceder al Pago
                    </button>
                    <Link to="/catalogo" className="block text-center mt-4 text-blue-600 hover:underline text-sm">
                        Seguir comprando
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Carrito;