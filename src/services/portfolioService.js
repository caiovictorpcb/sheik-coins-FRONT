import axios from "axios"

const PortfolioAPI = axios.create({baseURL: "https://sheik-coins-api.vercel.app/portfolio"})

class PortfolioService {

    getPosses = async (userId, token) =>{
        const {data} = await PortfolioAPI.get(`/${userId}`,{
            headers:{
                authorization:token
            }
        })
        return data
    }
    getMoedaDetalhes = async(moedaId) =>{
        const {data} = await axios.get(`https://api.coingecko.com/api/v3/coins/${moedaId}`)
        return data
        
     }

    newPosse = async (moedaId, userId) =>{
        const {data} = await PortfolioAPI.post('/', {
            moedaId,
            userId
        })
        return data
    }
    
    deletePosse = async (moedaId, userId) =>{
        const {data} = await PortfolioAPI.post('/delete', {
            moedaId,
            userId
        })
        return data
    }

    
}

export default new PortfolioService();