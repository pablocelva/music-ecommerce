import Sidebar from "../components/Sidebar";
import ProductList from "../components/ProductList";

const Catalogo = () => (
    <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Catálogo Completo</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-3 lg:col-span-2">
                <div className="sticky top-4">
                    <Sidebar />
                </div>
            </div>

            <div className="md:col-span-9 lg:col-span-10">
                <ProductList />
            </div>
        </div>
    </div>
);

export default Catalogo;