import React from 'react';
import Stuff from './pages/Stuff/Stuff';
import Button from './components/Button/Button';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      Landingpage
      <Button>Click me fool!</Button>
      <Link to="about">About Link </Link>
      <Routes>
        <Route path="/" element={<p>Landingpage</p>} />
        <Route path="about" element={<Link to="/other">Go to other</Link>} />
        <Route path="other" element={<h3>Still Hello World!</h3>} />
        <Route path="/stuff">
          <Route path=":thing" element={<Stuff />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
