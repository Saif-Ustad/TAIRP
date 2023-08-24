import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/redux_store';
import {BrowserRouter, Routes, Route} from "react-router-dom";
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <BrowserRouter>
        <Routes>
            <Route path = "*" element={ <App />} />
        </Routes>
    </BrowserRouter>
    </Provider>
);

