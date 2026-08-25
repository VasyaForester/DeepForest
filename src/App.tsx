import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { StoreProvider } from "./state";
import { WelcomePage } from "./pages/WelcomePage";
import { ProgramsPage } from "./pages/ProgramsPage";
import { ProgramMathPage } from "./pages/ProgramMathPage";
import { CoursePage } from "./pages/CoursePage";
import { LessonPage } from "./pages/LessonPage";
import { DiplomaPage } from "./pages/DiplomaPage";
import { ProfilePage } from "./pages/ProfilePage";
import { RequireName } from "./pages/RequireName";

export default function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route element={<RequireName />}>
            <Route element={<Layout />}>
              <Route path="/programs" element={<ProgramsPage />} />
              <Route path="/program/mathematics" element={<ProgramMathPage />} />
              <Route path="/course/:courseId" element={<CoursePage />} />
              <Route path="/lesson/:lessonId" element={<LessonPage />} />
              <Route path="/diploma" element={<DiplomaPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="*" element={<Navigate to="/programs" replace />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
}
