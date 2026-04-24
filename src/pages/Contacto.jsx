import { useState } from "react";

const Contacto = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        asunto: '',
        mensaje: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí iría la lógica para enviar el email (ej. con EmailJS o tu backend)
        alert("Gracias por tu mensaje. Nos pondremos en contacto pronto.");
        setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
    };

    return (
        <div className="container mx-auto p-4 max-w-4xl">
            <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">Contáctanos</h1>
            <p className="text-gray-600 text-center mb-8">¿Tienes dudas sobre algún instrumento? Escríbenos.</p>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
                {/* Información de contacto */}
                <div className="bg-blue-900 text-white p-8 md:w-1/3 flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Información</h3>
                        <p className="mb-2">📍 Calle Música 123, Ciudad</p>
                        <p className="mb-2">📞 +56 9 1234 5678</p>
                        <p className="mb-2">✉️ contacto@music-ecommerce.com</p>
                    </div>
                    <div className="mt-8">
                        <p className="text-sm opacity-80">Horario de atención:</p>
                        <p className="text-sm">Lun - Vie: 9:00 - 18:00</p>
                    </div>
                </div>

                {/* Formulario */}
                <div className="p-8 md:w-2/3">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                                <input
                                    type="text"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                    placeholder="Tu nombre"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                    placeholder="tu@email.com"
                                />
                            </div>
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Asunto</label>
                            <input
                                type="text"
                                name="asunto"
                                value={formData.asunto}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                placeholder="¿En qué podemos ayudarte?"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                            <textarea
                                name="mensaje"
                                value={formData.mensaje}
                                onChange={handleChange}
                                required
                                rows="4"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                placeholder="Escribe tu mensaje aquí..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            Enviar Mensaje
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contacto;