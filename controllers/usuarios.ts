import {Request, Response} from "express";
import Usuario from "../models/usuario";
import {TextRepetition} from "../models/textrepetition";

export const getUsuario = async (req: Request, res: Response) => {
    const usuario = new Usuario({"nombre": "Raul Alcantara", "cedula": "1090538589"});
    usuario.save();

    const text = "hola que tal, tal que bienvenidos a BettaTech. Si os está gustando este vídeo, suscribiros y darle a la campanita para ver los nuevos vídeos que vaya subiendo";

    const textRepetition = new TextRepetition();
    console.log(textRepetition.wordRepetition(text));

    const usuarioEncontrada = await Usuario.find({});
    res.json( usuarioEncontrada );
}
