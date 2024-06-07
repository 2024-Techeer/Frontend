import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MyUserEditPage from './pages/MyUserEditPage';
import MyPastePage from './pages/MyPastePage';
import MyRecruitmentPage from './pages/MyRecruitmentPage';
import RecruitmentPage from './pages/RecruitmentPage';
import RecruitmentPage_Owner from './pages/RecruitmentPage_Owner';
import WritePage from './pages/WritePage';
import ApplicationPage from './pages/ApplicationPage';
import SubmissionPage from './pages/SubmissionPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="Main" element={<MainPage />} />
          <Route path="Login" element={<LoginPage />} />
          <Route path="Register" element={<RegisterPage />} />
          <Route path="MyUserEdit" element={<MyUserEditPage />} />
          <Route path="MyPaste" element={<MyPastePage />} />
          <Route path="MyRecruitment" element={<MyRecruitmentPage />} />
          <Route path="Recruitment/:recruitmentId" element={<RecruitmentPage />} />
          <Route path="Recruitment_Owner/:recruitmentId" element={<RecruitmentPage_Owner />} />
          <Route path="Write" element={<WritePage />} />
          <Route path="Application/:recruitmentId" element={<ApplicationPage />} />
          <Route path="Submission/:recruitmentId" element={<SubmissionPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
