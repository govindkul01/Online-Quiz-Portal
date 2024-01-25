import Home from "./components/HomeComponent/Home";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import StudentLogin from "./components/StudentComponent/StudentLogin/StudentLogin";
import AdminLogin from "./components/AdminComponent/AdminLogin/Adminlogin";
import Dashboard from "./components/AdminComponent/Dashboard/Dashboard";
import StudentSignup from "./components/StudentComponent/StudentSignup/StudentSignup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/StudentLogin" element={<StudentLogin />} />
          <Route path="/Adminlogin" element={<AdminLogin />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/StudentSignup" element={<StudentSignup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
