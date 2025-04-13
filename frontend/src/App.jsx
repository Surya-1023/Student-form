import { Routes, Route } from 'react-router-dom';
import FormPage from './pages/FormPage';
import Login from './pages/login';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/form" element={<FormPage />} />
    </Routes>
  );
}
