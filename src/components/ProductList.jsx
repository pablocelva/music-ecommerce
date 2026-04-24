import { Link } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext";
import { musicProducts } from "../data/products"


//const ProductList = () => {
//    const products = [
//        { id: 1, name: 'Guitarra Eléctrica', price: 500 },
//        { id: 2, name: 'Piano Digital', price: 1000 },
//        { id: 3, name: 'Sintetizador', price: 700 },
//        { id: 4, name: 'Micrófono Condensador', price: 650 }
//];

const ProductList = () => {
    const products = musicProducts

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5">
            {products.map(product => (
                <div 
                    key={product.id} 
                    className="flex bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out p-4 flex-col justify-between"
                >
                        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                        <img src={product.img} alt={product.name} className="w-full h-48 object-cover rounded" />
                        <p className="text-base text-gray-600 mt-2">{product.desc}</p>
                        <p className="text-base text-gray-600 mt-2"><strong>Precio: ${product.price}</strong></p>
                        
                    <Link to={`/product/${product.id}`} className="w-full p-4 flex flex-col">
                        {/* Botón de acción (opcional) */}
                        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300">
                            Ver Detalles
                        </button>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
