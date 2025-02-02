"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./config/database"));
const NoteRouter_1 = __importDefault(require("./router/NoteRouter"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.routes();
        this.databaseSync();
    }
    routes() {
        this.app.route('/').get((req, res) => {
            res.send('welcome home');
        });
        this.app.use("/api/v1/note", NoteRouter_1.default);
    }
    plugins() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    databaseSync() {
        var _a;
        const db = new database_1.default();
        (_a = db.sequelize) === null || _a === void 0 ? void 0 : _a.sync();
    }
}
const port = 8000;
const app = new App().app;
app.listen(port, () => {
    console.log('App running on port ' + port);
});
