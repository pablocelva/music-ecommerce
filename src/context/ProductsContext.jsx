import { createContext, useState, useEffect } from "react";
import { musicProducts } from "../data/products"

export const ProductsContext = createContext()

const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [producto, setProducto] = useState({})
    const [error, setError] = useState(null)
    
    const getProducto = (id) => {
        const foundProducto = products.find(p => p.id === id)
        if (foundProducto) {
            return foundProducto
        } else {
            setError("Producto no encontrado")
            setError(null)
        }
    }
    // Función para simular la obtención de datos de los productos
    const getProducts = async () => {
        try {
            setProducts(musicProducts)
            setError(null);
        } catch (err) {
            setError("Error al obtener las productoas")
        }
    };

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <ProductsContext.Provider value={{ products, producto, getProducto, error }}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsProvider;