/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';

const TextStyle = styled.div`
  color: red;
`;
const TextTag = () => <TextStyle>a</TextStyle>;
function App() {
  return <TextTag />;
}

ReactDOM.render(<App />, document.getElementById('App'));
