import {Router} from "express";
import {resultOf} from "../commond/resultOf";
import {login} from "./services";
import {validate} from "../commond/validate";
import {LoginDtoSchema} from "./dtos";

const router = Router()

router.post('/login',
    validate("body", LoginDtoSchema),
    resultOf(req => login(req.body))
)

export default router;
