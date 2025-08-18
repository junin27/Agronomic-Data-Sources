import { Database, TrendingUp, Users, Globe } from 'lucide-react';
import { datasources } from '../data/datasources';
import { useState } from 'react';

const Dashboard = () => {
  const [hoveredType, setHoveredType] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const handleMouseEnter = (type, event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setTooltipPosition({
      x: rect.right + 10,
      y: rect.top + rect.height / 2
    });
    setHoveredType(type);
  };

  const handleMouseLeave = () => {
    setHoveredType(null);
  };

  const handleCategoryMouseEnter = (category, event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const windowWidth = window.innerWidth;
    const tooltipWidth = 320; // largura estimada do tooltip
    
    // Decidir se o tooltip deve aparecer à direita ou à esquerda
    const shouldShowLeft = rect.right + tooltipWidth > windowWidth;
    
    setTooltipPosition({
      x: shouldShowLeft ? rect.left - 10 : rect.right + 10,
      y: rect.top + rect.height / 2,
      showLeft: shouldShowLeft
    });
    setHoveredCategory(category);
  };

  const handleCategoryMouseLeave = (event) => {
    // Verificar se o mouse está indo para o tooltip
    const relatedTarget = event.relatedTarget;
    if (relatedTarget && relatedTarget.closest('.category-tooltip')) {
      return; // Não remover o tooltip se o mouse está indo para ele
    }
    setHoveredCategory(null);
  };

  const handleTooltipMouseEnter = () => {
    // Manter o tooltip visível quando o mouse está sobre ele
    // O estado já está definido, então não precisamos fazer nada
  };

  const handleTooltipMouseLeave = () => {
    // Remover o tooltip quando o mouse sai dele
    setHoveredCategory(null);
  };

  const getSourcesByType = (type) => {
    return datasources.filter(ds => ds.type === type);
  };

  // Função para extrair todas as categorias únicas dos dataTypes
  const getAllCategories = () => {
    const allCategories = new Set();
    datasources.forEach(source => {
      if (source.dataTypes) {
        source.dataTypes.forEach(dataType => {
          allCategories.add(dataType);
        });
      }
    });
    return Array.from(allCategories).sort();
  };

  // Função para obter fontes que contêm uma categoria específica
  const getSourcesByCategory = (category) => {
    return datasources.filter(source => 
      source.dataTypes && source.dataTypes.includes(category)
    );
  };

  // Obter categorias principais agrupadas
  const getMainCategories = () => {
    const allCategories = getAllCategories();
    
    // Agrupar categorias similares
    const categoryGroups = {
      'Clima/Meteorologia': allCategories.filter(cat => 
        cat.includes('Climático') || cat.includes('Meteorológic') || 
        cat.includes('Precipitação') || cat.includes('Temperatura') || 
        cat.includes('Umidade') || cat.includes('Vento') || cat.includes('Clima')
      ),
      'Solo': allCategories.filter(cat => 
        cat.includes('Solo') || cat.includes('solo')
      ),
      'Produção Agrícola': allCategories.filter(cat => 
        cat.includes('Produção') || cat.includes('Safras') || 
        cat.includes('Pecuária') || cat.includes('Aquicultura')
      ),
      'Imagens/Satélite': allCategories.filter(cat => 
        cat.includes('Satélite') || cat.includes('Imagens') || 
        cat.includes('NDVI') || cat.includes('EVI') || cat.includes('Índices de Vegetação')
      ),
      'Recursos Hídricos': allCategories.filter(cat => 
        cat.includes('Água') || cat.includes('Hídric') || cat.includes('Irrigação') ||
        cat.includes('Evapotranspiração') || cat.includes('Balanço Hídrico')
      ),
      'Economia/Preços': allCategories.filter(cat => 
        cat.includes('Preços') || cat.includes('Econômic') || 
        cat.includes('Comércio') || cat.includes('Mercado') || cat.includes('Custo')
      ),
      'Legislação/Políticas': allCategories.filter(cat => 
        cat.includes('Legislação') || cat.includes('Políticas') || 
        cat.includes('Regulamento') || cat.includes('Acordos')
      ),
      'Meio Ambiente': allCategories.filter(cat => 
        cat.includes('Ambiental') || cat.includes('Meio Ambiente') || 
        cat.includes('Preservação') || cat.includes('Vegetação') || 
        cat.includes('Biodiversidade') || cat.includes('APP')
      )
    };

    // Filtrar grupos vazios e retornar os primeiros tipos de cada grupo
    return Object.entries(categoryGroups)
      .filter(([_, categories]) => categories.length > 0)
      .map(([groupName, categories]) => ({
        name: groupName,
        types: categories,
        count: categories.reduce((total, cat) => 
          total + getSourcesByCategory(cat).length, 0
        )
      }));
  };
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
        <div className="bg-white rounded-lg shadow-md p-6 relative">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Visão Geral</h2>
          <div className="space-y-4">
            <div 
              className="flex justify-between items-center py-2 border-b hover:bg-gray-50 rounded px-2 transition-colors cursor-pointer"
              onMouseEnter={(e) => handleMouseEnter('Governamental', e)}
              onMouseLeave={handleMouseLeave}
            >
              <span className="text-gray-600">Fontes Governamentais</span>
              <span className="font-semibold">
                {datasources.filter(ds => ds.type === 'Governamental').length}
              </span>
            </div>
            <div 
              className="flex justify-between items-center py-2 border-b hover:bg-gray-50 rounded px-2 transition-colors cursor-pointer"
              onMouseEnter={(e) => handleMouseEnter('Privado', e)}
              onMouseLeave={handleMouseLeave}
            >
              <span className="text-gray-600">Fontes Privadas</span>
              <span className="font-semibold">
                {datasources.filter(ds => ds.type === 'Privado').length}
              </span>
            </div>
            <div 
              className="flex justify-between items-center py-2 border-b hover:bg-gray-50 rounded px-2 transition-colors cursor-pointer"
              onMouseEnter={(e) => handleMouseEnter('Internacional', e)}
              onMouseLeave={handleMouseLeave}
            >
              <span className="text-gray-600">Fontes Internacionais</span>
              <span className="font-semibold">
                {datasources.filter(ds => ds.type === 'Internacional').length}
              </span>
            </div>
            <div 
              className="flex justify-between items-center py-2 border-b hover:bg-gray-50 rounded px-2 transition-colors cursor-pointer"
              onMouseEnter={(e) => handleMouseEnter('Institucional', e)}
              onMouseLeave={handleMouseLeave}
            >
              <span className="text-gray-600">Fontes Institucionais</span>
              <span className="font-semibold">
                {datasources.filter(ds => ds.type === 'Institucional').length}
              </span>
            </div>
            <div 
              className="flex justify-between items-center py-2 border-b hover:bg-gray-50 rounded px-2 transition-colors cursor-pointer"
              onMouseEnter={(e) => handleMouseEnter('Acadêmico', e)}
              onMouseLeave={handleMouseLeave}
            >
              <span className="text-gray-600">Fontes Acadêmicas</span>
              <span className="font-semibold">
                {datasources.filter(ds => ds.type === 'Acadêmico').length}
              </span>
            </div>
            <div 
              className="flex justify-between items-center py-2 border-b hover:bg-gray-50 rounded px-2 transition-colors cursor-pointer"
              onMouseEnter={(e) => handleMouseEnter('Satélite', e)}
              onMouseLeave={handleMouseLeave}
            >
              <span className="text-gray-600">Fontes de Satélite</span>
              <span className="font-semibold">
                {datasources.filter(ds => ds.type === 'Satélite').length}
              </span>
            </div>
            <div 
              className="flex justify-between items-center py-2 hover:bg-gray-50 rounded px-2 transition-colors cursor-pointer"
              onMouseEnter={(e) => handleMouseEnter('Colaborativo', e)}
              onMouseLeave={handleMouseLeave}
            >
              <span className="text-gray-600">Fontes Colaborativas</span>
              <span className="font-semibold">
                {datasources.filter(ds => ds.type === 'Colaborativo').length}
              </span>
            </div>
          </div>

          {/* Tooltip */}
          {hoveredType && (
            <div 
              className="fixed z-50 bg-gray-900 text-white p-3 rounded-lg shadow-lg max-w-xs"
              style={{
                left: `${tooltipPosition.x}px`,
                top: `${tooltipPosition.y}px`,
                transform: 'translateY(-50%)'
              }}
            >
              <h4 className="font-semibold mb-2">Fontes {hoveredType}s:</h4>
              <ul className="space-y-1 text-sm">
                {getSourcesByType(hoveredType).map(source => (
                  <li key={source.id} className="text-gray-200">
                    • {source.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
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

      {/* Quality Metrics Explanation */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Metodologia de Avaliação das Métricas de Qualidade</h2>
        <p className="text-lg text-gray-600 mb-6">
          Cada fonte de dados é avaliada através de critérios objetivos e específicos. Veja exatamente como calculamos cada porcentagem:
        </p>
        
        <div className="grid grid-cols-1 gap-8">
          {/* Confiabilidade */}
          <div className="border rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-green-600 font-bold">C</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Confiabilidade (0-100%)</h3>
            </div>
            
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 mb-2">Critérios de Avaliação:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded">
                  <span className="font-medium text-gray-700">Tipo de Instituição (40 pontos):</span>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Governamental Federal: 35-40 pts</li>
                    <li>• Acadêmica/Pesquisa: 30-35 pts</li>
                    <li>• Internacional: 25-35 pts</li>
                    <li>• Governamental Estadual: 25-30 pts</li>
                    <li>• Privada Certificada: 20-25 pts</li>
                    <li>• Colaborativa: 15-20 pts</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="font-medium text-gray-700">Histórico e Reputação (25 pontos):</span>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Mais de 20 anos: 20-25 pts</li>
                    <li>• 10-20 anos: 15-20 pts</li>
                    <li>• 5-10 anos: 10-15 pts</li>
                    <li>• Menos de 5 anos: 5-10 pts</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="font-medium text-gray-700">Transparência (20 pontos):</span>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Metodologia detalhada: +10 pts</li>
                    <li>• Código aberto/APIs: +5 pts</li>
                    <li>• Documentação completa: +5 pts</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="font-medium text-gray-700">Certificações (15 pontos):</span>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• ISO/Padrões internacionais: +10 pts</li>
                    <li>• Validação por pares: +5 pts</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-100 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Exemplo - IBGE (98% de Confiabilidade):</h4>
              <div className="text-sm text-green-700 space-y-1">
                <p>• <strong>Instituição (40/40 pts):</strong> Órgão federal oficial, reconhecido constitucionalmente</p>
                <p>• <strong>Histórico (25/25 pts):</strong> Fundado em 1936, 88 anos de tradição em estatísticas</p>
                <p>• <strong>Transparência (18/20 pts):</strong> Metodologias publicadas, APIs abertas, falta código aberto</p>
                <p>• <strong>Certificações (15/15 pts):</strong> Membro do Sistema Estatístico Nacional, padrões internacionais</p>
                <p><strong>Total: 98/100 = 98%</strong></p>
              </div>
            </div>
          </div>

          {/* Completude */}
          <div className="border rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-blue-600 font-bold">C</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Completude (0-100%)</h3>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 mb-2">Critérios de Avaliação:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded">
                  <span className="font-medium text-gray-700">Cobertura Geográfica (30 pontos):</span>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Global: 25-30 pts</li>
                    <li>• Nacional completa: 20-25 pts</li>
                    <li>• Regional/Estadual: 15-20 pts</li>
                    <li>• Municipal/Local: 10-15 pts</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="font-medium text-gray-700">Série Histórica (25 pontos):</span>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Mais de 20 anos: 20-25 pts</li>
                    <li>• 10-20 anos: 15-20 pts</li>
                    <li>• 5-10 anos: 10-15 pts</li>
                    <li>• Menos de 5 anos: 5-10 pts</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="font-medium text-gray-700">Variedade de Dados (25 pontos):</span>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Mais de 50 variáveis: 20-25 pts</li>
                    <li>• 20-50 variáveis: 15-20 pts</li>
                    <li>• 10-20 variáveis: 10-15 pts</li>
                    <li>• Menos de 10: 5-10 pts</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="font-medium text-gray-700">Consistência (20 pontos):</span>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Sem lacunas: 15-20 pts</li>
                    <li>• Lacunas mínimas (&lt;5%): 10-15 pts</li>
                    <li>• Lacunas moderadas: 5-10 pts</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Exemplo - FAOSTAT (94% de Completude):</h4>
              <div className="text-sm text-blue-800 space-y-1">
                <p>• <strong>Cobertura (30/30 pts):</strong> 245 países e territórios, cobertura global completa</p>
                <p>• <strong>Série Histórica (23/25 pts):</strong> Dados desde 1961 (63 anos), algumas séries menores</p>
                <p>• <strong>Variedade (25/25 pts):</strong> Mais de 200 indicadores agrícolas diferentes</p>
                <p>• <strong>Consistência (16/20 pts):</strong> Pequenas lacunas em países com conflitos</p>
                <p><strong>Total: 94/100 = 94%</strong></p>
              </div>
            </div>
          </div>

          {/* Pontualidade */}
          <div className="border rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-purple-600 font-bold">P</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Pontualidade (0-100%)</h3>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 mb-2">Critérios de Avaliação:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded">
                  <span className="font-medium text-gray-700">Frequência Declarada vs Real (40 pontos):</span>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• 100% cumprimento: 35-40 pts</li>
                    <li>• 90-99% cumprimento: 30-35 pts</li>
                    <li>• 80-89% cumprimento: 25-30 pts</li>
                    <li>• 70-79% cumprimento: 20-25 pts</li>
                    <li>• Abaixo de 70%: 0-20 pts</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="font-medium text-gray-700">Tempo de Disponibilização (30 pontos):</span>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Tempo real: 25-30 pts</li>
                    <li>• Até 1 semana: 20-25 pts</li>
                    <li>• Até 1 mês: 15-20 pts</li>
                    <li>• Até 3 meses: 10-15 pts</li>
                    <li>• Mais de 3 meses: 0-10 pts</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="font-medium text-gray-700">Histórico de Atrasos (20 pontos):</span>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Nunca atrasou: 15-20 pts</li>
                    <li>• Atrasos raros: 10-15 pts</li>
                    <li>• Atrasos ocasionais: 5-10 pts</li>
                    <li>• Atrasos frequentes: 0-5 pts</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="font-medium text-gray-700">Comunicação (10 pontos):</span>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Avisos prévios: +5 pts</li>
                    <li>• Cronograma público: +5 pts</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-900 mb-2">Exemplo - INMET (91% de Pontualidade):</h4>
              <div className="text-sm text-purple-800 space-y-1">
                <p>• <strong>Cumprimento (36/40 pts):</strong> 95% das atualizações horárias no prazo</p>
                <p>• <strong>Disponibilização (25/30 pts):</strong> Dados meteorológicos em tempo real</p>
                <p>• <strong>Histórico (20/20 pts):</strong> Sistema automatizado, raros atrasos</p>
                <p>• <strong>Comunicação (10/10 pts):</strong> Status em tempo real, avisos de manutenção</p>
                <p><strong>Total: 91/100 = 91%</strong></p>
              </div>
            </div>
          </div>

          {/* Precisão */}
          <div className="border rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-orange-600 font-bold">P</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Precisão (0-100%)</h3>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 mb-2">Critérios de Avaliação:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded">
                  <span className="font-medium text-gray-700">Metodologia (30 pontos):</span>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Padrões internacionais: 25-30 pts</li>
                    <li>• Metodologia validada: 20-25 pts</li>
                    <li>• Metodologia própria: 15-20 pts</li>
                    <li>• Metodologia não clara: 0-15 pts</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="font-medium text-gray-700">Controle de Qualidade (25 pontos):</span>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Validação automática + manual: 20-25 pts</li>
                    <li>• Validação automática: 15-20 pts</li>
                    <li>• Validação básica: 10-15 pts</li>
                    <li>• Sem validação: 0-10 pts</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="font-medium text-gray-700">Resolução (25 pontos):</span>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Alta resolução espacial/temporal: 20-25 pts</li>
                    <li>• Resolução média: 15-20 pts</li>
                    <li>• Resolução baixa: 10-15 pts</li>
                    <li>• Resolução muito baixa: 0-10 pts</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="font-medium text-gray-700">Incertezas (20 pontos):</span>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Margens de erro declaradas: +10 pts</li>
                    <li>• Intervalos de confiança: +5 pts</li>
                    <li>• Validação com dados de campo: +5 pts</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-900 mb-2">Exemplo - Copernicus/Sentinel (96% de Precisão):</h4>
              <div className="text-sm text-orange-800 space-y-1">
                <p>• <strong>Metodologia (30/30 pts):</strong> Sensores calibrados, padrões ESA/Copernicus</p>
                <p>• <strong>Controle (24/25 pts):</strong> Validação automática + revisão de especialistas</p>
                <p>• <strong>Resolução (25/25 pts):</strong> 10m espacial, revisita de 5 dias</p>
                <p>• <strong>Incertezas (17/20 pts):</strong> Margens de erro publicadas, falta mais validação de campo</p>
                <p><strong>Total: 96/100 = 96%</strong></p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
          <h4 className="font-semibold text-gray-800 mb-4">Escala de Classificação Final:</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="text-center p-3 bg-green-100 rounded">
              <div className="text-green-700 font-bold text-lg">90-100%</div>
              <div className="text-green-600 font-semibold">Excelente</div>
              <div className="text-gray-600 text-xs">Referência no setor</div>
            </div>
            <div className="text-center p-3 bg-blue-100 rounded">
              <div className="text-blue-700 font-bold text-lg">75-89%</div>
              <div className="text-blue-600 font-semibold">Bom</div>
              <div className="text-gray-600 text-xs">Uso profissional</div>
            </div>
            <div className="text-center p-3 bg-yellow-100 rounded">
              <div className="text-yellow-700 font-bold text-lg">60-74%</div>
              <div className="text-yellow-600 font-semibold">Regular</div>
              <div className="text-gray-600 text-xs">Uso com cautela</div>
            </div>
            <div className="text-center p-3 bg-red-100 rounded">
              <div className="text-red-700 font-bold text-lg">{'< 60%'}</div>
              <div className="text-red-600 font-semibold">Inadequado</div>
              <div className="text-gray-600 text-xs">Evitar uso</div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Overview */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Categorias de Dados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {getMainCategories().map((categoryGroup) => (
            <div 
              key={categoryGroup.name} 
              className="text-center p-4 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer relative"
              onMouseEnter={(e) => handleCategoryMouseEnter(categoryGroup, e)}
              onMouseLeave={handleCategoryMouseLeave}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <Database className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">{categoryGroup.name}</h3>
              
              {/* Tags dos tipos de dados */}
              <div className="flex flex-wrap gap-1 justify-center mb-2">
                {categoryGroup.types.slice(0, 3).map((type, index) => (
                  <span 
                    key={index}
                    className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                  >
                    {type.length > 12 ? `${type.substring(0, 12)}...` : type}
                  </span>
                ))}
                {categoryGroup.types.length > 3 && (
                  <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                    +{categoryGroup.types.length - 3}
                  </span>
                )}
              </div>
              
              {/* Contador de fontes */}
              <div className="text-xs text-gray-500">
                {categoryGroup.count} {categoryGroup.count === 1 ? 'fonte' : 'fontes'}
              </div>
            </div>
          ))}
        </div>

        {/* Tooltip para categorias */}
        {hoveredCategory && (
          <div 
            className="category-tooltip fixed z-50 bg-gray-900 text-white p-4 rounded-lg shadow-lg max-w-sm"
            style={{
              left: `${tooltipPosition.x}px`,
              top: `${tooltipPosition.y}px`,
              transform: tooltipPosition.showLeft ? 'translate(-100%, -50%)' : 'translateY(-50%)'
            }}
            onMouseEnter={handleTooltipMouseEnter}
            onMouseLeave={handleTooltipMouseLeave}
          >
            <h4 className="font-semibold mb-3">{hoveredCategory.name}:</h4>
            
            {/* Lista de tipos de dados */}
            <div className="mb-3">
              <p className="text-xs text-gray-300 mb-2">Tipos de dados:</p>
              <div className="flex flex-wrap gap-1">
                {hoveredCategory.types.map((type, index) => (
                  <span 
                    key={index}
                    className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Lista de fontes */}
            <div>
              <p className="text-xs text-gray-300 mb-2">Fontes relacionadas:</p>
              <ul className="space-y-1 text-sm max-h-32 overflow-y-auto">
                {/* Obter fontes únicas que contêm qualquer tipo desta categoria */}
                {[...new Set(
                  hoveredCategory.types.flatMap(type => 
                    getSourcesByCategory(type).map(source => source.name)
                  )
                )].map((sourceName, index) => (
                  <li key={index} className="text-gray-200">
                    • {sourceName}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
