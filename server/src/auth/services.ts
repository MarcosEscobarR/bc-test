import {LoginDto} from "./dtos";
import {Result} from "../commond/result";

export function login(dto: LoginDto) {
    if (dto.email === 'hola@prueba.com' && dto.password === 'pass2022'){
        return Result.ok(true)
    }

    return Result.badRequest(false)
}
