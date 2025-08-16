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

Caso de Éxito 1

    Entrada:
    JSON

{
    "capacidad": 10000,
    "objetos": [
        {"nombre": "Fondo_A", "peso": 2000, "ganancia": 1500},
        {"nombre": "Fondo_B", "peso": 4000, "ganancia": 3500},
        {"nombre": "Fondo_C", "peso": 5000, "ganancia": 4000},
        {"nombre": "Fondo_D", "peso": 3000, "ganancia": 2500},
        {"nombre": "Fondo_E", "peso": 1500, "ganancia": 1800}
    ]
}

Salida Esperada:
JSON

    {
        "seleccionados": ["Fondo_E", "Fondo_B", "Fondo_C"],
        "ganancia_total": 9300,
        "peso_total": 10000
    }

Caso de Éxito 2

    Entrada:
    JSON

{
    "capacidad": 8000,
    "objetos": [
        {"nombre": "Acción_X", "peso": 1000, "ganancia": 800},
        {"nombre": "Acción_Y", "peso": 2500, "ganancia": 2200},
        {"nombre": "Acción_Z", "peso": 3000, "ganancia": 2800},
        {"nombre": "Bono_P", "peso": 4000, "ganancia": 3000},
        {"nombre": "Bono_Q", "peso": 1500, "ganancia": 1200}
    ]
}

Salida Esperada:
JSON

    {
        "seleccionados": ["Acción_Y", "Acción_Z", "Bono_Q"],
        "ganancia_total": 6200,
        "peso_total": 7000
    }

Caso de Éxito 3

    Entrada:
    JSON

{
    "capacidad": 5000,
    "objetos": [
        {"nombre": "Cripto_1", "peso": 500, "ganancia": 700},
        {"nombre": "Cripto_2", "peso": 800, "ganancia": 1000},
        {"nombre": "ETF_1", "peso": 1500, "ganancia": 1300},
        {"nombre": "ETF_2", "peso": 2000, "ganancia": 1800},
        {"nombre": "NFT_Alpha", "peso": 3000, "ganancia": 2500}
    ]
}

Salida Esperada:
JSON

{
    "seleccionados": ["Cripto_1", "Cripto_2", "ETF_2"],
    "ganancia_total": 3500,
    "peso_total": 3300
}
