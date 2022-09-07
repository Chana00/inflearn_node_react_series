import React, { useRef, useState, useEffect } from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Editor, { monaco, useMonaco } from '@monaco-editor/react'
import MonokaiTheme from 'monaco-themes/themes/Monokai Bright.json'
import axios from 'axios';
import "./subpage.scss"



// 지금 문제점 두개
// 1. example.js를 불러올 때 비동기 때문에 종종 example.js를 불러오는 것보다 페이지가 먼저 렌더링 되는 경우 발생
// 2. 초기화 버튼을 눌렀을 때 monaco editor의 내용을 example.js의 코드로 초기화해야 하는데 monaco 초기화 코드를 지금 모름 ㅠ
  //1. 내용만 초기화한다( 방법을 못찾았음 없음;; )
  //2. 초기 세팅 모델 자체를 저장해두었다가 초기화 클릭시 현재 모델을 파괴하고 저장해두었던 세팅 모델을 불러온다
function SubPage() {
  const editorRef = useRef(null);
  const [Value, setValue] = useState('')
  const [InitScript, setInitScript] = useState('')
  const [ExampleScript, setExampleScript] = useState('')
  const monaco = useMonaco();

   useEffect( () => {
    //result Box setting
    axios.get("/api/editor/init")
    .then(res => {
      setValue(res.data);
      setInitScript(res.data);
    })
    .catch(err => {
      console.log(err);
    })

    //Editor example.js setting

      axios.get("/api/editor/example")
      .then(  res => {
         setExampleScript(res.data);
      })
      .catch(err => {
        console.log(err);
      })

  }, []);

    
  

  
   function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
    //let customMonokai = JSON.parse(JSON.stringify(MonokaiTheme))
    console.log(MonokaiTheme)
  
    
    monaco.editor.defineTheme("monokai", MonokaiTheme)
    monaco.editor.setTheme('monokai')
  }

  function getValue(){
    const content = editorRef.current.getValue();
    setValue(content)
  }

  function textInit() {
    editorRef.current.defaultValue = ExampleScript;
    setValue(InitScript);
    
    
  }

  return (
    <Box id='SubPage'>
      <Stack className="btn-stack" direction="row" spacing={10}>
        <Button className='ex-button' variant="contained" onClick={getValue}>실행</Button>
        <Button className='ex-button' variant="contained" onClick={textInit}>초기화</Button>
      </Stack>

      <Stack className="editor-stack" direction="row" spacing={20}>
        <div id='editor-box'>
        <Editor height='860px' width='480px'
          defaultLanguage="javascript"
          defaultValue={ExampleScript}
          onChange={setValue}
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
      </div>
      <Box className="value-box">{Value}</Box>
      </Stack>
    </Box>
  )
}

export default SubPage