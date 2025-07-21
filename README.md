
💸 Sistema de Gestión de Gastos Personales

🎯 Objetivo
Aplicación full-stack para que los usuarios puedan:

Registrar sus gastos diarios.

Categorizar los gastos (comida, transporte, ocio, etc.).

Visualizar estadísticas mediante gráficos interactivos.

Convertir automáticamente los gastos a diferentes monedas (API de conversión).

🧰 Tecnologías
Capa	Tecnología
Frontend	React.js + Chart.js
Backend	Node.js + Express
Base datos	MySQL (ORM: Sequelize)
DevOps	Docker, Docker Compose, Nginx
Extras	API de conversión de moneda (ej: ExchangeRate API)

📁 Estructura de Carpetas

```plaintext
SistemaDeGestionDeGastosPersonales/
├── backend/               ← Servidor Node.js + Express
│   ├── controllers/       ← Lógica de negocio (controladores)
│   ├── routes/            ← Endpoints de la API REST
│   ├── middleware/        ← Autenticaciones, validaciones, etc.
│   ├── db/                ← Configuración y modelos Sequelize
│   │   ├── models/        ← Definición de tablas (Gasto, Usuario)
│   │   ├── config.js      ← Conexión a MySQL
│   │   └── index.js       ← Inicialización de Sequelize y modelos
│   ├── .env               ← Variables de entorno (no subir a Git)
│   ├── Dockerfile         ← Imagen backend para Docker
│   └── index.js           ← Punto de entrada del servidor
│
├── frontend/              ← Aplicación React.js
│   ├── public/            ← Archivos públicos (favicon, index.html)
│   ├── src/               ← Código fuente React
│   │   ├── components/    ← Componentes reutilizables
│   │   ├── pages/         ← Páginas como Home, Dashboard, Login
│   │   └── services/      ← Llamadas Axios al backend
│   ├── App.jsx            ← Estructura general de la app
│   ├── main.jsx           ← Punto de entrada React
│   └── Dockerfile         ← Imagen frontend para Docker
│
│
├── docker-compose.yml     ← Orquestación de servicios (frontend, backend, MySQL, nginx)
├── .gitignore             ← Ignorar archivos sensibles y temporales
└── README.md              ← Documentación del proyecto
```


📂 Función de cada carpeta

/backend/
Carpeta principal del servidor Node.js con Express.

Contiene lógica de negocio, rutas, middlewares y conexión a la base de datos MySQL usando Sequelize.

Controladores = Qué hace cada función (crear, editar, borrar gastos).

Rutas = URLs que el cliente puede consumir.

Middlewares = Validaciones o autenticaciones intermedias.

db/:

models/ define las tablas (Gasto, Usuario, etc.).

config.js contiene los datos de conexión (host, user, password).

index.js los importa e inicializa con Sequelize.

/frontend/
Interfaz de usuario hecha con React.js.

Usa Chart.js para mostrar gráficos (como tortas o barras).

Aquí vive todo lo que el usuario ve e interactúa.

services/ usa Axios para hacer peticiones al backend.

/nginx/
Configura Nginx como reverse proxy:

Sirve el frontend desde /.

Redirige /api/* al backend Express.

Este archivo solo se usa en producción (no en desarrollo local).

/docker-compose.yml
Levanta automáticamente:

Contenedor del frontend (React)

Contenedor del backend (Node.js)

Contenedor de base de datos (MySQL)

Contenedor de nginx (proxy reverso)

Muy útil para desarrollo y despliegue con un solo comando.

.gitignore
Ignora carpetas o archivos innecesarios como:

node_modules/

.env

dist/, build/

Logs o archivos temporales