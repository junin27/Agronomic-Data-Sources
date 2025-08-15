import { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';
import { BarChart3, PieChart as PieChartIcon, TrendingUp, Target } from 'lucide-react';

const Charts = ({ dataSources }) => {
  const [activeChart, setActiveChart] = useState('distribution');

  // Prepare data for different chart types
  const typeDistribution = dataSources.reduce((acc, source) => {
    acc[source.type] = (acc[source.type] || 0) + 1;
    return acc;
  }, {});

  const typeData = Object.entries(typeDistribution).map(([type, count]) => ({
    type,
    count,
    percentage: ((count / dataSources.length) * 100).toFixed(1)
  }));

  const coverageData = dataSources.reduce((acc, source) => {
    acc[source.coverage] = (acc[source.coverage] || 0) + 1;
    return acc;
  }, {});

  const coverageChartData = Object.entries(coverageData).map(([coverage, count]) => ({
    coverage,
    count
  }));

  const costData = dataSources.reduce((acc, source) => {
    acc[source.cost] = (acc[source.cost] || 0) + 1;
    return acc;
  }, {});

  const costChartData = Object.entries(costData).map(([cost, count]) => ({
    cost,
    count
  }));

  const qualityData = dataSources.map(source => ({
    name: source.name.split(' ')[0], // First word only for readability
    reliability: source.reliability,
    completeness: source.completeness,
    timeliness: source.timeliness,
    accuracy: source.accuracy,
    average: ((source.reliability + source.completeness + source.timeliness + source.accuracy) / 4).toFixed(1)
  }));

  const frequencyData = dataSources.reduce((acc, source) => {
    acc[source.updateFrequency] = (acc[source.updateFrequency] || 0) + 1;
    return acc;
  }, {});

  const frequencyChartData = Object.entries(frequencyData).map(([frequency, count]) => ({
    frequency,
    count
  }));

  const radarData = [
    {
      metric: 'Confiabilidade',
      value: dataSources.reduce((sum, ds) => sum + ds.reliability, 0) / dataSources.length
    },
    {
      metric: 'Completude',
      value: dataSources.reduce((sum, ds) => sum + ds.completeness, 0) / dataSources.length
    },
    {
      metric: 'Pontualidade',
      value: dataSources.reduce((sum, ds) => sum + ds.timeliness, 0) / dataSources.length
    },
    {
      metric: 'Precisão',
      value: dataSources.reduce((sum, ds) => sum + ds.accuracy, 0) / dataSources.length
    }
  ];

  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4', '#84CC16', '#F97316'];

  const chartOptions = [
    { id: 'distribution', name: 'Distribuição por Tipo', icon: PieChartIcon },
    { id: 'quality', name: 'Qualidade dos Dados', icon: BarChart3 },
    { id: 'coverage', name: 'Cobertura Geográfica', icon: Target },
    { id: 'frequency', name: 'Frequência de Atualização', icon: TrendingUp }
  ];

  const renderChart = () => {
    switch (activeChart) {
      case 'distribution':
        return (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">Distribuição por Tipo de Instituição</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={typeData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="count"
                    label={({ type, percentage }) => `${type}: ${percentage}%`}
                  >
                    {typeData.map((entry, index) => (
                      <Cell key={`type-pie-cell-${entry.type}-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">Distribuição por Custo</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={costChartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="cost" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#3B82F6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        );

      case 'quality':
        return (
          <div className="grid gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">Métricas de Qualidade por Fonte</h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={qualityData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Bar dataKey="reliability" name="Confiabilidade" fill="#10B981" />
                  <Bar dataKey="completeness" name="Completude" fill="#3B82F6" />
                  <Bar dataKey="timeliness" name="Pontualidade" fill="#F59E0B" />
                  <Bar dataKey="accuracy" name="Precisão" fill="#EF4444" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">Radar - Qualidade Média Geral</h3>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={radarData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="metric" />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} />
                  <Radar
                    name="Qualidade Média"
                    dataKey="value"
                    stroke="#3B82F6"
                    fill="#3B82F6"
                    fillOpacity={0.3}
                  />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        );

      case 'coverage':
        return (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">Cobertura Geográfica</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={coverageChartData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="count"
                    label={({ coverage, count }) => `${coverage}: ${count}`}
                  >
                    {coverageChartData.map((entry, index) => (
                      <Cell key={`coverage-pie-cell-${entry.coverage}-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">Qualidade Média por Cobertura</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={coverageChartData.map(item => {
                  const sourcesWithCoverage = dataSources.filter(ds => ds.coverage === item.coverage);
                  const avgQuality = sourcesWithCoverage.reduce((sum, ds) => 
                    sum + (ds.reliability + ds.completeness + ds.timeliness + ds.accuracy) / 4, 0
                  ) / sourcesWithCoverage.length;
                  return { ...item, avgQuality: avgQuality.toFixed(1) };
                })}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="coverage" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Bar dataKey="avgQuality" fill="#10B981" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        );

      case 'frequency':
        return (
          <div className="grid gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">Frequência de Atualização</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={frequencyChartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="frequency" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#8B5CF6" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">Evolução da Qualidade Média</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={qualityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Line type="monotone" dataKey="average" stroke="#EF4444" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Análise Gráfica das Fontes de Dados
        </h1>
        <p className="text-lg text-gray-600">
          Visualize e compare dados através de diferentes tipos de gráficos
        </p>
      </div>

      {/* Chart Navigation */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-wrap gap-3">
          {chartOptions.map((option) => {
            const Icon = option.icon;
            return (
              <button
                key={option.id}
                onClick={() => setActiveChart(option.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  activeChart === option.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{option.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Chart Content */}
      {renderChart()}

      {/* Statistics Summary */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Estatísticas Resumidas</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">
              {dataSources.length}
            </div>
            <div className="text-sm text-gray-600">Total de Fontes</div>
          </div>
          
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">
              {(dataSources.reduce((sum, ds) => sum + ds.reliability, 0) / dataSources.length).toFixed(1)}%
            </div>
            <div className="text-sm text-gray-600">Confiabilidade Média</div>
          </div>
          
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <div className="text-2xl font-bold text-yellow-600">
              {dataSources.filter(ds => ds.cost === 'Gratuito').length}
            </div>
            <div className="text-sm text-gray-600">Fontes Gratuitas</div>
          </div>
          
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">
              {dataSources.filter(ds => ds.updateFrequency === 'Diário').length}
            </div>
            <div className="text-sm text-gray-600">Atualizações Diárias</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
