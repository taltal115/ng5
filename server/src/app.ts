import * as bodyParser from "body-parser";
import * as express from "express";
import * as path from "path";
import * as errorHandler from "errorhandler";
import * as mongoose from 'mongoose';
import { Routes } from './routes/index';
import { Helper } from "./utils/helper";
import * as cors from "cors";// remove latter

const cookieParser = require('cookie-parser');
const config = require('./utils/config');
const helper = new Helper();
helper.startingPointLog();
const corsOptions = {
    origin: ["http://localhost:3000"],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
/**
 * The server.
 *
 * @class Server
 */
class Server {

  public app: express.Application;

  /**
   * Constructor.
   *
   * @class Server
   * @constructor
   */
  constructor() {
    //create expressjs application
    this.app = express();

    //configure application
    this.config();

    //add api
    this.db();

    //add api
    this.api();

    //add routes
    this.routes();
  }

  private db() {
    let conf = config.db;
    
    // mongoose.connect(conf.mongo.uri, {
    //   useMongoClient: true
    // });
    //
    // //mongoose.Promise = global.Promise;
    //
    // mongoose.connection
    //   .on('error', console.error.bind(console, 'connection error:'))
    //   .once('open', () => console.log('mongoose Connection Succeeded.'));
  }

  private api() {
    //empty for now
    //console.log('MONGODB_URI', process.env.MONGODB_URI);
    //console.log('SESSION_SECRET', process.env.SESSION_SECRET);
    //console.log('MONGOLAB_URI', process.env.MONGOLAB_URI);
  }

  /**
   * Configure application
   *
   * @class Server
   * @method config
   */
  private config() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(cookieParser());
    this.app.use(cors(corsOptions));

    this.app.use(express.static(path.resolve(__dirname, config.client)));

    this.app.all('*', function (req: express.Request, res: express.Response, next: express.NextFunction) {
      //console.log('TODO: need to handle authentication requests')
      next();
    });

    // catch 404 and forward to error handler
    this.app.use(function (err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
      err.status = 404;
      next(err);
    });

    //error handling
    this.app.use(errorHandler());
  }

  /**
   * initiate application routes.
   *
   * @class Server
   * @method routes
   * @return void
   */
  private routes() {
    let router: express.Router = express.Router();
    Routes.init(router);
    this.app.use(router);
  }

}

export = new Server();