import 'dotenv/config';
import 'colors';

import Server from './models/server.js';

const server = new Server();

BigInt.prototype.toJSON = function () {
    return parseInt(this.toString());
};

server.execute();
