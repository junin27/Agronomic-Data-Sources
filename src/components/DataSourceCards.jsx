import { useState } from 'react';
import { Search, Filter, ExternalLink, Calendar, Globe, DollarSign } from 'lucide-react';

const DataSourceCards = ({ dataSources, onCardClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedCoverage, setSelectedCoverage] = useState('');

  const filteredSources = dataSources.filter(source => {
    const matchesSearch = source.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         source.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === '' || source.type === selectedType;
    const matchesCoverage = selectedCoverage === '' || source.coverage === selectedCoverage;
    
    return matchesSearch && matchesType && matchesCoverage;
  });

  const types = [...new Set(dataSources.map(ds => ds.type))];
  const coverages = [...new Set(dataSources.map(ds => ds.coverage))];

  const getQualityColor = (score) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getCostIcon = (cost) => {
    switch (cost) {
      case 'Gratuito':
        return <span className="text-green-600 font-semibold">Gratuito</span>;
      case 'Freemium':
        return <span className="text-yellow-600 font-semibold">Freemium</span>;
      case 'Pago':
        return <span className="text-red-600 font-semibold">Pago</span>;
      default:
        return <span className="text-gray-600 font-semibold">{cost}</span>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Fontes de Dados Agronômicos
        </h1>
        <p className="text-lg text-gray-600">
          Clique em qualquer card para ver informações detalhadas sobre a fonte de dados
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex-1 min-w-64">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar fontes de dados..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="">Todos os tipos</option>
            {types.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>

          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            value={selectedCoverage}
            onChange={(e) => setSelectedCoverage(e.target.value)}
          >
            <option value="">Toda cobertura</option>
            {coverages.map(coverage => (
              <option key={coverage} value={coverage}>{coverage}</option>
            ))}
          </select>

          <div className="flex items-center text-sm text-gray-600">
            <Filter className="h-4 w-4 mr-1" />
            {filteredSources.length} de {dataSources.length} fontes
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSources.map((source) => (
          <div
            key={source.id}
            onClick={() => onCardClick(source)}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border border-gray-200"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {source.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {source.description}
                  </p>
                </div>
                <ExternalLink className="h-5 w-5 text-gray-400 ml-2 flex-shrink-0" />
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  {source.type}
                </span>
                <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                  {source.category}
                </span>
                <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                  {source.coverage}
                </span>
              </div>

              {/* Metrics */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Atualização</span>
                  </div>
                  <span className="text-sm font-medium">{source.updateFrequency}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Globe className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Formato</span>
                  </div>
                  <span className="text-sm font-medium">{source.format}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Custo</span>
                  </div>
                  {getCostIcon(source.cost)}
                </div>
              </div>

              {/* Quality Scores */}
              <div className="border-t pt-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Qualidade dos Dados</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center">
                    <div className={`text-lg font-bold ${getQualityColor(source.reliability)}`}>
                      {source.reliability}%
                    </div>
                    <div className="text-xs text-gray-500">Confiabilidade</div>
                  </div>
                  <div className="text-center">
                    <div className={`text-lg font-bold ${getQualityColor(source.completeness)}`}>
                      {source.completeness}%
                    </div>
                    <div className="text-xs text-gray-500">Completude</div>
                  </div>
                </div>
              </div>

              {/* Data Types */}
              <div className="mt-4 pt-4 border-t">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Tipos de Dados</h4>
                <div className="flex flex-wrap gap-1">
                  {source.dataTypes && source.dataTypes.slice(0, 3).map((type, index) => (
                    <span
                      key={`${source.id}-datatype-${index}-${type}`}
                      className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                    >
                      {type}
                    </span>
                  ))}
                  {source.dataTypes && source.dataTypes.length > 3 && (
                    <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                      +{source.dataTypes.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredSources.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Search className="h-12 w-12 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Nenhuma fonte encontrada
          </h3>
          <p className="text-gray-600">
            Tente ajustar os filtros de busca para encontrar as fontes desejadas.
          </p>
        </div>
      )}
    </div>
  );
};

export default DataSourceCards;
