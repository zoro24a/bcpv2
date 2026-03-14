import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { HomePage } from './pages/HomePage';
import { AdminLayout } from './components/AdminLayout';
import { AdminDashboard } from './components/AdminDashboard';
import { AdminDepartmentManagement } from './components/AdminDepartmentManagement';
import { AdminManageHOD } from './components/AdminManageHOD';
import { AdminManageTutors } from './components/AdminManageTutors';
import { AdminTutorAssignment } from './components/AdminTutorAssignment';
import { AdminStudentManagement } from './components/AdminStudentManagement';
import { AdminTemplateManagement } from './components/AdminTemplateManagement';
import { AdminProfile } from './components/AdminProfile';
import { StudentLayout } from './components/StudentLayout';
import { StudentDashboard } from './components/StudentDashboard';
import { StudentNewRequest } from './components/StudentNewRequest';
import { StudentRequests } from './components/StudentRequests';
import { StudentProfile } from './components/StudentProfile';
import { TutorLayout } from './components/TutorLayout';
import { TutorDashboard } from './components/TutorDashboard';
import { TutorPendingRequests } from './components/TutorPendingRequests';
import { TutorRequestHistory } from './components/TutorRequestHistory';
import { TutorStudents } from './components/TutorStudents';
import { TutorProfile } from './components/TutorProfile';
import { HODLayout } from './components/HODLayout';
import { HODDashboard } from './components/HODDashboard';
import { HODPendingRequests } from './components/HODPendingRequests';
import { HODRequestHistory } from './components/HODRequestHistory';
import { HODProfile } from './components/HODProfile';
import { PrincipalLayout } from './components/PrincipalLayout';
import { PrincipalDashboard } from './components/PrincipalDashboard';
import { PrincipalPendingRequests } from './components/PrincipalPendingRequests';
import { PrincipalRequestHistory } from './components/PrincipalRequestHistory';
import { PrincipalDepartments } from './components/PrincipalDepartments';
import { PrincipalProfile } from './components/PrincipalProfile';
import { OfficeLayout } from './components/OfficeLayout';
import { OfficeDashboard } from './components/OfficeDashboard';
import { OfficeAllRequests } from './components/OfficeAllRequests';
import { OfficeCertificatesReady } from './components/OfficeCertificatesReady';
import { OfficeIssuedCertificates } from './components/OfficeIssuedCertificates';
import { OfficeProfile } from './components/OfficeProfile';
import { Toaster } from "@/components/ui/toaster"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/admin" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
        <Route path="/admin/dashboard" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
        <Route path="/admin/departments" element={<AdminLayout><AdminDepartmentManagement /></AdminLayout>} />
        <Route path="/admin/hods" element={<AdminLayout><AdminManageHOD /></AdminLayout>} />
        <Route path="/admin/tutors" element={<AdminLayout><AdminManageTutors /></AdminLayout>} />
        <Route path="/admin/assignments" element={<AdminLayout><AdminTutorAssignment /></AdminLayout>} />
        <Route path="/admin/students" element={<AdminLayout><AdminStudentManagement /></AdminLayout>} />
        <Route path="/admin/templates" element={<AdminLayout><AdminTemplateManagement /></AdminLayout>} />
        <Route path="/admin/profile" element={<AdminLayout><AdminProfile /></AdminLayout>} />

        <Route path="/student" element={<StudentLayout><StudentDashboard /></StudentLayout>} />
        <Route path="/student/dashboard" element={<StudentLayout><StudentDashboard /></StudentLayout>} />
        <Route path="/student/new-request" element={<StudentLayout><StudentNewRequest /></StudentLayout>} />
        <Route path="/student/requests" element={<StudentLayout><StudentRequests /></StudentLayout>} />
        <Route path="/student/profile" element={<StudentLayout><StudentProfile /></StudentLayout>} />

        <Route path="/tutor" element={<TutorLayout><TutorDashboard /></TutorLayout>} />
        <Route path="/tutor/dashboard" element={<TutorLayout><TutorDashboard /></TutorLayout>} />
        <Route path="/tutor/pending" element={<TutorLayout><TutorPendingRequests /></TutorLayout>} />
        <Route path="/tutor/history" element={<TutorLayout><TutorRequestHistory /></TutorLayout>} />
        <Route path="/tutor/students" element={<TutorLayout><TutorStudents /></TutorLayout>} />
        <Route path="/tutor/profile" element={<TutorLayout><TutorProfile /></TutorLayout>} />

        <Route path="/hod" element={<HODLayout><HODDashboard /></HODLayout>} />
        <Route path="/hod/dashboard" element={<HODLayout><HODDashboard /></HODLayout>} />
        <Route path="/hod/pending" element={<HODLayout><HODPendingRequests /></HODLayout>} />
        <Route path="/hod/history" element={<HODLayout><HODRequestHistory /></HODLayout>} />
        <Route path="/hod/profile" element={<HODLayout><HODProfile /></HODLayout>} />

        <Route path="/principal" element={<PrincipalLayout><PrincipalDashboard /></PrincipalLayout>} />
        <Route path="/principal/dashboard" element={<PrincipalLayout><PrincipalDashboard /></PrincipalLayout>} />
        <Route path="/principal/pending" element={<PrincipalLayout><PrincipalPendingRequests /></PrincipalLayout>} />
        <Route path="/principal/history" element={<PrincipalLayout><PrincipalRequestHistory /></PrincipalLayout>} />
        <Route path="/principal/departments" element={<PrincipalLayout><PrincipalDepartments /></PrincipalLayout>} />
        <Route path="/principal/profile" element={<PrincipalLayout><PrincipalProfile /></PrincipalLayout>} />

        <Route path="/office" element={<OfficeLayout><OfficeDashboard /></OfficeLayout>} />
        <Route path="/office/dashboard" element={<OfficeLayout><OfficeDashboard /></OfficeLayout>} />
        <Route path="/office/requests" element={<OfficeLayout><OfficeAllRequests /></OfficeLayout>} />
        <Route path="/office/ready" element={<OfficeLayout><OfficeCertificatesReady /></OfficeLayout>} />
        <Route path="/office/issued" element={<OfficeLayout><OfficeIssuedCertificates /></OfficeLayout>} />
        <Route path="/office/profile" element={<OfficeLayout><OfficeProfile /></OfficeLayout>} />

        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
