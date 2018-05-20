import { Asset } from "../models/asset";
import * as mime from "mime";
import * as path from "path";
import * as fs from "fs";

var deferred = require('deferred');

export class AssetsService {

    public metadata(id: string, model: any) {
        Asset.findOneAndUpdate({ _id: id }, model, { upsert: false }, function (err: any, doc: any) {
            if (err) throw err;
            if (doc) {
                doc.on('es-indexed', function (err: any, es_res: any) {
                    if (err) {
                        console.error('Elasticsearch indexing failed', err)
                    };
                });
            }
            return { success: true };
        });
    }

    public get(id: string) {
        const defer = deferred();
        Asset.findById(id, function (err: any, doc: any) {
            if (err) {
                return null;
            }

            let thumbnails = doc.get('thumbnails');
            if (thumbnails instanceof Array && thumbnails.length > 0) {
                let dir: string = doc.get('thumbnails_dir');

                var promises = thumbnails.map((item: any) => {
                    const def = deferred();

                    let file_path = path.resolve(path.join('../resources/', dir, item.src));

                    fs.readFile(file_path, function (err: any, buffer: any) {
                        if (err) {
                            item.src = path.join('/resources/', dir, item.src);
                        } else {
                            var data = new Buffer(buffer, 'binary').toString('base64');
                            item.src = `data:jpg;base64,${data}`;
                        }
                        def.resolve(item);
                    });
                    return def.promise;
                });

                Promise.all(promises).then(function (thumbnails) {
                    doc.thumbnails = thumbnails
                    defer.resolve(JSON.stringify(doc));
                });
            }
            else {
                defer.resolve(JSON.stringify(doc));
            }
        });
        return defer.promise;
    }
}