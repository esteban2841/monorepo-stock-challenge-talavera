"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connect = async () => {
    try {
        await mongoose_1.default.connect(`${process.env.MONGO_URI}`);
        console.log("Conexión exitosa a la BD");
    }
    catch (error) {
        console.error("🚀 ~ connect ~ error:", error);
        process.exit(1);
    }
};
exports.default = connect;
