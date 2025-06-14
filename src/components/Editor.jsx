import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightAndDownLeftFromCenter, faMaximize } from '@fortawesome/free-solid-svg-icons'
import { faMarkdown } from '@fortawesome/free-brands-svg-icons'

function Editor({ markdownActualizar, md, hide, className }) {

  const [minimizado, setMinimizado] = useState(true);

  function actualizarMarkdown (e) {
    markdownActualizar(e.target.value);
  }

  function redimensionarEditor() {
    if (minimizado) {
      hide(true);
      setMinimizado(prev => !prev);
    } else {
      hide(false);
      setMinimizado(prev => !prev);
    }
  }

  return (
    <section className={`main-part editor ${className}`}>
        <header>
            <div className="lenguaje">
              <FontAwesomeIcon icon={faMarkdown} />
              <h2>Editor</h2>
            </div>
            <button onClick={redimensionarEditor}>
                <FontAwesomeIcon icon={minimizado ? faMaximize : faUpRightAndDownLeftFromCenter} className="button-icons"/>
            </button>
        </header>
        <textarea id="editor" onChange={actualizarMarkdown} value={md}></textarea>
    </section>
  )
}

export default Editor
