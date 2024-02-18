import React from 'react';
import ReactDOM from 'react-dom/client';
import  {App}  from './components/app/App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
// import { PersistGate } from 'redux-persist/integration/react';
// import { Provider } from 'react-redux';
// import { store, persistor } from './redux/store';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <BrowserRouter  basename="/test-car">
          <App />
        </BrowserRouter>
  </React.StrictMode>
);