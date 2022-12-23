import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/css/index.css'

// Routes
/* Landing Pages */
import Landing from './views/Landing'
import Courses from './views/Courses'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Landing Pages */}
        <Route path="/" element={<Landing />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
