import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons'
import { faMarkdown } from '@fortawesome/free-brands-svg-icons'

function Visualizador() {
  return (
    <section className="main-part">
      <header>
        <div>
          <FontAwesomeIcon icon={faMarkdown} />
          <h2>Previsualización</h2>
        </div>
        <button>
            <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
        </button>
      </header>
      <section id="preview"></section>
    </section>
  )
}

export default Visualizador
