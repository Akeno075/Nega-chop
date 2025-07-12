
import { tesloApi } from "@/api/TesloApi"
import { type AuthResponse, type User} from "../interfaces"
import { isAxiosError } from "axios";

interface RegisterError {
    ok:false;
    message:string;
}
interface RegisterSuccess{
    ok: true;
    user: User;
    token: string;
}

export const registerAction =async(
    fullName: string, email:string, password: string
): Promise <RegisterError|RegisterSuccess> =>{
    try{
        const {data} = await tesloApi.post<AuthResponse>('/auth/register',{
            fullName,
            email,
            password,
        });
        return{
            ok: true,
            user: data.user,
            token: data.token,
        }
    } catch(error){
       
        console.log(error);
        throw new Error('No se puede el registro');
    }
}