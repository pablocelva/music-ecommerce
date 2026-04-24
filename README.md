# 🎵 Music E-Commerce

Una plataforma de comercio electrónico moderna, segura y responsiva dedicada a la venta de instrumentos musicales y accesorios. Desarrollada con **React**, **Tailwind CSS** y **Vite**, enfocada en el rendimiento, la seguridad y una experiencia de usuario fluida.

![Versión de React](https://img.shields.io/badge/React-18.3-blue)
![Versión de Vite](https://img.shields.io/badge/Vite-5.4-purple)
![Versión de Tailwind](https://img.shields.io/badge/Tailwind-3.4-cyan)
![Seguridad](https://img.shields.io/badge/HTTP-Native%20Fetch-green)
![Estado](https://img.shields.io/badge/estado-en%20desarrollo-green)

## 🚀 Características Principales

- **Catálogo Dinámico**: Navegación intuitiva por categorías de instrumentos y accesorios.
- **Gestión de Carrito**: Sistema de carrito de compras en tiempo real implementado con **React Context API**.
- **Diseño Responsivo**: Interfaz "Mobile-First" adaptada a todos los dispositivos gracias a **Tailwind CSS**.
- **Enrutamiento Optimizado**: Navegación sin recargas utilizando `HashRouter`, garantizando compatibilidad total con hosting estático (GitHub Pages).
- **Arquitectura Escalable**: Código modular separado en componentes, contextos, páginas y servicios.
- **Iconografía Vectorial**: Integración de **FontAwesome 6** para una identidad visual consistente.

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Propósito |
| :--- | :--- | :--- |
| **React** | 18.3.x | Librería principal de UI |
| **Vite** | 5.4.x | Build tool ultra-rápido y servidor de desarrollo |
| **Tailwind CSS** | 3.4.x | Framework CSS utilitario |
| **React Router DOM** | 6.28.x | Enrutamiento basado en hash (`HashRouter`) |
| **Styled Components** | 6.1.x | Estilos CSS-in-JS para componentes específicos |
| **FontAwesome** | 6.6.0 | Librería de iconos |
| **ESLint** | 9.x | Estándar de calidad y linting de código |

## 📂 Estructura del Proyecto

```text
music-ecommerce/
├── public/             # Activos estáticos (imágenes, favicon)
├── src/
│   ├── components/     # Componentes UI reutilizables (Navbar, Cards, Footer)
│   ├── context/        # Estado global (Carrito de compras)
│   ├── data/           # Datos locales o mockups
│   ├── pages/          # Vistas principales (Home, Tienda, Detalle, Carrito)
│   ├── App.jsx         # Configuración de rutas y estructura principal
│   ├── main.jsx        # Punto de entrada (Mounting)
│   └── index.css       # Estilos globales y directivas de Tailwind
├── package.json        # Dependencias y scripts
└── vite.config.js      # Configuración de Vite
```
## ⚙️ Instalación y Configuración
Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1. Clonar el repositorio
```
git clone https://github.com/TU_USUARIO/music-ecommerce.git
cd music-ecommerce
```
2. Instalar dependencias
```
npm install
```
3. Iniciar el servidor de desarrollo
```
npm run dev
```
El proyecto estará disponible en http://localhost:5173 (o el puerto que indique la terminal).