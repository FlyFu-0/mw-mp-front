import React from 'react'

import { Helmet } from 'react-helmet'

import { TestDiv } from './styled'

import { Link } from 'react-router-dom';


const HomePage: React.FC = () => {
    return ( <>
    <Helmet>
        <title>Главная — MW MARKETPLACE</title>
    </Helmet>

    <h1>Главная</h1>
    <Link to="/account-settings">Настройки аккаунта</Link>
    </>
    )
}

export default HomePage