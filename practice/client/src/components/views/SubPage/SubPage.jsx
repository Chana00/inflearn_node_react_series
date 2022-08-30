import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import "./subpage.scss"

function SubPage() {
  return (
    <Box id='SubPage'>
      <p>SubPage Box</p>
    <Stack direction="row" spacing={12}>
      <Button className='ex-button' variant="contained">실행</Button>
      <Button className='ex-button' variant="contained">초기화</Button>
    </Stack>
    </Box>
  )
}

export default SubPage