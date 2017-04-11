import "reflect-metadata";
import {createConnection} from "typeorm";
import {createExpressServer, useContainer, useExpressServer} from "routing-controllers";
import {Container} from "typedi";

// setup routing-controllers to use typedi container. You can use any container here
useContainer(Container);

createConnection().then(async connection => {
    // create express server
    const expressApp = createExpressServer({ // alternatively you can use useExpressServer with your own preconfigured express server
        controllers: [__dirname + "/controllers/*.js"]
    });

    // run express app
    expressApp.listen(3000);

    console.log("Server is up and running at port 3000");

}).catch(error => console.log("TypeORM connection error: ", error));
