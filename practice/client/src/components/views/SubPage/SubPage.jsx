import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Editor from '@monaco-editor/react'
import "./subpage.scss"

const CodeEditor = () => {
  return <Editor height='100%'/>
}

const codeText = `const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`;



function SubPage() {
  return (
    <Box id='SubPage'>
      <p>SubPage Box</p>
    <Stack direction="row" spacing={12}>
      <Button className='ex-button' variant="contained">실행</Button>
      <Button className='ex-button' variant="contained">초기화</Button>
    </Stack>

    <Editor height='500px' width='600px'
    defaultLanguage="javascript"
    defaultValue={codeText}
    />
    </Box>
  )
}

export default SubPage