const express = require('express');
// const body_parser = require('body-parser');
const cors = require('cors');

//https://sequelize.org/docs/v6/getting-started/

class Server {

    constructor() {
        this.app = express();
        this.usuarioPath = '/api/usuario';
        this.rolPath = '/api/rol';
        this.usuariorolPath = '/api/usuariorol';
        this.eventoPath = '/api/evento';
        this.usuarioeventoPath = '/api/usuarioevento';
        this.chatPath = '/api/chat';
        this.mensajechatPath = '/api/mensajechat';
        this.preferenciaPath = '/api/preferencia';
        this.ninoPath = '/api/nino';
        this.interesPath = '/api/interes';
        this.tiporelacionPath = '/api/tiporelacion';
        this.ninopreferenciaPath = '/api/ninopreferencia';
        this.interespreferenciaPath = '/api/interespreferencia';
        this.tipopreferenciaPath = '/api/tipopreferencia';

        //Middlewares
        this.middlewares();

        this.routes();
        
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.usuarioPath , require('../routes/usuarioRoutes'));
        this.app.use(this.rolPath , require('../routes/rolRoutes'));
        this.app.use(this.usuariorolPath , require('../routes/usuariorolRoutes'));
        this.app.use(this.eventoPath , require('../routes/eventoRoutes'));
        this.app.use(this.usuarioeventoPath , require('../routes/usuarioeventoRoutes'));
        this.app.use(this.chatPath , require('../routes/chatRoutes'));
        this.app.use(this.mensajechatPath , require('../routes/mensajechatRoutes'));
        this.app.use(this.preferenciaPath , require('../routes/preferenciaRoutes'));
        this.app.use(this.ninoPath , require('../routes/ninoRoutes'));
        this.app.use(this.interesPath , require('../routes/interesRoutes'));
        this.app.use(this.tiporelacionPath , require('../routes/tiporelacionRoutes'));
        this.app.use(this.ninopreferenciaPath , require('../routes/ninopreferenciaRoutes'));
        this.app.use(this.interespreferenciaPath , require('../routes/interespreferenciaRoutes'));
        this.app.use(this.tipopreferenciaPath , require('../routes/tipopreferenciaRoutes'));
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log(`Servidor escuchando en: ${process.env.PORT}`);
        })
    }
}

module.exports = Server;