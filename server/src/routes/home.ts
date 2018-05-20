import { NextFunction, Request, Response, Router } from "express";
import { HomeService } from "../service/homeService";

class HomeRoute {
    public static init(router: Router) {
        const service: any = new HomeService();

        router.get("/", async (req: Request, res: Response, next: NextFunction) => {
            res.json("data");
        });

        router.get("/api/get", async (req: Request, res: Response, next: NextFunction) => {
            console.log(process.env.NODE_ENV);
            const CHARACTERS: any[] =
                [
                    {
                        id: 'Earl of Lemongrab',
                        user: 'Unknown',
                        school: 'Lemon Candy',
                        issue: "test issue",
                        status: 'Earl, Heir to the Candy Kingdom Throne'
                    },
                    {
                        id: 'Bonnibel Bubblegum',
                        user: '19',
                        school: 'Gum Person',
                        issue: "test issue",
                        status: 'Returned Ruler of the Candy Kingdom'
                    },
                    {
                        id: 'Phoebe',
                        user: '16',
                        school: 'Flame Person',
                        issue: "test issue",
                        status: 'Ruler of the Fire Kingdom'
                    },
                    {
                        id: 'Lumpy Space Princess',
                        user: '18',
                        school: 'Lumpy Space Person',
                        issue: "test issue",
                        status: 'Babysitter'
                    },
                ];
            res.json(CHARACTERS);
        });

        router.get("/lookups", (req: Request, res: Response, next: NextFunction) => {
            const data = [
                { group: "category", value: "Commercial" },
                { group: "category", value: "Movie" },
                { group: "category", value: "News" },
                { group: "category", value: "Series" },
                { group: "category", value: "Show" },
                { group: "category", value: "Sports" },
                { group: "genre", value: "Action" },
                { group: "genre", value: "Animation" },
                { group: "genre", value: "Comedy" },
                { group: "genre", value: "Drama" },
                { group: "genre", value: "Fantasy" },
                { group: "genre", value: "Historical" },
                { group: "genre", value: "Horror" },
                { group: "genre", value: "Music" },
                { group: "genre", value: "Romance" },
                { group: "genre", value: "Science Fiction" }
            ];
            res.send(data);
        });
    }
}
export = HomeRoute;