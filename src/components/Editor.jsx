import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons'
import { faMarkdown } from '@fortawesome/free-brands-svg-icons'

function Editor({ markdownActualizar, md }) {

  function actualizarMarkdown (e) {
    markdownActualizar(e.target.value);
  }

  return (
    <section className="main-part editor">
        <header>
            <div className="lenguaje">
              <FontAwesomeIcon icon={faMarkdown} />
              <h2>Editor</h2>
            </div>
            <button>
                <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} className="button-icons"/>
            </button>
        </header>
        <textarea id="editor" onChange={actualizarMarkdown} value={md}></textarea>
    </section>
  )
}

export default Editor
