import axios from "axios"

const PortfolioAPI = axios.create({baseURL: "https://sheik-coins-api.herokuapp.com/portfolio"})

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
        const {data} = await axios.post('https://sheik-coins-api.herokuapp.com/portfolio', {
            moedaId,
            userId
        })
        return data
    }
    
    deletePosse = async (moedaId, userId) =>{
        const {data} = await axios.post('https://sheik-coins-api.herokuapp.com/portfolio/delete', {
            moedaId,
            userId
        })
        return data
    }

    
}

export default new PortfolioService();