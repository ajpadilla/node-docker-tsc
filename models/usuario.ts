const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El rol es obligatorio']
    },
    cedula: {
        type: String,
        required: [true, 'La cedula es obligatoria']
    }
});

export default model('Usuario', UsuarioSchema);