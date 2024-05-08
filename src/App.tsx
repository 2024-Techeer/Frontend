import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import RecruitmentPage from './pages/RecruitmentPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="Main" element={<MainPage />} />
          <Route path="Recruitment" element={<RecruitmentPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
