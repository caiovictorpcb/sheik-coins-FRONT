import React from 'react'
import './login.css'
import { Form, Input, Checkbox, Button, Image, message } from'antd'
import axios from 'axios'
import { Redirect, useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { UserContext } from '../../contexts/usercontext'
import { LoadingOutlined } from '@ant-design/icons';
import { useState } from 'react'
import authService from '../../services/authService'

const Login = () =>{
  
  const history = useHistory()
  const { login } = React.useContext(UserContext)

    const loginUser = async (values) =>{
      const {token, user} = await authService.loginUser(values.email, values.senha)
      if(token && user){
        login(token, user)
        history.push('/')
      }
      else{
        message.error('EMAIL/SENHA INCORRETOS', 3);
      }
    }


    return(
        <div id='container'>
        <h1><a style={{width:40, height:40, marginRight:5}} href='/'><Image preview={false}style={{width:40, marginRight:10}}alt='sheik-image'src='https://images.vexels.com/media/users/3/130123/isolated/preview/451253d81a55a06cc55363c70acf09b3-circulo-amarelo-do-cifrao.png'/></a>SheikCoins</h1>
        <div id='formulario-login'>
  
            <Form name="login"autoComplete="off"layout='vertical' onFinish={loginUser}>
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
          <Form.Item wrapperCol={{offset: 8,span: 16,}}>
            <Button id ='botao' type="primary" htmlType="submit"style={{marginLeft:146}}>
              Entrar
            </Button>
          </Form.Item>
  
            </Form>
  
            
        </div>
        </div>
    )
}


export default Login;