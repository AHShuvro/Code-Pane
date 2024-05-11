import { useState } from 'react';
import './App.css';
import Editor from './Components/Editor';

function App() {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');

  return (
    <>
      <div className="container">
        <div className="flex">
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
        <div className="pane"></div>
      </div>
    </>
  );
}

export default App;
