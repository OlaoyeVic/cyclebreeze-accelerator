import { Routes, Route } from "react-router";
import AcceleratorApplication from "./AcceleratorApplication";
import App from "./App";
function AppRoute() {
  return (
    <>
      <Routes>
        <Route path="/sales" element={<App />} />
        <Route
          path="/sales/accelerator-application"
          element={<AcceleratorApplication />}
        />
        {/* <App /> */}
        {/* <AcceleratorApplication />   */}
      </Routes>
    </>
  );
}

export default AppRoute;
