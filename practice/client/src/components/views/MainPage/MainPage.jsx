import React, { useEffect } from 'react'
import axios from 'axios';
import Footer1 from '../Footer/footer-component.jsx'
import Navbar1 from '../Navbar/gate-gnb.jsx'
import Navbar2 from '../Navbar/Navbar.jsx';
import SubPage from '../SubPage/SubPage'

function MainPage() {
    useEffect(() => {
        axios.get('/api/hello')
    }, [])


    return (
        <div>
            <Navbar2/>
            <h1>Hello, This is Main Page!</h1>

            <SubPage/>
            <br/>
            <Footer1/>
        </div>

    )
}

export default MainPage