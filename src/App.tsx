import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MyUserEditPage from './pages/MyUserEditPage';
import RecruitmentPage from './pages/RecruitmentPage';
import RecruitmentPage_Owner from './pages/RecruitmentPage_Owner';
import WritePage from './pages/WritePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="Main" element={<MainPage />} />
          <Route path="Login" element={<LoginPage />} />
          <Route path="MyUserEdit" element={<MyUserEditPage />} />
          <Route path="Register" element={<RegisterPage />} />
          <Route path="Recruitment" element={<RecruitmentPage />} />
          <Route path="Recruitment_Owner" element={<RecruitmentPage_Owner />} />
          <Route path="Write" element={<WritePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
