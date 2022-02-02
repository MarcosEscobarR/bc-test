export class Result {
    constructor(public readonly status: number, public readonly data?: unknown) {}

    static ok(data: unknown) {
        return data ? new Result(200, data) : new Result(404);
    }
    static badRequest(data: unknown) {
        return new Result(400, data)
    }

    //other status codes
}
