import React, { useEffect } from 'react'
import axios from 'axios';
import Footer1 from '../Footer/footer-component.jsx'
import Navbar1 from '../Navbar/gate-gnb.jsx'

function MainPage() {
    useEffect(() => {
        axios.get('/api/hello')
    }, [])


    return (
        <div>
            <Navbar1/>
            <h1>qwdqwd</h1>
            hello
            <div> gggg</div>
            <Footer1/>
        </div>

    )
}

export default MainPage