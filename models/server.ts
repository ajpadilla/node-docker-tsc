import express, { Application } from 'express';
import userRoutes from "../routes/usuarios";
import cors from 'cors';
import dbConnection from "../db/connection";

class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        usurios: '/api/usuarios',
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';

        this.connectarDB();
        this.middleware();

        // Definir mis rutas
        this.routes();
    }

    async connectarDB() {
        await dbConnection();
    }

    middleware() {
        // CORS
        this.app.use(cors());

        // Lectura del body
        this.app.use(express.json());

        // Carpeta publica
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.apiPaths.usurios, userRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo con exito en el perto!!!', + this.port);
        });
    }
}

export default Server;