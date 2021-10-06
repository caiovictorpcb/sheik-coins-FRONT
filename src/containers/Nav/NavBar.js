import React, { useEffect, useState } from "react";
import { PageHeader, Button, Input, Space } from 'antd';
import "antd/dist/antd.css";
import { BookFilled } from '@ant-design/icons'
import { UserContext } from '../../contexts/usercontext'
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router";

const NavBar = () => {
    const { logged, user } = React.useContext(UserContext)
    
    const { Search } = Input;
    
    const history = useHistory()
    

    
    return(
        <>
        <PageHeader title='SheikCoins' avatar={{src:'/icone.ico'}}style={{width:1400,marginLeft:220}}extra={
            [      
                    !logged ? 
                    <>
                        <Button key='2'href='/login'>Log in</Button>
                        <Button key='3'href='/signup' type='primary'>Sign Up</Button>   
                    </> 
                    : 
                    <><Space size={750}>
                            <Button key='1'onClick={() =>{history.push('/portfolio')}} icon={<BookFilled />} shape='round' >Portfolio</Button>
                            <span> Olá {user?.nome}</span>
                        </Space>
                    </>,
                <Search placeholder="Procurar crypto-moeda" style={{ width: 200 }} />
            ]
        }   
            >     
            </PageHeader>  
            </>
    )
}

export default NavBar;