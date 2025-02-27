import { Routes, Route } from "react-router";
import AcceleratorApplication from "./AcceleratorApplication";
import App from "./App";
import AdminDashboard from "./components/AdminDashboard";
function AppRoute() {
  return (
    <>
      <Routes>
        <Route path="/sales" element={<App />} />
        <Route
          path="/sales/accelerator-application"
          element={<AcceleratorApplication />}
        />
        <Route path="/sales/admin-dashboard" element={<AdminDashboard />} />
        {/* <App /> */}
        {/* <AcceleratorApplication />   */}
      </Routes>
    </>
  );
}

export default AppRoute;
