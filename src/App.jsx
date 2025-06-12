import { useState } from 'react'
import Editor from './components/Editor'
import Visualizador from './components/Visualizador'

function App() {
  const [markdown, setMarkdown] = useState('');

  return (
    <div className="useless-div">
      <Editor markdownActualizar={setMarkdown}/>
      <Visualizador markdown={markdown}/>
    </div>
  )
}

export default App