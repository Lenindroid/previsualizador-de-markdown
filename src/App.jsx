import { useState } from 'react'
import Editor from './components/Editor'
import Visualizador from './components/Visualizador'

function App() {
  const [markdown, setMarkdown] = useState(`
# Heading Level 1

## Heading Level 2

Here is a [link to OpenAI](https://www.openai.com).

Inline code looks like this: \`const x = 10;\`

\`\`\`javascript
// Code block example
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

- This is a list item

> This is a blockquote

![OpenAI Logo](https://openai.com/content/images/2022/05/openai-avatar.png)

**This text is bold**
`);
  return (
    <div className="useless-div">
      <Editor markdownActualizar={setMarkdown} md={markdown}/>
      <Visualizador markdown={markdown}/>
    </div>
  )
}

export default App