import { Asset } from "../models/asset";
import * as mime from "mime";
import * as path from "path";
import * as fs from "fs";

var deferred = require('deferred');

export class PostersService {

    public get(query: any) {
        const defer = deferred();
        try {
            Asset.paginate({ "parents": query.id },
                {
                    select: {
                        "format.format_long_name": 1,
                        "format.format_name": 1,
                        "format.filename": 1,
                        "poster": 1,
                        "name": 1,
                        "genres": 1,
                        "format.duration": 1,
                        "streams": { $elemMatch: { "codec_type": "video" } }
                    },
                    lean: false,
                    page: query.page,
                    limit: query.limit
                }, function (err: any, result: any) {
                    defer.resolve(result);
                });

        } catch (e) {
            defer.resolve([]);
        }
        return defer.promise;
    }
}