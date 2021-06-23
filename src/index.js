import React from 'react';
import ReactDOM from 'react-dom';
import MainHome from './MainHome';
import './css/indexcss.css';



ReactDOM.render(
    <React.StrictMode>
        <React.Fragment>
            <MainHome></MainHome>
        </React.Fragment>
    </React.StrictMode>,
    document.getElementById('root')
);