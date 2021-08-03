import {BasicYokai, Yokai} from "../types/yokai";
import {db} from "../db";
import { OkPacket, RowDataPacket } from "mysql2";

export const findAll = (callback: Function) => {
    const queryString = 'SELECT * FROM Yokai';

    db.query(queryString, (err, result) => {
        if (err) {callback(err)}

        const rows = <RowDataPacket[]> result;
        const yokais: Yokai[] = [];

        rows.forEach(row => {
            const yokai: Yokai = {
                id: row.id,
                name: row.name,
                place: row.place,
                image: row.image,
                description: row.description,
                lat: row.lat,
                lng: row.lng
            }
            yokais.push(yokai);
        });
        callback(null, yokais);
    });
}