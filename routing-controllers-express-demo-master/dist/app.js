"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const routing_controllers_1 = require("routing-controllers");
const typedi_1 = require("typedi");
// setup routing-controllers to use typedi container. You can use any container here
routing_controllers_1.useContainer(typedi_1.Container);
typeorm_1.createConnection().then((connection) => __awaiter(this, void 0, void 0, function* () {
    // create express server
    const expressApp = routing_controllers_1.createExpressServer({
        controllers: [__dirname + "/controllers/*.js"]
    });
    // run express app
    expressApp.listen(3000);
    console.log("Server is up and running at port 3000");
})).catch(error => console.log("TypeORM connection error: ", error));
