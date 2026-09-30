import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import LinearAlgebra from './pages/LinearAlgebra/LinearAlgebra';
import Vectors from './pages/LinearAlgebra/Lessons/1Vectors';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/LinearAlgebra" element={<LinearAlgebra />} />
        <Route path="/LinearAlgebra/Vectors" element={<Vectors />} />
        
      </Routes>
    </BrowserRouter>
  );
}
