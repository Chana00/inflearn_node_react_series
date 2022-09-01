import React, { useRef, useState, useEffect } from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Editor, { useMonaco } from '@monaco-editor/react'
import "./subpage.scss"


function SubPage() {
  const monaco = useMonaco();
  const editorRef = useRef(null);
  const [Value, setValue] = useState('')
  const codeText = `const test = 'it is test context!';`;

  useEffect(() => {
    
    
  }, []);
  

  
  function handleEditorDidMount(editor, monaco) {
    monaco.editor.defineTheme("webhwpTheme",{
      base: 'vs',
	inherit: true,
	rules: [{ background: 'EDF9FA' }],
	colors: {
		'editor.foreground': '#000000',
		'editor.background': '#EDF9FA',
		'editorCursor.foreground': '#8B0000',
		'editor.lineHighlightBackground': '#0000FF20',
		'editorLineNumber.foreground': '#008800',
		'editor.selectionBackground': '#88000030',
		'editor.inactiveSelectionBackground': '#88000015'
    }}
    );
    monaco.editor.setTheme('webhwpTheme');

    editorRef.current = editor; 
  }

  function getValue(){
    const content = editorRef.current.getValue();
    setValue(content)
  }

  return (
    <Box id='SubPage'>
      <p>SubPage Box</p>
      <Stack className="btn-stack" direction="row" spacing={12}>
        <Button className='ex-button' variant="contained" onClick={getValue}>실행</Button>
        <Button className='ex-button' variant="contained">초기화</Button>
      </Stack>

      <Stack direction="row" spacing={12}>
        <Editor height='500px' width='600px'
          defaultLanguage="javascript"
          defaultValue={codeText}
          theme="webhwpTheme"
          onMount={handleEditorDidMount}
      />
      <Box>{Value}</Box>
      </Stack>
    </Box>
  )
}

export default SubPage