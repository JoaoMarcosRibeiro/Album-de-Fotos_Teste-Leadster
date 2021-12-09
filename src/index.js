import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { AlbumContextProvider } from './Context';

ReactDOM.render(
  <React.StrictMode>
    <AlbumContextProvider>
      <App />
    </AlbumContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
