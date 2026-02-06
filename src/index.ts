import 'dotenv/config';
import 'colors';

import Server from './models/Server.js';

const server = new Server();

(BigInt.prototype as any).toJSON = function () {
    return parseInt(this.toString());
};

server.execute();
