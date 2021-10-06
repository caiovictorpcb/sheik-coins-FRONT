import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Table, Statistic, Space, Button, message } from 'antd';
import "antd/dist/antd.css";
import "./Tabela.css"
import { UserContext } from '../../contexts/usercontext'
import { PlusOutlined } from '@ant-design/icons';
import cryptoService from '../../services/cryptoService';
import portfolioService from '../../services/portfolioService';
const Tabela = () => {

    const { logged, user, jwt } = React.useContext(UserContext)
    const [moedas, setMoedas] = useState([]);  

    const addMoedaPortfolio = async (moedaId, userId, moedaNome) =>{
       const added = await portfolioService.newPosse(moedaId, userId)
        if(added === 'POSSE CADASTRADA'){
            message.success(`MOEDA COM NOME ${moedaNome.toUpperCase()} ADICIONADA NO PORTFOLIO.`)
        }
        else{
            message.error('ERRO AO CADASTRAR MOEDA NO PORTFOLIO')
        }
    }

    useEffect(async () => { 
        const lista = await cryptoService.getCrypto()   
        setMoedas(lista)
    },[]) 

    const columns = [{
        title:'#',
        dataIndex:'key'
    },
    {
        title:'NOME',
        dataIndex:'nome',
        render: (text, moeda) => (
            <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                <img alt='imagem-moeda' src={moeda.img} style={{width:25, height:25, marginRight:8}}></img>
                <span>{text}</span>
            </div>
        )
            
    },
    {
        title:'',
        render: (moeda) =>(
            <span style={{marginRight:90}}>{moeda.simbolo.toUpperCase()}</span>
        )
    },
    {
        title:'PREÇO',
        render:(moeda) => (
            <>
            <Space>
                <span>
                    <Statistic prefixStyle={{marginRight:1}}prefix={'$'}value={moeda.preco}valueStyle={{fontSize:15}} />
                </span>
            </Space>

            </>
        )
    },
    {
        title:'MARKET CAP',
        render:(text, moeda) => (
                <span>
                    <Statistic prefix={'$'}value={moeda.mktcap} valueStyle={{fontSize:15}} />
                </span>     
        )
    },
    logged ?
    {
        title:'',
        render:(moeda) =>(
            <Button type="primary" shape="round" icon={<PlusOutlined/>} size='middle'onClick={()=> addMoedaPortfolio(moeda.id, user?.id, moeda.nome)}>
            </Button>
        )
    }
    :
    {}
]

        return(
            
            <div className='container'>
                <div className='tabela'>
                    <Table dataSource={moedas} columns={columns} pagination={false} size='middle' /> 
                </div>
            </div>
        )
}


export default Tabela;
