import React, { useRef, useState, useEffect } from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Editor, { useMonaco } from '@monaco-editor/react'
import MonokaiTheme from 'monaco-themes/themes/Monokai Bright.json'
import "./subpage.scss"



function SubPage() {
  const editorRef = useRef(null);
  const [Value, setValue] = useState('')
  const codeText = `const test = 'it is test context!';`;

  useEffect(() => {
    

  }, []);
  

  
  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
    let customMonokai = JSON.parse(JSON.stringify(MonokaiTheme))
    console.log(MonokaiTheme)
  
    
    monaco.editor.defineTheme("monokai", MonokaiTheme)
    monaco.editor.setTheme('monokai')
  }

  function getValue(){
    const content = editorRef.current.getValue();
    setValue(content)
  }

  function textInit() {
    const content = editorRef.current.setValue('');
    setValue(content);
    
  }

  return (
    <Box id='SubPage'>
      <p>SubPage Box</p>
      <Stack className="btn-stack" direction="row" spacing={12}>
        <Button className='ex-button' variant="contained" onClick={getValue}>실행</Button>
        <Button className='ex-button' variant="contained" onClick={textInit}>초기화</Button>
      </Stack>

      <Stack direction="row" spacing={12}>
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
      <Box>{Value}</Box>
      </Stack>
    </Box>
  )
}

export default SubPage