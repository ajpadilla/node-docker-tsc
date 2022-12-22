"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsuario = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const textrepetition_1 = require("../models/textrepetition");
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuario = new usuario_1.default({ "nombre": "Raul Alcantara", "cedula": "1090538589" });
    usuario.save();
    const text = "hola que tal, tal que bienvenidos a BettaTech. Si os está gustando este vídeo, suscribiros y darle a la campanita para ver los nuevos vídeos que vaya subiendo";
    const textRepetition = new textrepetition_1.TextRepetition();
    console.log(textRepetition.wordRepetition(text));
    const usuarioEncontrada = yield usuario_1.default.find({});
    res.json(usuarioEncontrada);
});
exports.getUsuario = getUsuario;
//# sourceMappingURL=usuarios.js.map