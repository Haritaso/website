import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../style/style.scss';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p className="aa">{count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>a</button>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('App'));
