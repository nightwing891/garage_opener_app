import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from "./providers/AuthProvider";
import 'semantic-ui-css/semantic.min.css';
import { initMiddleware, } from 'devise-axios';
import './index.css';
import ScrollToTop from './ScrollToTop';

initMiddleware();

ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <ScrollToTop>
        <App /> 
      </ScrollToTop>
    </BrowserRouter>
  </AuthProvider>,
  document.getElementById('root')
);