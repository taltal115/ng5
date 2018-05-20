import { NextFunction, Request, Response, Router } from "express";

class UserRoute {
    public static init(router: Router) {
        router.get("/users", (req: Request, res: Response, next: NextFunction) => {
            res.send('retrive users');
        });

        router.get("/users/:id", async (req: Request, res: Response, next: NextFunction) => {
            res.send({
                "first-name": "Shlomi",
                "last-name": "Elbaz",
                "avatar": "resources/images/user-profile/Shlomi.jpg",
                "id": 1
            });
        });

        router.post("/users/:id", async (req: Request, res: Response, next: NextFunction) => {
            res.send('post user');
        });

        router.put("/users", async (req: Request, res: Response, next: NextFunction) => {
            res.send('put user');
        });
    }
}
export = UserRoute;