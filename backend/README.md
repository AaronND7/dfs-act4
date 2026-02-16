# Gestión de Productos - API REST

Aplicación web para la gestión de productos con autenticación JWT y despliegue automatizado.

## 🚀 Características

- ✅ Autenticación y autorización con JWT
- ✅ Sistema CRUD completo para productos
- ✅ Base de datos MongoDB con Mongoose
- ✅ Pruebas unitarias automatizadas con Jest
- ✅ Despliegue automatizado con GitHub Actions y Vercel
- ✅ Interfaz web HTML/CSS/JavaScript
- ✅ Middleware de autenticación y manejo de errores
- ✅ Validación de datos de entrada

## 📋 Requisitos

- Node.js (v14 o superior)
- MongoDB
- npm o yarn
- Git

## 🛠️ Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd products-app
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.example .env
   ```
   
   Editar el archivo `.env` con tus credenciales:
   ```env
   PORT=3000
   NODE_ENV=development
   MONGODB_URI=mongodb://localhost:27017/products_db
   JWT_SECRET=your_jwt_secret_key_here_change_in_production
   JWT_EXPIRE=24h
   ```

4. **Iniciar MongoDB**
   ```bash
   # En Windows
   net start MongoDB
   
   # En macOS/Linux
   mongod
   ```

5. **Ejecutar la aplicación**
   ```bash
   # Desarrollo
   npm run dev
   
   # Producción
   npm start
   ```

## 🧪 Pruebas

### Ejecutar todas las pruebas
```bash
npm test
```

### Ejecutar pruebas con coverage
```bash
npm run test:coverage
```

### Ejecutar pruebas en modo watch
```bash
npm run test:watch
```

## 📁 Estructura del Proyecto

```
backend/
├── src/
│   ├── config/
│   │   └── db.js              # Configuración de MongoDB
│   ├── controllers/
│   │   ├── auth.controller.js # Controlador de autenticación
│   │   └── product.controller.js # Controlador de productos
│   ├── middlewares/
│   │   ├── auth.js            # Middleware de autenticación
│   │   └── error.js           # Middleware de manejo de errores
│   ├── models/
│   │   ├── User.js            # Modelo de usuario
│   │   └── Product.js         # Modelo de producto
│   ├── public/
│   │   ├── login.html         # Página de login
│   │   └── dashboard.html     # Dashboard de productos
│   ├── routes/
│   │   ├── auth.routes.js     # Rutas de autenticación
│   │   └── product.routes.js  # Rutas de productos
│   └── app.js                 # Aplicación principal
├── tests/
│   ├── auth.test.js           # Pruebas de autenticación
│   ├── products.test.js       # Pruebas de productos
│   └── setup.js               # Configuración de pruebas
├── .github/
│   └── workflows/
│       └── deploy.yml         # Pipeline de CI/CD
├── .env                       # Variables de entorno
├── .gitignore                 # Archivos ignorados por Git
├── jest.config.js             # Configuración de Jest
├── package.json               # Dependencias del proyecto
└── README.md                  # Documentación
```

## 🔗 Endpoints de la API

### Autenticación
- `POST /api/auth/register` - Registrar nuevo usuario
- `POST /api/auth/login` - Iniciar sesión
- `GET /api/auth/me` - Obtener usuario actual
- `GET /api/auth/logout` - Cerrar sesión

### Productos
- `GET /api/products` - Obtener todos los productos del usuario
- `GET /api/products/:id` - Obtener un producto específico
- `POST /api/products` - Crear nuevo producto
- `PUT /api/products/:id` - Actualizar producto
- `DELETE /api/products/:id` - Eliminar producto

### Páginas Web
- `GET /` - Página de login
- `GET /dashboard.html` - Dashboard de productos

## 🛡️ Seguridad

- Contraseñas encriptadas con bcrypt
- Tokens JWT con expiración configurable
- Middleware de autenticación para rutas protegidas
- Validación de datos de entrada
- Protección contra ataques de inyección

## 🚀 Despliegue

### GitHub Actions
El proyecto incluye un pipeline de CI/CD automatizado que:

1. **Ejecuta pruebas** en cada push y pull request
2. **Genera reportes de coverage**
3. **Despliega automáticamente** a Vercel cuando se hace push a main

### Variables de entorno para despliegue
Configurar en GitHub Secrets:
- `VERCEL_TOKEN`: Token de autenticación de Vercel
- `MONGODB_URI`: URI de base de datos de producción
- `JWT_SECRET`: Secreto para JWT de producción

## 📊 Reportes de Cobertura

Las pruebas generan reportes de cobertura en la carpeta `coverage/`:
- `coverage/lcov.info` - Formato LCOV
- `coverage/html/` - Reporte HTML interactivo

## 🤝 Contribución

1. Fork del proyecto
2. Crear rama de características (`git checkout -b feature/AmazingFeature`)
3. Commit de cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

- **Autor**: [Tu Nombre]
- **Email**: [tu.email@ejemplo.com]
- **Proyecto**: [URL del repositorio]

## 🔧 Troubleshooting

### Problemas comunes

1. **Error de conexión a MongoDB**
   - Verificar que MongoDB esté corriendo
   - Verificar la URI en el archivo .env

2. **Error de autenticación**
   - Verificar que el JWT_SECRET esté configurado
   - Limpiar localStorage en el navegador

3. **Errores en las pruebas**
   - Asegurar que MongoDB esté corriendo en el puerto 27017
   - Verificar que todas las dependencias estén instaladas

### Logs de depuración

La aplicación incluye logs detallados para:
- Conexión a la base de datos
- Errores de autenticación
- Errores de validación
- Errores del servidor

## 📈 Métricas

- **Cobertura de código**: >90%
- **Pruebas automatizadas**: 100% de endpoints cubiertos
- **Tiempo de despliegue**: <5 minutos
- **Uptime**: 99.9% (con Vercel)
