"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = model('Usuario', UsuarioSchema);
//# sourceMappingURL=usuario.js.map