import { useState } from 'react';
import { Filter, Download, ArrowUpDown, CheckCircle, XCircle } from 'lucide-react';
import { comparisonCategories } from '../data/datasources';

const ComparisonTable = ({ dataSources }) => {
  const [selectedSources, setSelectedSources] = useState(dataSources.slice(0, 4));
  const [sortField, setSortField] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleSourceToggle = (source) => {
    if (selectedSources.find(s => s.id === source.id)) {
      setSelectedSources(selectedSources.filter(s => s.id !== source.id));
    } else if (selectedSources.length < 6) {
      setSelectedSources([...selectedSources, source]);
    }
  };

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedSources = [...selectedSources].sort((a, b) => {
    if (!sortField) return 0;
    
    let aValue = a[sortField];
    let bValue = b[sortField];
    
    if (typeof aValue === 'number') {
      return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
    }
    
    return sortDirection === 'asc' 
      ? aValue.localeCompare(bValue)
      : bValue.localeCompare(aValue);
  });

  const getQualityColor = (score) => {
    if (score >= 90) return 'text-green-600 bg-green-50';
    if (score >= 80) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  const getBooleanIcon = (value) => {
    const isPositive = value === 'Gratuito' || value === 'Público' || value === 'Nacional' || value === 'Diário';
    return isPositive ? (
      <CheckCircle className="h-4 w-4 text-green-500" />
    ) : (
      <XCircle className="h-4 w-4 text-red-500" />
    );
  };

  const comparisonFields = [
    { key: 'name', label: 'Nome', type: 'text' },
    { key: 'type', label: 'Tipo', type: 'text' },
    { key: 'coverage', label: 'Cobertura', type: 'text' },
    { key: 'cost', label: 'Custo', type: 'badge' },
    { key: 'updateFrequency', label: 'Frequência', type: 'text' },
    { key: 'format', label: 'Formato', type: 'text' },
    { key: 'reliability', label: 'Confiabilidade', type: 'score' },
    { key: 'completeness', label: 'Completude', type: 'score' },
    { key: 'timeliness', label: 'Pontualidade', type: 'score' },
    { key: 'accuracy', label: 'Precisão', type: 'score' },
    { key: 'establishment', label: 'Fundação', type: 'text' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Tabela Comparativa de Fontes de Dados
        </h1>
        <p className="text-lg text-gray-600">
          Compare diferentes aspectos das fontes de dados agronômicos
        </p>
      </div>

      {/* Controls */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Filtros:</span>
            </div>
            
            <select
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">Todas as categorias</option>
              {comparisonCategories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">
              {selectedSources.length} de {dataSources.length} selecionadas
            </span>
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="h-4 w-4" />
              <span>Exportar</span>
            </button>
          </div>
        </div>
      </div>

      {/* Source Selection */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Selecionar Fontes para Comparação (máx. 6)
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {dataSources.map((source) => {
            const isSelected = selectedSources.find(s => s.id === source.id);
            return (
              <button
                key={source.id}
                onClick={() => handleSourceToggle(source)}
                disabled={!isSelected && selectedSources.length >= 6}
                className={`p-3 text-left rounded-lg border-2 transition-all ${
                  isSelected
                    ? 'border-blue-500 bg-blue-50 text-blue-900'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                } ${!isSelected && selectedSources.length >= 6 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
              >
                <div className="font-medium text-sm">{source.name}</div>
                <div className="text-xs text-gray-600 mt-1">{source.type}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Comparison Table */}
      {selectedSources.length > 0 && (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sticky left-0 bg-gray-50 z-10">
                    Características
                  </th>
                  {sortedSources.map((source) => (
                    <th key={source.id} className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider min-w-32">
                      <div className="truncate">{source.name}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {comparisonFields.map((field, index) => (
                  <tr key={field.key} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 sticky left-0 bg-inherit z-10">
                      <button
                        onClick={() => handleSort(field.key)}
                        className="flex items-center space-x-1 hover:text-blue-600 transition-colors"
                      >
                        <span>{field.label}</span>
                        <ArrowUpDown className="h-3 w-3" />
                      </button>
                    </td>
                    {sortedSources.map((source) => {
                      const value = source[field.key];
                      return (
                        <td key={`${source.id}-${field.key}`} className="px-6 py-4 whitespace-nowrap text-sm text-center">
                          {field.type === 'score' ? (
                            <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${getQualityColor(value)}`}>
                              {value}%
                            </span>
                          ) : field.type === 'badge' ? (
                            <div className="flex items-center justify-center space-x-1">
                              {getBooleanIcon(value)}
                              <span className="text-gray-900">{value}</span>
                            </div>
                          ) : (
                            <span className="text-gray-900">{value}</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {selectedSources.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg shadow-md">
          <div className="text-gray-400 mb-4">
            <Filter className="h-12 w-12 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Nenhuma fonte selecionada
          </h3>
          <p className="text-gray-600">
            Selecione pelo menos uma fonte de dados para visualizar a comparação.
          </p>
        </div>
      )}

      {/* Quality Summary */}
      {selectedSources.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Resumo de Qualidade</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {['reliability', 'completeness', 'timeliness', 'accuracy'].map((metric) => {
              const average = selectedSources.reduce((sum, source) => sum + source[metric], 0) / selectedSources.length;
              const best = Math.max(...selectedSources.map(s => s[metric]));
              const worst = Math.min(...selectedSources.map(s => s[metric]));
              
              return (
                <div key={metric} className="text-center p-4 border rounded-lg">
                  <div className="text-lg font-bold text-gray-900 capitalize mb-2">
                    {metric === 'reliability' ? 'Confiabilidade' :
                     metric === 'completeness' ? 'Completude' :
                     metric === 'timeliness' ? 'Pontualidade' : 'Precisão'}
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-gray-600">
                      Média: <span className="font-semibold">{average.toFixed(1)}%</span>
                    </div>
                    <div className="text-sm text-green-600">
                      Melhor: <span className="font-semibold">{best}%</span>
                    </div>
                    <div className="text-sm text-red-600">
                      Menor: <span className="font-semibold">{worst}%</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ComparisonTable;
