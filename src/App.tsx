import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const App = (): JSX.Element => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <header>
        <h1>Hola mundo!</h1>
        <p>Este es un editor de Markdown con vista previa</p>
      </header>
      <Button onClick={() => setCount(count + 1)}>
        {count > 0 ? `${count} clicks!` : 'Dame click'}
      </Button>
    </div>
  );
}

export default App;
