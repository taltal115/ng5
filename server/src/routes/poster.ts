import { NextFunction, Request, Response, Router } from "express";
import { PostersService } from "../service/postersService";

class PosteRoute {
    public static init(router: Router) {
        const service = new PostersService();

        router.post("/posters/create", (req: Request, res: Response, next: NextFunction) => {
            res.send('post posters');
        });
        
        router.put("/posters/update", (req: Request, res: Response, next: NextFunction) => {
            res.send('put posters');
        });

        router.delete("/posters/delete", (req: Request, res: Response, next: NextFunction) => {
            res.send('delete posters');
        });

        router.get("/posters/:id", async (req: Request, res: Response, next: NextFunction) => {
            let parent_id = parseInt(req.params.id);
            const data = await service.get(parent_id);
            res.json(data);
        });
    }
}
export = PosteRoute;