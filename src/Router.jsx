import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import { lessons } from './lessons/lessons';
import Subject from './pages/Subject/Subject';
import Lesson from './pages/Lesson/Lesson';
import About from './pages/About/About';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      {Object.entries(lessons).map(([subject]) => (
        <>
          <Route path={subject} element={<Subject subject={subject} />} />
          {Object.entries(lessons[subject].lessons).map(([lesson]) => (
            <Route path={`${subject}/${lesson}`} element={<Lesson subject={subject} lesson={lesson} />} />
          ))}
        </>
      ))}
    </Routes>
  );
}
