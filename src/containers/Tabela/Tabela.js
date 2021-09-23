import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Table, Statistic, Space, Button, message } from 'antd';
import "antd/dist/antd.css";
import "./Tabela.css"
import { UserContext } from '../../contexts/usercontext'
import { PlusOutlined } from '@ant-design/icons';
const Tabela = () => {

    const { logged, user } = React.useContext(UserContext)
    const [moedas, setMoedas] = useState([]);

    const getCrypto = async () =>{
        const response = await axios.get('http://localhost:5000/crypto')
        const lista = Array.from(response.data)
        setMoedas(lista)
        
    } 
    const addMoedaPortfolio = async (id, nome) =>{
        const response = await axios.post('http://localhost:5000/portfolio', {
            moedaId:id,
            userId:user.id
        })
        if(response.data === 'POSSE CADASTRADA'){
            message.success(`MOEDA COM NOME ${nome.toUpperCase()} ADICIONADA NO PORTFOLIO.`)
        }
        else{
            message.error('ERRO AO CADASTRAR MOEDA NO PORTFOLIO')
        }
    }

    useEffect(() => {
        getCrypto()
    },[]) 

    const data = []
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
            <Button type="primary" shape="round" icon={<PlusOutlined/>} size='middle'onClick={()=> addMoedaPortfolio(moeda.id, moeda.nome)}>
            </Button>
        )
    }
    :
    {}
]

    for(var i =0;i<moedas.length;i++){
        data.push({key:i+1, id:moedas[i].id, img:moedas[i].img, nome:moedas[i].nome, simbolo:moedas[i].symbol, preco:moedas[i].preco, mktcap:moedas[i].mktcap})
    }

        return(
            
            <div className='container'>
                <div className='tabela'>
                    <Table dataSource={data} columns={columns} pagination={false} size='middle' /> 
                </div>
            </div>
        )
}


export default Tabela;