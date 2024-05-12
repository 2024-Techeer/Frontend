import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import RecruitmentPage from './pages/RecruitmentPage';
import WritePage from './pages/WritePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="Main" element={<MainPage />} />
          <Route path="Recruitment" element={<RecruitmentPage />} />
          <Route path="Write" element={<WritePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
