import React from 'react'
import { useContext, useEffect, useState } from 'react' 
import { UserContext } from '../../contexts/usercontext'
import axios from 'axios'
import { Button, Input, Table, List, Card, message } from 'antd'
import NavBar from './../Nav/NavBar';
import CardMoeda  from './components/cardMoeda'
import './portfolio.css'
import portfolioService from '../../services/portfolioService'

const Portfolio = () =>{
    const { user, jwt } = React.useContext(UserContext)
    const [portfolio, setPortfolio] = useState([])

     useEffect(async() => {
        fetchPosses()
     },[]) 

     const fetchPosses = async() =>{
      const posses = await portfolioService.getPosses(user?.id, jwt)
      setPortfolio([...posses])
     }

     const removeCard = async (moedaId, moedaNome) => {
      const deleted = await portfolioService.deletePosse(moedaId, user?.id)
      console.log(moedaId, moedaNome)
      if(deleted === "POSSE DELETADA"){
         message.success(`${moedaNome?.toUpperCase()} RETIRADA DO SEU PORTFOLIO`)
         fetchPosses()
      }
  }
    
    return(
  <>
        <NavBar />
        <div id='containerr'>
          <div id='cards'>
            <List
              grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 6,
                xxl: 3,
              }}
              dataSource={portfolio}
              renderItem={moeda => (
                <List.Item key={moeda.moedaId}>
                  <CardMoeda key={moeda.moedaId} onRemove={removeCard}idMoeda={moeda.moedaId}/>
                </List.Item>
              )}
            />
          </div>
        </div>
  </>
    )
}

export default Portfolio;       