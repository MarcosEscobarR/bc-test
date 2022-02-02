import Joi from "joi";

export interface LoginDto {
    email: string,
    password: string
}

export const LoginDtoSchema = Joi.object<LoginDto>({
    email: Joi.string().email({ minDomainSegments: 1, tlds: { allow: ['com'] } }).required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
})
