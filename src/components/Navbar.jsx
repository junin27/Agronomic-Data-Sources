import { Link, useLocation } from 'react-router-dom';
import { Home, Database, BarChart3, Table } from 'lucide-react';
import LastUpdated from './LastUpdated';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', name: 'Dashboard', icon: Home },
    { path: '/data-sources', name: 'Fontes de Dados', icon: Database },
    { path: '/comparison', name: 'Comparação', icon: Table },
    { path: '/charts', name: 'Gráficos', icon: BarChart3 }
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex flex-col space-y-1">
            <div className="flex items-center space-x-2">
              <Database className="h-8 w-8 text-green-600" />
              <h1 className="text-xl font-bold text-gray-800">
                Mapeamento de Dados Agronômicos
              </h1>
            </div>
            <LastUpdated />
          </div>
          
          <div className="flex space-x-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors duration-200 ${
                    isActive
                      ? 'bg-green-100 text-green-700'
                      : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
