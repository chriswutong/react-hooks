import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './01-App-useState1.jsx';
// import App from './02-App-useState2';
// import App from './03-App-useState3';
// import App from './04-App-useState4';
// import App from './05-App-useEffect';
import App from './06-App-useRef';



import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
