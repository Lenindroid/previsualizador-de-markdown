import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons'
import { faMarkdown } from '@fortawesome/free-brands-svg-icons'

function Visualizador() {
  return (
    <div>
      <header>
        <FontAwesomeIcon icon={faMarkdown} />
        <h2>Previsualización</h2>
        <button>
            <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
        </button>
      </header>
      <section id="preview"></section>
    </div>
  )
}

export default Visualizador
