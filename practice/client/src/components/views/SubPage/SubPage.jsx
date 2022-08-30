import React, { useRef, useState } from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Editor from '@monaco-editor/react'
import "./subpage.scss"


function SubPage() {
  const editorRef = useRef(null);
  const [Value, setValue] = useState('')
  const codeText = `const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );`;
  
  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor; 
  }

  function getValue(){
    const content = editorRef.current.getValue();
    setValue(content)
  }

  return (
    <Box id='SubPage'>
      <p>SubPage Box</p>
    <Stack direction="row" spacing={12}>
      <Button className='ex-button' variant="contained" onClick={getValue}>실행</Button>
      <Button className='ex-button' variant="contained">초기화</Button>
    </Stack>

  <Stack direction="row" spacing={12}>
    <Editor height='500px' width='600px'
    defaultLanguage="javascript"
    defaultValue={codeText}
    onMount={handleEditorDidMount}
    />
  
    <Box>{Value}</Box>
    </Stack>
    </Box>
  )
}

export default SubPage