import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import DashboardLayout from "./layouts/DashboardLayout";
import NotFoundPage from "./pages/NotFound";

function App() {
  return (
    <Routes>
        <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<DashboardLayout />}>
        <Route path="/" element={<Homepage />} />
      </Route>
    </Routes>
  );
}

export default App;
