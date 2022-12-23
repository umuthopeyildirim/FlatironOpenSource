import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/css/index.css'

// Routes
/* Landing Pages */
import Landing from './views/Landing'
import Courses from './views/Courses'

/* Error Pages */
import NotFound from './views/errors/NotFound'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Landing Pages */}
        <Route path="/" element={<Landing />} />
        <Route path="/courses" element={<Courses />} />

        {/* Error Pages */}
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
