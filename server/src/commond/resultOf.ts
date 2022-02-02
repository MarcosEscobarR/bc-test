import { Request, RequestHandler } from "express";
import { Result } from "./result";

export function resultOf(
    handler: (req: Request<any, any, any, any>) => Result | Promise<Result>,
): RequestHandler {
    return async (req, res) => {
        try {
            const { status, data } = await handler(req);
            return res.status(status).send(data);
        } catch (e) {
            console.error(e);
            return res.sendStatus(500);
        }
    };
}
