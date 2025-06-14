import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightAndDownLeftFromCenter, faMaximize } from '@fortawesome/free-solid-svg-icons'
import { faMarkdown } from '@fortawesome/free-brands-svg-icons'
import ReactMarkdown from 'react-markdown'

function Visualizador(props) {

  const [minimizado, setMinimizado] = useState(true);

  function redimensionarVisualizador() {
    if (minimizado) {
      props.hide(true);
      setMinimizado(prev => !prev);
    } else {
      props.hide(false);
      setMinimizado(prev => !prev);
    }
  }

  return (
    <section className={`main-part ${props.className}`}>
      <header>
        <div className="lenguaje">
          <FontAwesomeIcon icon={faMarkdown} />
          <h2>Previsualización</h2>
        </div>
        <button onClick={redimensionarVisualizador}>
            <FontAwesomeIcon icon={minimizado ? faMaximize : faUpRightAndDownLeftFromCenter} className="button-icons"/>
        </button>
      </header>
      <section id="preview" className="previewer">
        <ReactMarkdown>
          {props.markdown}
        </ReactMarkdown>
      </section>
    </section>
  )
}

export default Visualizador
