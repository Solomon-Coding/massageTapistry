import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./App.css";
import SideBar from "../src/components/Sidebar/index";
import {Div} from "./components/Sidebar/SidebarElements"

function Test() {
  return (
    <Div id="App">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />

      <div id="page-wrap">
        <h1>Click to show menu</h1>
      </div>
    </Div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Test />, rootElement);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
