import Carousel from "../components/Carousel";
import ProductList from "../components/ProductList";
import { musicProducts } from "../data/products";
import { Link } from "react-router-dom";

const Home = () => {
    const featuredProducts = musicProducts.slice(0, 4);

    return (
        <div className="container mx-auto p-4">
            <Carousel />

            <div className="mb-8">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Productos Destacados</h2>
                    <Link to="/catalogo" className="text-blue-600 hover:text-blue-800 font-medium hover:underline">
                        Ver todo el catálogo &rarr;
                    </Link>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredProducts.map(product => (
                        <div 
                            key={product.id} 
                            className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col"
                        >
                            <img src={product.img} alt={product.name} className="w-full h-48 object-cover rounded mb-4" />
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                            <p className="text-gray-600 text-sm mb-4 flex-grow">{product.desc}</p>
                            <div className="flex justify-between items-center mt-auto">
                                <span className="text-xl font-bold text-blue-900">${product.price}</span>
                                <Link to={`/product/${product.id}`}>
                                    <button className="px-3 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition">
                                        Ver
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;