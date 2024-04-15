const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.serverExpress = require('http').createServer(this.app);
        this.serverWebSocket = require('http').createServer(this.app);
        this.io = require('socket.io')(this.serverWebSocket, {
            cors: {
                origin:'*',
                methods: ["*"],
                allowedHeaders: [""],
                credentials: true
            }
        });

        this.chat = '/api/chat'
        this.evento = '/api/evento'
        this.interes = '/api/interes'
        this.interesPreferencia = '/api/interesPreferencia'
        this.listaAmigo = '/api/listaAmigo'
        this.mensajeChat = '/api/mensajeChat'
        this.nino = '/api/nino'
        this.ninoPreferencia = '/api/ninoPreferencia'
        this.preferencia = '/api/preferencia'
        this.rol = '/api/rol'
        this.tipoPreferencia = '/api/tipoPreferencia'
        this.tipoRelacion = '/api/tipoRelacion'
        this.usuario = '/api/usuario'
        this.usuarioEvento = '/api/usuarioEvento'
        this.usuarioRol = '/api/usuarioRol'

        this.middlewares();
        this.routes();
        this.sockets();

    }
    middlewares() {
        this.app.use(cors({origin:'*'}));
        this.app.use(express.json());
        this.app.use(fileUpload({
            useTempFiles: true,
            tempFileDir: '/tmp/',
            createParentPath: true
        }));
    }
    routes() {
        this.app.use(this.chat, require('../routes/chatRutas'))
        this.app.use(this.evento, require('../routes/eventoRutas'))
        this.app.use(this.interes, require('../routes/interesRutas'))
        this.app.use(this.interesPreferencia, require('../routes/interesPreferenciaRutas'))
        this.app.use(this.listaAmigo, require('../routes/listaAmigoRutas'))
        this.app.use(this.mensajeChat, require('../routes/mensajeChatRutas'))
        this.app.use(this.nino, require('../routes/ninoRutas'))
        this.app.use(this.ninoPreferencia, require('../routes/ninoPreferenciaRutas'))
        this.app.use(this.preferencia, require('../routes/preferenciaRutas'))
        this.app.use(this.rol, require('../routes/rolRutas'))
        this.app.use(this.tipoPreferencia, require('../routes/tipoPreferenciaRutas'))
        this.app.use(this.tipoRelacion, require('../routes/tipoRelacionRutas'))
        this.app.use(this.usuario, require('../routes/usuarioRutas'))
        this.app.use(this.usuarioEvento, require('../routes/usuarioEventoRutas'))
        this.app.use(this.usuarioRol, require('../routes/usuarioRolRutas'))
    }
    sockets() {

    }


    listen() {
        this.serverExpress.listen(process.env.PORT, () => {
        });

        this.serverWebSocket.listen(process.env.WEBSOCKETPORT, () => {
        });
    }
}

module.exports = Server;