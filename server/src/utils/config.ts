"use strict";
import * as path from "path";
const mainPath = path.resolve(__dirname + '/../../');

module.exports = {
    title: "MAM Server",
    mainPath: mainPath,
    port: process.env.port || 3000,
    db: {
        mongo: {
            uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/ditve_db',
        }
    },

    session: {
        secret: process.env.SESSION_SECRET || 'ashdfjhasdlkjfhalksdjhflak',
        duration: 54000
    },

    cors: {
        enabled: true,
        origin: "*",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        preflightContinue: false,
        optionsSuccessStatus: 204
    },

    pubsub: {
        keyFilename: mainPath + "/src/utils/auth/DiTVe MAM test-e04c7af16322.json",
    },

    client: process.env.CLIENT_PATH || '../../client',

    es: process.env.ES_URL || 'http://localhost:9200',
};