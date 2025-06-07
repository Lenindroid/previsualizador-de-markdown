import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons'
import { faMarkdown } from '@fortawesome/free-brands-svg-icons'

function Editor() {
  return (
    <div>
        <header>
            <FontAwesomeIcon icon={faMarkdown} />
            <h2>Editor</h2>
            <button>
                <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
            </button>
        </header>
        <input type='text'/>
    </div>
  )
}

export default Editor
