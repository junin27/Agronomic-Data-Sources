import { useState } from 'react';
import { Filter, Download, ArrowUpDown, CheckCircle, XCircle } from 'lucide-react';
import { comparisonCategories } from '../data/datasources';
import * as XLSX from 'xlsx';

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

  const handleExport = () => {
    if (selectedSources.length === 0) {
      alert('Selecione pelo menos uma fonte de dados para exportar.');
      return;
    }

    // Criar workbook
    const wb = XLSX.utils.book_new();

    // ================= ABA PRINCIPAL - COMPARAÇÃO FORMATADA =================
    const mainData = [];
    
    // Título principal
    mainData.push(['RELATÓRIO DE COMPARAÇÃO - FONTES DE DADOS AGRONÔMICOS']);
    mainData.push([]);
    mainData.push([`Gerado em: ${new Date().toLocaleDateString('pt-BR')} às ${new Date().toLocaleTimeString('pt-BR')}`]);
    mainData.push([`Total de fontes analisadas: ${selectedSources.length}`]);
    mainData.push([]);
    mainData.push(['═══════════════════════════════════════════════════════════════════════════════════════════════════════']);
    mainData.push([]);

    // Cabeçalhos organizados
    const headers = [
      'FONTE DE DADOS',
      'TIPO',
      'COBERTURA',
      'CUSTO',
      'ATUALIZAÇÃO',
      'FORMATO',
      'CONFIAB.(%)',
      'COMPLET.(%)',
      'PONTUAL.(%)',
      'PRECISÃO(%)',
      'FUNDAÇÃO',
      'ACESSO'
    ];
    
    mainData.push(headers);
    mainData.push(['─'.repeat(20), '─'.repeat(12), '─'.repeat(15), '─'.repeat(12), '─'.repeat(15), '─'.repeat(12), '─'.repeat(12), '─'.repeat(12), '─'.repeat(12), '─'.repeat(12), '─'.repeat(10), '─'.repeat(15)]);

    // Dados das fontes com formatação
    selectedSources.forEach((source, index) => {
      mainData.push([
        source.name,
        source.type,
        source.coverage,
        source.cost,
        source.updateFrequency,
        source.format,
        `${source.reliability}%`,
        `${source.completeness}%`,
        `${source.timeliness}%`,
        `${source.accuracy}%`,
        source.establishment,
        source.accessibility
      ]);
    });

    mainData.push([]);
    mainData.push(['═══════════════════════════════════════════════════════════════════════════════════════════════════════']);

    const wsMain = XLSX.utils.aoa_to_sheet(mainData);

    // Formatação das colunas
    wsMain['!cols'] = [
      {wch: 35}, // FONTE DE DADOS
      {wch: 15}, // TIPO
      {wch: 20}, // COBERTURA
      {wch: 15}, // CUSTO
      {wch: 18}, // ATUALIZAÇÃO
      {wch: 15}, // FORMATO
      {wch: 12}, // CONFIABILIDADE
      {wch: 12}, // COMPLETUDE
      {wch: 12}, // PONTUALIDADE
      {wch: 12}, // PRECISÃO
      {wch: 12}, // FUNDAÇÃO
      {wch: 18}  // ACESSO
    ];

    // ================= ABA DE RANKING E ANÁLISE =================
    const rankingData = [];
    
    rankingData.push(['📊 RANKING E ANÁLISE ESTATÍSTICA']);
    rankingData.push([]);
    
    // Calcular médias e criar ranking
    const sourcesWithAvg = selectedSources.map(source => ({
      ...source,
      average: (source.reliability + source.completeness + source.timeliness + source.accuracy) / 4
    })).sort((a, b) => b.average - a.average);

    rankingData.push(['🏆 RANKING GERAL (por média das métricas)']);
    rankingData.push(['═══════════════════════════════════════════════════════════════════']);
    rankingData.push(['POS.', 'FONTE', 'MÉDIA GERAL', 'CONFIAB.', 'COMPLET.', 'PONTUAL.', 'PRECISÃO', 'CLASSIFICAÇÃO']);
    rankingData.push(['────', '──────────────────────────────────', '─────────', '─────────', '─────────', '─────────', '─────────', '─────────────']);

    sourcesWithAvg.forEach((source, index) => {
      const getClassification = (score) => {
        if (score >= 90) return '🌟 EXCELENTE';
        if (score >= 80) return '⭐ MUITO BOM';
        if (score >= 70) return '👍 BOM';
        if (score >= 60) return '📊 REGULAR';
        return '⚠️ PRECISA MELHORAR';
      };

      const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `${index + 1}º`;
      
      rankingData.push([
        medal,
        source.name,
        `${source.average.toFixed(1)}%`,
        `${source.reliability}%`,
        `${source.completeness}%`,
        `${source.timeliness}%`,
        `${source.accuracy}%`,
        getClassification(source.average)
      ]);
    });

    rankingData.push([]);
    rankingData.push(['📈 ESTATÍSTICAS GERAIS POR MÉTRICA']);
    rankingData.push(['═══════════════════════════════════════════════════════════════════']);

    // Calcular estatísticas detalhadas
    const metrics = [
      {name: 'Confiabilidade', key: 'reliability', icon: '🔒'},
      {name: 'Completude', key: 'completeness', icon: '📊'},
      {name: 'Pontualidade', key: 'timeliness', icon: '⏰'},
      {name: 'Precisão', key: 'accuracy', icon: '🎯'}
    ];

    rankingData.push(['MÉTRICA', 'MÉDIA', 'MÁXIMO', 'MÍNIMO', '🏆 MELHOR FONTE (Valor)', '⚠️ PIOR FONTE (Valor)']);
    rankingData.push(['─────────────', '─────', '───────', '───────', '──────────────────────────', '──────────────────────────']);

    metrics.forEach(metric => {
      const values = selectedSources.map(s => s[metric.key]);
      const avg = (values.reduce((a, b) => a + b, 0) / values.length).toFixed(1);
      const max = Math.max(...values);
      const min = Math.min(...values);
      const maxSource = selectedSources.find(s => s[metric.key] === max);
      const minSource = selectedSources.find(s => s[metric.key] === min);
      
      rankingData.push([
        `${metric.icon} ${metric.name}`,
        `${avg}%`,
        `${max}%`,
        `${min}%`,
        `${maxSource.name} (${max}%)`,
        `${minSource.name} (${min}%)`
      ]);
    });

    // Adicionar seção de destaques
    rankingData.push([]);
    rankingData.push(['⭐ DESTAQUES E OPORTUNIDADES']);
    rankingData.push(['═══════════════════════════════════════════════════════════════════']);
    
    // Encontrar a fonte com maior pontuação geral
    const bestOverall = sourcesWithAvg[0];
    const worstOverall = sourcesWithAvg[sourcesWithAvg.length - 1];
    
    rankingData.push(['🏆 CAMPEÃ GERAL:', `${bestOverall.name} (${bestOverall.average.toFixed(1)}%)`]);
    rankingData.push(['📈 OPORTUNIDADE:', `${worstOverall.name} (${worstOverall.average.toFixed(1)}%)`]);
    rankingData.push([]);
    
    // Encontrar os melhores e piores por métrica individual
    metrics.forEach(metric => {
      const best = selectedSources.reduce((prev, current) => 
        current[metric.key] > prev[metric.key] ? current : prev
      );
      const worst = selectedSources.reduce((prev, current) => 
        current[metric.key] < prev[metric.key] ? current : prev
      );
      
      rankingData.push([
        `${metric.icon} MELHOR ${metric.name.toUpperCase()}:`,
        `${best.name} (${best[metric.key]}%)`
      ]);
      
      if (best[metric.key] !== worst[metric.key]) {
        rankingData.push([
          `${metric.icon} MENOR ${metric.name.toUpperCase()}:`,
          `${worst.name} (${worst[metric.key]}%)`
        ]);
      }
      rankingData.push([]);
    });

    rankingData.push(['📊 DISTRIBUIÇÃO POR CATEGORIAS']);
    rankingData.push(['═══════════════════════════════════════════════════════════════════']);

    // Distribuição por tipo
    const typeCount = {};
    selectedSources.forEach(source => {
      typeCount[source.type] = (typeCount[source.type] || 0) + 1;
    });
    
    rankingData.push(['TIPO DE FONTE', 'QUANTIDADE', 'PERCENTUAL']);
    rankingData.push(['──────────────────', '──────────', '──────────']);
    Object.entries(typeCount).forEach(([type, count]) => {
      const percentage = ((count / selectedSources.length) * 100).toFixed(1);
      rankingData.push([type, count, `${percentage}%`]);
    });

    rankingData.push([]);

    // Distribuição por custo
    const costCount = {};
    selectedSources.forEach(source => {
      costCount[source.cost] = (costCount[source.cost] || 0) + 1;
    });
    
    rankingData.push(['MODELO DE CUSTO', 'QUANTIDADE', 'PERCENTUAL']);
    rankingData.push(['──────────────────', '──────────', '──────────']);
    Object.entries(costCount).forEach(([cost, count]) => {
      const percentage = ((count / selectedSources.length) * 100).toFixed(1);
      rankingData.push([cost, count, `${percentage}%`]);
    });

    const wsRanking = XLSX.utils.aoa_to_sheet(rankingData);
    wsRanking['!cols'] = [
      {wch: 25}, // MÉTRICA/INFORMAÇÃO
      {wch: 40}, // VALOR/FONTE (expandido para acomodar nomes)
      {wch: 12}, // MÉDIA/VALORES
      {wch: 10}, // MÁXIMO
      {wch: 10}, // MÍNIMO
      {wch: 30}, // MELHOR FONTE (expandido)
      {wch: 30}, // PIOR FONTE (expandido)
      {wch: 18}  // CLASSIFICAÇÃO
    ];

    // ================= ABA DE DETALHES POR FONTE =================
    const detailsData = [];
    detailsData.push(['📋 RELATÓRIO DETALHADO POR FONTE']);
    detailsData.push([]);

    selectedSources.forEach((source, index) => {
      const avgScore = (source.reliability + source.completeness + source.timeliness + source.accuracy) / 4;
      const getStatus = (score) => {
        if (score >= 90) return '🌟 EXCELENTE';
        if (score >= 80) return '⭐ MUITO BOM';
        if (score >= 70) return '👍 BOM';
        if (score >= 60) return '📊 REGULAR';
        return '⚠️ PRECISA MELHORAR';
      };

      detailsData.push([`📊 FONTE ${index + 1}: ${source.name.toUpperCase()}`]);
      detailsData.push(['═'.repeat(80)]);
      detailsData.push([]);
      
      detailsData.push(['🏢 INFORMAÇÕES GERAIS']);
      detailsData.push(['──────────────────────────────────────────────────']);
      detailsData.push(['Tipo de Fonte:', source.type]);
      detailsData.push(['Cobertura Geográfica:', source.coverage]);
      detailsData.push(['Modelo de Custo:', source.cost]);
      detailsData.push(['Frequência de Atualização:', source.updateFrequency]);
      detailsData.push(['Formato dos Dados:', source.format]);
      detailsData.push(['Ano de Estabelecimento:', source.establishment]);
      detailsData.push(['Nível de Acessibilidade:', source.accessibility]);
      detailsData.push([]);
      
      detailsData.push(['🎯 MÉTRICAS DE QUALIDADE']);
      detailsData.push(['──────────────────────────────────────────────────']);
      detailsData.push(['🔒 Confiabilidade:', `${source.reliability}%`, getStatus(source.reliability)]);
      detailsData.push(['📊 Completude:', `${source.completeness}%`, getStatus(source.completeness)]);
      detailsData.push(['⏰ Pontualidade:', `${source.timeliness}%`, getStatus(source.timeliness)]);
      detailsData.push(['🎯 Precisão:', `${source.accuracy}%`, getStatus(source.accuracy)]);
      detailsData.push([]);
      detailsData.push(['📈 PONTUAÇÃO GERAL:', `${avgScore.toFixed(1)}%`, getStatus(avgScore)]);
      detailsData.push([]);
      detailsData.push(['═'.repeat(80)]);
      detailsData.push([]);
    });

    const wsDetails = XLSX.utils.aoa_to_sheet(detailsData);
    wsDetails['!cols'] = [{wch: 30}, {wch: 30}, {wch: 20}];

    // ================= ADICIONAR TODAS AS ABAS =================
    XLSX.utils.book_append_sheet(wb, wsMain, '📊 Dados Principais');
    XLSX.utils.book_append_sheet(wb, wsRanking, '🏆 Ranking e Análise');
    XLSX.utils.book_append_sheet(wb, wsDetails, '📋 Detalhes por Fonte');

    // ================= EXPORTAR COM NOME MELHORADO =================
    const now = new Date();
    const dateStr = now.toISOString().split('T')[0];
    const timeStr = now.toTimeString().split(' ')[0].replace(/:/g, '');
    const fileName = `Relatorio_Fontes_Agronomicas_${dateStr}_${timeStr}_${selectedSources.length}fontes.xlsx`;
    
    XLSX.writeFile(wb, fileName);
    
    // Mensagem de sucesso melhorada
    const topSource = sourcesWithAvg[0];
    alert(`✅ RELATÓRIO EXPORTADO COM SUCESSO!\n\n📊 Arquivo: ${fileName}\n🏆 Melhor fonte: ${topSource.name} (${topSource.average.toFixed(1)}%)\n📈 ${selectedSources.length} fontes analisadas\n📋 3 abas com análises completas\n\n💡 Dica: Abra o arquivo no Excel para melhor formatação!`);
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
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
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
            <button 
              onClick={handleExport}
              className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
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
                    ? 'border-green-500 bg-green-50 text-green-900'
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
              const bestSource = selectedSources.find(s => s[metric] === best);
              const worstSource = selectedSources.find(s => s[metric] === worst);
              
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
                      Melhor: <span className="font-semibold">{bestSource?.name?.substring(0, 20) || 'N/A'} - {best}%</span>
                    </div>
                    <div className="text-sm text-red-600">
                      Menor: <span className="font-semibold">{worstSource?.name?.substring(0, 20) || 'N/A'} - {worst}%</span>
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
