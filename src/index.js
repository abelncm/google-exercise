import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import All from './pages/all/All';
import Images from './pages/images/Images';
import Layout from './pages/layout/Layout';
import Videos from './pages/videos/Videos';
import reportWebVitals from './reportWebVitals';
import CounterPage from './pages/counter/CounterPage';
import NewPage from './pages/NewPage';
import ContactPage from './pages/ContactPage';
import TablePage from './pages/TablePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<All />} />
          <Route path="images" element={<Images />} />
          <Route path="videos" element={<Videos />} />
          <Route path="counter" element={<CounterPage />} />
          <Route path="new-page" element={<NewPage />} />
          <Route path="contact-page" element={<ContactPage />} />
          <Route path="table" element={<TablePage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
