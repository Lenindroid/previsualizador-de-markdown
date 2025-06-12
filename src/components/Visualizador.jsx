import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons'
import { faMarkdown } from '@fortawesome/free-brands-svg-icons'
import ReactMarkdown from 'react-markdown'

function Visualizador(props) {
  return (
    <section className="main-part">
      <header>
        <div className="lenguaje">
          <FontAwesomeIcon icon={faMarkdown} />
          <h2>Previsualización</h2>
        </div>
        <button>
            <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} className="button-icons"/>
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
