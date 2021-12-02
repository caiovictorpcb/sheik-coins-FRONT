import React, { useEffect, useState } from "react";
import { PageHeader, Button, Input, Space, Typography } from 'antd';
import "antd/dist/antd.css";
import { BookFilled } from '@ant-design/icons'
import { UserContext } from '../../contexts/usercontext'
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router";

const NavBar = () => {
    const { Title } = Typography
    const { logged, user, logout } = React.useContext(UserContext);
    const { Search } = Input;
    const history = useHistory()
    
    return(
        <>
        <PageHeader title='SheikCoins' avatar={{src:'/icone.ico'}}style={{width:1400,marginLeft:220}}extra={
            [    
                    !logged ? 
                    <>
                        <Button key='2'href='/login'>Entrar</Button>
                        <Button key='3'href='/signup' type='primary'>Cadastrar</Button>   
                    </> 
                    : 
                    <>
                            <div style={{display:'flex', flexDirection:'row'}}>
                            <Space size={10}>
                                <Title level={5} style={{margin:0}}> Olá {user?.nome}</Title>   
                                <Button key='1'onClick={() =>{history.push('/portfolio')}} icon={<BookFilled />} shape='round' >Portfolio</Button>
                                <Button key='4'danger shape='round' onClick={logout} href='/'>Sair</Button>
                            </Space>
                            </div>
                    </>,
                
            ]
        }   
            >     
            </PageHeader>  
            </>
    )
}

export default NavBar;