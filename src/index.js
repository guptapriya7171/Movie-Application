import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { StrictMode } from "react";
import { createStore} from 'redux';
import { createRoot } from "react-dom/client";
import movies from './reducers';

const store = createStore(movies);
console.log('store', store);
 console.log('BEFORE STATE', store.getState());
// console.log('AFTER STATE', store.getState());



store.dispatch({
   type: 'ADD_MOVIES',
   movies: [{ name: 'Superman'}]
});

console.log('AFTER STATE', store.getState());

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App store={store} />
  </StrictMode>
);