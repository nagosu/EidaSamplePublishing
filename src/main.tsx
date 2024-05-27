import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './fonts.css';
import './styles/alert.css';
import './styles/app.css';
import './styles/bootstrap.css';
import './styles/content.css';
import './styles/editor.css';
import './styles/toast.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
