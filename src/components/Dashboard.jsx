import { Database, TrendingUp, Users, Globe } from 'lucide-react';
import { datasources } from '../data/datasources';

const Dashboard = () => {
  const stats = [
    {
      title: 'Total de Fontes',
      value: datasources.length,
      icon: Database,
      color: 'bg-blue-500'
    },
    {
      title: 'Fontes Governamentais',
      value: datasources.filter(ds => ds.type === 'Governamental').length,
      icon: Users,
      color: 'bg-green-500'
    },
    {
      title: 'Cobertura Nacional',
      value: datasources.filter(ds => ds.coverage === 'Nacional').length,
      icon: Globe,
      color: 'bg-purple-500'
    },
    {
      title: 'Dados Gratuitos',
      value: datasources.filter(ds => ds.cost === 'Gratuito').length,
      icon: TrendingUp,
      color: 'bg-yellow-500'
    }
  ];

  const recentSources = datasources.slice(0, 5);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Página Inicial - Fontes de Dados Agronômicos
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore e compare as principais fontes de dados agronômicos do Brasil e do mundo.
          Encontre as informações que você precisa para sua pesquisa ou projeto.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={`stat-${stat.title}`} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center">
                <div className={`${stat.color} rounded-lg p-3 mr-4`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Access */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Overview */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Visão Geral</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-gray-600">Fontes Institucionais</span>
              <span className="font-semibold">
                {datasources.filter(ds => ds.type === 'Institucional').length}
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-gray-600">Fontes Acadêmicas</span>
              <span className="font-semibold">
                {datasources.filter(ds => ds.type === 'Acadêmico').length}
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-gray-600">Fontes Internacionais</span>
              <span className="font-semibold">
                {datasources.filter(ds => ds.type === 'Internacional').length}
              </span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-600">Atualizações Diárias</span>
              <span className="font-semibold">
                {datasources.filter(ds => ds.updateFrequency && ds.updateFrequency.includes('Diário')).length}
              </span>
            </div>
          </div>
        </div>

        {/* Recent Sources */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Fontes em Destaque</h2>
          <div className="space-y-4">
            {recentSources.map((source) => (
              <div key={source.id} className="flex items-center space-x-4 p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Database className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{source.name}</h3>
                  <p className="text-sm text-gray-600">{source.description}</p>
                  <div className="flex space-x-2 mt-1">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {source.type}
                    </span>
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                      {source.coverage}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories Overview */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Categorias de Dados</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {['Clima', 'Solo', 'Produção', 'Preços', 'Meteorologia', 'Recursos Hídricos', 'Fundiário', 'Uso do Solo', 'Monitoramento', 'Geologia'].map((category) => (
            <div key={category} className="text-center p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <Database className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-700">{category}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
