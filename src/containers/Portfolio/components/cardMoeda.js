import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Avatar, Button, Card, message, Space, Statistic } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import { UserContext } from '../../../contexts/usercontext'
import portfolioService from '../../../services/portfolioService'
import Portfolio from '../portfolio'

const CardMoeda = (props) =>{
    const {user} = React.useContext(UserContext)
    const { Meta } = Card;
    const [moeda, setMoeda] = useState()    
    

     useEffect(async() => {
         const detalhesMoeda = await portfolioService.getMoedaDetalhes(props.idMoeda)
         setMoeda(detalhesMoeda)
     },[props.moedaId]) 

     

    return (
        <>
        <Card loading={moeda ? false : true} id='card'actions= {[<CloseOutlined style={{color:'red'}} key="remove" onClick={() => props.onRemove(moeda.id, moeda.name)}/>]} title={<Meta avatar={<Avatar src={moeda?.image.thumb}/>}
     title={<div style={{display:"flex", flexDirection:"row"}}>
                <Space size={45}>
                    <span>{moeda?.name}</span>
                    <span style={{color:'#808080'}}>{moeda?.symbol.toUpperCase()}</span>
                </Space>
            </div>}
            />}    
>
            <div>
              <span><Statistic title="Preço" value={moeda?.market_data.current_price.usd} precision={2} prefix='$' /></span>
              <span><Statistic suffix='%'precision={3} valueStyle={{fontSize:17, color:moeda?.market_data.price_change_percentage_24h > 0 ? '#00a000' : '#ff0000'}}value={moeda?.market_data.price_change_percentage_24h}/></span>
              </div>
        </Card>
        </>
        

    )
}

export default CardMoeda;