import { createContext, useState } from "react";
import { musicProducts } from "../data/products";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    // Inicializamos el carrito con los 2 primeros productos de musicProducts
    // Asignamos una cantidad inicial (count/quantity) de 1 a cada uno
    const [cart, setCart] = useState([
        { ...musicProducts[0], count: 1 },
        { ...musicProducts[1], count: 1 }
    ]);

    // Calcular el total
    const total = cart?.reduce((acc, item) => acc + (item.price * item.count), 0) || 0;

    const agregarAlCarrito = (product) => {
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            setCart(cart.map(item =>
                item.id === product.id
                    ? { ...item, count: item.count + 1 }
                    : item
            ));
        } else {
            setCart([...cart, { ...product, count: 1 }]);
        }
    };

    const sumarCantidad = (id) => {
        setCart(cart.map(item =>
            item.id === id ? { ...item, count: item.count + 1 } : item
        ));
    };

    const restarCantidad = (id) => {
        setCart(cart.map(item => {
            if (item.id === id) {
                return item.count > 1 ? { ...item, count: item.count - 1 } : item;
            }
            return item;
        }).filter(item => item.count > 0)); // Eliminar si llega a 0 (seguridad extra)
    };

    const eliminarProducto = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ 
            cart, 
            setCart, 
            total, 
            agregarAlCarrito, 
            sumarCantidad, 
            restarCantidad,
            eliminarProducto
        }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;