"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_1 = require("../controllers/usuarios");
const route = (0, express_1.Router)();
route.get('/', usuarios_1.getUsuario);
exports.default = route;
//# sourceMappingURL=usuarios.js.map