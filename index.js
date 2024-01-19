import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './Home';
import Contactus from './Contactus';
import ListEmp from './ListEmp';
import Example from './Example';
import Nopage from './Nopage';

import EmpCreate from './EmpCreate';
import EmpDisp from './EmpDisp';
import EmpUp from './EmpUp';
import EmpDel from './EmpDel';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="Contactus" element={<Contactus />} />
        <Route path="ListEmp" element={<ListEmp />} />
        <Route path="Example" element={<Example/>} />
        <Route path="*" element={<Nopage />} />

        <Route path='create' element={<EmpCreate />}></Route>
        <Route path='emp/:id' element={<EmpDisp />}></Route>
        <Route path='empup/:id' element={<EmpUp />}></Route>
        <Route path='empdel/:id' element={<EmpDel />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
