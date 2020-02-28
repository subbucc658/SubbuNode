const EventEmitter = require("events");
module.exports = class LoggerService  extends EventEmitter{
    logMessage(message) {
        console.log(message);
        this.emit("Logged");
    }
}

