const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')

//importacion de cada una de las rutas
const usuario = require('./routes/usuario.routes')
const categoria = require('./routes/categoria.routes') 
const conversiones =  require('./routes/conversion.routes')
const gastos = require('./routes/gasto.routes')
const validarEmail = require('./routes/validacionEmail.routes')

require('./db/syncModels')

dotenv.config()
const PORT = process.env.BACKEND_PORT || 3000

const app = express()
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// ruta principal
app.get('/', (req, res) => res.send('Servidor corriendo correctamente'))


// uso de las rutas anteriormente creadas
app.use('/api/usuarios', usuario)
app.use('/api/categorias', categoria)
app.use('/api/conversiones', conversiones)
app.use('/api/gastos', gastos)
app.use('/api/validacion', validarEmail)


app.listen(PORT, '0.0.0.0', () => {
    console.log(`app listening on port http://localhost:${PORT}`)
}) 