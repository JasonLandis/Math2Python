import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import { lessons } from './lessons/lessons';
import Subject from './pages/Subject/Subject';
import Lesson from './pages/Lesson/Lesson';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {Object.entries(lessons).map(([subject]) => (
          <>
            <Route path={subject} element={<Subject subject={subject} />} />
            {Object.entries(lessons[subject].lessons).map(([lesson]) => (
              <Route path={`${subject}/${lesson}`} element={<Lesson subject={subject} lesson={lesson} />} />
            ))}
          </>
        ))}
      </Routes>
    </BrowserRouter>
  );
}
