import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import WomenTop from "../womenTop/containers/womenTop";
import LoginPage from "../login/containers/login";

function AdminRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<WomenTop />} />
      </Routes>
    </Router>
  );
}

export default AdminRoutes;
