const mongoose = require('mongoose');
const path = require('path');

// Conectar a MongoDB
mongoose.connect('mongodb://localhost/tienda_ropa', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error de conexión a MongoDB:', err));

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));