import React, { useRef, useState, useEffect } from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Editor from '@monaco-editor/react'
import MonokaiTheme from 'monaco-themes/themes/Monokai Bright.json'
import axios from 'axios';
import "./subpage.scss"




function SubPage() {
  const editorRef = useRef(null);
  const [Value, setValue] = useState('')
  const [InitScript, setInitScript] = useState('')
  const codeText = `const test = 'it is test context!';`;

  useEffect(() => {
    axios.get("/api/editor")
    .then(res => {
      setValue(res.data);
      setInitScript(res.data);
    })
    .catch(err => {
      console.log(err);
    })

  }, []);
  

  
  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
    let customMonokai = JSON.parse(JSON.stringify(MonokaiTheme))
    console.log(MonokaiTheme)
  
    
    monaco.editor.defineTheme("monokai", MonokaiTheme)
    monaco.editor.setTheme('monokai')
  }

  function getValue(){
    console.log("value : " + Value);
    const content = editorRef.current.getValue();
    setValue(content)
    console.log("new value : " + Value);
  }

  function textInit() {
    setValue(InitScript);
    
  }

  return (
    <Box id='SubPage'>
      <Stack className="btn-stack" direction="row" spacing={10}>
        <Button className='ex-button' variant="contained" onClick={getValue}>실행</Button>
        <Button className='ex-button' variant="contained" onClick={textInit}>초기화</Button>
      </Stack>

      <Stack className="editor-stack" direction="row" spacing={20}>
        <Editor height='860px' width='480px'
          defaultLanguage="javascript"
          defaultValue={codeText}
          theme="monokai"
          onMount={handleEditorDidMount}
          options={
            {
              fontSize: 16,
              minimap: {enabled: false},
              scrollbar: {
                vertical: 'auto',
                horizontal: 'auto'
              },
              contextmenu : true,
              padding : {
                top: 15,
                bottom : 10
              }
            }
          }
      />
      <Box className="value-box">{Value}</Box>
      </Stack>
    </Box>
  )
}

export default SubPage