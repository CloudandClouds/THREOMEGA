// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
// import Home from "./Pages/Home";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/home" element={<Home />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./Pages/Home";
import QRLanding from './Pages/QRLanding';
import ExerciseFlow from './Pages/ExerciseFlow';
import AdminLogin from './Pages/AdminLogin';
import ProtectedRoute from './components/ProtectedRoute';
import AdminDashboard from './Pages/AdminDashboard';


function App() {
  return (
    <Router>
      <Routes>
         <Route path="/1" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<QRLanding />} />
        <Route path="/exercise/:sessionId" element={<ExerciseFlow />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route 
          path="/admin/dashboard" 
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;