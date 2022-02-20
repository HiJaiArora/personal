import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LoginPage from "../login/containers/login";
import Dashboard from "../dashboard/containers/dashboard";

function AdminRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default AdminRoutes;
