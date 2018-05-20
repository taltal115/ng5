const config = require("./config");
const chalk = require("chalk");
const logger =  require("./../utils/logger").default;

export class Helper {

    constructor() {}

    startingPointLog() :void {
        logger.info(chalk.green(`
--------------------------------------------------------------
Name:\t\t\t\t\t ${config.title}
Environment:\t\t\t ${process.env.NODE_ENV}
Port:\t\t\t\t\t ${config.port}
Database:\t\t\t\t ${config.db.mongo.uri}
--------------------------------------------------------------
`));
    }
}