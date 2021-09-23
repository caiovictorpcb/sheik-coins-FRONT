import React from 'react'
import { useContext, useEffect, useState } from 'react' 
import { UserContext } from '../../contexts/usercontext'
import axios from 'axios'
import { Button, Input, Table, List, Card } from 'antd'
import NavBar from './../Nav/NavBar';
import CardMoeda  from './card'
import './portfolio.css'
const Portfolio = () =>{
    const { user, jwt } = React.useContext(UserContext)
    const [portfolio, setPortfolio] = useState([])

    const getUserPortfolio = async(user, token) =>{
        const response = await axios.get(`http://localhost:5000/portfolio/${user.id}`, {headers:{
            'authorization':`${token}`
        }})
        const dados = Array.from(response.data)
        setPortfolio(dados)
 
         
     }
     useEffect(() => {
         getUserPortfolio(user, jwt.token)
     },[]) 
 
    
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
      <List.Item>
        <CardMoeda idMoeda={moeda.moedaId}/>
      </List.Item>
    )}
  />
  </div>
  </div>
  </>
    )
}

export default Portfolio;       