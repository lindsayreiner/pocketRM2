const db = require("../config/connection");
const { Connection } = require("../models");

const connectionData = require("./connectionSeeds.json");

db.once("open", async () => {
    await Connection.deleteMany({});

    const connections = await Connection.insertMany(connectionData);

    console.log("Connections seeded!");

    process.exit(0);
});