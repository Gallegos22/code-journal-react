import './App.css';
import { Header } from './components/Header';
import { UnControlledForm } from './UnControlledForm';
import { ViewEntries } from './pages/ViewEntries';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />} >
        <Route index element={<ViewEntries />} />
        <Route path="form/" element={<UnControlledForm />} />
      </Route>
    </Routes>
  );
}

export default App;
