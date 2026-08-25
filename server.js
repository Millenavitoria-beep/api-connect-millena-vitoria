const express = require('express');
const app = express();

const usuariosRoutes = require('./routes/usuariosRoutes');

app.use(express.json());

app.use('/api/usuarios', usuariosRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});