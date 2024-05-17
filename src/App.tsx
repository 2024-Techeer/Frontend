import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import RecruitmentPage from './pages/RecruitmentPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="Login" element={<LoginPage />} />
          <Route path="Main" element={<MainPage />} />
          <Route path="Recruitment" element={<RecruitmentPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
