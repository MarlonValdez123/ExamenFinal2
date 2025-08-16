Instrucciones para la Ejecución del Proyecto

Este proyecto consta de dos partes: un microservicio de optimización de inversiones (backend) construido con Python y Flask, y una interfaz web (frontend) construida con React.

1. Configuración y Despliegue del Backend

Sigue estos pasos para poner en marcha el microservicio API.

    Navega a la carpeta del backend:

cd backend

Crea y activa un entorno virtual:

python3 -m venv venv
source venv/bin/activate  # macOS
.\venv\Scripts\activate      # Windows

Instala las dependencias necesarias:

pip install Flask Flask-CORS

Ejecuta el microservicio:

    python3 app.py

    El servidor se iniciará y estará disponible en http://127.0.0.1:5000.

2. Configuración y Despliegue del Frontend

Abre una nueva terminal para ejecutar la interfaz de usuario.

    Navega a la carpeta del frontend:

cd frontend

Instala las dependencias de Node.js:

npm install

Este paso instalará todas las bibliotecas del archivo package.json, incluyendo React, Vite y Axios.

Ejecuta el frontend:

npm run dev

Esto iniciará el servidor de desarrollo de React y abrirá la aplicación en tu navegador en http://localhost:5173.
