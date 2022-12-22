import {Router} from 'express';
import {getUsuario} from "../controllers/usuarios";

const route = Router();

route.get('/', getUsuario);

export default route;