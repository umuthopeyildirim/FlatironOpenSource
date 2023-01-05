import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/css/index.css';

// Routes
/* Landing Pages */
import Landing from './views/Landing';
import Courses from './views/Courses';
import Course from './views/Course';
import Page from './views/Page';

/* Error Pages */
import NotFound from './views/errors/NotFound';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Landing Pages */}
        <Route path="/" element={<Landing />} />
        <Route path="/courses/:course" element={<Courses />} />
        <Route path="/course/:course/:phase" element={<Course />} />
        <Route path="/page/:page" element={<Page />} />

        {/* Error Pages */}
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
