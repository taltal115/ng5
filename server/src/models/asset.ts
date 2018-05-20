import * as bcrypt from "bcrypt-nodejs";
import { Document, Schema, Model, PaginateModel, PaginateOptions, PaginateResult, Error, model } from "mongoose";
import mongoosePaginate = require('mongoose-paginate');
import { IAsset } from "./interfaces/asset";

const mongoosastic = require("mongoosastic");

export interface IAssetModel<T extends Document> extends PaginateModel<T> { }

export var AssetsSchema: Schema = new Schema({
        status: {
            type: String,
            enum: ["pending-for-upload", "uploaded", "passed-transcoding", "transcoded", "done"]
        },
        name: {
            type: String,
            es_indexed: true
        },
        orgId: {
            type: String,
            es_indexed: true
        },
        categories: {
            type: [String],
            es_indexed: true
        },
        genres: {
            type: [String],
            es_indexed: true
        },
        tags: {
            type: [String],
            es_indexed: true
        },
        thumbnails: [],
        poster: String,
        proxy: [],
        streams: [],
        format: {}
    },
    {
        timestamps: true,
        strict: false
    });

AssetsSchema.plugin(mongoosastic);
AssetsSchema.plugin(mongoosePaginate);

export const Asset: IAssetModel<IAsset> = model<IAsset>("Asset", AssetsSchema) as IAssetModel<IAsset>;
