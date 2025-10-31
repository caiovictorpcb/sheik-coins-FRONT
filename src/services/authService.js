import axios from "axios"

const AuthAPI = axios.create({baseURL: "https://sheik-coins-api.vercel.app/auth"})

class AuthService {

    loginUser = async (email, senha) => {
        const {data} = await AuthAPI.post("/login", {email, senha})
        if(data.data){
            const token = data?.data.token
            const user = data?.data.user 
        return{token,user}    
        }
        else{
            return  false
        }
    }
    signUpUser = async (nome, email, senha) =>{
        const {data} = await AuthAPI.post('/signup', {nome, email, senha})
        return data
    }
    
}

export default new AuthService();