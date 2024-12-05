import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/app/Homepage";
import DashboardLayout from "./layouts/DashboardLayout";
import NotFoundPage from "./pages/NotFound";
import SignInPage from "./pages/auth/SignIn";
import AuthLayout from "./layouts/AuthLayout";
import Workflow from "./pages/app/Workflows/Workflow";
import WorkFlowLayout from "./layouts/WorkFlowLayout";
import EditorIndex from "./pages/app/Editor";

function App() {
  return (
    <div className="font-primary">
      <Routes>
        <Route path="*" element={<NotFoundPage />} />

        <Route element={<AuthLayout />}>
          <Route path="/auth/signin" element={<SignInPage />} />
        </Route>

        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/workflows" element={<Workflow />} />
        </Route>

        <Route element={<WorkFlowLayout />}>
          <Route
            path="/workflow/editor/:workflowId"
            element={<EditorIndex />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
