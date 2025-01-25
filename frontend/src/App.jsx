import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddBeneficiary from './pages/AddBeneficiary';
import EditBeneficiary from './pages/EditBeneficiary';
import ViewBeneficiary from './pages/ViewBeneficiary';
import Layout from './components/Layout';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add" element={<AddBeneficiary />} />
          <Route path="/edit/:id" element={<EditBeneficiary />} />
          <Route path="/view/:id" element={<ViewBeneficiary />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
