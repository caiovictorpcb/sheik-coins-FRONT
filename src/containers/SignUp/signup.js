import React, { useState } from 'react'
import './signup.css'
import { Form, Input, Checkbox, Button, Image, message } from'antd'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { useHistory } from 'react-router' 
import { UserContext } from '../../contexts/usercontext'
import authService from '../../services/authService'





const Signup = () => {
  const history = useHistory()
  const { login } = React.useContext(UserContext)

  const newUser = async (values) =>{
    const data = await authService.signUpUser(values.nome, values.email, values.senha)
    if(data === "CADASTRADO"){
      message.success('CADASTRADO COM SUCESSO')
      history.push('/')
    }
    else{
      message.error('ERRO')
    }

  }

    return(
      <div id='container'>
      <h1><a style={{width:40, height:40, marginRight:5}} href='/'><Image preview={false}style={{width:40, marginRight:10}}alt='sheik-image'src='https://images.vexels.com/media/users/3/130123/isolated/preview/451253d81a55a06cc55363c70acf09b3-circulo-amarelo-do-cifrao.png'/></a>SheikCoins</h1>
      <div id='formulario-cadastro'>

          <Form name="cadastro"autoComplete="off"layout='vertical'onFinish={newUser}>
              <Form.Item label="Nome"name="nome"rules={
                      [ 
                  {
                  required: true,
                  message: 'Campo Obrigatório!',
                  }
              ]
          }
            >
                <Input placeholder="Ex: Caio Victor"/>
              </Form.Item>
              <Form.Item label="Email"name="email"rules={
                          [
                      {
                      required: true,
                      message: 'Campo Obrigatório!',
                      }
                  ]
              }
                >
                  <Input placeholder="Ex: contato@gmail.com"/>
              </Form.Item>
              <Form.Item label="Senha"name="senha"rules={
                          [
                      {
                      required: true,
                      message: 'Campo Obrigatório!',
                      }
                  ]
              }
                >
                  <Input.Password placeholder="**********"/>
              </Form.Item>
        
        <Form.Item name="agreed"valuePropName="checked">
          <Checkbox>Aceito os termos </Checkbox>
        </Form.Item>
        <Form.Item wrapperCol={{offset: 8,span: 16,}}>
          <Button type="primary" htmlType="submit"style={{marginLeft:122}}>
            Cadastrar
          </Button>
        </Form.Item>

          </Form>

          
      </div>
      </div>
  )
  }

  

  
    


export default Signup;