import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import RecruitmentPage from './pages/RecruitmentPage';
import RecruitmentPage_Oner from './pages/RecruitmentPage_Oner';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="Main" element={<MainPage />} />
          <Route path="Recruitment" element={<RecruitmentPage />} />
          <Route path="Recruitment_Oner" element={<RecruitmentPage_Oner />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
