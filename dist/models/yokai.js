"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = void 0;
const db_1 = require("../db");
const findAll = (callback) => {
    const queryString = 'SELECT * FROM Yokai';
    db_1.db.query(queryString, (err, result) => {
        if (err) {
            callback(err);
        }
        const rows = result;
        const yokais = [];
        rows.forEach(row => {
            const yokai = {
                id: row.id,
                name: row.name,
                place: row.place,
                image: row.image,
                description: row.description,
                lat: row.lat,
                lng: row.lng
            };
            yokais.push(yokai);
        });
        callback(null, yokais);
    });
};
exports.findAll = findAll;
