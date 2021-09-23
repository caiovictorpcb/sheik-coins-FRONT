import react, { useState, useEffect } from 'react'
import axios from 'axios'
import { Avatar, Card, Space, Statistic } from 'antd'
const CardMoeda = (props) =>{
    const { Meta } = Card;
    const [moeda, setMoeda] = useState()
    const getMoedaDetalhes = async(moedaId, token) =>{
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${moedaId}`)
        setMoeda(response.data)
        
     }
     useEffect(() => {
         getMoedaDetalhes(props.idMoeda)
     },[]) 
 


    return (
        moeda ?
        <Card id='card'title={<Meta avatar={<Avatar src={moeda.image.thumb}/>}title={<Space size={45}><span>{moeda.name}</span><span style={{color:'#808080'}}>{moeda.symbol.toUpperCase()}</span></Space>}/>}>
            <div>
              <span><Statistic title="Preço" value={moeda.market_data.current_price.usd} precision={2} prefix='$' /></span>
              <span><Statistic suffix='%'precision={3} valueStyle={{fontSize:17, color:moeda.market_data.price_change_percentage_24h > 0 ? '#00a000' : '#ff0000'}}value={moeda.market_data.price_change_percentage_24h}/></span>
              </div>
        </Card>
        :
        <h1>"DEU RUIM"</h1>
    )
}

export default CardMoeda;