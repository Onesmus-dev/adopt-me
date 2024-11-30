import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import SearchParams from './searchParams';

const App = () => {
  return(
  <div>
  <h1>
    Adopt me!
  </h1>
  <SearchParams />
 </div>);
};
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container); // Use createRoot instead of createElement
root.render(<App />); // Render the App component
