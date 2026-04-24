import { Link } from "react-router-dom";


const NavBar = () => (
    <nav className=" bg-blue-900 flex  p-5 text-white justify-around">
        <ul >
            <li><Link to="/" className="hover:text-gray-400">Inicio</Link></li>
        </ul>
        {/* <ul className="flex justify-center gap-4"> */}
            {/* <li><Link to="/ofertas" className="hover:text-gray-400">Ofertas</Link></li> */}
        {/* </ul> */}
        <ul className="flex justify-center gap-4">
            <li><Link to="/catalogo" className="hover:text-gray-400">Catálogo</Link></li>
            <li><Link to="/carrito" className="hover:text-gray-400">Carrito</Link></li>
            <li><Link to="/contacto" className="hover:text-gray-400">Contacto</Link></li>
        </ul>
    </nav>
)

export default NavBar;