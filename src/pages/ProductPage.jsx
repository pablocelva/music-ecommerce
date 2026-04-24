import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { musicProducts } from "../data/products";
import { CartContext } from "../context/CartContext";

const ProductPage = () => {
  const { id } = useParams();
  const { agregarAlCarrito } = useContext(CartContext); // 1. Usar el contexto
  const [product, setProduct] = useState(null);
  const [added, setAdded] = useState(false); // Estado para feedback visual

  const productData = musicProducts;

  useEffect(() => {
    const foundProduct = productData.find((item) => item.id === id.toString());
    setProduct(foundProduct);
    setAdded(false); // Resetear estado al cambiar de producto
  }, [id]);

  const handleAddToCart = () => {
    agregarAlCarrito(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000); // Volver al estado original después de 2 seg
  };

  if (!product) {
    return (
      <div className="container mx-auto p-8 text-center">
        <p className="text-xl text-gray-600">Cargando producto o no encontrado...</p>
        <Link to="/catalogo" className="text-blue-600 hover:underline mt-4 block">Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Card de detalle del producto */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-12 flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img 
            className="w-full h-64 md:h-full object-cover" 
            src={product.img} 
            alt={product.name} 
          />
        </div>
        
        <div className="p-6 md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-gray-800 mb-2">{product.name}</h1>
            <p className="text-2xl text-blue-600 font-bold mb-4">${product.price.toLocaleString()}</p>
            <p className="text-gray-700 mb-6 leading-relaxed">{product.desc}</p>
            
            {product.features && (
              <ul className="mb-6 space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-gray-600 text-sm flex items-center">
                    <span className="mr-2">✓</span> {feature}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button 
            onClick={handleAddToCart}
            className={`w-full py-3 px-6 font-semibold rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              added 
                ? 'bg-green-600 text-white ring-green-600' 
                : 'bg-blue-600 text-white hover:bg-blue-700 ring-blue-500'
            }`}
          >
            {added ? '¡Añadido al Carrito! ✓' : 'Añadir al Carrito'}
          </button>
        </div>
      </div>

      {/* Slider de productos recomendados */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-l-4 border-blue-600 pl-3">Productos Recomendados</h2>
        
        {/* Contenedor con scroll horizontal en móvil */}
        <div className="flex overflow-x-auto pb-4 gap-6 snap-x snap-mandatory">
          {productData.filter(p => p.id !== id.toString()).slice(0, 4).map((recommendedProduct) => (
            <div key={recommendedProduct.id} className="snap-center flex-shrink-0 w-72 bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
              <img 
                className="w-full h-48 object-cover object-center rounded-md mb-3" 
                src={recommendedProduct.img} 
                alt={recommendedProduct.name} 
              />
              <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{recommendedProduct.name}</h3>
              <p className="text-blue-600 font-bold mt-1">${recommendedProduct.price.toLocaleString()}</p>
              <Link to={`/product/${recommendedProduct.id}`} className="block mt-3">
                <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded hover:bg-gray-200 transition">
                  Ver detalles
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;