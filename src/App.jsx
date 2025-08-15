import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import ComparisonTable from './components/ComparisonTable';
import Charts from './components/Charts';
import DataSourceCards from './components/DataSourceCards';
import DataSourceModal from './components/DataSourceModal';
import { datasources } from './data/datasources';
import './styles.css';

function App() {
  const [selectedDataSource, setSelectedDataSource] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (dataSource) => {
    setSelectedDataSource(dataSource);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDataSource(null);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route 
              path="/data-sources" 
              element={
                <DataSourceCards 
                  dataSources={datasources} 
                  onCardClick={handleCardClick} 
                />
              } 
            />
            <Route 
              path="/comparison" 
              element={<ComparisonTable dataSources={datasources} />} 
            />
            <Route 
              path="/charts" 
              element={<Charts dataSources={datasources} />} 
            />
          </Routes>
        </main>
        
        <DataSourceModal 
          dataSource={selectedDataSource}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
    </Router>
  );
}

export default App;
