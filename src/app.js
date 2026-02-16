const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const errorHandler = require('./middlewares/error');
const User = require('./models/User');

// Load env vars
dotenv.config({ path: '.env.local' });
dotenv.config();

// Connect to database
connectDB();

// Create default user if not exists
const createDefaultUser = async () => {
  try {
    const existingUser = await User.findOne({ email: 'admin@productos.com' });
    
    if (!existingUser) {
      const defaultUser = new User({
        name: 'Administrador',
        email: 'admin@productos.com',
        password: 'admin123',
        role: 'admin'
      });
      
      await defaultUser.save();
      console.log('👤 Usuario por defecto creado:');
      console.log('   📧 Email: admin@productos.com');
      console.log('   🔑 Contraseña: admin123');
      console.log('   🎯 Rol: Administrador');
    } else {
      console.log('👤 Usuario por defecto ya existe');
    }
  } catch (error) {
    console.error('❌ Error creando usuario por defecto:', error.message);
  }
};

// Route files
const authRoutes = require('./routes/auth.routes');
const productRoutes = require('./routes/product.routes');

const app = express();

// Body parser middleware
app.use(express.json());

// Enable CORS
app.use(cors());

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount routers
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// Serve static files for login page
app.use(express.static('src/public'));

// Error handler middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// Start server after creating default user
const startServer = async () => {
  try {
    // Wait a bit for database connection
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Create default user
    await createDefaultUser();
    
    const server = app.listen(
      PORT,
      console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
    );

    // Handle unhandled promise rejections
    process.on('unhandledRejection', (err, promise) => {
      console.log(`Error: ${err.message}`);
      // Close server & exit process
      server.close(() => process.exit(1));
    });
    
    return server;
  } catch (error) {
    console.error('❌ Error iniciando servidor:', error.message);
    process.exit(1);
  }
};

// Start the server
startServer();

module.exports = app;
