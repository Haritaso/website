import React from 'react';
import ReactDOM from 'react-dom';

import LinkBox from './components/link_box';
import Particles from './components/Particles';

import '../assets/scss/style.scss';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <LinkBox />
      <Particles />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('App'));
