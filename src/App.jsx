import { useEffect, useState } from 'react';
import './App.css';
import Editor from './Components/Editor';

function App() {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  const [srcDoc , setSrcDoc] = useState();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDoc( `
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>
      `)
    },250)
    return () => clearTimeout(timeOut)
  }, [html, css, js])



  return (
    <>
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 overflow-x-scroll h-[90vh] lg:h-[50vh] ">
          <Editor
            language="html"
            displayName="HTML"
            value={html}
            onChange={setHtml}
          />
          <Editor
            language="css"
            displayName="CSS"
            value={css}
            onChange={setCss}
          />
          <Editor
            language="javascript"
            displayName="JS"
            value={js}
            onChange={setJs}
          />
        </div>
        <div className="pane h-[50vh] border-2">
          <iframe
            title='output'
            sandbox='allow-scripts'
            src=""
            frameborder="0"
            width="100%"
            height="100%"
            srcDoc={srcDoc}

          />
        </div>
      </div>
    </>
  );
}

export default App;
