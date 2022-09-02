import React, { useEffect } from 'react'
import axios from 'axios';
import Navbar2 from '../Navbar/Navbar.jsx';
import Box from '@mui/material/Box'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './main.scss'


function MainPage() {
    useEffect(() => {
        axios.get('/api/hello')
        .then((req,res) => {
            console.log(req.data)
        })
    }, [])


    return (
        <Box>
            <header>
                <Navbar2/>
            </header>
            <Box className='container'>
            <Typography variant="h4" component="div" className="main-title">
                            Hello, This is Main Page!
                        </Typography>
                <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/berry.jpg"
                        alt="딸기"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Editor
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            2022 고예원의 Custom Monaco Editor를 만나보세요
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" href='/editor'>
                        EDITOR PAGE
                    </Button>
                </CardActions>
                </Card>
            </Box>
        </Box>
    )
}

export default MainPage