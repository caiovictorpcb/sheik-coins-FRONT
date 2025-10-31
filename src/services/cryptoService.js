import axios from "axios"

const CryptoAPI = axios.create({baseURL: "https://sheik-coins-api.vercel.app/crypto"})

class CryptoService {

    getCrypto = async () =>{
        const moedas = []
        const {data} = await CryptoAPI.get('/')
        for(var i =0;i<data.length;i++){
            moedas.push({key:i+1, id:data[i].id, img:data[i].img, nome:data[i].nome, simbolo:data[i].symbol, preco:data[i].preco, mktcap:data[i].mktcap})
        }
        return moedas
    }
    
}

export default new CryptoService();