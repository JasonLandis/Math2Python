import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';

import LinearAlgebra from './pages/Subjects/LinearAlgebra/LinearAlgebra';
import Vectors from './pages/Subjects/LinearAlgebra/Lessons/1Vectors';
import LinearCombinations from './pages/Subjects/LinearAlgebra/Lessons/2LinearCombinations';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/LinearAlgebra" element={<LinearAlgebra />} />
        <Route path="/LinearAlgebra/Vectors" element={<Vectors />} />
        <Route path="/LinearAlgebra/LinearCombinations" element={<LinearCombinations />} />
        
      </Routes>
    </BrowserRouter>
  );
}
