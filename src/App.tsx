import React from 'react';
import ReactMarkdown from 'react-markdown'

const example = `
# Título

Texto

## Subtitulo
`

const App = (): JSX.Element => {
  return (
    <div>
      <header>
        <h1>Hola mundo!</h1>
        <p>Este es un editor de Markdown con vista previa</p>
      </header>
      <ReactMarkdown>
        {example}
      </ReactMarkdown>
    </div>
  );
}

export default App;
