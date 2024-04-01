import './App.css';
import { Header } from './Header';
import { UnControlledForm } from './UnControlledForm';
import { ViewEntries } from './ViewEntries';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="view-entries" element={<ViewEntries />} />
      <UnControlledForm />
    </Routes>
  );
}

export default App;
