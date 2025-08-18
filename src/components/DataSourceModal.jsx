import { X, ExternalLink, Calendar, Globe, DollarSign, Database, CheckCircle, AlertCircle } from 'lucide-react';

const DataSourceModal = ({ dataSource, isOpen, onClose }) => {
  if (!isOpen || !dataSource) return null;

  const getQualityColor = (score) => {
    if (score >= 90) return 'text-green-600 bg-green-100';
    if (score >= 80) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getQualityIcon = (score) => {
    if (score >= 90) return <CheckCircle className="h-5 w-5" />;
    return <AlertCircle className="h-5 w-5" />;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{dataSource.name}</h2>
            <p className="text-gray-600">{dataSource.description}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          {/* Basic Info */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Informações Básicas</h3>
              
              <div className="flex items-center justify-between py-2 border-b">
                <div className="flex items-center space-x-2">
                  <Database className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-600">Tipo</span>
                </div>
                <span className="font-medium">{dataSource.type}</span>
              </div>

              <div className="flex items-center justify-between py-2 border-b">
                <div className="flex items-center space-x-2">
                  <Globe className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-600">Cobertura</span>
                </div>
                <span className="font-medium">{dataSource.coverage}</span>
              </div>

              <div className="flex items-center justify-between py-2 border-b">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-600">Frequência</span>
                </div>
                <span className="font-medium">{dataSource.updateFrequency}</span>
              </div>

              <div className="flex items-center justify-between py-2 border-b">
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-600">Custo</span>
                </div>
                <span className="font-medium">{dataSource.cost}</span>
              </div>

              <div className="flex items-center justify-between py-2 border-b">
                <span className="text-gray-600">Formato</span>
                <span className="font-medium">{dataSource.format}</span>
              </div>

              <div className="flex items-center justify-between py-2">
                <span className="text-gray-600">Estabelecido em</span>
                <span className="font-medium">{dataSource.establishment}</span>
              </div>
            </div>

            {/* Quality Metrics */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Qualidade dos Dados</h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg border">
                  <div className="flex items-center space-x-2">
                    {getQualityIcon(dataSource.reliability)}
                    <span className="text-gray-700">Confiabilidade</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getQualityColor(dataSource.reliability)}`}>
                    {dataSource.reliability}%
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg border">
                  <div className="flex items-center space-x-2">
                    {getQualityIcon(dataSource.completeness)}
                    <span className="text-gray-700">Completude</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getQualityColor(dataSource.completeness)}`}>
                    {dataSource.completeness}%
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg border">
                  <div className="flex items-center space-x-2">
                    {getQualityIcon(dataSource.timeliness)}
                    <span className="text-gray-700">Pontualidade</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getQualityColor(dataSource.timeliness)}`}>
                    {dataSource.timeliness}%
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg border">
                  <div className="flex items-center space-x-2">
                    {getQualityIcon(dataSource.accuracy)}
                    <span className="text-gray-700">Precisão</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getQualityColor(dataSource.accuracy)}`}>
                    {dataSource.accuracy}%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Data Types */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tipos de Dados Disponíveis</h3>
            <div className="flex flex-wrap gap-2">
              {dataSource.dataTypes && dataSource.dataTypes.map((type, index) => (
                <span
                  key={`${dataSource.id}-datatype-${index}-${type.replace(/[^a-zA-Z0-9]/g, '-')}`}
                  className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Características Principais</h3>
              <ul className="space-y-2">
                {dataSource.features && dataSource.features.map((feature, index) => (
                  <li key={`${dataSource.id}-feature-${index}-${feature.substring(0, 20).replace(/[^a-zA-Z0-9]/g, '-')}`} className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Limitações</h3>
              <ul className="space-y-2">
                {dataSource.limitations && dataSource.limitations.map((limitation, index) => (
                  <li key={`${dataSource.id}-limitation-${index}-${limitation.substring(0, 20).replace(/[^a-zA-Z0-9]/g, '-')}`} className="flex items-start space-x-2">
                    <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{limitation}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Badges */}
          <div className="pt-4 border-t">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                {dataSource.category}
              </span>
              <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                {dataSource.accessibility}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-2">
            {dataSource.name === "Instituto Brasileiro de Geografia e Estatística (IBGE)" ? (
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://apisidra.ibge.gov.br/home/ajuda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition-colors text-sm"
                >
                  <span>Visitar Sidra API</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href="https://cran.r-project.org/web/packages/sidrar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition-colors text-sm"
                >
                  <span>Visitar Sidra R</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href="https://pypi.org/project/sidrapy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition-colors text-sm"
                >
                  <span>Visitar Sidra PY</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            ) : dataSource.name === "Companhia Nacional de Abastecimento (CONAB)" ? (
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://portaldeinformacoes.conab.gov.br/produtos-360.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <span>Visitar Site</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            ) : dataSource.name === "Agência Nacional de Águas e Saneamento Básico (ANA)" ? (
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://dadosabertos.ana.gov.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition-colors text-sm"
                >
                  <span>Dados Aberto da Ana</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href="https://dadosabertos.ana.gov.br/api/search/definition/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition-colors text-sm"
                >
                  <span>Search API</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            ) : dataSource.name === "Ministério da Agricultura e Pecuária (MAPA)" ? (
               <div className="flex flex-wrap gap-2">
                 <a
                   href="https://dados.agricultura.gov.br/"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                 >
                   <span>Portal de Dados do Mapa</span>
                   <ExternalLink className="h-4 w-4" />
                 </a>
                 <a
                   href="https://docs.ckan.org/en/2.6/api/"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                 >
                   <span>CKAN API</span>
                   <ExternalLink className="h-4 w-4" />
                 </a>
               </div>
            ) : dataSource.name === "Repositório Brasileiro Livre para Dados Abertos do Solo (febr)" ? (
               <div className="flex flex-wrap gap-2">
                 <a
                   href="https://github.com/Laboratorio-de-Pedometria/febr-data/tree/master"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                 >
                   <ExternalLink className="w-4 h-4 mr-2" />
                   Repositório GitHub
                 </a>
                 <a
                   href="https://www.pedometria.org/soildata/"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                 >
                   <ExternalLink className="w-4 h-4 mr-2" />
                   SoilData
                 </a>
               </div>
             ) : dataSource.name === "Leaf Agriculture" ? (
               <div className="flex flex-wrap gap-2">
                 <a
                   href="https://withleaf.io/"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                 >
                   <ExternalLink className="w-4 h-4 mr-2" />
                   Leaf Agriculture
                 </a>
                 <a
                   href="https://docs.withleaf.io/docs/"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                 >
                   <ExternalLink className="w-4 h-4 mr-2" />
                   Documentação
                 </a>
               </div>
             ) : dataSource.name === "AgroMonitoring" ? (
               <div className="flex flex-wrap gap-2">
                 <a
                   href="https://agromonitoring.com/"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                 >
                   <ExternalLink className="w-4 h-4 mr-2" />
                   AgroMonitoring
                 </a>
                 <a
                   href="https://agromonitoring.com/api"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                 >
                   <ExternalLink className="w-4 h-4 mr-2" />
                   API
                 </a>
               </div>
             ) : dataSource.name === "FAOSTAT" ? (
               <div className="flex flex-wrap gap-2">
                 <a
                   href="https://www.fao.org/statistics/en"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition-colors text-sm"
                 >
                   <span>Portal Web</span>
                   <ExternalLink className="h-4 w-4" />
                 </a>
                 <a
                   href="https://jamesfell0000.github.io/posts/faostat_api/"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition-colors text-sm"
                 >
                   <span>API</span>
                   <ExternalLink className="h-4 w-4" />
                 </a>
                 <a
                   href="https://github.com/FAOSTAT/faostat-api"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition-colors text-sm"
                 >
                   <span>Diretório GitHub</span>
                   <ExternalLink className="h-4 w-4" />
                 </a>
                 <a
                   href="https://search.r-project.org/CRAN/refmans/FAOSTAT/html/download_faostat_bulk.html"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition-colors text-sm"
                 >
                   <span>Arquivos Bulk</span>
                   <ExternalLink className="h-4 w-4" />
                 </a>
               </div>
             ) : dataSource.name === "OpenET" ? (
               <div className="flex flex-wrap gap-2">
                 <a
                   href="https://etdata.org/"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition-colors text-sm"
                 >
                    <span>OpenET</span>
                    <ExternalLink className="h-4 w-4" />
                 </a>
                 <a
                   href="https://openet.gitbook.io/docs"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition-colors text-sm"
                 >
                   <span>API</span>
                   <ExternalLink className="h-4 w-4" />
                 </a>
                 <a
                   href="https://developers.google.com/earth-engine/datasets/catalog/OpenET_ENSEMBLE_CONUS_GRIDMET_MONTHLY_v2_0?hl=pt-br#description"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition-colors text-sm"
                 >
                   <span>Catálago</span>
                   <ExternalLink className="h-4 w-4" />
                 </a>
               </div>
             ) : dataSource.name === "OpenWeatherMap" ? (
               <div className="flex flex-wrap gap-2">
                 <a
                   href="https://openweathermap.org/"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition-colors text-sm"
                 >
                   <span>Página Inicial</span>
                   <ExternalLink className="h-4 w-4" />
                 </a>
                 <a
                   href="https://openweathermap.org/api"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition-colors text-sm"
                 >
                   <span>API</span>
                   <ExternalLink className="h-4 w-4" />
                 </a>
               </div>
             ) : dataSource.name === "BuiltWith Datasets" ? (
               <div className="flex flex-wrap gap-2">
                 <a
                   href="https://builtwith.com/"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition-colors text-sm"
                 >
                   <span>BuiltWith</span>
                   <ExternalLink className="h-4 w-4" />
                 </a>
                 <a
                   href="https://builtwith.com/api"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition-colors text-sm"
                 >
                   <span>API</span>
                   <ExternalLink className="h-4 w-4" />
                 </a>
                 <a
                   href="https://builtwith.com/datasets"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition-colors text-sm"
                 >
                   <span>Datasets</span>
                   <ExternalLink className="h-4 w-4" />
                 </a>
               </div>
             ) : dataSource.name === "Copernicus Data Space Ecosystem (CDSE)" ? (
               <div className="flex flex-wrap gap-2">
                 <a
                   href="https://dataspace.copernicus.eu/"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition-colors text-sm"
                 >
                   <span>Portal Principal</span>
                   <ExternalLink className="h-4 w-4" />
                 </a>
                 <a
                   href="https://sentinels.copernicus.eu/-/copernicus-open-access-hub-is-closing-copernicus-sentinel-data-access-is-now-fully-available-through-the-copernicus-data-space-ecosystem"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition-colors text-sm"
                 >
                   <span>Sentinel Online</span>
                   <ExternalLink className="h-4 w-4" />
                 </a>
                 <a
                   href="https://dataspace.copernicus.eu/analyse/apis"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition-colors text-sm"
                 >
                   <span>Catálogo de APIs</span>
                   <ExternalLink className="h-4 w-4" />
                 </a>
                 <a
                   href="https://documentation.dataspace.copernicus.eu/"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition-colors text-sm"
                 >
                   <span>Documentação</span>
                   <ExternalLink className="h-4 w-4" />
                 </a>
               </div>
             ) : dataSource.name === "Empresa Brasileira de Pesquisa Agropecuária (EMBRAPA)" ? (
               <div className="flex flex-wrap gap-2">
                 <a
                   href="https://www.agroapi.cnptia.embrapa.br/portal/#loja"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition-colors text-sm"
                 >
                   <span>AgroAPI</span>
                   <ExternalLink className="h-4 w-4" />
                 </a>
                 <a
                   href="https://www.agroapi.cnptia.embrapa.br/portal/assets/docs/agroapi-primeiros-passos.pdf"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition-colors text-sm"
                 >
                   <span>Tutorial</span>
                   <ExternalLink className="h-4 w-4" />
                 </a>
               </div>
             ) : dataSource.name === "Instituto Nacional de Meteorologia (INMET)" ? (
               <div className="flex flex-wrap gap-2">
                 <a
                   href="https://bdmep.inmet.gov.br/"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition-colors text-sm"
                 >
                   <span>Portal Web</span>
                   <ExternalLink className="h-4 w-4" />
                 </a>
                 <a
                   href="https://github.com/fabinhojorge/INMET-API-temperature"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition-colors text-sm"
                 >
                   <span>Biblioteca em Python</span>
                   <ExternalLink className="h-4 w-4" />
                 </a>
                 <a
                   href="https://github.com/rodrigolustosa/R-INMET-download"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition-colors text-sm"
                 >
                   <span>Biblioteca em R</span>
                   <ExternalLink className="h-4 w-4" />
                 </a>
               </div>
             ) : dataSource.name === "Cadastro Ambiental Rural (CAR)" ? (
               <div className="flex flex-wrap gap-2">
                 <a
                   href="https://www.directd.com.br/"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition-colors text-sm"
                 >
                   <span>CAR API da Directd</span>
                   <ExternalLink className="h-4 w-4" />
                 </a>
               </div>
             ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataSourceModal;
