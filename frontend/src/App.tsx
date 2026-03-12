import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DashboardLayout } from './layouts/DashboardLayout';
import { DashboardContent } from './components/DashboardContent';
import { LoginPage } from './pages/LoginPage';
import { StudentOverview } from './components/StudentPortalComponents';
import { StudentRequestForm } from './components/StudentRequestForm';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/admin" element={<DashboardLayout role="admin" />}>
          <Route index element={<DashboardContent title="Admin Dashboard" />} />
          <Route path="departments" element={<div>Departments Management</div>} />
          <Route path="batches" element={<div>Batches Management</div>} />
          <Route path="users" element={<div>User Management</div>} />
          <Route path="templates" element={<div>Template Management</div>} />
        </Route>

        <Route path="/student" element={<DashboardLayout role="student" />}>
          <Route index element={<StudentOverview />} />
          <Route path="new" element={<StudentRequestForm />} />
        </Route>

        <Route path="/tutor" element={<DashboardLayout role="tutor" />}>
          <Route index element={<DashboardContent title="Tutor Dashboard" />} />
          <Route path="requests" element={<div>Certificate Requests</div>} />
          <Route path="batches" element={<div>My Assigned Batches</div>} />
        </Route>

        <Route path="/hod" element={<DashboardLayout role="hod" />}>
          <Route index element={<DashboardContent title="HOD Dashboard" />} />
          <Route path="requests" element={<div>Batch Approvals</div>} />
        </Route>

        <Route path="/principal" element={<DashboardLayout role="principal" />}>
          <Route index element={<DashboardContent title="Principal Dashboard" />} />
          <Route path="requests" element={<div>Final Approvals</div>} />
        </Route>

        <Route path="/office" element={<DashboardLayout role="office" />}>
          <Route index element={<DashboardContent title="Office Dashboard" />} />
          <Route path="issue" element={<div>Issue Certificates</div>} />
          <Route path="history" element={<div>Issued Certificates History</div>} />
        </Route>

        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
