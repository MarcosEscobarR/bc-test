import {ILoginModel} from "../pages/home/Home";
import httpRequest from "../shared/httpRequest";

export class AuthService {
   static async login(data: ILoginModel) {
       return await httpRequest.post('auth/login', data)
   }
}

