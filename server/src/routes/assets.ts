import { NextFunction, Request, Response, Router } from "express";
import { AssetsService } from "../service/assetsService";
const config = require('./../utils/config');

class AssetRoute {
    public static init(router: Router) {
        const service: any = new AssetsService();
        enum EnvType { Local, Google }

        router.get("/assets", (req: Request, res: Response, next: NextFunction) => {
            res.send('msg');
        });

        router.get("/assets/:id", async (req: Request, res: Response, next: NextFunction) => {
            var result = await service.get(req.params.id);
            res.send(result);
        });

        router.post("/assets/:id", async (req: Request, res: Response, next: NextFunction) => {
            var model = req.body;
            var id = model.id;

            delete model.id;
            delete model.autoplay;

            var result = await service.metadata(id, model);
            res.send(result);
        });

    }
}
export = AssetRoute;