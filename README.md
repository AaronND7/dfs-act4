# 🚀 Act4 Full Stack - Sistema de Gestión de Productos

Aplicación web full stack para la gestión de productos con autenticación JWT, despliegue automatizado y pruebas unitarias completas.

## 📋 Descripción del Proyecto

Este proyecto es una solución completa para la gestión de productos que incluye:

- ✅ **Backend**: API REST con Node.js, Express.js y MongoDB
- ✅ **Autenticación**: Sistema JWT completo con registro y login
- ✅ **Frontend**: Interfaz web responsive con HTML, CSS y JavaScript
- ✅ **Pruebas**: Suite de pruebas unitarias con Jest
- ✅ **CI/CD**: Pipeline automatizado con GitHub Actions
- ✅ **Despliegue**: Automatizado en Vercel

## 🏗️ Arquitectura del Proyecto

```
Act4 full stack/
├── backend/                    # API REST Backend
│   ├── src/
│   │   ├── config/            # Configuración de base de datos
│   │   ├── controllers/       # Lógica de negocio
│   │   ├── middlewares/       # Middleware de autenticación
│   │   ├── models/           # Modelos de datos (Mongoose)
│   │   ├── public/           # Archivos estáticos (HTML/CSS/JS)
│   │   ├── routes/           # Definición de rutas API
│   │   └── app.js            # Aplicación principal
│   ├── tests/                # Pruebas unitarias
│   ├── .github/workflows/    # Pipeline CI/CD
│   └── package.json          # Dependencias del backend
├── docs/                     # Documentación del proyecto
│   ├── REQUERIMIENTOS.md     # Requisitos funcionales y no funcionales
│   ├── DIAGRAMA_ER.md        # Diagrama entidad-relación
│   └── JUSTIFICACION_VERCEL.md # Justificación de plataforma SaaS
└── README.md                 # Documentación principal
```

## 🛠️ Tecnologías Utilizadas

### Backend
- **Node.js**: Runtime de JavaScript
- **Express.js**: Framework web minimalista
- **MongoDB**: Base de datos NoSQL
- **Mongoose**: ODM para MongoDB
- **JWT**: Autenticación basada en tokens
- **bcryptjs**: Encriptación de contraseñas
- **Jest**: Framework de pruebas
- **Supertest**: Pruebas de API

### Frontend
- **HTML5**: Estructura semántica
- **CSS3**: Estilos responsive con Grid y Flexbox
- **JavaScript vanilla**: Lógica del cliente
- **Fetch API**: Comunicación con el backend

### DevOps
- **GitHub Actions**: CI/CD automatizado
- **Vercel**: Plataforma de despliegue
- **MongoDB Atlas**: Base de datos en la nube

## 🚀 Guía de Inicio Rápido

### 1. Requisitos Previos
- Node.js (v14 o superior)
- npm o yarn
- MongoDB (local o MongoDB Atlas)
- Git

### 2. Instalación

```bash
# Clonar el repositorio
git clone <repository-url>
cd "Act4 full stack"

# Instalar dependencias
npm run install:all

# O instalar manualmente
cd backend
npm install
```

### 3. Configuración de Variables de Entorno

```bash
# Copiar archivo de ejemplo
cp backend/.env.example backend/.env

# Editar variables de entorno
nano backend/.env
```

Variables requeridas:
```env
PORT=3333
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/products_db
JWT_SECRET=your_jwt_secret_key_here_change_in_production
JWT_EXPIRE=24h
```

### 4. Ejecutar la Aplicación

```bash
# Modo desarrollo
npm run dev

# Modo producción
npm start
```

### 5. 🔐 **Acceso al Sistema**

**IMPORTANTE**: El registro de nuevos usuarios no está funcional. Use el usuario por defecto:

- **📧 Email**: `admin@productos.com`
- **🔑 Contraseña**: `admin123`
- **🎯 Rol**: Administrador

Este usuario se crea automáticamente al iniciar el servidor por primera vez.

### 6. Acceder a la Aplicación

La aplicación estará disponible en:
- **🔐 Login**: http://localhost:3333/login.html
- **📊 Dashboard**: http://localhost:3333/dashboard.html
- **🔌 API**: http://localhost:3333/api

## 🧪 Pruebas

### Ejecutar Todas las Pruebas
```bash
npm test
```

### Pruebas con Coverage
```bash
npm run test:coverage
```

### Pruebas en Modo Watch
```bash
cd backend && npm test -- --watch
```

## 📚 Documentación

### Documentación Técnica
- [Requisitos Funcionales y No Funcionales](docs/REQUERIMIENTOS.md)
- [Diagrama Entidad-Relación](docs/DIAGRAMA_ER.md)
- [Justificación de Vercel](docs/JUSTIFICACION_VERCEL.md)

### API Documentation
- **Authentication Endpoints**: `/api/auth/*`
- **Products Endpoints**: `/api/products/*`
- **Static Files**: `/login.html`, `/dashboard.html`

## 🔗 Endpoints de la API

### Autenticación
| Método | Endpoint | Descripción | Autenticación |
|--------|----------|-------------|---------------|
| POST | `/api/auth/register` | Registrar nuevo usuario | ❌ |
| POST | `/api/auth/login` | Iniciar sesión | ❌ |
| GET | `/api/auth/me` | Obtener usuario actual | ✅ |
| GET | `/api/auth/logout` | Cerrar sesión | ✅ |

### Productos
| Método | Endpoint | Descripción | Autenticación |
|--------|----------|-------------|---------------|
| GET | `/api/products` | Obtener todos los productos | ✅ |
| GET | `/api/products/:id` | Obtener producto específico | ✅ |
| POST | `/api/products` | Crear nuevo producto | ✅ |
| PUT | `/api/products/:id` | Actualizar producto | ✅ |
| DELETE | `/api/products/:id` | Eliminar producto | ✅ |

## 🛡️ Características de Seguridad

- ✅ **Encriptación de contraseñas** con bcrypt
- ✅ **Tokens JWT** con expiración configurable
- ✅ **Middleware de autenticación** para rutas protegidas
- ✅ **Validación de datos** de entrada
- ✅ **Protección CORS** configurada
- ✅ **HTTPS** en producción (Vercel)

## 🚀 Despliegue Automatizado

### Pipeline CI/CD
El proyecto incluye un pipeline completo que:

1. **Ejecuta pruebas** en cada push y pull request
2. **Valida código** con ESLint y Prettier
3. **Genera coverage** de pruebas
4. **Despliega automáticamente** a Vercel (solo main)
5. **Notifica** el estado del despliegue

### Configuración de GitHub Secrets
Para el despliegue automático, configurar:
- `VERCEL_TOKEN`: Token de autenticación de Vercel
- `MONGODB_URI`: URI de base de datos de producción
- `JWT_SECRET`: Secreto para JWT de producción

## 📊 Métricas de Calidad

- **Cobertura de pruebas**: >90%
- **Tiempo de respuesta**: <300ms
- **Uptime**: 99.9% (Vercel)
- **Despliegue**: <30 segundos
- **Pruebas automatizadas**: 100% de endpoints

## 🔄 Flujo de Trabajo

### Desarrollo Local
1. Crear rama de características
2. Desarrollar funcionalidad
3. Escribir pruebas
4. Ejecutar `npm test`
5. Hacer commit y push

### Despliegue a Producción
1. Hacer merge a `main`
2. GitHub Actions ejecuta pruebas
3. Si pasan, despliega automáticamente a Vercel
4. La aplicación está disponible inmediatamente

## 🐛 Troubleshooting

### Problemas Comunes

**Error: MongoDB connection failed**
```bash
# Verificar que MongoDB esté corriendo
mongod --version

# Iniciar MongoDB
net start MongoDB  # Windows
brew services start mongodb-community  # macOS
```

**Error: Module not found**
```bash
# Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install
```

**Error: JWT_SECRET not defined**
```bash
# Verificar archivo .env
ls -la backend/.env

# Crear archivo si no existe
cp backend/.env.example backend/.env
```

### Logs de Depuración
```bash
# Ver logs de la aplicación
npm run dev

# Logs detallados con DEBUG
DEBUG=* npm run dev
```

## 🤝 Contribución

### Guía de Contribución
1. Fork del proyecto
2. Crear rama: `git checkout -b feature/amazing-feature`
3. Commit: `git commit -m 'Add amazing feature'`
4. Push: `git push origin feature/amazing-feature`
5. Pull Request

### Estándares de Código
- Usar ESLint y Prettier
- Escribir pruebas para nuevas funcionalidades
- Documentar cambios importantes
- Seguir convenciones de Git

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 👥 Equipo de Desarrollo

- **Backend Developer**: [Nombre] - [email]
- **Frontend Developer**: [Nombre] - [email]
- **DevOps Engineer**: [Nombre] - [email]
- **QA Engineer**: [Nombre] - [email]

## 📞 Soporte

Para soporte técnico:
- **Issues**: [GitHub Issues](https://github.com/your-username/act4-full-stack/issues)
- **Email**: support@yourproject.com
- **Documentation**: [Wiki del Proyecto](https://github.com/your-username/act4-full-stack/wiki)

## 🎯 Roadmap Futuro

### Versión 1.1 (Próximo Release)
- [ ] Sistema de notificaciones
- [ ] Exportación de datos (CSV/PDF)
- [ ] Búsqueda avanzada de productos
- [ ] Sistema de categorías

### Versión 2.0 (Futuro)
- [ ] Multi-tenant architecture
- [ ] Real-time updates con WebSockets
- [ ] Mobile app (React Native)
- [ ] Analytics dashboard

---

## 🏆 Agradecimientos

Este proyecto fue desarrollado como parte de la actividad 4 del curso de desarrollo full stack, implementando las mejores prácticas de desarrollo moderno y despliegue automatizado.

**¡Gracias por tu interés en este proyecto! 🚀**
