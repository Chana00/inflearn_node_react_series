import React from 'react'
import axios from 'axios';
import Footer1 from '../Footer/footer-component.jsx'
import Navbar2 from '../Navbar/Navbar.jsx';
import SubPage from '../SubPage/SubPage.jsx';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import './editor.scss';
import MonokaiTheme from 'monaco-themes/themes/Monokai Bright.json'
import Link from '@mui/material/Link'



function EditorPage() {
  return (
    <div>
    <Navbar2/>
    <Box className='editor-container'>
    <Typography variant="h4" component="div" className="main-title"> EDITOR PAGE </Typography> 
    <Link href="/" className='link-main' >돌아가기</Link>

     <SubPage/>

    </Box>
    <Footer1/>
</div>
  )
}

export default EditorPage