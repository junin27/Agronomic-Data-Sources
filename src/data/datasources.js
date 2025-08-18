export const datasources = [
  {
    id: 'copernicus-cdse',
    name: 'Copernicus Data Space Ecosystem (CDSE)',
    type: 'Satélite',
    category: 'Observação da Terra',
    coverage: 'Global',
    format: 'Raster/Vector',
    updateFrequency: 'Contínua',
    accessibility: 'Público',
    cost: 'Gratuito com cotas',
    website: 'https://dataspace.copernicus.eu/',
    description: 'O Copernicus Data Space Ecosystem é o novo portal unificado da ESA/União Europeia para acesso aberto e instantâneo aos dados do programa Copernicus, oferecendo navegação, download e processamento em nuvem (APIs e ferramentas) e substituindo o antigo Copernicus Open Access Hub (SciHub).',
    dataTypes: ['Imagens de Satélite', 'Dados de Radar', 'Índices de Vegetação', 'Temperatura de Superfície', 'Dados Atmosféricos', 'Modelos Digitais de Elevação'],
    dataContent: {
      overview: 'O CDSE distribui todo o acervo e as novas aquisições das missões Sentinel (S1, S2, S3 em terra/zonas costeiras e S5P), além de dados complementares como Copernicus DEM e mosaicos WorldCover; também agrega coleções federadas e de Missões Contribuintes, além de dados de Serviços Copernicus (ex.: Land, Atmosphere, Climate).',
      agriculturalRelevance: 'Para agricultura, isso significa acesso a radar (S1) útil para umidade de solo/estrutura, óptico multiespectral (S2, 10–60 m) para índices de vegetação (NDVI/EVI via processamento), temperatura de superfície/cores da terra (S3) e camadas temáticas de serviços Copernicus.',
      availability: 'Os produtos Sentinel são gratuitos para uso científico e comercial. A publicação é contínua e muito rápida: os produtos são disponibilizados até ~15 min após o processamento pela ESA, e o ecossistema opera com armazenamento em escala de dezenas de petabytes.',
      missions: [
        'Sentinel-1 (radar para umidade de solo/estrutura)',
        'Sentinel-2 (óptico multiespectral 10-60m para índices de vegetação)',
        'Sentinel-3 (temperatura de superfície/cores da terra)',
        'Sentinel-5P (atmosfera)',
        'Copernicus DEM',
        'WorldCover mosaicos',
        'Coleções federadas e Missões Contribuintes',
        'Dados de Serviços Copernicus (Land, Atmosphere, Climate)'
      ]
    },
    access: {
      methods: [
        'Via navegador para consultar catálogos/baixar',
        'APIs para processamento sob demanda no próprio ambiente do CDSE',
        'Integração direta em GIS'
      ],
      apis: [
        {
          name: 'STAC API',
          description: 'Busca por área/tempo/propriedades - endpoint público do catálogo',
          type: 'REST'
        },
        {
          name: 'OData',
          description: 'Catálogo/metadata legado-compatível - REST para listar produtos e metadados; útil a quem migrou do SciHub',
          type: 'REST'
        },
        {
          name: 'S3',
          description: 'Alto desempenho/paralelismo - acesso a objetos via protocolo S3 para ingestão/bulk em pipelines externos/HPC',
          type: 'S3 Protocol'
        },
        {
          name: 'openEO',
          description: 'Processamento sob demanda com créditos - construa fluxos (visual ou via API) e rode no acervo completo',
          type: 'Processing API'
        },
        {
          name: 'Sentinel Hub APIs',
          description: 'Process, Catalog, OGC WMS/WCS/WMTS - renderização, estatística e tiles prontos (ex.: NDVI) e integração direta em GIS',
          type: 'OGC/REST'
        }
      ],
      gisIntegration: [
        'QGIS: plugin oficial do CDSE/Sentinel Hub para buscar e visualizar imagens direto no QGIS',
        'ArcGIS Pro: conecta via STAC/S3'
      ],
      migrationNote: 'O Copernicus Open Access Hub (SciHub) foi descontinuado em outubro/2023; todo acesso deve ocorrer pelo CDSE.'
    },
    documentation: {
      general: 'Documentação Geral: visão de dados e APIs em um único lugar',
      resources: [
        'Portal principal com navegação e catálogos',
        'Documentação completa de APIs',
        'Guias de migração do SciHub',
        'Tutoriais de processamento openEO',
        'Documentação Sentinel Hub APIs'
      ]
    },
    pricing: {
      model: 'Freemium com cotas',
      details: [
        'O dado em si é livre e gratuito (política open data Copernicus)',
        'Serviços do ecossistema oferecem camadas gratuitas com cotas mensais (requisições, Processing Units, produtos processados, créditos openEO) para uso regular',
        'Ao exceder certos limites, sua velocidade pode ser reduzida ou você precisará ampliar a cota conforme elegibilidade (ex.: usuários de Serviços Copernicus/projetos UE) ou via ofertas comerciais/Marketplace'
      ],
      examples: [
        'Sentinel data "gratuito para todos os usuários" (científicos e comerciais)',
        'Quotas e limitações por conta (requisições/mês e/min, PUs/mês, produtos processados, créditos e volume em 30 dias)',
        'openEO: 10.000 créditos/mês para "Copernicus General"; 20.000/mês para perfis elegíveis'
      ]
    },
    volume: {
      scale: 'Petabytes',
      description: 'O ecossistema opera com armazenamento em escala de dezenas de petabytes',
      updateSpeed: 'Produtos disponibilizados até ~15 min após o processamento pela ESA'
    },
    reliability: 96,
    completeness: 94,
    timeliness: 95,
    accuracy: 93,
    quality: {
      dataQuality: 'Dados oficiais da ESA/União Europeia',
      processing: 'Processamento padronizado e validado',
      reliability: 'Alta confiabilidade - infraestrutura oficial Copernicus'
    },
    dataCollection: {
      considerations: [
        'Migração obrigatória do antigo SciHub para CDSE',
        'Familiarização com novas APIs e interfaces',
        'Configuração de quotas adequadas para uso intensivo',
        'Integração com ferramentas GIS existentes'
      ],
      intelligence: [
        'Monitoramento contínuo via satélites Sentinel',
        'Processamento em tempo quase real',
        'Capacidades de análise temporal e espacial',
        'Integração com serviços Copernicus temáticos'
      ]
    },
    challenges: [
      'Curva de aprendizado para migração do SciHub',
      'Gerenciamento de quotas e limites de uso',
      'Complexidade das múltiplas APIs disponíveis',
      'Necessidade de processamento para produtos derivados'
    ],
    opportunities: [
      'Acesso gratuito a dados de observação da Terra de alta qualidade',
      'Processamento em nuvem sem necessidade de infraestrutura local',
      'Integração direta com ferramentas GIS populares',
      'Capacidades avançadas de análise temporal',
      'Suporte a múltiplos protocolos e padrões'
    ],
    recommendations: [
      'Planejar migração do SciHub com antecedência',
      'Avaliar necessidades de quota baseadas no volume de uso',
      'Explorar capacidades de processamento openEO',
      'Integrar com workflows GIS existentes',
      'Aproveitar APIs especializadas para casos de uso específicos'
    ],
    limitations: [
      'Dependência de quotas para uso intensivo',
      'Possível redução de velocidade ao exceder limites',
      'Necessidade de conhecimento técnico para APIs avançadas',
      'Cobertura limitada a missões Sentinel e dados Copernicus'
    ],
    features: [
      'Portal unificado para todos os dados Copernicus',
      'Múltiplas APIs para diferentes casos de uso',
      'Processamento em nuvem integrado',
      'Integração nativa com GIS',
      'Dados gratuitos com política open data',
      'Atualizações em tempo quase real',
      'Armazenamento em escala de petabytes',
      'Suporte a padrões OGC e STAC'
    ]
  },
  {
    id: 1,
    name: "Empresa Brasileira de Pesquisa Agropecuária (EMBRAPA)",
    description: "A EMBRAPA, como principal instituição de pesquisa agropecuária do Brasil, tem investido na disponibilização de suas vastas informações e modelos por meio de APIs. A EMBRAPA consolidou suas APIs na Plataforma AgroAPI, que visa o mercado de tecnologias de agricultura digital.",
    type: "Institucional",
    category: "Pesquisa",
    coverage: "Nacional",
    format: "API/JSON",
    updateFrequency: "Variável por API",
    accessibility: "Freemium/Gratuito",
    cost: "Freemium com limites",
    dataTypes: ["Agricultura Digital", "Modelos Agronômicos", "Dados Climáticos", "Informações Fitossanitárias", "Bioinformática", "Terminologia Agrícola", "Classificação de Solos", "Monitoramento de Vegetação"],
    establishment: "1973",
    reliability: 95,
    completeness: 90,
    timeliness: 85,
    accuracy: 93,
    website: "https://www.embrapa.br",
    logo: "/logos/embrapa.png",
    platform: {
      name: "Plataforma AgroAPI",
      description: "Plataforma consolidada que oferece informações e modelos gerados pela Embrapa e seus parceiros, abrangendo diversas áreas da agronomia",
      access: "Para começar a usar as APIs, crie uma conta na plataforma AgroAPI. Assim, você pode escolher as APIs do seu interesse e criar aplicações para acessá-las",
      authentication: "Depois de gerar os tokens de acesso para as aplicações, devem ser escolhidas as APIs que serão utilizadas"
    },
    pricing: {
      freemiumAPIs: {
        description: "O acesso às APIs freemium (Agritec, ClimAPI e SATVeg) é gratuito por 1 mês para o máximo de 1.000 requisições por API",
        limitation: "Após o consumo das 1.000 requisições ou o término do período de 1 mês (o que ocorrer primeiro), o acesso será interrompido",
        continuation: "Só poderá continuar utilizando a API mediante assinatura de contrato para pagamento",
        contact: "agroapi@embrapa.br"
      },
      freeAPIs: {
        description: "O acesso às APIs: Agrofit, Agrotermos, Bioinsumos, Blue Star Sting, Responde Agro, SmartSolos Expert e PlantAnnot é gratuito",
        limit: "Volume máximo de 100 mil requisições por mês, sem necessidade de assinatura de contrato"
      }
    },
    apis: [
      {
        name: "AgriTec API",
        status: "DEPRECATED (desde agosto de 2024)",
        description: "Fornece informações e modelos para gerenciamento da produção agrícola, especialmente para culturas como arroz, feijão, milho, soja e trigo",
        dataContent: [
          "Época ideal de plantio com base no Zoneamento Agrícola de Risco Climático (ZARC)",
          "Cultivares mais aptas para 12 culturas (arroz, algodão, amendoim, cevada, feijão, feijão caupi, girassol, mamona, milho, soja, sorgo e trigo)",
          "Recomendações de adubação e correção de solo conforme análise prévia",
          "Estimativas de produtividade para arroz, feijão, milho, soja e trigo baseadas em modelos empíricos regionalizados",
          "Informações de balanço hídrico e condições climáticas antes e durante a safra"
        ],
        volume: "Dados abrangentes para diversas culturas e sistemas de produção, com informações por decêndio para épocas de plantio",
        quality: "Baseado em metodologias confiáveis como ZARC, Registro Nacional de Cultivares (RNC) do MAPA, e modelos empíricos ajustados para cada região do Brasil",
        benefits: "Beneficia agricultores, cooperativas, assistência técnica, bancos e seguradoras",
        pricing: "Freemium - 1.000 requisições em 1 mês gratuito"
      },
      {
        name: "ClimAPI",
        status: "Ativa",
        description: "Provê dados agrometeorológicos de previsão do tempo para todo o território nacional, sendo ideal para agricultura de precisão e suporte ao planejamento agrícola",
        dataContent: [
          "17 variáveis climáticas",
          "Temperatura do ponto de orvalho a 2m",
          "Precipitação total",
          "Velocidade e componentes do vento",
          "Cobertura de nuvens (alta, média e baixa)",
          "Evaporação potencial",
          "Umidade relativa e umidade volumétrica do solo (0‑10cm, 10‑40cm, 40cm‑1m)",
          "Temperaturas máxima, mínima e da superfície",
          "Duração da luz solar"
        ],
        technicalSpecs: {
          baseData: "Baseado no Global Forecast System (GFS) da NOAA",
          spatialResolution: "Maior precisão espacial e temporal (latitude/longitude e áreas de ~25 km)",
          updateFrequency: "Atualizados a cada 6 horas, fornecendo quatro atualizações diárias",
          forecast: "Previsões de até 10 dias à frente e histórico de dados para os 10 dias anteriores"
        },
        useCases: "Planejamento agrícola, identificando janelas para voo de drones, plantio, pulverização, colheita, além de apoio logístico",
        pricing: "Freemium - 1.000 requisições em 1 mês gratuito"
      },
      {
        name: "SATVeg API",
        status: "DEPRECATED (desde 27 de setembro de 2024)",
        description: "Derivada do Sistema de Análise Temporal da Vegetação (SATVeg), oferece curvas temporais dos índices vegetativos NDVI e EVI",
        dataContent: [
          "Índices NDVI (Normalized Difference Vegetation Index) e EVI (Enhanced Vegetation Index)",
          "Baseado em imagens do sensor MODIS (produtos MOD13Q1 e MYD13Q1) dos satélites Terra e Aqua",
          "Cobertura geográfica: Brasil e toda a América do Sul",
          "Dados desde o ano 2000 até a data mais recente disponível",
          "Resolução temporal de 16 dias e espacial de 250 metros"
        ],
        volume: "Série temporal completa desde fevereiro de 2000 (Terra) e julho de 2002 (Aqua), pixels de 250m x 250m (6,25 hectares)",
        quality: "Baseado em imagens multiespectrais da NASA e repositório oficial da LP DAAC, qualidade radiométrica de 12 bits",
        features: "Funcionalidades de pré-filtragem e suavização das séries temporais (FlatBottom, Wavelet–Coiflet4 e Savitzky–Golay)",
        pricing: "Freemium - 1.000 requisições em 1 mês gratuito"
      },
      {
        name: "AgroFit API",
        status: "Ativa",
        description: "Banco de dados completo sobre produtos fitossanitários registrados no Brasil, incluindo defensivos agrícolas, agrotóxicos, bioinsumos e outros registros do MAPA",
        dataContent: [
          "Produtos formulados e técnicos",
          "Pragas (insetos e doenças) e plantas daninhas",
          "Ingredientes ativos, modo de ação, formulação, e técnica de aplicação",
          "Titular do registro, marca comercial",
          "Classificações toxicológicas, ambientais, indicação para agricultura orgânica",
          "Inflamabilidade, corrosividade",
          "Documentação associada (data de inclusão, tipo de documento e link)"
        ],
        dataSource: "Dados obtidos diretamente do MAPA, ANVISA e IBAMA",
        quality: "Dados considerados corretos e seguros, contribuindo para evitar uso inadequado de agrotóxicos",
        pricing: "Gratuito - até 100 mil requisições por mês, sem necessidade de contrato"
      },
      {
        name: "AgroTermos API",
        status: "Ativa",
        description: "Plataforma de organização e qualificação terminológica e conceitual do conhecimento agropecuário, baseada em vocabulários controlados robustos",
        dataContent: [
          "Cerca de 55 mil termos (algumas fontes mencionam mais de 248 mil)",
          "Baseado em vocabulários como Thesagro e Agrovoc",
          "6 serviços principais: Consulta Exata, Consulta Parcial, Consulta por ID, Consulta com Relacionamentos, Consulta de Todas as Relações, Consulta de Relação Exata"
        ],
        technology: "Utiliza Engenharia da Informação, PNL, Linguística de Corpus e modelagem semântica",
        applications: "Processamento de Linguagem Natural (PLN), mineração de texto, indexação semântica, aprendizado de máquina, web semântica",
        pricing: "Gratuito - até 100 mil requisições por mês"
      },
      {
        name: "Bioinsumos API",
        status: "Ativa (v2 - v1 deprecated)",
        description: "Informações técnicas sobre bioinsumos registrados no MAPA, incluindo inoculantes e produtos para controle de pragas",
        dataContent: [
          "Listagem completa de produtos biológicos para controle de pragas",
          "Informações de inoculantes: identificação, registro, fornecedor, tipo, espécie, garantia",
          "Dados como número de registro, marca comercial, titular, classe agronômica, formulação",
          "Classificação toxicológica e ambiental, aprovação para agricultura orgânica"
        ],
        dataSource: "Dados oficiais do MAPA, incluindo base AGROFIT",
        pricing: "Gratuito - até 100 mil requisições por mês"
      },
      {
        name: "BlueStar Sting API",
        status: "Ativa",
        description: "Interface para dados sobre descritores físico-químicos, geométricos, espaciais e estruturais de aminoácidos em estruturas proteicas do Protein Data Bank (PDB)",
        dataContent: [
          "Área de superfície acessível ao solvente por resíduo",
          "Identificação atômica e área acessível dos átomos",
          "Tipos de cadeia e contatos intra/intercadeias",
          "Curvatura dos resíduos em nível atômico",
          "Densidade local usando sondas esféricas",
          "Estrutura secundária, distâncias estruturais, ângulos conformacionais"
        ],
        applications: "Biologia estrutural computacional, desenvolvimento de biofármacos, controle biotecnológico de pragas",
        coverage: "14 tipos de contatos intra e intercadeias, 12 tipos de contatos entre cadeias proteicas e moléculas de DNA/RNA",
        pricing: "Gratuito - até 100 mil requisições por mês"
      },
      {
        name: "Responde Agro API",
        status: "Ativa",
        description: "Mecanismo de busca para consultar o conteúdo da série de publicações Coleção 500 Perguntas 500 Respostas da Embrapa",
        dataContent: [
          "Pares pergunta–resposta extraídos das obras indexadas",
          "Conteúdo em formato HTML com imagens codificadas em Base64",
          "Temas relacionados à agricultura e pecuária",
          "Perguntas de produtores, cooperativas respondidas por pesquisadores Embrapa"
        ],
        features: [
          "Busca por pergunta específica dentro de livro específico",
          "Busca por texto em livro ou toda coleção com paginação",
          "Recurso de autocompletar",
          "Listagem de identificadores de livros indexados"
        ],
        pricing: "Gratuito - até 100 mil requisições por mês"
      },
      {
        name: "SmartSolos Expert API",
        status: "Ativa",
        description: "Infraestrutura para classificação de perfis de solos no Brasil, utilizando sistema especialista baseado na 5ª edição do Sistema Brasileiro de Classificação de Solos (SiBCS)",
        dataContent: [
          "Classificação automática de perfis de solo",
          "Validação de classificações prévias",
          "Níveis: ORDEM, SUBORDEM, GDE_GRUPO e SUBGRUPO",
          "Dados de horizontes: profundidades, textura, cor, pH, estrutura, nutrientes"
        ],
        technology: "Sistema implementado em SWI-Prolog, comunicação via JSON",
        applications: "Ensino de pedologia, padronização de dados de solos, curadoria de bases georreferenciadas",
        baseSystem: "5ª edição do SiBCS (2018) - sistema taxonômico oficial do Brasil",
        pricing: "Gratuito - até 100 mil requisições por mês"
      },
      {
        name: "PlantAnnot API",
        status: "Ativa",
        description: "Acesso a informações sobre genes, transcritos e proteínas de mais de 50 espécies de plantas, desenvolvida para identificar proteínas de função desconhecida (PUFs)",
        dataContent: [
          "Localização cromossômica, referências externas (DBxRefs), sequências e artigos",
          "Anotações funcionais: similaridade (BLAST, Diamond), ontologia genética (Gene Ontology)",
          "Domínios proteicos (InterPro)",
          "Expressão gênica em diferentes condições experimentais",
          "Grupos de ortólogos entre espécies"
        ],
        coverage: "Mais de 50 espécies de plantas, com expressão gênica para Arabidopsis thaliana, Soja, Arroz e Milho",
        applications: "Identificação de PUFs ligados a estresses abióticos, melhoramento genético, resiliência climática",
        sdks: "Disponível para Java e Android, documentação Swagger",
        pricing: "Gratuito - até 100 mil requisições por mês"
      }
    ],
    generalRecommendations: [
      "Verificar status atual das APIs (algumas estão deprecated)",
      "Planejar volume de uso conforme modelo de precificação",
      "Implementar caching inteligente para otimizar performance",
      "Modularizar integrações por funcionalidade",
      "Monitorar contratos e versões das APIs",
      "Criar fallbacks para APIs deprecated ou instáveis",
      "Validar dados e realizar testes periódicos",
      "Manter contato com equipes técnicas da Embrapa"
    ],
    opportunities: [
      "Rapidez no desenvolvimento de soluções agrodigitais",
      "Redução da necessidade de processamento próprio de dados",
      "Alta compatibilidade com apps de agricultura de precisão",
      "Cobertura estruturada de todos os biomas brasileiros",
      "Dados amplamente validados e integráveis",
      "Facilita desenvolvimento ágil de aplicações digitais",
      "Suporte a múltiplas áreas: clima, solo, vegetação, fitossanidade, bioinformática"
    ],
    challenges: [
      "APIs com status deprecated (AgriTec, SATVeg)",
      "Limitações de uso gratuito exigem planejamento",
      "Documentação pública limitada para algumas APIs",
      "Necessidade de conhecimento técnico específico para algumas APIs",
      "Dependência de atualizações e políticas da Embrapa"
    ],
    keyContacts: [
      "agroapi@embrapa.br - Suporte geral da plataforma",
      "cnptia.climapi@embrapa.br - ClimAPI",
      "cnptia.satveg@embrapa.br - SATVeg",
      "cnptia.agrofit@embrapa.br - AgroFit",
      "cnptia.bioinsumos@embrapa.br - Bioinsumos",
      "cnptia.smartsolosexpert@embrapa.br - SmartSolos Expert",
      "gtermos@embrapa.br - AgroTermos (negócios)",
      "leandro.oliveira@embrapa.br - AgroTermos (técnico)",
      "glauber.vaz@embrapa.br - Responde Agro",
      "mauricio.mudadu@embrapa.br - PlantAnnot (negócios)",
      "adhemar.zerlotini@embrapa.br - PlantAnnot (técnico)"
    ],
    features: [
      "Plataforma AgroAPI consolidada com múltiplas APIs especializadas",
      "Modelo freemium com generosos limites gratuitos",
      "Cobertura abrangente: clima, vegetação, solo, fitossanidade, bioinformática",
      "APIs RESTful com autenticação por token",
      "Ambientes sandbox e produção disponíveis",
      "SDKs disponíveis para algumas APIs (Java, Android)",
      "Documentação interativa (Swagger) para algumas APIs",
      "Dados baseados em metodologias científicas rigorosas",
      "Integração com órgãos oficiais (MAPA, NOAA, NASA)",
      "Suporte a caching e otimizações de performance"
    ],
    limitations: [
      "Algumas APIs estão deprecated (AgriTec desde agosto 2024, SATVeg desde setembro 2024)",
      "Limitações de volume para uso gratuito",
      "Necessidade de contrato pago para uso intensivo de APIs freemium",
      "Documentação técnica limitada publicamente para algumas APIs",
      "Dependência de tokens e autenticação para acesso"
    ]
  },
  {
    id: 2,
    name: "Instituto Brasileiro de Geografia e Estatística (IBGE)",
    description: "O IBGE é uma das principais fontes de estatísticas e informações geocientíficas do Brasil, oferecendo uma gama de dados econômicos, sociais e territoriais.",
    type: "Governamental",
    category: "Estatística",
    coverage: "Nacional",
    format: "JSON/XML/ODS/CSV",
    updateFrequency: "Mensal",
    accessibility: "Público",
    cost: "Gratuito",
    dataTypes: ["Produção Agrícola", "Pecuária", "Produção Florestal", "Pesca", "Aquicultura", "Dados Geográficos", "Informações Econômico-Financeiras", "Emprego"],
    establishment: "1936",
    reliability: 98,
    completeness: 95,
    timeliness: 90,
    accuracy: 96,
    website: "https://www.ibge.gov.br",
    logo: "/logos/ibge.png",
    dataContent: {
      overview: "O IBGE disponibiliza informações econômico-financeiras, de produção, bens e serviços consumidos, e emprego, específicas das atividades da Agricultura, Pecuária, Produção Florestal, Pesca e Aquicultura.",
      mainProducts: [
        {
          name: "Levantamento Sistemático da Produção Agrícola (LSPA)",
          description: "Fornece previsões de safras agrícolas dos principais produtos, com revisões mensais"
        },
        {
          name: "Pesquisas de Estoques, Leite, Ovos de Galinha, Couro e Abate de Animais",
          description: "Detalham volumes e características da produção pecuária"
        },
        {
          name: "Produção da Extração Vegetal e da Silvicultura (PEVS)",
          description: "Quantidade e valor da produção de florestas plantadas e nativas por município"
        },
        {
          name: "Pesquisa da Pecuária Municipal (PPM)",
          description: "Quantidade e valor da produção de origem animal e efetivos das principais espécies por município"
        },
        {
          name: "Produção Agrícola Municipal (PAM)",
          description: "Inclui quantidade, área colhida, rendimento médio e valor da produção agrícola por município"
        },
        {
          name: "Censo Agropecuário",
          description: "Abrange número e área de estabelecimentos, atividades agropecuárias e características do produtor"
        }
      ],
      geographicData: "Dados geográficos como divisões regionais, malhas territoriais e redes geodésicas"
    },
    access: {
      description: "O IBGE oferece acesso programático aos seus dados através da API SIDRA (Sistema IBGE de Recuperação Automática)",
      apiName: "API SIDRA",
      apiDescription: "Sistema IBGE de Recuperação Automática",
      formats: ["JSON", "ODS", "XML"],
      authentication: "Token de autenticação pode ser necessário, seguindo protocolo OAuth 2.0",
      publicAccess: "Dados disponíveis para consulta pública na área de Mapas do site",
      libraries: [
        {
          name: "sidrar",
          language: "R",
          description: "Interface flexível para consultas a tabelas, variáveis, períodos e níveis geográficos"
        },
        {
          name: "sidrapy", 
          language: "Python",
          description: "Interface flexível para consultas a tabelas, variáveis, períodos e níveis geográficos"
        }
      ]
    },
    pricing: {
      model: "Gratuito",
      description: "Como o IBGE é uma instituição pública, os dados disponibilizados através do Portal de Dados Abertos são considerados públicos e de acesso livre e gratuito. O uso da API SIDRA para consulta e extração de dados não envolve nenhuma taxa ou cobrança."
    },
    qualityAndVolume: {
      datasets: [
        "Levantamento Sistemático da Produção Agrícola (LSPA)",
        "Pesquisa da Pecuária Municipal (PPM)",
        "Produção da Extração Vegetal e da Silvicultura (PEVS)",
        "Produção Agrícola Municipal (PAM)",
        "Censo Agropecuário"
      ],
      dataScope: "Informações sobre produção, área colhida, rendimento médio, valor da produção, efetivos de animais, práticas agrícolas, entre outros aspectos",
      qualityAssurance: [
        "Metodologias padronizadas",
        "Processos de validação e verificação", 
        "Adoção de normas internacionais",
        "Publicação de relatórios técnicos e notas metodológicas"
      ]
    },
    dataCollectionConsiderations: {
      methodology: "O IBGE utiliza métodos amostrais e censitários, com amostras representativas por município, garantindo a precisão dos dados",
      frequency: "Pesquisas como o LSPA são realizadas mensalmente, proporcionando atualizações frequentes",
      geographicCoverage: "Os dados são coletados em nível municipal, permitindo análises detalhadas por região"
    },
    challenges: [
      "Orçamentários: Cortes no orçamento podem afetar a realização de grandes operações, como censos e pesquisas de larga escala",
      "Cobertura Completa: Garantir a cobertura de todos os estabelecimentos agropecuários, especialmente em áreas remotas, pode ser desafiador"
    ],
    opportunities: [
      "Integração de Dados: A colaboração com outras instituições e a integração de diferentes bases de dados podem enriquecer as análises e ampliar a compreensão do setor agropecuário",
      "Tecnologia e Inovação: O uso de tecnologias emergentes, como inteligência artificial e aprendizado de máquina, pode aprimorar a análise e previsão de dados",
      "Abertura de Dados: A contínua promoção da cultura de dados abertos facilita o acesso e o uso das informações pela sociedade e pesquisadores"
    ],
    recommendations: [
      "Utilização de APIs: Integrar os dados do IBGE com outras fontes por meio de APIs facilita a atualização e a consistência das informações",
      "Padronização de Metadados: Adotar padrões de metadados, como o Perfil de Metadados Geoespaciais do Brasil (Perfil MGB), assegura a interoperabilidade entre diferentes sistemas",
      "Capacitação: Investir em treinamento e capacitação de profissionais para o uso eficiente das ferramentas e dados disponíveis",
      "Parcerias Institucionais: Estabelecer parcerias com outras instituições de pesquisa e governo para ampliar a cobertura e a qualidade dos dados"
    ],
    features: [
      "Portal de Dados Abertos com acesso livre e gratuito",
      "API SIDRA para acesso programático",
      "Bibliotecas sidrar (R) e sidrapy (Python) disponíveis",
      "Dados geográficos com divisões regionais e malhas territoriais",
      "Metodologias padronizadas e normas internacionais",
      "Granularidade municipal para análises regionalizadas",
      "Atualizações mensais para pesquisas como LSPA",
      "Cobertura completa do território nacional",
      "Relatórios técnicos e notas metodológicas detalhadas",
      "Processos rigorosos de validação e verificação"
    ],
    limitations: [
      "Desafios orçamentários podem afetar grandes operações censitárias",
      "Dificuldades de cobertura em áreas remotas",
      "Dependência de recursos governamentais para manutenção da qualidade"
    ],
    keyStrengths: [
      "Ampla gama de dados agrícolas e pecuários",
      "Acesso via API SIDRA facilita integração",
      "Granularidade municipal permite análises regionalizadas",
      "Atualização mensal de previsões de safra para tomada de decisões em tempo hábil",
      "Fonte fundamental para análises de tendências de produção e estimativas de safras",
      "Caracterização socioeconômica completa do setor agropecuário"
    ]
  },
  {
    id: 3,
    name: "Instituto Nacional de Meteorologia (INMET)",
    description: "O INMET é o órgão responsável pela previsão do tempo e pela disponibilização de dados meteorológicos no Brasil. Oferece dados meteorológicos diários históricos através do BDMEP (Banco de Dados Meteorológicos para Ensino e Pesquisa) com milhões de informações de estações meteorológicas convencionais desde 1961.",
    type: "Governamental",
    category: "Meteorologia",
    coverage: "Nacional",
    format: "CSV",
    updateFrequency: "Trimestral (atualização a cada 90 dias)",
    accessibility: "Público",
    cost: "Gratuito",
    dataTypes: ["Precipitação", "Radiação Global", "Temperatura do Ar (bulbo seco, máxima, mínima)", "Umidade Relativa do Ar (horária, máxima, mínima)", "Velocidade e Rajada Máxima do Vento", "Pressão Atmosférica", "Temperatura do Ponto de Orvalho"],
    establishment: "1909",
    reliability: 92,
    completeness: 88,
    timeliness: 95,
    accuracy: 91,
    website: "https://www.inmet.gov.br",
    logo: "/logos/inmet.png",
    mainDatabase: {
      "name": "BDMEP - Banco de Dados Meteorológicos para Ensino e Pesquisa",
      "description": "Milhões de informações de estações meteorológicas convencionais da rede INMET, referentes a medições diárias desde 1961",
      "coverage": "Dados diários históricos desde 1961 até julho de 2025",
      "updateFrequency": "A cada 90 dias",
      "variables": "Precipitação, radiação global, temperatura do ar, umidade relativa, velocidade do vento, pressão atmosférica, temperatura do ponto de orvalho"
    },
    features: [
      "BDMEP com milhões de registros diários desde 1961",
      "Dados meteorológicos históricos de longo prazo cruciais para modelos agronômicos",
      "Estações meteorológicas convencionais e automáticas da rede INMET",
      "Variáveis meteorológicas padronizadas pela Organização Meteorológica Mundial (OMM)",
      "Cobertura temporal até julho de 2025 com atualizações trimestrais",
      "Download direto pelo portal BDMEP em formato CSV",
      "Utilização de imagens de satélite para monitoramento meteorológico",
      "Modelo Brasileiro de Alta Resolução (MBAR) para previsões",
      "Sistema de modelagem COSMO para previsão do tempo e clima",
      "Protocolos técnicos estabelecidos pela OMM para consistência internacional",
      "Dados essenciais para análise de risco, zoneamento e previsão de produtividade agrícola",
      "Séries temporais climáticas para modelos agronômicos"
    ],
    accessAndDocumentation: {
      "primaryAccess": "Portal BDMEP para download direto dos dados",
      "dataFormats": ["CSV"],
      "officialAPI": "Não disponível - ausência de API oficial para acesso programático",
      "unofficialAPIs": [
        "API não oficial no Repositório do GitHub em Python para extrair dados históricos de temperatura do BDMEP",
        "Biblioteca em R que permite o download de dados meteorológicos de estações do INMET"
      ],
      "limitations": "Falta de API oficial pode ser limitador para aplicações que exigem alta frequência de atualização ou acesso direto em tempo real"
    },
    pricing: {
      "model": "Totalmente gratuito",
      "description": "O INMET é um órgão público e disponibiliza todos os seus dados para a população sem nenhum custo",
      "includes": "Acesso ao BDMEP e todas as informações meteorológicas disponíveis no portal",
      "communityAPIs": "APIs não oficiais do GitHub também são gratuitas por serem projetos da comunidade"
    },
    volume: {
      "records": "Milhões de registros diários de estações meteorológicas convencionais",
      "timespan": "Desde 1961 até julho de 2025",
      "stations": "Rede de estações meteorológicas convencionais da rede INMET",
      "updateCycle": "Atualizações trimestrais (a cada 90 dias)",
      "variables": "Precipitação, radiação global, temperatura, umidade, vento, pressão atmosférica"
    },
    qualityAssurance: [
      "Dados coletados conforme as normas da Organização Meteorológica Mundial (OMM)",
      "Padronização internacional garantindo consistência global",
      "Protocolos técnicos estabelecidos pela OMM para consistência e comparabilidade",
      "BDMEP reconhecido como fonte confiável de dados meteorológicos",
      "Qualidade pode variar devido a fatores como manutenção das estações e condições climáticas adversas",
      "Sistemas de validação e verificação dos dados coletados"
    ],
    dataCollection: [
      "Rede de estações meteorológicas convencionais e automáticas",
      "Utilização de imagens de satélite para monitoramento meteorológico",
      "Protocolos técnicos estabelecidos pela Organização Meteorológica Mundial (OMM)",
      "Sistemas de modelagem numérica para previsão do tempo e clima",
      "Modelo Brasileiro de Alta Resolução (MBAR)",
      "Sistema de modelagem COSMO",
      "Medições diárias padronizadas seguindo normas internacionais",
      "Coleta visando garantir consistência e comparabilidade dos dados"
    ],
    intelligence: [
      "Disponibilidade de dados históricos de longo prazo crucial para modelos agronômicos",
      "Séries temporais climáticas essenciais para análise de risco agrícola",
      "Dados fundamentais para zoneamento climático e agrícola",
      "Informações meteorológicas para previsão de produtividade agrícola",
      "Sistemas de previsão do tempo e clima utilizando modelagem numérica",
      "Dados utilizados pelos modelos MBAR e COSMO para gerar previsões",
      "Suporte a tomada de decisões no setor agropecuário",
      "Base para estudos climáticos e pesquisas meteorológicas"
    ],
    challenges: [
      "Cobertura espacial limitada - rede de estações pode apresentar lacunas em áreas remotas ou de difícil acesso",
      "Necessidade de manutenção constante das estações para garantir a precisão dos dados coletados",
      "Integração de dados de diferentes fontes e formatos pode ser desafiadora",
      "Ausência de API oficial para acesso direto e em tempo real dos dados brutos",
      "Falta de API oficial pode ser limitador para aplicações que exigem alta frequência de atualização",
      "Qualidade dos dados pode variar devido a condições climáticas adversas",
      "Necessidade de sistemas robustos de processamento e armazenamento para integração",
      "Dependência de APIs não oficiais da comunidade para acesso programático"
    ],
    opportunities: [
      "Expansão da rede de estações meteorológicas para melhorar a cobertura espacial",
      "Melhoria da cobertura espacial e da precisão das previsões meteorológicas",
      "Estabelecimento de parcerias com instituições de pesquisa e empresas de tecnologia",
      "Aprimoramento dos sistemas de coleta e processamento de dados",
      "Investimento em treinamento e capacitação dos profissionais envolvidos",
      "Capacitação profissional na coleta e análise de dados meteorológicos",
      "Desenvolvimento de novas tecnologias para monitoramento meteorológico",
      "Modernização da infraestrutura de estações meteorológicas"
    ],
    recommendations: [
      "Desenvolvimento de APIs oficiais para facilitar o acesso e a integração dos dados em tempo real",
      "Criação de interfaces de programação de aplicativos (APIs) oficiais",
      "Adoção de padrões internacionais para garantir a interoperabilidade dos dados",
      "Padronização de dados com outras plataformas e sistemas",
      "Desenvolvimento de plataformas interativas de visualização de dados",
      "Criação de plataformas para facilitar a interpretação e uso das informações por diversos públicos",
      "Fomento à colaboração interinstitucional entre diferentes instituições",
      "Colaboração entre instituições governamentais, acadêmicas e privadas",
      "Promoção da troca de dados e conhecimentos entre organizações",
      "Facilitação da integração dos dados meteorológicos em sistemas agropecuários"
    ],
    limitations: [
      "Ausência de API oficial para acesso programático direto aos dados",
      "Dependência de APIs não oficiais desenvolvidas pela comunidade",
      "Lacunas de cobertura em áreas remotas ou de difícil acesso",
      "Atualização trimestral pode não atender necessidades de aplicações em tempo real",
      "Necessidade de manutenção constante das estações para garantir precisão",
      "Integração complexa de dados de diferentes fontes e formatos",
      "Limitações para aplicações que exigem alta frequência de atualização",
      "Qualidade dos dados pode ser afetada por condições climáticas adversas",
      "Falta de padronização para integração com outros sistemas"
    ]
  },
  {
    id: 4,
    name: "Companhia Nacional de Abastecimento (CONAB)",
    description: "A CONAB é responsável por monitorar e divulgar dados estratégicos sobre a produção agrícola e o abastecimento no país.",
    type: "Governamental",
    category: "Abastecimento",
    coverage: "Nacional",
    format: "Shapefile/XLS/PDF",
    updateFrequency: "Mensal (grãos e fibras) / Trimestral (café e cana-de-açúcar)",
    accessibility: "Público",
    cost: "Gratuito",
    dataTypes: ["Safras", "Preços Agropecuários", "Custos de Produção", "Estoques Públicos", "Mapeamentos Agrícolas", "Análises Fitotécnicas", "Análises Econômicas"],
    establishment: "1990",
    reliability: 93,
    completeness: 89,
    timeliness: 88,
    accuracy: 90,
    website: "https://www.conab.gov.br",
    logo: "/logos/conab.png",
    mainContent: {
      "grainAndFiberSurveys": "Levantamentos mensais de grãos e fibras incluindo análises fitotécnicas e econômicas, área plantada, produtividade, produção",
      "coffeeAndSugarcaneSurveys": "Levantamentos trimestrais de café e cana-de-açúcar",
      "agriculturalMonitoring": "Monitoramento agrícola e prognóstico climático",
      "marketAnalysis": "Análises de oferta, demanda e mercado"
    },
    additionalData: [
      "Preços de commodities agrícolas e cotações de mercado com séries históricas",
      "Séries históricas e análises de rentabilidade para diversas culturas",
      "Dados sobre abastecimento e operações de comercialização",
      "Distribuição geográfica de cultivos auxiliando estimativa de área e produtividade"
    ],
    features: [
      "Portal de Informações Agropecuárias",
      "Levantamento e avaliação das safras brasileiras",
      "Preços Agropecuários com séries históricas",
      "Custos de Produção e análises de rentabilidade",
      "Estoques Públicos e Operações de Comercialização",
      "Mapeamentos Agrícolas em formato Shapefile",
      "Base de dados Conab/Prohort com 117 frutas e 123 hortaliças",
      "Mais de mil produtos considerando variedades"
    ],
    accessAndDocumentation: {
      "primaryAccess": "Portal de Informações Agropecuárias via download direto",
      "governmentAPI": "API de Dados do Portal da Transparência (genérica, requer token)",
      "mappingFormats": "Shapefiles para mapeamentos agrícolas",
      "dataFormats": "Planilhas para séries históricas e dados de produção",
      "internalAPI": "ADP-JAVA (TRL 4 - não pública, uso interno)"
    },
    dataCollectionSources: [
      "Pesquisas diretas com produtores",
      "Sensoriamento remoto",
      "Uso de pacotes tecnológicos",
      "Intenção de plantio",
      "Médias históricas",
      "Rede de informantes",
      "Acompanhamento agrometeorológico"
    ],
    qualityAssurance: [
      "Processamento utilizando métodos estatísticos",
      "Processo revisional para validação dos dados",
      "Garantia de confiabilidade e consistência das informações",
      "Integração com outras fontes como Observatório da Agropecuária Brasileira"
    ],
    volume: {
      "fruits": "117 frutas catalogadas",
      "vegetables": "123 hortaliças catalogadas",
      "totalProducts": "Mais de mil produtos considerando variedades",
      "coverage": "Dados abrangentes de safras, preços, custos e estoques"
    },
    challenges: [
      "Integração de dados de diferentes fontes devido a diferenças nos formatos e padrões",
      "Falta de comunicação entre diferentes sistemas e equipamentos de coleta",
      "Gestão de recursos limitados",
      "Mudanças políticas impactam atuação e eficácia",
      "Necessidade de capacitação contínua",
      "Ausência de API pública robusta exige dependência de downloads diretos",
      "Possível necessidade de web scraping para dados atualizados",
      "Complexidade aumentada para integração e processamento"
    ],
    opportunities: [
      "Adoção de tecnologias avançadas para integração e gerenciamento de dados",
      "Melhoria da eficiência e qualidade das informações",
      "Colaboração com outras instituições",
      "Participação em iniciativas de governo aberto",
      "Ampliação do acesso e utilização dos dados"
    ],
    recommendations: [
      "Desenvolvimento de APIs públicas robustas e dedicadas para dados agronômicos",
      "Adoção de padrões de dados abertos e interoperáveis",
      "Investimento em capacitação contínua para servidores",
      "Estabelecimento de parcerias com outras instituições",
      "Participação em iniciativas de governo aberto",
      "Padronização de dados para facilitar integração e compartilhamento"
    ],
    limitations: [
      "Ausência de API pública robusta e dedicada",
      "Dependência de downloads diretos de arquivos",
      "Possível necessidade de web scraping para dados atualizados",
      "Complexidade aumentada para integração com projetos de inteligência agronômica",
      "API interna (ADP-JAVA) não disponível para uso público externo"
    ]
  },
  {
    id: 5,
    name: "Cadastro Ambiental Rural (CAR)",
    description: "O Cadastro Ambiental Rural (CAR) é um registro público eletrônico obrigatório para todos os imóveis rurais no Brasil, integrando informações ambientais de propriedades e posses rurais para controle, monitoramento e planejamento ambiental.",
    type: "Governamental",
    category: "Ambiental",
    coverage: "Nacional",
    format: "API/CSV/Restrito",
    updateFrequency: "Contínuo",
    accessibility: "Restrito - Informação Pessoal",
    cost: "Restrito (API terceiros: Pago)",
    dataTypes: ["Áreas de Preservação Permanente (APP)", "Áreas de Uso Restrito", "Reserva Legal", "Remanescentes de Vegetação Nativa", "Áreas Consolidadas", "Georreferenciamento", "Informações Ambientais"],
    establishment: "2012",
    reliability: 75,
    completeness: 60,
    timeliness: 70,
    accuracy: 65,
    website: "https://www.car.gov.br/publico/imoveis/index",
    logo: "/logos/car.png",
    officialDataset: {
      "platform": "Portal de Dados Abertos do Governo Federal",
      "classification": "Não Aberto - Restrito (Informação Pessoal)",
      "availableData": [
        "Metadados em CSV sobre número de imóveis por município/UF",
        "Dados de sobreposição de registros",
        "Informações sobre temas ambientais",
        "Estatísticas agregadas"
      ],
      "restriction": "Acesso direto aos dados detalhados é restrito devido à natureza das informações pessoais envolvidas"
    },
    dataContent: [
      "Informações georreferenciadas do perímetro do imóvel",
      "Áreas de Preservação Permanente (APP)",
      "Áreas de uso restrito",
      "Reserva Legal",
      "Remanescentes de vegetação nativa",
      "Áreas consolidadas",
      "Áreas de interesse social e de utilidade pública",
      "Localização de vegetação nativa"
    ],
    thirdPartyAccess: {
      "provider": "API CAR da Directd",
      "description": "API de terceiros que oferece acesso a dados cadastrais e ambientais do imóvel, situação do cadastro e histórico de retificações",
      "authentication": "TOKEN obrigatório",
      "formats": ["JSON", "PDF"],
      "additionalServices": "Geração de comprovantes em PDF com custo adicional"
    },
    pricing: {
      "model": "Por consulta com volume escalonado",
      "costPerQuery": "R$ 0,05 a R$ 0,20 (dependendo do volume mensal de requisições)",
      "minimumMonthlySpend": "R$ 100,00 (franquia mínima mensal)",
      "additionalServices": "Demonstrativo do CAR em PDF: R$ 0,10 por consulta",
      "prepaidModel": "Modelo pré-pago disponível com créditos a partir de R$ 50,00",
      "volumeDiscounts": "Valor unitário diminui conforme aumenta o volume mensal de uso"
    },
    volumeAssessment: {
      "registrationMandatory": "Registro obrigatório para todos os imóveis rurais no Brasil",
      "totalRegistered": "Aproximadamente 6.503.840 imóveis (até abril de 2022)",
      "totalArea": "Cerca de 618 milhões de hectares cadastrados",
      "praAdhesion": "52% solicitaram adesão ao Programa de Regularização Ambiental (PRA)",
      "environmentalLiabilities": "Indicativo de passivos ambientais a serem recompostos"
    },
    qualityAssessment: {
      "variableQuality": "Qualidade dos dados é variável com desafios significativos",
      "analysisRate": "Apenas 3,4% dos cadastros foram analisados até 2020",
      "analysisChallenge": "Necessidade de verificação manual é demorada e custosa",
      "dataInconsistencies": [
        "Sobreposições de áreas",
        "Registros em zonas urbanas",
        "Informações desatualizadas"
      ],
      "precisionCompromise": "Inconsistências comprometem a precisão das informações"
    },
    dataCollectionConsiderations: {
      "georeferencingRequirements": [
        "Dados geoespaciais precisos e atualizados",
        "Tecnologias como GPS de alta precisão",
        "Imagens de satélite de alta resolução"
      ],
      "reliableDataSources": [
        "Sistema de Cadastro Ambiental Rural (SICAR)",
        "Cadastro Nacional de Imóveis Rurais (CNIR)",
        "Garantia de consistência e integridade dos dados"
      ]
    },
    intelligenceRecommendations: {
      "automatedAnalysis": [
        "Implementar ferramentas de análise automatizada",
        "Acelerar processo de validação dos dados",
        "Reduzir custos e aumentar eficiência"
      ],
      "dataIntegration": [
        "Integrar dados do CAR com outras bases ambientais e fundiárias",
        "Obter visão mais abrangente e precisa da situação ambiental",
        "Melhorar qualidade das análises de imóveis rurais"
      ]
    },
    challenges: [
      "Análise manual é processo demorado e oneroso, limitando capacidade de análise em larga escala",
      "Inconsistências nos dados com sobreposições de áreas, registros em zonas urbanas e informações desatualizadas",
      "Falta de capacitação técnica em alguns estados e municípios dificulta implementação eficaz",
      "Apenas 3,4% dos cadastros analisados até 2020 devido à complexidade da verificação",
      "Acesso restrito aos dados detalhados limita uso para inteligência agronômica",
      "Necessidade de recorrer a APIs de terceiros ou dados agregados"
    ],
    opportunities: [
      "Desenvolvimento e implementação de ferramentas de análise automatizada podem melhorar significativamente a eficiência na validação",
      "Estabelecer parcerias com instituições de pesquisa, universidades e organizações não governamentais",
      "Investir em programas de capacitação para técnicos e gestores ambientais",
      "Fortalecimento da implementação e monitoramento do CAR",
      "Melhoria da qualidade e eficiência na gestão ambiental"
    ],
    integrationRecommendations: [
      "Integração de Sistemas: Integrar o CAR com outros sistemas de informação ambiental e fundiária, como o CNIR e o Sistema de Informação sobre a Biodiversidade Brasileira (SiBBr)",
      "Padronização de Dados: Estabelecer padrões para coleta, armazenamento e análise de dados, garantindo consistência e interoperabilidade",
      "Transparência e Acesso Público: Disponibilizar dados do CAR de forma transparente e acessível, promovendo participação social e controle social",
      "Monitoramento Contínuo: Implementar mecanismos de monitoramento contínuo para acompanhar evolução dos cadastros e identificar áreas que necessitam atenção especial"
    ],
    accessibilityIssues: [
      "Dataset oficial classificado como 'Não Aberto' e 'Restrito - Informação Pessoal'",
      "Acesso direto aos dados brutos representa desafio para obtenção de informações detalhadas",
      "Necessidade de recorrer a APIs de terceiros limita granularidade e flexibilidade das análises",
      "Restrições de acesso impactam desenvolvimento de soluções de inteligência agronômica"
    ],
    technicalSources: [
      "Portal de Dados Abertos do Governo Federal",
      "Sistema de Cadastro Ambiental Rural (SICAR)",
      "Cadastro Nacional de Imóveis Rurais (CNIR)",
      "API CAR da Directd (terceiros)",
      "Relatório Final de Exibição (dados estatísticos)",
      "Portal da Câmara dos Deputados (análises de qualidade)"
    ],
    useCases: [
      "Controle e monitoramento ambiental de propriedades rurais",
      "Planejamento territorial e ambiental",
      "Verificação de regularidade ambiental de imóveis",
      "Análise de passivos ambientais",
      "Suporte ao Programa de Regularização Ambiental (PRA)",
      "Estudos de impacto ambiental",
      "Desenvolvimento de políticas públicas ambientais"
    ],
    limitations: [
      "Apenas 3,4% dos cadastros analisados comprometem confiabilidade dos dados",
      "Processo de verificação manual é demorado e custoso",
      "Inconsistências significativas nos dados cadastrados",
      "Restrições de acesso limitam uso para pesquisa e desenvolvimento",
      "Falta de padronização em alguns procedimentos de coleta",
      "Capacitação técnica insuficiente em algumas regiões",
      "Dependência de APIs de terceiros para acesso detalhado"
    ]
  },
  {
    id: 6,
    name: "Agência Nacional de Águas e Saneamento Básico (ANA)",
    description: "A ANA é a agência reguladora e gestora dos recursos hídricos no Brasil, fornecendo dados essenciais para o manejo da água na agricultura através do Sistema Nacional de Informações sobre Recursos Hídricos (SNIRH).",
    type: "Governamental",
    category: "Recursos Hídricos",
    coverage: "Nacional",
    format: "API/GeoJSON/Shapefile/CSV/JSON",
    updateFrequency: "Contínuo",
    accessibility: "Público",
    cost: "Gratuito",
    dataTypes: ["Divisão Hidrográfica", "Quantidade e Qualidade de Água", "Usos da Água", "Balanço Hídrico", "Eventos Hidrológicos Críticos", "Planos de Recursos Hídricos", "Áreas Irrigadas por Pivô Central", "Índices de Segurança Hídrica (ISH)"],
    establishment: "2001",
    reliability: 94,
    completeness: 91,
    timeliness: 93,
    accuracy: 92,
    website: "https://www.gov.br/ana",
    logo: "/logos/ana.png",
    mainSystem: {
      "name": "SNIRH - Sistema Nacional de Informações sobre Recursos Hídricos",
      "description": "Instrumento de gestão que coleta, trata, armazena e recupera informações sobre o estado qualitativo e quantitativo da água no Brasil",
      "platform": "Plataforma de Dados Abertos da ANA",
      "datasets": "97 conjuntos de dados fragmentados em 10 grupos diferentes"
    },
    dataGroups: [
      "Divisão hidrográfica",
      "Quantidade e qualidade de água", 
      "Usos da água",
      "Balanço hídrico",
      "Eventos hidrológicos críticos",
      "Planos de recursos hídricos",
      "Dados sobre áreas irrigadas por pivô central",
      "Índices de Segurança Hídrica (ISH)"
    ],
    features: [
      "97 conjuntos de dados fragmentados em 10 grupos diferentes",
      "Sistema Nacional de Informações sobre Recursos Hídricos (SNIRH)",
      "Plataforma de Dados Abertos com Search API",
      "Conformidade com especificação OGC API - Records",
      "Dados geoespaciais em formatos GeoJSON e Shapefile",
      "Informações sobre divisão hidrográfica nacional",
      "Monitoramento de quantidade e qualidade da água",
      "Dados sobre usos da água e balanço hídrico",
      "Informações sobre eventos hidrológicos críticos",
      "Planos de recursos hídricos regionais e nacionais",
      "Mapeamento de áreas irrigadas por pivô central",
      "Índices de Segurança Hídrica (ISH) por região",
      "Estações de monitoramento espalhadas por todo o Brasil",
      "Integração direta com sistemas GIS",
      "Dados essenciais para manejo da água na agricultura"
    ],
    accessAndDocumentation: {
      "primaryAccess": "Nova Plataforma de Dados Abertos da ANA",
      "apiName": "Search API em conformidade com especificação OGC API - Records",
      "dataFormats": ["Feature Service (que implica compatibilidade com GeoJSON e Shapefile)", "CSV", "JSON"],
      "apiCapabilities": "Permite consultar, filtrar e buscar o catálogo de dados programaticamente",
      "standards": "Conformidade com padrões Open Geospatial Consortium (OGC)",
      "interoperability": "A conformidade com padrões OGC facilita a interoperabilidade com sistemas GIS",
      "geospatialData": "Disponibilização de dados hídricos em formatos geoespaciais via API é um diferencial significativo da ANA",
      "integration": "Permite a integração direta de informações sobre disponibilidade e uso da água em modelos de gestão agrícola e de risco hídrico"
    },
    pricing: {
      "model": "Não há precificação para o acesso aos dados da ANA",
      "description": "O acesso à plataforma de Dados Abertos e à API do Sistema Nacional de Informações sobre Recursos Hídricos (SNIRH) é totalmente gratuito",
      "clarification": "A cobrança que a ANA realiza se refere ao uso da água como recurso natural, o que é uma taxa paga por empresas e indústrias que utilizam a água em seus processos",
      "policy": "Isso é uma política de gestão hídrica e não tem relação com a obtenção de dados por meio da API da agência"
    },
    volume: {
      "totalDatasets": "97 conjuntos de dados",
      "dataGroups": "10 grupos diferentes de dados",
      "coverage": "Diversos aspectos relacionados à gestão de recursos hídricos no Brasil",
      "scope": "Divisão hidrográfica, quantidade e qualidade da água, usos da água, balanço hídrico, eventos críticos, planos de recursos hídricos, áreas irrigadas, índices de segurança hídrica",
      "robustness": "Quantidade e qualidade das informações bastante robustas e abrangentes"
    },
    qualityAssurance: [
      "Qualidade alta dos dados seguindo especificações da Open Geospatial Consortium (OGC)",
      "Dados bem estruturados e interoperáveis com sistemas GIS",
      "Informações detalhadas e frequentemente atualizadas sobre estados qualitativo e quantitativo da água",
      "Conformidade com padrões internacionais OGC",
      "Sistema robusto de coleta, tratamento, armazenamento e recuperação de informações",
      "Monitoramento contínuo através de estações espalhadas por todo o Brasil"
    ],
    dataCollection: [
      "Coleta de dados de forma geoespacial e hidrológica",
      "Foco na gestão de recursos hídricos e segurança hídrica",
      "Utilização de estações de monitoramento espalhadas por diversas regiões do Brasil",
      "Sistema Nacional de Informações sobre Recursos Hídricos (SNIRH)",
      "Monitoramento do estado qualitativo e quantitativo da água",
      "Coleta, tratamento, armazenamento e recuperação de informações hídricas",
      "Dados geoespaciais com coordenadas geográficas precisas",
      "Monitoramento contínuo de recursos hídricos nacionais"
    ],
    intelligence: [
      "APIs que permitem consultas e buscas de dados programaticamente",
      "Facilita integração e análise de dados para gestão agrícola",
      "Planejamento de uso de recursos hídricos",
      "Modelos preditivos relacionados ao risco hídrico",
      "Integração direta de informações sobre disponibilidade e uso da água",
      "Modelos de gestão agrícola e de risco hídrico",
      "Análises geoespaciais para tomada de decisão",
      "Suporte a sistemas de monitoramento em tempo real",
      "Dados essenciais para eficiência no uso de água em atividades agrícolas"
    ],
    challenges: [
      "Integração de grandes volumes de dados de diferentes fontes",
      "Necessidade de garantir a atualização constante dos dados",
      "Dados geoespaciais exigem ferramentas e tecnologias específicas para análise e visualização",
      "Complexidade na integração de múltiplas fontes de dados",
      "Necessidade de expertise técnica para trabalhar com dados geoespaciais",
      "Manutenção e calibração constante das estações de monitoramento",
      "Garantia de qualidade e consistência dos dados coletados",
      "Processamento de grandes volumes de dados hidrológicos"
    ],
    opportunities: [
      "Disponibilização dos dados em formatos como GeoJSON e Shapefile permite vasta gama de análises",
      "Integração com sistemas GIS e modelos de previsão",
      "Excelente oportunidade de colaborar com universidades e empresas",
      "Avanço em soluções de gestão hídrica inteligente",
      "Desenvolvimento de modelos preditivos avançados",
      "Parcerias para inovação em gestão de recursos hídricos",
      "Expansão da adoção da plataforma por desenvolvedores",
      "Integração com sistemas de agricultura de precisão",
      "Desenvolvimento de soluções de monitoramento em tempo real"
    ],
    recommendations: [
      "Integração com Sistemas de Gestão de Recursos Hídricos",
      "Utilização da plataforma integrada com sistemas de monitoramento em tempo real de consumo e qualidade de água",
      "Utilizar dados em conjunto com sistemas de gestão agrícola para melhorar eficiência no uso de água",
      "Melhorias na Documentação e Acessibilidade",
      "Ampliação das capacidades de personalização nas consultas via API",
      "Adaptação dos dados para diferentes contextos de uso",
      "Adicionar exemplos mais detalhados sobre o uso da API",
      "Oferecer suporte contínuo para desenvolvedores",
      "Expandir a adoção da plataforma através de melhor documentação",
      "Integração com sistemas de agricultura de precisão e gestão hídrica inteligente"
    ],
    limitations: [
      "Necessidade de ferramentas específicas para análise de dados geoespaciais",
      "Complexidade na integração de múltiplas fontes de dados",
      "Requer expertise técnica para trabalhar com formatos GeoJSON e Shapefile",
      "Dependência de estações de monitoramento para coleta de dados",
      "Necessidade de atualização constante dos dados",
      "Pode exigir processamento computacional intensivo para grandes volumes de dados",
      "Documentação da API poderia ser mais detalhada com mais exemplos práticos"
    ]
  },
  {
    id: 7,
    name: "Ministério da Agricultura e Pecuária (MAPA)",
    description: "O MAPA é o órgão central na gestão das políticas públicas e no fomento do agronegócio no Brasil, oferecendo dados abertos através do Portal de Dados Abertos do MAPA.",
    type: "Governamental",
    category: "Políticas Públicas Agropecuárias",
    coverage: "Nacional",
    format: "API CKAN/JSON/CSV",
    updateFrequency: "Contínuo",
    accessibility: "Público",
    cost: "Gratuito",
    dataTypes: ["Agrotóxicos Fitossanitários", "Zoneamento Agrícola de Risco Climático", "Biblioteca Nacional de Agricultura", "Base de Conhecimento Agropecuária", "Políticas Públicas", "Registro de Cultivares"],
    establishment: "1860",
    reliability: 95,
    completeness: 92,
    timeliness: 94,
    accuracy: 93,
    website: "https://dados.agricultura.gov.br",
    logo: "/logos/mapa.png",
    mainPortal: {
      "name": "Portal de Dados Abertos do MAPA",
      "description": "Iniciativa que concentra diversas bases de dados relacionadas à agricultura e pecuária",
      "platform": "Sistema de gerenciamento de dados abertos CKAN",
      "url": "dados.agricultura.gov.br"
    },
    mainSystems: [
      {
        "name": "Sistema de Agrotóxicos Fitossanitários - Agrofit",
        "description": "Acesso a informações sobre agrotóxicos e afins registrados federalmente para fins agrícolas"
      },
      {
        "name": "Tábua de Risco - Zoneamento Agrícola de Risco Climático (ZARC)",
        "description": "Dados referentes aos períodos de plantio que constam nas Portarias de ZARC, indicando cultivares para plantio por safra, cultura, UF, grupo e região de adaptação"
      },
      {
        "name": "Biblioteca Nacional de Agricultura (BINAGRI)",
        "description": "Informações da biblioteca nacional de agricultura"
      },
      {
        "name": "Base de Conhecimento",
        "description": "Informações e orientações sobre assuntos de interesse da sociedade relacionados à agropecuária"
      }
    ],
    features: [
      "Portal de Dados Abertos baseado em CKAN",
      "Sistema de Agrotóxicos Fitossanitários - Agrofit",
      "Tábua de Risco - Zoneamento Agrícola de Risco Climático (ZARC)",
      "Biblioteca Nacional de Agricultura (BINAGRI)",
      "Base de Conhecimento sobre agropecuária",
      "API CKAN RESTful para acesso programático",
      "Dados sobre agrotóxicos registrados federalmente",
      "Informações sobre períodos de plantio por safra e cultura",
      "Dados de cultivares por UF, grupo e região de adaptação",
      "Informações sobre políticas públicas agropecuárias",
      "Orientações sobre assuntos de interesse da sociedade",
      "Integração facilitada com sistemas externos",
      "Padronização da API CKAN",
      "Dados disponíveis em formato JSON e CSV",
      "Política de transparência e acesso à informação"
    ],
    accessAndDocumentation: {
      "primaryAccess": "Portal de Dados Abertos do MAPA (dados.agricultura.gov.br)",
      "platform": "Sistema de gerenciamento de dados abertos CKAN",
      "apiType": "API CKAN RESTful",
      "apiCapabilities": [
        "Recuperação de listas de datasets, grupos e tags em formato JSON",
        "Obtenção de representações JSON completas de datasets e recursos",
        "Busca por pacotes ou recursos",
        "Operações CRUD (Criar, Ler, Atualizar, Deletar) para datasets e recursos"
      ],
      "dataFormats": ["JSON", "CSV"],
      "httpMethods": ["POST", "GET"],
      "authentication": "API token (para operações de criação, atualização e exclusão)",
      "documentation": "Documentação abrangente da API CKAN com detalhes sobre requisições HTTP, estrutura das respostas JSON, versões da API e métodos de autenticação",
      "integration": "Facilita integração com sistemas externos devido à padronização da API CKAN",
      "specialAccess": "Dados do ZARC acessíveis via API e também disponíveis em formato CSV"
    },
    pricing: {
      "model": "Totalmente gratuito",
      "description": "O Portal de Dados Abertos do MAPA é uma iniciativa do governo federal e sua API CKAN não tem custo",
      "usage": "Dados podem ser usados para pesquisa, desenvolvimento de aplicações e análises sem necessidade de pagar taxas",
      "tokenAuthentication": "Token de autenticação serve para controle de uso, não para cobrança",
      "clarification": "Não confundir o acesso à API com as taxas de serviços regulatórios que o MAPA cobra por outros procedimentos, como registro de cultivares",
      "policy": "Política de transparência e acesso à informação do governo federal"
    },
    volume: {
      "scope": "Diversas bases de dados relacionadas à agricultura e pecuária",
      "mainDatasets": "Sistema Agrofit, ZARC, BINAGRI, Base de Conhecimento",
      "coverage": "Dados nacionais sobre agrotóxicos, zoneamento climático, biblioteca agrícola e conhecimento agropecuário",
      "integration": "Concentra múltiplas bases de dados em uma única plataforma"
    },
    qualityAssurance: [
      "Dados oficiais do órgão central de gestão das políticas públicas agropecuárias",
      "Informações sobre agrotóxicos registrados federalmente",
      "Dados de zoneamento agrícola baseados em portarias oficiais",
      "Sistema baseado em CKAN com padronização internacional",
      "Documentação abrangente da API",
      "Política de transparência e acesso à informação",
      "Controle de uso através de tokens de autenticação",
      "Monitoramento de frequência de acesso para garantir estabilidade do serviço"
    ],
    dataCollection: [
      "Coleta de dados sobre agrotóxicos e produtos fitossanitários registrados",
      "Compilação de dados de zoneamento agrícola de risco climático",
      "Organização de informações da biblioteca nacional de agricultura",
      "Sistematização de conhecimento sobre assuntos agropecuários",
      "Gestão centralizada de políticas públicas do agronegócio",
      "Integração de múltiplas bases de dados em plataforma única",
      "Padronização através do sistema CKAN",
      "Disponibilização via Portal de Dados Abertos"
    ],
    intelligence: [
      "API CKAN RESTful para integração programática",
      "Operações CRUD para manipulação de datasets",
      "Busca avançada por pacotes e recursos",
      "Integração facilitada com sistemas externos",
      "Análises de risco climático para culturas",
      "Gestão de informações sobre agrotóxicos",
      "Suporte a desenvolvimento de aplicações agropecuárias",
      "Dados estruturados para pesquisa e análise",
      "Padronização que facilita interoperabilidade",
      "Controle de acesso e monitoramento de uso"
    ],
    challenges: [
      "Necessidade de token de autenticação para algumas operações",
      "Complexidade da API CKAN pode exigir conhecimento técnico específico",
      "Integração de múltiplas bases de dados pode gerar inconsistências",
      "Manutenção da qualidade e atualização constante dos dados",
      "Garantia de estabilidade do serviço com controle de frequência de acesso",
      "Necessidade de documentação clara para facilitar uso",
      "Coordenação entre diferentes sistemas e bases de dados"
    ],
    opportunities: [
      "Desenvolvimento de aplicações de manejo de culturas",
      "Sistemas de gestão de risco agrícola",
      "Integração com plataformas de agricultura de precisão",
      "Análises de conformidade com uso de agrotóxicos",
      "Desenvolvimento de ferramentas de zoneamento climático",
      "Criação de sistemas de consulta à biblioteca agrícola",
      "Parcerias com universidades e institutos de pesquisa",
      "Desenvolvimento de aplicações móveis para produtores",
      "Integração com sistemas de monitoramento ambiental",
      "Criação de dashboards para gestão pública"
    ],
    recommendations: [
      "Utilizar a API CKAN para integração programática com sistemas externos",
      "Aproveitar os dados do ZARC para desenvolvimento de ferramentas de planejamento agrícola",
      "Integrar informações do Agrofit em sistemas de gestão de insumos",
      "Usar a Base de Conhecimento para desenvolvimento de sistemas educacionais",
      "Implementar controles de cache para otimizar uso da API",
      "Desenvolver interfaces amigáveis para acesso aos dados",
      "Criar sistemas de alertas baseados em dados de risco climático",
      "Integrar com outros sistemas governamentais para visão holística",
      "Desenvolver aplicações móveis para acesso em campo",
      "Implementar análises preditivas baseadas nos dados disponíveis"
    ],
    limitations: [
      "Operações de criação, atualização e exclusão exigem autenticação via API token",
      "Necessidade de conhecimento técnico sobre API CKAN",
      "Dependência da estabilidade do serviço governamental",
      "Possíveis limitações de frequência de acesso",
      "Complexidade na integração de múltiplas bases de dados",
      "Necessidade de validação constante da qualidade dos dados",
      "Documentação pode ser complexa para usuários iniciantes"
    ],
    volumeAndQuality: {
      volume: "Portal com 13 conjuntos de dados disponíveis, conforme listado na página principal de datasets",
      quality: "Licença clara e aberta (CC-BY), diversidade de formatos estruturados (CSV, PDF, XLSX), infraestrutura robusta baseada em CKAN com API REST padronizada e confiável"
    },
    dataCollection: {
      methods: "API CKAN baseada em REST (/api/3/action/*) para listar/buscar pacotes e recursos, com suporte a CRUD mediante token",
      frequency: "Variável: semanal (SIPEAGRO), mensal (SIGSIF), eventual (ZARC conforme portarias)",
      automation: "Use package_search com parâmetros q, rows, start e filtros; atenção à paginação. Priorize CSV/XLSX para ingestão tabular; PDF para dicionários/explicações; XML (Thesagro) para taxonomias/glossários",
      businessContext: "Combine ZARC (época/cultivar) + INMET/CONAB para séries climáticas e safras; SIGSIF para sanidade/abate e SIPEAGRO para insumos/registro"
    },
    enhancedChallenges: [
      "Heterogeneidade temporal: variação na frequência de atualização e presença de conjuntos mais antigos (Base de Conhecimento, Thesagro) exige curadoria e versionamento de schema",
      "Padronização semântica: nomes de culturas/categorias podem divergir entre bases (ZARC vs. SIPEAGRO/SIGSIF), requerendo dicionários de equivalência",
      "Documentação dispersa: explicações estão nos PDFs de dicionário ou páginas institucionais (AGROFIT/ZARC), implicando passos adicionais na automação"
    ],
    enhancedOpportunities: [
      "Dados licenciados em CC-BY favorecem reuso comercial/analítico com atribuição",
      "Taxonomia agrícola (Thesagro) padroniza termos para data cataloging e NLP (indexação/entidades)",
      "Indicadores operacionais: cruzar ZARC (janela de plantio) com SIGSIF (abates/doenças) e SIPEAGRO (insumos) para painéis de risco, conformidade e produtividade"
    ],
    enhancedRecommendations: [
      "Descoberta & Catálogo: Automatize package_search no CKAN para varredura diária/semanal por tags/organização 'MAPA', guardando hash/last_modified por recurso. Use Thesagro para normalizar termos e enriquecer metadados",
      "Ingestão & Qualidade: Pipelines por domínio - Risco climático (ZARC CSV), Inspeção animal (SIGSIF CSV + dicionários), Registros/insumos (SIPEAGRO CSV semanal), Agrotóxicos (AGROFIT tabelas estruturadas). Validações: schema tests, chaves compostas, slowly changing dimensions",
      "Modelagem Analítica: Camada de conformidade com dimensões de Cultura, UF/Município, Safra, Estabelecimento, Produto e Portaria ZARC. Fatos: Abates, Condenações, Registros, Janelas de Plantio",
      "Orquestração & Monitoramento: Agende cron/Airflow por frequência do dataset. Alerta quando last_updated mudar no CKAN",
      "Governança & Licenciamento: Publique atributo CC-BY na documentação/dashboards e retenha cópia dos dicionários de dados no repositório de metadados",
      "APIs & Tokens: Para leituras públicas, API CKAN geralmente não exige token; mantenha opção de autenticação para operações administrativas. Implemente paginação conforme documentação oficial"
    ]
  },
  {
    id: 8,
    name: "Repositório Brasileiro Livre para Dados Abertos do Solo (febr)",
    description: "Repositório centralizado para armazenar e fornecer dados abertos do solo em formato padronizado e harmonizado no Brasil",
    type: "Acadêmico",
    category: "Solo e Recursos Naturais",
    coverage: "Nacional",
    format: "CSV/R/ZIP",
    updateFrequency: "Contínuo",
    accessibility: "Público",
    cost: "Gratuito",
    dataTypes: ["Dados de solo padronizados", "Observações de solo georeferenciadas", "Atributos químicos e físicos do solo", "Metadados detalhados por conjunto", "Dados de profundidade do solo"],
    establishment: "2016",
    reliability: 88,
    completeness: 85,
    timeliness: 82,
    accuracy: 90,
    website: "https://github.com/febr-team/febr-data",
    logo: "/logos/febr.png",
    mainDatabase: {
      "name": "febr - Free Brazilian Repository for Open Soil Data",
      "description": "Repositório com 14.477 observações de solo de 232 conjuntos de dados, sendo 42% do sul e sudeste do Brasil",
      "coverage": "Nacional (concentração Sul e Sudeste)",
      "updateFrequency": "Contínua conforme novos levantamentos"
    },
    features: [
      "14.477 observações de solo de 232 conjuntos de dados",
      "Estrutura orientada por conjunto de dados",
      "Armazenamento em planilhas acessíveis via aplicação online",
      "Dados padronizados e harmonizados",
      "Conexões com R e QGIS através do pacote febr",
      "Download direto do Repositório GitHub",
      "Metadados detalhados para cada conjunto",
      "Múltiplas facilidades de download"
    ],
    accessAndDocumentation: {
      "access": "Acesso gratuito via GitHub e aplicação online",
      "formats": "Planilhas, arquivos ZIP, pacote R, integração QGIS",
      "api": "Sem API RESTful explícita, mas acesso programático via pacotes R e QGIS",
      "documentation": "Documentação detalhada disponível para mantenedores e colaboradores",
      "integration": "Conexão via pacote febr (R) e QGIS"
    },
    pricing: {
      "cost": "Totalmente gratuito",
      "license": "Licenças abertas com citação das fontes originais",
      "restrictions": "Nenhuma cobrança por download, utilização ou integração"
    },
    volumeAndQuality: {
      "volume": "14.477 observações de solo de 232 conjuntos de dados, cobrindo principalmente Sul e Sudeste (42%)",
      "quality": "Dados padronizados e harmonizados seguindo protocolos científicos, com metadados detalhados incluindo localização, profundidade e atributos químicos/físicos. Distribuição geográfica desigual pode impactar estudos nacionais de alta resolução"
    },
    dataCollection: {
      "methods": "Coleta de múltiplas fontes (instituições de pesquisa, universidades, levantamentos governamentais) com processos de integração para uniformizar formatos e nomenclaturas",
      "frequency": "Contínua conforme disponibilidade de novos levantamentos",
      "automation": "Granularidade espacial e temporal varia entre conjuntos. Recomenda-se uso do pacote febr (R), QGIS ou scripts personalizados",
      "businessContext": "Cruzamento com variáveis ambientais, climáticas e de uso do solo. Alinhamento com padrões internacionais (ISO, OGC) facilita interoperabilidade"
    },
    intelligence: [
      "Derivação de produtos como bancos de dados especializados",
      "Funções de pedotransferência",
      "Guias de recomendação de fertilizantes",
      "Sistemas de classificação de solo",
      "Mapas detalhados do solo",
      "Análises de aptidão agrícola",
      "Manejo de nutrientes",
      "Estudos de degradação do solo"
    ],
    challenges: [
      "Cobertura desigual do território brasileiro, com concentração no Sul e Sudeste",
      "Ausência de API RESTful direta, limitando integrações automatizadas em alguns cenários",
      "Necessidade de constante atualização e inclusão de novos levantamentos"
    ],
    opportunities: [
      "Potencial de uso em modelagem preditiva de atributos de solo (Machine Learning)",
      "Integração com dados climáticos e agrícolas para zoneamento e manejo sustentável",
      "Ampliação de parcerias para cobrir áreas pouco representadas, como Norte e Centro-Oeste"
    ],
    recommendations: [
      "Utilizar o pacote febr no R para acesso direto e manipulação dos dados, permitindo automatização de rotinas",
      "Incorporar o dataset no fluxo de trabalho de SIG (como QGIS) para análise espacial e cruzamento com outras camadas",
      "Criar scripts que façam download periódico dos arquivos do GitHub, garantindo uso de versões mais atualizadas",
      "Estabelecer processos de normalização e validação para integração com bases internas ou outros repositórios externos",
      "Para aplicações de grande escala, considerar pré-processamento local para otimizar performance"
    ],
    limitations: [
      "Distribuição geográfica desigual pode impactar análises nacionais",
      "Ausência de API RESTful para integrações automatizadas",
      "Granularidade espacial e temporal variável entre conjuntos",
      "Dependência de atualizações manuais de novos levantamentos"
    ]
  },
  {
    id: 10,
    name: "Leaf Agriculture",
    description: "A Leaf Agriculture (withleaf.io) é uma infraestrutura de dados que oferece uma API unificada para conectar e padronizar informações de fazendas, operações de máquinas, limites de talhões, imagens (satélite/drone), clima, prescrições e ativos, a partir de múltiplos provedores.",
    type: "Privado",
    category: "Infraestrutura de Dados Agrícolas",
    coverage: "Global",
    format: "API REST/JSON",
    updateFrequency: "Tempo Real",
    accessibility: "Privado",
    cost: "Pago",
    dataTypes: ["Operações de Máquinas", "Limites de Talhões", "Imagens de Satélite", "Dados Climáticos", "Prescrições", "Ativos", "Irrigação"],
    establishment: "2018",
    reliability: 99,
    completeness: 95,
    timeliness: 98,
    accuracy: 96,
    website: "https://withleaf.io",
    logo: "/logos/leaf.png",
    mainAPI: {
      "name": "Unified Farm Data API",
      "description": "API unificada que padroniza dados agrícolas de vários provedores (máquinas, clima, imagens, etc.) e devolve tudo em respostas JSON via REST",
      "baseURL": "https://api.withleaf.io/services/",
      "authentication": "Bearer token (Admin Token)",
      "format": "REST/JSON"
    },
    mainDataDomains: [
      {
        "name": "Operações de Máquinas",
        "description": "Dados agregados e padronizados em JSON de tillage, plantio, aplicação e colheita, com sumários e mapas renderizados",
        "operations": ["Tillage", "Plantio", "Aplicação", "Colheita"]
      },
      {
        "name": "Limites de Talhões (Field Boundary Management)",
        "description": "Sincroniza/gera/exporta limites entre marcas e mantém histórico de geometrias (apenas 1 boundary ativo por campo; updates criam novas versões)"
      },
      {
        "name": "Arquivos de Máquinas",
        "description": "Upload manual & conversão: upload de zips até 3 GB; detecção automática do formato e conversão para um geojson padronizado",
        "supportedFormats": ["John Deere 2630/4600+", "CNHI", "Trimble", "AgLeader", "Precision Planting", "ISOXML"]
      },
      {
        "name": "Monitoramento de Lavouras (Imagens)",
        "description": "Imagens de satélite para monitoramento agrícola",
        "sources": [
          {
            "name": "Sentinel-2 (público)",
            "revisit": "3–5 dias",
            "products": "25 produtos por campo (bandas, NDVI/NDRE, RGB, GeoTIFF/PNG)"
          },
          {
            "name": "PlanetScope (comercial)",
            "description": "Integração a assets como ortho_analytic_8b_sr, ortho_visual, UDM2; backfill/forward-fill gerenciados pela Leaf"
          }
        ]
      },
      {
        "name": "Clima (Weather)",
        "description": "Previsões horárias/diárias e histórico recente (−5 dias a +10 dias) em formato unificado",
        "models": ["GFS", "ICON", "IFS", "AROME/ARPEGE", "MET Nordic"],
        "selection": "Por campo"
      },
      {
        "name": "Prescrições (write-back)",
        "description": "Enviar/listar/baixar Rx em John Deere, CNHI, Climate FieldView, Raven, Trimble, AgLeader via endpoints beta",
        "status": "Beta"
      },
      {
        "name": "Ativos (Assets)",
        "description": "Endpoints para criar/obter/atualizar máquinas e associá-las a operações (filtro por fabricante, período, serial, etc.)",
        "status": "Beta"
      },
      {
        "name": "Irrigação",
        "description": "Dados 'as-applied' agregados por dia, com geometrias multi-polígono por profundidade/volume e áreas irrigadas dentro do talhão; suporte a pivôs/sensores"
      },
      {
        "name": "Validação de Insumos (Input Validator)",
        "description": "Matching automático de nomes de produtos (operações/arquivos) a bancos de insumos (ex.: CDMS, Agrian), com status e score de correspondência"
      },
      {
        "name": "Alertas/Webhooks",
        "description": "Eventos como 'nova imagem disponível', 'processamento concluído', 'credenciais expiradas' — com assinatura/segredo para verificação"
      }
    ],
    features: [
      "API unificada que padroniza dados de múltiplos provedores agrícolas",
      "Suporte às principais marcas (John Deere, CNHI, Trimble, AgLeader, Raven, Climate FieldView)",
      "Upload de arquivos até 3 GB com detecção automática de formato",
      "Conversão automática para GeoJSON padronizado",
      "Imagens Sentinel-2 com 25 produtos por campo (NDVI/NDRE, RGB, GeoTIFF/PNG)",
      "Integração PlanetScope para imagens de alta resolução",
      "Múltiplos modelos climáticos (GFS, ICON, IFS, AROME/ARPEGE, MET Nordic)",
      "Previsões climáticas horárias/diárias (−5 a +10 dias)",
      "Gestão de limites de talhões com histórico versionado",
      "Sistema de prescrições write-back para múltiplas plataformas",
      "Dados de irrigação as-applied com geometrias multi-polígono",
      "Input Validator para matching automático de produtos",
      "Sistema de alertas e webhooks para eventos",
      "Leaf Link widget para conexão OAuth com provedores",
      "Magic Link para convite de usuários por e-mail/SMS",
      "Escalabilidade automática em picos (plantio/colheita)",
      "SLA de 99,95% de disponibilidade mensal",
      "~99,5% de uptime reportado"
    ],
    accessAndDocumentation: {
      "primaryAccess": "API REST via https://api.withleaf.io/services/",
      "authentication": "Bearer token (Admin Token) para API Owner",
      "documentation": "Documentação principal (REST/JSON): guia de quickstart, amostras em cURL/Node/Python, e referência por serviço",
      "connectionMethods": [
        {
          "name": "Leaf Link",
          "description": "Widget pronto para conectar provedores (OAuth) e fazer upload de arquivos com pouquíssimo código"
        },
        {
          "name": "Magic Link",
          "description": "Para convidar usuários por e-mail/SMS e conduzir a autorização sem precisar embutir o widget no app"
        }
      ],
      "mainReferences": [
        "Limites de talhões – Overview & Endpoints",
        "Operações de campo – Endpoints",
        "Upload manual & conversão – Overview & Endpoints",
        "Monitoramento de lavouras – Endpoints / Sentinel / Planet",
        "Clima – Overview & Endpoints",
        "Prescrições – Endpoints (beta)",
        "Irrigação – Overview & Endpoints",
        "Ativos – Endpoints (beta)",
        "Alertas/Webhooks – Overview & Lista de eventos"
      ],
      "systemStatus": "Página pública de status/uptime e SLA oficial",
      "developerResources": "Centro de recursos: landing de desenvolvedores e tutoriais passo-a-passo (ex.: John Deere/AgLeader/Trimble)",
      "accessMethod": "API REST (JSON). Não há web scraping; quando arquivo, o upload é via endpoints ou Leaf Link (ZIPs de arquivos proprietários)"
    },
    pricing: {
      "model": "Preço por acre (volume-based), com descontos por compromisso de acres",
      "tiers": ["Core", "Pro", "Enterprise"],
      "addOns": ["Planet Imagery", "Leaf Workflows"],
      "contracting": ["Time comercial", "AWS Marketplace (facilita procurement/faturamento em nuvem)"],
      "sla": "Disponibilidade mensal 99,95% conforme SLA",
      "note": "Valores numéricos não são públicos no site; o contato comercial define faixas por uso/acre e add-ons"
    },
    volumeAndQuality: {
      "volume": {
        "machines": "Suporta as principais marcas (John Deere, CNHI, Trimble, AgLeader, Raven, Climate FieldView, etc.), 'um só API' para multi-marcas",
        "images": "Sentinel-2 (cobertura global, 3–5 dias de revisita) e Planet (alta resolução, assinaturas gerenciadas pela Leaf)",
        "weather": "Múltiplos modelos globais/regionais (GFS, ICON, IFS, AROME/ARPEGE, MET Nordic) para qualquer coordenada/talhão",
        "scalability": "A Leaf reporta operar com ~99,5% de uptime e escala automática em picos (plantio/colheita)"
      },
      "quality": {
        "standardization": "Converte formatos proprietários para JSON padronizado; mescla e processa arquivos em saídas consistentes",
        "versioning": "Limites versionados e histórico de geometrias, garantindo reprodutibilidade",
        "imageProcessing": "Imagens processadas (NDVI/NDRE/RGB; GeoTIFF/PNG) e cloud mask integrada para cálculo de cobertura de nuvens",
        "weatherData": "Clima com janela temporal clara (−5 a +10 dias) e variáveis horárias/diárias em formato único",
        "inputValidation": "Input Validator para normalizar nomes de produtos (insumos), com score e status (Predicted/Validated/etc.)"
      }
    },
    qualityAssurance: [
      "Tradução e padronização de formatos proprietários para JSON padronizado",
      "Processamento e mesclagem de arquivos em saídas consistentes",
      "Limites versionados e histórico de geometrias para reprodutibilidade",
      "Imagens processadas com cloud mask integrada",
      "Dados climáticos com janela temporal clara e variáveis padronizadas",
      "Input Validator com score e status de correspondência",
      "SLA oficial de 99,95% de disponibilidade mensal",
      "~99,5% de uptime reportado",
      "Escalabilidade automática em picos de demanda",
      "Sistema de alertas e webhooks para monitoramento"
    ],
    dataCollection: [
      "Modelo de dados centrado no 'Leaf User': crie um Leaf User por cliente/agricultor para isolar permissões e dados",
      "Onboarding & consentimento: use Leaf Link/Magic Link para autorização OAuth nas contas de provedores (reduz fricção e erros)",
      "Qualidade de limites: respeite a regra de 1 boundary ativo por campo; novos uploads geram versões (ótimo para auditoria/ML)",
      "Ingestão híbrida: combine integrações diretas e upload manual (ZIP ≤ 3 GB) para cobrir frotas desconectadas",
      "Eventos & reatividade: cadastre webhooks para eventos críticos (imagem nova, processamento concluído, credenciais expiradas) e evite polling",
      "Padronização semântica de insumos: automatize matching com Input Validator para análises de uso de produtos, compliance e custos",
      "Clima/Imagens: defina política de cloud cover e modelo meteorológico preferido por cultura/região (Leaf escolhe modelos por acurácia por campo, você pode combinar)"
    ],
    intelligence: [
      "API unificada para padronização de dados multi-marca",
      "Processamento automático de imagens com produtos derivados",
      "Análise climática com múltiplos modelos para seleção por campo",
      "Sistema de validação inteligente de insumos",
      "Gestão versionada de geometrias de talhões",
      "Alertas automáticos para eventos críticos",
      "Escalabilidade automática baseada em demanda",
      "Integração facilitada via widgets prontos",
      "Suporte a análises preditivas com dados históricos",
      "Workflows automatizados para processamento de dados"
    ],
    challenges: [
      "Dependência de permissões dos provedores (escopos OAuth, orgId no JD, companyId na CNHI, etc.) para 'read' e 'write-back' (prescrições)",
      "Heterogeneidade de arquivos (estruturas alteradas pelo usuário; nem sempre intactas), a Leaf tenta reparar, mas alguns batches podem falhar",
      "Custo de imagens comerciais (Planet), requer add-on"
    ],
    opportunities: [
      "Tempo-de-mercado: um único API para multi-marcas reduz meses de integração",
      "'Write-back' de Rx: diferencial competitivo (mandar prescrições para vários OEMs)",
      "Data-sharing entre empresas: Leaf Connect para compartilhar dados com parceiros sem construir seu próprio API",
      "Compliance/transparência: Ag Data Transparent (políticas claras de dados agrícolas)"
    ],
    recommendations: [
      "Desenho inicial - Entidades: LeafUser → Farms → Fields → Boundaries → Operations/Files/Assets. Use o ID do Merged Field como chave comum quando integrar múltiplos provedores",
      "Configurações por cliente: utilize o Configuration Service para preferências (unidades, provedores ativos, etc.)",
      "Onboarding & coleta - Leaf Link/Magic Link para conectar John Deere/CNHI/Trimble/AgLeader/Raven/Climate (menos código e melhor UX)",
      "Upload manual para frotas sem telemetria; respeite o limite de 3 GB por ZIP e informe o provider quando souber (Leaf detecta se 'Other')",
      "Pipelines de dados - Webhooks (Alerts): cadastre eventos para processar assim que imagens chegarem/arquivos concluírem/credenciais expirarem. Inclua verificação de assinatura",
      "Operações & ativos: cruze Operations com Assets para análises de eficiência de máquinas/operadores",
      "Imagens: para Sentinel, armazene NDVI/NDRE (GeoTIFF) e PNGs 'absolutos' para comparações temporais. Considere Planet para maior resolução",
      "Clima: escolha modelos padrão por região/cultura e habilite fallback entre modelos suportados",
      "Insumos: aplique o Input Validator para limpar nomes de produtos de operações históricas e novas",
      "'Write-back' (Prescriptions) - John Deere: exigir organizationId; CNHI: companyId; formatos aceitos (SHP/DBF/SHX em ZIP; variações por OEM)",
      "Confiabilidade & governança - SLA e status: monitore status.withleaf.io e ajuste retries conforme SLA 99,95%; use backoff nos polls e prefira webhooks",
      "Transparência de dados: consulte 'Your data with Leaf' e o selo Ag Data Transparent nas políticas de dados",
      "Procurement: considere contratar via AWS Marketplace para simplificar billing"
    ],
    limitations: [
      "Requer add-ons para imagens comerciais de alta resolução (Planet)",
      "Limitações de upload (3GB por ZIP)",
      "Dependência de conectividade para integrações em tempo real",
      "Necessidade de permissões específicas dos provedores (escopos OAuth, orgId, companyId)",
      "Possíveis falhas em batches devido à heterogeneidade de arquivos alterados pelos usuários"
    ]
  },
  {
    id: 11,
    name: "AgroMonitoring",
    description: "O AgroMonitoring (Agro API) é um serviço da OpenWeather/Extreme Electronics Ltd. que entrega, via API, imagens de satélite, índices de vegetação e dados meteorológicos/solo para monitoramento agrícola em tempo quase real e histórico, operando por polígonos (talhões) definidos pelo usuário.",
    type: "Privado",
    category: "Monitoramento Agrícola",
    coverage: "Global",
    format: "API/PNG/GeoTIFF/JSON",
    updateFrequency: "Tempo Real",
    accessibility: "Freemium",
    cost: "Freemium",
    dataTypes: ["Imagens de Satélite", "Índices de Vegetação", "Dados Meteorológicos", "Dados de Solo", "NDVI", "EVI", "EVI2", "NDWI", "DSWI", "NRI"],
    establishment: "OpenWeather/Extreme Electronics Ltd.",
    reliability: 90,
    completeness: 88,
    timeliness: 95,
    accuracy: 89,
    website: "https://agromonitoring.com",
    logo: "/logos/agromonitoring.png",
    mainAPI: {
      "name": "Agro API",
      "description": "API para monitoramento agrícola com imagens de satélite, índices de vegetação e dados meteorológicos/solo",
      "satellites": ["Sentinel-2", "Landsat-8/9", "MODIS"],
      "indices": ["NDVI", "EVI", "EVI2", "NDWI", "DSWI", "NRI"],
      "imageTypes": ["True Color", "False Color"],
      "statistics": ["Mínimo", "Máximo", "Mediana", "Desvio-padrão"],
      "formats": ["PNG", "GeoTIFF", "JSON"]
    },
    dataAndContent: {
      "satellites": "Sentinel-2, Landsat-8/9, MODIS",
      "vegetationIndices": "NDVI, EVI, EVI2, NDWI, DSWI, NRI",
      "imageTypes": "True/false color",
      "zonalStatistics": "Mínimo, máximo, mediana, desvio-padrão por polígono",
      "responseFormats": "PNG (imagens/tiles), GeoTIFF e JSON de metadados",
      "historicalNDVI": "Atualizado diariamente combinando Landsat, Sentinel e MODIS",
      "historicalArchive": "Desde 2001 no plano corporativo",
      "weatherData": "Tempo atual, previsão de 5 dias/3h, histórico",
      "soilData": "Temperatura e umidade do solo (superfície e 10 cm)",
      "precipitation": "Acumulados de precipitação",
      "temperature": "Acumulados de temperatura (GDD)",
      "uv": "Dados de UV",
      "dashboard": "Interface com data, nebulosidade, resolução (m/px) e fonte para cada cena",
      "minimumResolution": "10 m (Sentinel-2) e 30 m (Landsat)"
    },
    features: [
      "Imagens de satélite de Sentinel-2, Landsat-8/9 e MODIS",
      "Geração de índices de vegetação: NDVI, EVI, EVI2, NDWI, DSWI, NRI",
      "Imagens true/false color",
      "Estatísticas zonais por polígono (mín., máx., mediana, desvio-padrão)",
      "Formatos PNG, GeoTIFF e JSON de metadados",
      "NDVI histórico atualizado diariamente",
      "Arquivo histórico desde 2001 (plano corporativo)",
      "Dados meteorológicos: tempo atual, previsão 5 dias/3h, histórico",
      "Temperatura e umidade do solo (superfície e 10 cm)",
      "Acumulados de precipitação e temperatura (GDD)",
      "Dados de UV",
      "Dashboard com informações de data, nebulosidade, resolução e fonte",
      "Resolução mínima de 10 m (Sentinel-2) e 30 m (Landsat)",
      "Operação por polígonos (talhões) definidos pelo usuário",
      "Monitoramento em tempo quase real e histórico"
    ],
    accessAndDocumentation: {
      "typicalFlow": "Registrar-se e obter API key, criar polígono (GeoJSON, ordem lon,lat) com Polygons API, usar API de busca de imagens (passo 1) seguida do download de produtos/estatísticas (passo 2)",
      "guides": "Guias 'How to start' e documentação detalhada de imagens, solos e tempo",
      "searchReturn": "Retorno de busca já traz os links 'data' para GeoTIFF de cada preset",
      "documentation": "Documentação oficial e dashboard com tutoriais passo a passo",
      "polygonsAPI": "API para criação de polígonos em formato GeoJSON (ordem lon,lat)",
      "imageSearchAPI": "API de busca de imagens (passo 1)",
      "downloadAPI": "API de download de produtos/estatísticas (passo 2)",
      "tutorials": "Tutoriais passo a passo disponíveis na documentação oficial e dashboard"
    },
    pricing: {
      "plans": [
        {
          "name": "Free",
          "price": "£0",
          "area": "1.000 ha",
          "satelliteRequests": "<60 por minuto",
          "climateRequests": "<500 por dia",
          "features": "Limitado"
        },
        {
          "name": "Starter",
          "price": "£20/mês",
          "area": "4.000 ha",
          "excess": "£0,02/ha",
          "satelliteRequests": "<600 por minuto",
          "climateRequests": "<1.000 por dia",
          "features": "NDVI histórico, solo histórico, acumulados, clima histórico"
        },
        {
          "name": "Small Kit",
          "price": "£200/mês",
          "area": "20.000 ha",
          "excess": "£0,01/ha",
          "satelliteRequests": "<3.000 por minuto",
          "climateRequests": "<10.000 por dia",
          "features": "Todos os recursos dos planos anteriores"
        },
        {
          "name": "Corporate",
          "price": "Sob consulta",
          "area": "Ilimitada",
          "features": "Customização, arquivo completo, licenças personalizadas"
        }
      ],
      "pricingModel": "Taxa fixa por área total de polígonos/mês + cobrança por excedente",
      "operationalLimits": "Requisições por minuto a dados de satélite e chamadas/dia a dados de clima",
      "historicalDepth": "1 ano padrão (arquivo completo sob consulta/corporate)",
      "licenses": "CC BY-SA 4.0 para mapas/APIs e ODbL para dados/bancos (customização no corporativo)"
    },
    volumeAndQuality: {
      "volume": {
        "satelliteData": "Dados quase em tempo real",
        "sceneAvailability": "Novas cenas a cada 2-4 dias por polígono (dependendo da órbita/sensor e cobertura de nuvens)",
        "sceneInfo": "Cada cena indica fonte, resolução e nebulosidade",
        "qualityFilter": "Permite filtrar qualidade antes do processamento"
      },
      "quality": {
        "spatialResolution": "10 m (Sentinel-2) e 30 m (Landsat)",
        "ndviDaily": "NDVI diário combina múltiplas constelações, aumentando cadência temporal",
        "climateUpdates": "<1h nos planos pagos para clima",
        "soilUpdates": "2×/dia para temperatura/umidade",
        "additionalData": "Acumulados e UV",
        "dailyLimits": "Limites diários de chamadas orientam volume processável por dia"
      }
    },
    dataCollection: [
      "Definir polígonos coerentes com a resolução (≥10-30 m) para evitar mistura de culturas/bordas",
      "Filtrar por nebulosidade e cobertura antes de calcular indicadores",
      "Preferir estatísticas zonais da própria API para padronizar séries e reduzir ruído",
      "Normalizar séries quando misturar sensores",
      "Tratar unidades (ex.: Kelvin em solo/clima) e timestamps UNIX/UTC",
      "Gerenciar rate limits e quotas por área com filas e cache de GeoTIFF/tiles",
      "Para lacunas por nuvens, usar acumulados climáticos e modelos de interpolação como features substitutas"
    ],
    intelligence: [
      "Combinação de NDVI diário, acumulados térmicos/chuva, umidade/temperatura do solo",
      "Estatísticas zonais por talhão para análises detalhadas",
      "Alertas de estresse hídrico e nutricional",
      "Estratégias de irrigação e fertilização baseadas em dados",
      "Análise de vigor intra-talhão",
      "Modelagem de produtividade com menor custo de aquisição de dados",
      "Monitoramento em tempo quase real para tomada de decisões rápidas",
      "Integração de múltiplas fontes de dados satelitais"
    ],
    challenges: [
      "Nuvens e sazonalidade orbital podem criar buracos temporais mesmo com fusão de sensores",
      "No plano Free, histórico/meteo são limitados e podem restringir análises multi-safra",
      "Necessidade de gerenciamento de rate limits e quotas por área",
      "Tratamento de diferentes unidades e formatos de timestamp",
      "Mistura de sensores requer normalização de séries temporais",
      "Lacunas por cobertura de nuvens exigem estratégias de interpolação"
    ],
    opportunities: [
      "Combinação de NDVI diário, acumulados térmicos/chuva, umidade/temperatura do solo",
      "Estatísticas zonais por talhão abrem espaço para alertas de estresse",
      "Estratégias de irrigação/fertilização baseadas em dados",
      "Análise de vigor intra-talhão",
      "Modelagem de produtividade com menor custo de aquisição de dados",
      "Desenvolvimento de sistemas de agricultura de precisão",
      "Integração com IoT e sensores de campo",
      "Criação de dashboards personalizados para produtores"
    ],
    recommendations: [
      "Modelar o pipeline como 'polígono-centro': persistir polygon_id, agendar busca de cenas",
      "Quando houver janela sem nuvens, baixar GeoTIFF e salvar estatísticas zonais",
      "Complementar dias sem imagem com séries de clima/solo e acumulados",
      "Padronizar CRS/escala ao cruzar com camadas de gestão",
      "Monitorar consumo por área e limites de requisições",
      "Registrar atribuição/licença conforme CC BY-SA/ODbL e políticas do plano",
      "Para começar rápido, seguir guia 'How to start', Polygons API (GeoJSON lon,lat) e fluxo 2-passos de imagens",
      "Para análises avançadas, utilizar links 'data' para GeoTIFF e processar no GIS/ETL"
    ],
    limitations: [
      "Dependência de condições climáticas para qualidade das imagens",
      "Limitações de área e requisições nos planos gratuitos e pagos",
      "Necessidade de conhecimento técnico para processamento de GeoTIFF",
      "Cobertura de nuvens pode afetar disponibilidade de dados",
      "Custos podem ser elevados para grandes áreas no modelo de cobrança por excedente",
      "Histórico limitado no plano gratuito",
      "Necessidade de gerenciamento de rate limits e cache"
    ]
  },
  {
    id: 12,
    name: "OpenET",
    description: "Plataforma sem fins lucrativos que disponibiliza estimativas de evapotranspiração (ET) baseadas em satélite em escala de talhão para apoiar manejo de irrigação e gestão hídrica; o consórcio é liderado por NASA, Desert Research Institute (DRI) e Environmental Defense Fund (EDF), com operação em Google Earth Engine.",
    type: "Colaborativo",
    category: "Evapotranspiração",
    coverage: "CONUS (Estados Unidos)",
    format: "API/GeoTIFF/Earth Engine",
    updateFrequency: "Diário/Mensal",
    accessibility: "Público",
    cost: "Gratuito (com limitações)",
    dataTypes: ["Evapotranspiração", "ETo (referência grama)", "ETr (referência alfafa)", "ETof/ETrf (fração de referência)", "NDVI", "Precipitação"],
    establishment: "Consórcio NASA/DRI/EDF",
    reliability: 94,
    completeness: 92,
    timeliness: 88,
    accuracy: 93,
    website: "https://openet.dri.edu",
    logo: "/logos/openet.png",
    dataAndContent: {
      "description": "A plataforma fornece séries diárias e mensais de ET em 30 m (resolução Landsat), além do valor 'ensemble' (média filtrada por MAD) de seis modelos (ALEXI/DisALEXI, eeMETRIC, geeSEBAL, PT-JPL, SIMS e SSEBop).",
      "variables": [
        "ET (evapotranspiração)",
        "ETo (referência grama)",
        "ETr (referência alfafa)",
        "ETof/ETrf (fração de referência)",
        "NDVI",
        "Contagens de modelos",
        "Precipitação (PR)"
      ],
      "units": "Configuráveis (mm ou polegadas)",
      "resolution": "30 m (resolução Landsat)",
      "models": ["ALEXI/DisALEXI", "eeMETRIC", "geeSEBAL", "PT-JPL", "SIMS", "SSEBop"],
      "ensembleMethod": "Média filtrada por MAD",
      "earthEngineCollections": "57 coleções mensais públicas (licença CC-BY-4.0)",
      "coverage": "CONUS com disponibilidade de 1999-10 a 2024-12",
      "apiAccess": "Dados diários por geometria além dos mensais"
    },
    accessAndDocumentation: {
      "manualExploration": "Data Explorer para visualização e download limitado",
      "programmaticAccess": {
        "documentation": "Documentação oficial da API com Quick Start",
        "endpoints": {
          "geodatabase": "Consultas pré-computadas",
          "raster": "Consultas customizadas, inclusive GeoTIFF"
        },
        "authentication": "Necessário criar conta para obter chave de API",
        "parameters": "Parâmetros aceitos e exemplos disponíveis"
      },
      "integrations": [
        "Integração opcional com Earth Engine",
        "Suporte a exportação para Google Drive",
        "Escolha da fonte de referência ET (CIMIS na Califórnia ou gridMET)",
        "Previsão de 7 dias de ETo (NOAA FRET) como referência"
      ],
      "earthEngineAccess": "Consumo direto das coleções públicas do OpenET no Google Earth Engine para históricos mensais"
    },
    pricing: {
      "dataExplorer": "Visualização gratuita e download de volumes limitados",
      "apiAccess": "Níveis de cota com possibilidade de níveis superiores ao vincular Earth Engine",
      "businessModel": "Modelo busca manter acesso público gratuito, uso em grande escala pela API é o caminho para operações pagas/sustentação do serviço",
      "commercialDetails": "Detalhes comerciais além das cotas públicas devem ser tratados diretamente com a equipe"
    },
    volumeAndQuality: {
      "volume": "Volume considerável, abrangendo vastas áreas geográficas e histórico de tempo significativo",
      "quality": "Qualidade alta - plataforma utiliza variedade de modelos validados por cientistas e especialistas, dados de satélite de fontes confiáveis, metodologia revisada por pares, dados constantemente atualizados garantindo precisão nas estimativas"
    },
    dataCollection: [
      "Para análises operacionais, privilegie o valor ensemble de ET",
      "Registre ETo/ETr e a fração (ETof/ETrf) para normalizar sazonalidade",
      "Inclua precipitação (PR) da própria coleção",
      "Facilita calcular ET líquida e orçamentar água com outros insumos locais",
      "Considere chuva efetiva, lençol raso, calendário fenológico",
      "Trate lacunas por nuvens conforme indicado em 'Known Issues'",
      "Monitore a latência - mensais tendem a estabilizar até seis semanas após o mês de interesse",
      "Padronize unidades (mm) na ingestão",
      "Use metadados da API (COUNT/MODEL_COUNT) para qualificar incerteza por período/local"
    ],
    intelligence: [
      "Estimativas de evapotranspiração baseadas em satélite em escala de talhão",
      "Apoio ao manejo de irrigação e gestão hídrica",
      "Valor ensemble de seis modelos diferentes para maior precisão",
      "Integração com Google Earth Engine para processamento em nuvem",
      "Dados de referência para normalização sazonal",
      "Cálculo de ET líquida para orçamento hídrico",
      "Metadados para qualificação de incerteza",
      "Previsão de 7 dias de ETo como referência"
    ],
    challenges: [
      "Principal desafio para o Brasil é a cobertura: OpenET está focado no oeste dos EUA",
      "Consórcio pretende expandir e alongar o arquivo histórico",
      "Diferenças entre modelos aumentam em ET muito baixa, corpos d'água e ambientes áridos",
      "Exige diagnóstico local e, às vezes, seleção de um subconjunto de modelos",
      "Latência nos dados mensais (até seis semanas)",
      "Lacunas por nuvens conforme 'Known Issues'",
      "Necessidade de tratamento de casos específicos listados em 'Known Issues'"
    ],
    opportunities: [
      "Grande oportunidade de integrar ET de 30 m em plataformas de contas de água",
      "Aplicações em trading e monitoramento de aquíferos",
      "Apoio à irrigação com acesso gratuito para exploração",
      "Coleções públicas no Earth Engine para prototipagem reprodutível",
      "Expansão futura da cobertura geográfica",
      "Alongamento do arquivo histórico",
      "Integração com outras fontes de dados climáticos e de solo"
    ],
    recommendations: [
      "Para protótipos e estudos: consuma as coleções mensais do OpenET no Earth Engine",
      "Processamento e reprodutibilidade sem infraestrutura própria",
      "Cruze com clima/solo/culturas locais",
      "Para operação: use API Geodatabase para agregados rápidos por talhão/ID",
      "Use API Raster para diários/GeoTIFF ou geometrias customizadas",
      "Armazene séries de ET, ETo/ETr, ETof/ETrf e PR com carimbo de versão/modelo",
      "Vincule conta do Earth Engine à OpenET para ampliar cotas",
      "Monitore limites mensais",
      "Trate casos listados em 'Known Issues' com regras de negócio",
      "Para agro brasileiro: use OpenET como referência metodológica e de benchmarking",
      "Combine fontes regionais/alternativas para ET até expansão oficial do escopo espacial"
    ],
    limitations: [
      "Cobertura limitada ao oeste dos Estados Unidos",
      "Não cobre o território brasileiro atualmente",
      "Diferenças entre modelos em condições específicas (ET muito baixa, corpos d'água, ambientes áridos)",
      "Latência nos dados mensais (até seis semanas)",
      "Lacunas por cobertura de nuvens",
      "Necessidade de diagnóstico local para seleção de modelos",
      "Casos específicos listados em 'Known Issues' requerem tratamento especial",
      "Limitações de cota na API para uso em grande escala"
    ],
    features: [
      "Dados de evapotranspiração de múltiplos modelos",
      "Cobertura temporal desde 1984",
      "Resolução espacial de 30m (Landsat)",
      "API REST para acesso programático",
      "Dados mensais e anuais disponíveis",
      "Múltiplos algoritmos de ET (SSEBop, SIMS, eeMETRIC, etc.)",
      "Integração com Google Earth Engine",
      "Dados de qualidade com flags de controle"
    ]
  },
  {
    id: 13,
    name: "FAOSTAT",
    description: "FAOSTAT é o banco estatístico global da FAO que oferece acesso gratuito a séries históricas de agricultura e alimentos para mais de 245 países/territórios, cobrindo de 1961 até o ano mais recente disponível. É amplamente usado para produção, comércio, preços, uso da terra, emissões e indicadores climáticos.",
    type: "Internacional",
    category: "Estatística Agrícola Global",
    coverage: "Global",
    format: "API REST/CSV/JSON",
    updateFrequency: "Anual",
    accessibility: "Público",
    cost: "Gratuito",
    dataTypes: ["Produção Agrícola", "Pecuária", "Comércio", "Preços", "Uso da Terra", "Florestas", "Insumos", "Balança Alimentar", "Segurança Alimentar", "Emissões", "Clima", "Temperatura"],
    establishment: "1945",
    reliability: 96,
    completeness: 94,
    timeliness: 88,
    accuracy: 95,
    website: "https://www.fao.org/faostat",
    logo: "/logos/faostat.png",
    mainDomains: [
      {
        "name": "Crops and Livestock Products (QCL)",
        "description": "Dados de produção de culturas e produtos pecuários"
      },
      {
        "name": "Temperature Change",
        "description": "Tendências de anomalia de temperatura desde 1961, atualizado até 2024"
      },
      {
        "name": "Emissions Totals",
        "description": "Estimativas anuais de CH₄, N₂O, CO₂ e equivalentes por país com notas metodológicas"
      },
      {
        "name": "Prices",
        "description": "Séries mensais e anuais de preços ao produtor e índices"
      },
      {
        "name": "Trade",
        "description": "Dados de comércio internacional de produtos agrícolas e alimentares"
      },
      {
        "name": "Land Use",
        "description": "Dados sobre uso da terra e cobertura florestal"
      },
      {
        "name": "Food Balances",
        "description": "Balanças alimentares e indicadores de segurança alimentar"
      }
    ],
    features: [
      "Cobertura global com mais de 245 países/territórios",
      "Séries históricas longas desde 1961 até o ano mais recente",
      "Dezenas de domínios temáticos (≈70+) incluindo QCL, comércio, uso da terra, florestas",
      "Domínio Temperature Change com tendências de anomalia de temperatura até 2024",
      "Séries mensais e anuais de preços ao produtor e índices",
      "Estimativas anuais de emissões de CH₄, N₂O, CO₂ e equivalentes por país",
      "Metadados e notas metodológicas acompanham todos os dados",
      "Portal web com navegação por domínio, filtros e exportação",
      "API pública REST (JSON) baseada nos serviços FENIX",
      "Endpoints por domínio e endpoints de definitions para descobrir códigos",
      "Arquivos bulk volumosos em CSV formato 'normalized' (longo)",
      "Colunas de flags e notes para controle de qualidade",
      "Licença CC BY 4.0 para uso livre com atribuição adequada",
      "Produção segue o FAO Statistical Quality Assurance Framework (SQAF)",
      "Calendários de revisão anual para manutenção da qualidade"
    ],
    accessAndDocumentation: {
      "primaryAccess": "Portal web FAOSTAT com página Statistics como porta de entrada",
      "webPortal": {
        "description": "Exploração e download manual com navegação por domínio",
        "features": ["Filtros avançados", "Exportação de dados", "Visualizações interativas"]
      },
      "apiAccess": {
        "type": "API pública REST (JSON)",
        "baseService": "Serviços FENIX",
        "authentication": "Sem autenticação para consultas públicas",
        "endpoints": ["Endpoints por domínio", "Endpoints de definitions para códigos de áreas/itens/elementos"],
        "documentation": "Repositório público com descrição dos serviços e diretório"
      },
      "dataFormats": ["JSON", "CSV", "Bulk CSV normalized"]
    },
    pricing: {
      "model": "Totalmente gratuito",
      "license": "CC BY 4.0",
      "attribution": "FAO. [ano]. FAOSTAT: [domínio]. Acessado em [data]",
      "commercialUse": "Para usos comerciais fora do escopo, a FAO orienta solicitar autorização",
      "legacyContent": "Alguns conteúdos anteriores a 30/11/2019 podem ter políticas legadas",
      "verification": "Sempre verificar rodapé/ícone de licença do domínio específico"
    },
    volume: {
      "coverage": "245+ países/territórios",
      "timespan": "Séries longas de 1961 até atual",
      "domains": "Dezenas de domínios (≈70+)",
      "format": "Arquivos bulk volumosos em CSV normalized (longo)",
      "metadata": "Colunas de flags e notes acompanham os dados",
      "updateCycle": "Muitos domínios têm atualização anual"
    },
    qualityAssurance: [
      "Produção segue o FAO Statistical Quality Assurance Framework (SQAF)",
      "Framework SQAF abrange relevância, exatidão, tempestividade, comparabilidade, coerência e acessibilidade",
      "Notas metodológicas por domínio (ex.: Emissions Totals)",
      "Calendários de revisão anual para manutenção da qualidade",
      "Metadados e notas metodológicas acompanham todos os dados",
      "Flags de qualidade indicam dados oficiais, estimados ou imputados",
      "Sistemas de validação e verificação seguindo padrões internacionais",
      "Documentação de unidades por elemento (toneladas, hectares, índices)",
      "Controle de mudanças de classificação ao longo do tempo"
    ],
    dataCollection: [
      "Coleta de dados de mais de 245 países/territórios",
      "Integração de dados nacionais de agricultura e alimentos",
      "Padronização de códigos de área (M49/ISO3), itens (FAO/CPC) e elementos",
      "Trabalho no formato normalized (longo) para consistência",
      "Preservação de flags/metadados para análises de qualidade",
      "Documentação de unidades por elemento",
      "Tratamento de mudanças de classificação ao longo do tempo",
      "Gestão de agregações para evitar dupla contagem",
      "Sistemas de ingestão Bulk (CSV) e API para atualizações",
      "Manutenção de dicionários e normalização de dados"
    ],
    intelligence: [
      "Ampla cobertura para benchmarks e nowcasting híbrido",
      "Combinação com dados de satélite/clima/local para análises avançadas",
      "Séries longas para modelagem causal/estrutural",
      "Integração com SDG Data e FAODATA Explorer (beta)",
      "Pipelines de disseminação para exploração de dados",
      "Dicionários da API para padronização de códigos",
      "Formato normalized (longo) para análises estatísticas",
      "Flags e metadados preservados para análises de qualidade",
      "Crosswalks para integração com outras fontes (INMET/ANA/CONAB/EO)",
      "Dashboards de data quality alinhados ao SQAF"
    ],
    challenges: [
      "Defasagem temporal - muitos domínios têm atualização anual",
      "Diferenças metodológicas nacionais e revisões históricas afetam comparabilidade",
      "Classificações e códigos evoluem (FAO/CPC), exigindo crosswalks",
      "Quebras de série e agregações podem levar a dupla contagem",
      "Casos clássicos como China em agregações históricas requerem tratamento especial",
      "Necessidade de utilitários em clientes para tratar inconsistências",
      "Complexidade na integração de múltiplas fontes de dados",
      "Necessidade de expertise técnica para trabalhar com dados normalizados",
      "Manutenção de tabelas mestras de códigos e classificações",
      "Gestão de versionamento de classificações ao longo do tempo"
    ],
    opportunities: [
      "Ampla cobertura para benchmarks globais e análises comparativas",
      "Nowcasting híbrido combinando FAOSTAT com satélite/clima/local",
      "Séries longas ideais para modelagem causal/estrutural",
      "Integração com SDG Data para monitoramento de objetivos de desenvolvimento",
      "Uso do novo FAODATA Explorer (beta) para exploração avançada",
      "Desenvolvimento de pipelines de disseminação automatizados",
      "Criação de dashboards de qualidade de dados",
      "Integração com outras fontes brasileiras (INMET/ANA/CONAB/EO)",
      "Desenvolvimento de aplicações de monitoramento agrícola global",
      "Análises de segurança alimentar e sustentabilidade"
    ],
    recommendations: [
      "Arquitetura de ingestão em duas vias: Bulk (job inicial) → API (jobs incrementais)",
      "Armazenar staging em formato longo com dicionários para padronização",
      "Manter tabelas mestras de área (M49/ISO3), itens (FAO/CPC) e elementos",
      "Aplicar surrogate keys estáveis e versionamento de classificações",
      "Propagar flags e notes até as camadas analíticas",
      "Construir dashboards de data quality alinhados ao SQAF",
      "Monitorar completude, revisões e pontualidade por domínio",
      "Usar campos de release/year para disparar ingests seletivos",
      "Padronizar unidades por elemento na camada semântica",
      "Criar views com medidas derivadas (produtividade, intensidades, balanços)",
      "Manter crosswalks para integrar FAOSTAT com outras fontes",
      "Implementar governança de atualizações baseada em catálogos/bulk"
    ],
    limitations: [
      "Defasagem temporal com atualizações anuais em muitos domínios",
      "Diferenças metodológicas entre países afetam comparabilidade",
      "Evolução de classificações e códigos requer manutenção constante",
      "Quebras de série podem causar inconsistências se não tratadas",
      "Agregações históricas podem levar a dupla contagem",
      "Necessidade de conhecimento técnico para trabalhar com dados normalizados",
      "Complexidade na integração de múltiplas fontes",
      "Dependência de qualidade dos dados nacionais fornecidos",
      "Necessidade de validação constante de flags e metadados",
      "Requer infraestrutura robusta para processamento de grandes volumes"
    ]
  },
  {
    id: 14,
    name: "USDA Foreign Agricultural Service (FAS)",
    description: "O USDA Foreign Agricultural Service (FAS) é a agência do governo dos EUA dedicada à inteligência e ao comércio agrícola global; ele reúne bases como PS&D (produção, suprimentos e distribuição), Export Sales (vendas semanais dos EUA), GATS (comércio exterior dos EUA) e o Crop Explorer (condições agroclimáticas por satélite), formando um ecossistema de dados e análises para commodities e mercados.",
    type: "Internacional",
    category: "Inteligência e Comércio Agrícola Global",
    coverage: "Global",
    format: "API REST/JSON/CSV/Excel",
    updateFrequency: "Semanal/Mensal",
    accessibility: "Público",
    cost: "Gratuito (com limitações de rate limit)",
    dataTypes: ["Produção", "Suprimentos", "Distribuição", "Export Sales", "Comércio Exterior", "Condições Agroclimáticas", "Commodities", "Mercados", "Inteligência de Mercado"],
    establishment: "1953",
    reliability: 96,
    completeness: 94,
    timeliness: 92,
    accuracy: 95,
    website: "https://apps.fas.usda.gov",
    logo: "/logos/usda-fas.png",
    dataAndContent: {
      "psd": {
        "name": "PS&D (Production, Supply & Distribution)",
        "description": "Concentra as estimativas oficiais do USDA, produção, consumo, estoques, importações e exportações por commodity/país, revisadas mensalmente em alinhamento com o calendário do WASDE",
        "features": ["Consulta online", "Download para planilhas", "Cobertura histórica de décadas", "Para muitas commodities, desde 1960"]
      },
      "exportSales": {
        "name": "Export Sales Reporting",
        "description": "Dados semanais de vendas líquidas e embarques por commodity/mercado (trigo, soja, milho, algodão, carnes, etc.)",
        "features": ["Relatórios semanais", "Séries históricas", "Nível detalhado por commodity e mercado"]
      },
      "gats": {
        "name": "GATS (Global Agricultural Trade System)",
        "description": "Disponibiliza estatísticas de exportação e importação dos EUA e integra fontes como U.S. Census e UN Comtrade",
        "features": ["Consultas padrão/avançadas", "Relatórios", "API de dados"]
      },
      "cropExplorer": {
        "name": "Crop Explorer (IPAD/FAS)",
        "description": "Provê mapas e séries de precipitação, temperatura, anomalias, número de dias de chuva/seca, umidade do solo (inclui produtos derivados como CPC e SMAP), e NDVI/MODIS",
        "features": ["Diagnóstico rápido de condições de safra no mundo", "Mapas interativos", "Séries temporais"]
      },
      "gain": {
        "name": "GAIN (Global Agricultural Information Network)",
        "description": "Reúne inteligência de mercado produzida pelos adidos agrícolas do FAS (relatórios temáticos e por país)",
        "features": ["Milhares de relatórios desde a década de 1990", "Insumo qualitativo que complementa as séries do PS&D"]
      }
    },
    accessAndDocumentation: {
      "primaryAccess": "FAS Open Data Services (Swagger)",
      "apiDocumentation": "Documenta as APIs de PS&D, Export Sales (ESR) e GATS, além do portal da fas",
      "authentication": "API key do api.data.gov necessária para uso programático",
      "endpoints": ["PS&D API", "Export Sales API", "GATS API"],
      "webPortals": {
        "psdOnline": "PS&D Online com consulta web e download de arquivos para planilhas/bancos",
        "exportSalesPortal": "Página oficial publica o relatório semanal, links para séries históricas, ferramentas de consulta e referência direta ao ESR Data API",
        "gatsPortal": "Portal oferece consultas e link para a GATS Data API",
        "cropExplorerPortal": "Acesso via visualização web de mapas e imagens com descrição das fontes/modelos; ideal para análise contextual e monitoramento"
      },
      "apiUsage": "Com a chave do api.data.gov, as APIs aceitam autenticação por cabeçalho (ex.: X-Api-Key) ou parâmetro, conforme o manual do api.data.gov, e possuem limites de requisição",
      "swaggerDocumentation": "Consulte o Swagger do FAS para formatos/rotas específicas por produto"
    },
    pricing: {
      "model": "Gratuito (open data)",
      "rateLimits": "Uso via api.data.gov está sujeito a rate limits padrão (por exemplo, 1.000 req/hora, podendo variar por serviço)",
      "apiKey": "Exige uma chave individual do api.data.gov",
      "description": "Acesso gratuito aos dados, mas com limitações de frequência de requisições"
    },
    volumeAndQuality: {
      "volume": "O PS&D cobre um amplo conjunto de commodities agrícolas e países, com séries históricas extensas (muitas desde 1960). O Export Sales fornece granularidade semanal por commodity/destino desde fins dos anos 1990; o GATS cobre todo o comércio agro dos EUA (exportações/importações). O GAIN adiciona ~2.000 relatórios/ano desde 1995, enriquecendo o contexto.",
      "quality": "O PS&D é o repositório oficial do USDA, revisado mensalmente por comitê interagências (WAOB/FAS/ERS/FSA/AMS), com atualizações sincronizadas ao WASDE; GAIN traz análises de postos no exterior e não é dado oficial, embora seja insumo importante.",
      "coverage": "Cobertura global com foco especial nos EUA e principais parceiros comerciais",
      "historicalData": "Dados históricos desde 1960 para muitas commodities"
    },
    dataCollection: [
      "Coleta de dados de produção, suprimentos e distribuição por commodity/país",
      "Monitoramento semanal de vendas de exportação dos EUA",
      "Integração de estatísticas de comércio de fontes como U.S. Census e UN Comtrade",
      "Coleta de dados agroclimáticos via satélite para monitoramento de safras",
      "Produção de relatórios de inteligência de mercado pelos adidos agrícolas",
      "Revisões mensais alinhadas com o calendário do WASDE",
      "Processamento de dados de precipitação, temperatura e umidade do solo",
      "Análise de NDVI/MODIS para condições de vegetação",
      "Tratamento cuidadoso de anos-safra (Marketing Year) que variam por país/commodity",
      "Registro do Release Schedule e datas de publicação para reproducibilidade",
      "Consideração de sazonalidades fortes e revisões para séries semanais",
      "Acompanhamento de cortes de produção e mudanças metodológicas"
    ],
    intelligence: [
      "Estimativas oficiais do USDA para produção e consumo global",
      "Análise de tendências de mercado e comércio internacional",
      "Monitoramento em tempo real de condições de safra via satélite",
      "Inteligência de mercado produzida por especialistas locais",
      "Integração de múltiplas fontes de dados para visão holística",
      "Suporte à tomada de decisões no agronegócio global",
      "Análise de impactos climáticos na produção agrícola",
      "Previsões e projeções para mercados de commodities"
    ],
    challenges: [
      "Esquemas diferentes entre APIs (PS&D, ESR, GATS)",
      "Necessidade de chave de API e rate limits",
      "Mapeamento de códigos de commodity e harmonização de MY vs. CY",
      "Crop Explorer voltado a imagens/mapas, exigindo tratamento específico para séries numéricas",
      "Complexidade na integração de múltiplas bases de dados",
      "Dependência de fontes externas como U.S. Census e UN Comtrade",
      "Necessidade de conhecimento técnico para uso eficiente das APIs",
      "Possíveis atrasos na disponibilização de dados devido a processos de validação",
      "GAIN traz análises de campo que podem divergir de números oficiais do PS&D"
    ],
    opportunities: [
      "Combinar Export Sales (semanal) com PS&D (mensal) para nowcasting de comércio/saldos",
      "Usar NDVI/umidade do solo do Crop Explorer para explicar revisões de produção",
      "Integrar o GATS para granularidade do comércio dos EUA por código HS/país",
      "Enriquecer análises de competitividade e share de mercado",
      "Desenvolvimento de sistemas de análise de mercado agrícola",
      "Integração com plataformas de trading de commodities",
      "Criação de dashboards para monitoramento de safras globais",
      "Desenvolvimento de modelos preditivos para preços de commodities",
      "Análise de impactos climáticos na produção global",
      "Sistemas de alerta para condições adversas de safra"
    ],
    recommendations: [
      "Implementar modelo canônico de dados por commodity–país–ano com chaves de mapeamento",
      "Guardar data/hora de release de cada atualização para versionamento",
      "Programar rotina semanal (5ª feira, horário de Washington) para Export Sales",
      "Programar rotina mensal para PS&D, sincronizada às datas do WASDE",
      "Registrar alterações e notas metodológicas dos circulares",
      "Obter chave no api.data.gov e autenticar conforme manual (ex.: cabeçalho X-Api-Key)",
      "Implementar cache e fila de chamadas se atingir limites de API",
      "Usar GATS API para validar séries de comércio dos EUA",
      "Usar GAIN para sinais qualitativos (mudanças regulatórias, logística, clima local)",
      "Consumir Crop Explorer como camadas de contexto, não como feed tabular",
      "Integrar imagens e metadados ao pipeline analítico/BI"
    ],
    limitations: [
      "Rate limits padrão (ex.: 1.000 req/hora) podem limitar aplicações intensivas",
      "Necessidade obrigatória de chave de API do api.data.gov",
      "Crop Explorer não fornece feed numérico estruturado",
      "Complexidade na navegação entre múltiplas bases de dados",
      "Dependência de conectividade para acesso às APIs",
      "Possíveis inconsistências entre diferentes fontes integradas",
      "Documentação técnica pode ser complexa para usuários iniciantes"
    ],
    features: [
      "PS&D com estimativas oficiais do USDA por commodity/país",
      "Export Sales com dados semanais de vendas e embarques",
      "GATS com estatísticas de comércio exterior integradas",
      "Crop Explorer com monitoramento agroclimático via satélite",
      "GAIN com inteligência de mercado qualitativa",
      "APIs REST padronizadas com documentação Swagger",
      "Dados históricos desde 1960 para muitas commodities",
      "Integração com fontes como U.S. Census e UN Comtrade",
      "Mapas interativos de condições de safra",
      "Relatórios temáticos por país e commodity"
    ]
  },
  {
    id: 16,
    name: "FAOLEX (Organização das Nações Unidas para Alimentação e Agricultura – FAO)",
    description: "O FAOLEX é o banco de dados jurídico-político da FAO que reúne leis, regulamentos, políticas e acordos internacionais sobre agricultura, alimentação e recursos naturais do mundo todo, com resumos, indexação temática e, quando disponível, o texto completo em PDF/TXT. É atualizado de forma contínua e cobre mais de 200 países/territórios.",
    type: "Internacional",
    category: "Legislação e Políticas Agrárias",
    coverage: "Global (200+ países/territórios)",
    format: "CSV/PDF/TXT",
    updateFrequency: "Contínua",
    accessibility: "Público",
    cost: "Gratuito",
    dataTypes: ["Legislação Agrícola", "Políticas Públicas", "Regulamentos", "Acordos Internacionais", "Desenvolvimento Rural", "Pesca e Aquicultura", "Pecuária", "Floresta", "Solos e Água", "Alimentação e Nutrição", "Meio Ambiente", "Biodiversidade", "Clima e Energia"],
    establishment: "FAO",
    reliability: 96,
    completeness: 94,
    timeliness: 92,
    accuracy: 95,
    website: "https://www.fao.org/faolex/en/",
    logo: "/logos/faolex.png",
    dataContent: {
      overview: "O acervo abrange legislação e políticas sobre agricultura e desenvolvimento rural, plantas cultivadas, pesca e aquicultura, pecuária, floresta, solos e água, alimentação e nutrição, meio ambiente, biodiversidade/ecossistemas, resíduos/perigosos, clima e energia, além de constituições e acordos internacionais.",
      records: "Em 13 mai 2025, o 'Complete Collection' somava 213.579 registros (CSV ~318 MB), com subconjuntos temáticos (por exemplo, 'Agriculture', 'Food and Nutrition', 'Land and Water', 'Environment and Ecosystems', 'Policies' e 'Constitutions').",
      metadata: "Cada registro traz metadados padronizados (ID LEX-FAOC…, URLs do registro e do documento, título original e traduzido, datas, status de revogação, tipo de texto, domínios temáticos, palavras-chave e abstract), e links para o PDF e para uma versão TXT útil para NLP.",
      thematicSubsets: [
        "Agriculture",
        "Food and Nutrition",
        "Land and Water",
        "Environment and Ecosystems",
        "Policies",
        "Constitutions"
      ]
    },
    access: {
      methods: [
        "Interface web com busca simples/avançada",
        "Downloads em CSV na página de Open Data",
        "Acesso direto aos documentos PDF/TXT"
      ],
      apis: [
        {
          name: "Download CSV",
          description: "Não há API pública documentada específica do FAOLEX, para ingestão programática, a via oficial é o download dos pacotes CSV",
          type: "Download direto"
        }
      ],
      documentation: [
        "Página principal/Busca avançada (navegação e filtros)",
        "Open Data (links de download, tamanhos, última atualização, citação recomendada/licença)",
        "Metadados FAOLEX (dicionário de dados/colunas)",
        "Guia de Busca (sintaxe/operadores)",
        "Termos e Condições e Statistical Database Terms of Use (licenças/reuso)"
      ]
    },
    pricing: {
      model: "Gratuito",
      license: "CC BY-NC-SA 3.0 IGO (restrição de uso comercial)",
      description: "Os datasets corporativos da FAO são disponibilizados sem custo; no caso do FAOLEX Open Data, a página de download apresenta citação recomendada com licença CC BY-NC-SA 3.0 IGO",
      terms: "Para FAOLEX prevalece o aviso da própria página de Open Data com restrição de uso comercial"
    },
    features: [
      "Banco de dados jurídico-político global",
      "Cobertura de mais de 200 países/territórios",
      "Metadados padronizados com indexação temática",
      "Textos completos em PDF e versões TXT para NLP",
      "Subconjuntos temáticos organizados",
      "Busca avançada com operadores de campo",
      "Atualização contínua",
      "Acesso gratuito aos dados",
      "Documentação completa com guias de uso",
      "Mais de 213.000 registros disponíveis"
    ],
    volumeAndQuality: {
       volume: "Coleção grande e crescente: >213 mil registros no dump de 13 mai 2025; média de ~8.000 novas entradas/ano; cobertura de 200+ países/territórios e documentos em 40+ línguas.",
       quality: "Curadoria do FAO Legal Office, com base em gazetas oficiais enviadas pelos Estados-Membros (art. XI da Constituição da FAO), resumos e indexação trilingue (EN/FR/ES), e links ao texto oficial. Há variação natural de qualidade/legibilidade entre países e épocas; a presença de TXT facilita processamento automatizado."
     },
     dataCollection: [
       "Para pipelines de IA/BI, trate o FAOLEX como dados normativos (não numéricos): modelem o esquema com a chave record_id, normalizem jurisdição (ISO-3166/ONU), tipo de texto (constituição/política/lei/regulamento/acordo), domínios e palavras-chave",
       "Priorize a ingestão via CSV do Open Data e o versionamento por 'última atualização' do arquivo, fazendo ingestão incremental por comparação de IDs",
       "Use os abstracts e o TXT para NLP (classificação temática, NER de setores/commodities/agências, extração de obrigações e prazos)",
       "Relacione documentos a eventos regulatórios e a dados operacionais (ex.: licenças, pesticidas, pesca, florestas) para análises de risco/conformidade setorial"
     ],
     challenges: [
       "Licenciamento do FAOLEX Open Data indica NC (não-comercial), o que limita produtos comerciais diretos sem autorização",
       "Heterogeneidade linguística e de formatos originais",
       "Possíveis PDFs digitalizados com OCR imperfeito",
       "Diferenças de estrutura legal entre países que dificultam comparabilidade",
       "Atualização contínua exige monitoramento e reprocessamento"
     ],
     opportunities: [
       "Base global para monitoramento regulatório agroambiental",
       "Insumo para mapas de risco (ex.: agrotóxicos, pesca IUU, desmatamento, segurança de alimentos)",
       "Enriquecimento de bases agronômicas com contexto jurídico",
       "Uso do TXT para LLMs/IE (resumos executivos, extração de requisitos, timelines de alterações)"
     ],
     recommendations: [
       "Ingestão: baixe o 'Complete Collection' e/ou subconjuntos temáticos do Open Data; armazene brutos (data lake) e normalize para um modelo relacional/documental com índices por record_id, país, tipo de texto, domínios e datas (original/amenda)",
       "Atualizações: automatize checagem periódica da página de Open Data (comparando 'Last updated' e contagem de registros) e aplique upserts por record_id",
       "NLP/Busca: gere embeddings do abstract e, quando possível, do TXT do documento (campo Text URL) para busca semântica e classificação; guarde o link ao PDF oficial para auditoria",
       "Governança & Licenças: registre a origem e a licença no nível do dataset (FAOLEX = CC BY-NC-SA 3.0 IGO na página de Open Data) e avalie necessidades de autorização para usos comerciais; quando o caso for estatístico FAO geral, verifique se aplica CC BY 4.0",
       "Enriquecimento: cruze com listas nacionais (ex.: ministérios/agências), códigos ISO, temas SDG e taxonomies internas para relatórios comparáveis por país/tema; explore as Thematic/Associated Databases (p.ex., Family Farming Lex) quando seu caso exigir recortes específicos"
     ],
     limitations: [
       "Não possui API pública documentada",
       "Ingestão programática limitada a downloads CSV",
       "Licença com restrição de uso comercial",
       "Interface pode ser complexa para usuários iniciantes",
       "Dependência de atualizações manuais dos arquivos CSV",
       "Necessidade de conhecimento jurídico para interpretação adequada",
       "Textos em múltiplos idiomas podem requerer tradução",
       "Tamanho dos arquivos CSV pode ser grande (~318 MB)"
     ]
  },
  {
    id: 'openweathermap',
    name: 'OpenWeatherMap',
    description: 'Plataforma privada de dados meteorológicos que fornece condições atuais, previsões, alertas e históricos globais via APIs REST, com produtos especializados (incluindo Agro API) e pacotes de histórico em alta resolução temporal.',
    category: 'Meteorológico',
    type: 'Privado',
    coverage: 'Global',
    format: 'JSON/XML/HTML',
    updateFrequency: 'Tempo Real',
    cost: 'Freemium',
    accessibility: 'Freemium',
    website: 'https://openweathermap.org/',
    apiDocumentation: 'https://openweathermap.org/api',
    reliability: 85,
    completeness: 90,
    timeliness: 95,
    accuracy: 80,
    features: [
      'Condições meteorológicas atuais',
      'Previsões minuto-a-minuto (1h)',
      'Previsões horárias (até 48h)',
      'Previsões diárias (até 8 dias)',
      'Alertas governamentais',
      'Histórico meteorológico (46+ anos)',
      'Weather Maps 2.0',
      'Agro API com NDVI e EVI',
      'Geocoding API',
      'History Bulk API'
    ],
    dataAndContent: {
      description: 'A base "Weather API" cobre tempo atual, previsões minuto-a-minuto (1 h), horárias (até 48 h), diárias (até 8 dias), alertas governamentais e histórico; pela One Call API 3.0 há acesso consolidado a atual, previsões, histórico de 46+ anos e previsões agregadas de longo prazo (até ~1,5 ano). Respostas em JSON (e, em alguns endpoints, XML/HTML).',
      weatherMaps: 'Weather Maps 2.0 oferece camadas de temperatura, precipitação, vento, pressão etc. com dados atuais, previsão e histórico, disponibilizados como tiles para Leaflet/OpenLayers/Google Maps.',
      agroAPI: 'A Agro API permite cadastrar polígonos de talhões e obter imagens de satélite (verdadeira/falsa cor) e índices de vegetação NDVI e EVI, além de séries históricas desses índices para cada polígono.',
      historyAPI: 'History API / History Bulk disponibiliza observações horárias de ~15 variáveis desde 1º jan 1979, entregues em JSON/CSV (download em lote via Marketplace).',
      geocodingAPI: 'Geocoding API (direto e reverso) para resolver nomes/CEPs em coordenadas, útil para padronizar entradas de locais.'
    },
    accessAndDocumentation: {
      integration: 'Integração via APIs REST com API key (APPID). O fluxo típico: criar conta, obter a chave e chamar endpoints HTTPS com lat/lon (ou usar o Geocoding API para converter nomes em coordenadas).',
      authentication: 'API key (APPID)',
      endpoints: 'HTTPS com coordenadas lat/lon'
    },
    pricing: {
      oneCallAPI: 'One Call API 3.0 opera em modelo "pay as you call": inclui 1.000 chamadas/dia grátis; excedentes são cobrados (£0,0012 por chamada).',
      monthlyPlans: 'Planos mensais maiores (Developer/Professional/Expert/Enterprise) definem limites de chamadas por minuto/mês e acesso a coleções/produtos adicionais.',
      historicalProducts: 'Produtos históricos em lote (History Bulk) e mapas avançados podem ter precificação específica via Marketplace/"Get a quote".'
    },
    volumeAndQualityAssessment: {
      volume: {
        description: 'Cobertura global com amplo portfólio (tempo atual, previsões diversas, mapas, histórico desde 1979 com passo horário), além de camadas especializadas (p.ex., precipitação histórica em passo de 10 minutos em mapas de alta resolução).'
      },
      quality: {
        description: 'Os dados são fundidos de múltiplas fontes: modelos globais/locais, radares, satélites e uma rede extensa de estações, combinados por modelos proprietários/ML para gerar previsões e nowcasting. Isso assegura atualização frequente e boa robustez, embora a acurácia em microclimas possa variar.'
      }
    },
    dataCollectionConsiderations: {
      agriculturalApplications: 'Para aplicações agronômicas, use One Call 3.0 para unificar atual+previsão+histórico por coordenada e Agro API para análises por talhão (polígonos e NDVI/EVI).',
      backfill: 'Faça backfill com History Bulk para treinar modelos de rendimento/risco.',
      technicalConsiderations: 'Estruture cache e limitação de taxa (rate-limit) conforme o plano, padronize unidades (metric/imperial) e fuso/UTC nos timestamps, e resolva localidades via Geocoding API.',
      intelligence: 'Para inteligência, cruze precipitação, temperatura e índices de vegetação por janela fenológica e aplique features agregadas (acumulados/degree-days).'
    },
    challengesAndOpportunities: {
      challenges: [
        'Custo variável em alto volume (pay-as-you-go)',
        'Necessidade de orquestrar múltiplos produtos (One Call, Agro, History)',
        'Heterogeneidade espacial/temporal vs. microclima local',
        'Gestão de tiles/mapas se você embutir camadas cartográficas'
      ],
      opportunities: [
        'Cobertura histórica longa para modelagem',
        'NDVI/EVI por polígono para monitorar vigor e estresse',
        'Precipitação/vento/temperatura com alta cadência para alertas operacionais',
        'Fácil integração com stacks de mapas (Leaflet/OpenLayers/Google Maps)'
      ]
    },
    integrationRecommendations: {
      priority: 'Priorize One Call 3.0 como fonte "única" por coordenada e habilite cache (e.g., TTL de 10–30 min para atual/nowcast e 1–3 h para previsões horárias) para otimizar custos.',
      geocoding: 'Use Geocoding API para entrada do usuário; armazene identificadores de talhões e suas geometrias e integre Agro API para NDVI/EVI e imagens.',
      dataManagement: 'Faça backfill inicial com History Bulk e atualize diariamente.',
      standardization: 'Normalize unidades/UTC; monitore consumo e quotas no painel da OpenWeather.',
      visualization: 'Para visualização, sobreponha Weather Maps 2.0 como tiles (com chave) no seu WebGIS.'
    },
    dataTypes: [
      'Temperatura',
      'Precipitação',
      'Umidade',
      'Pressão atmosférica',
      'Velocidade do vento',
      'Direção do vento',
      'Visibilidade',
      'Cobertura de nuvens',
      'Índice UV',
      'NDVI',
      'EVI'
    ],
    limitations: [
      'Custo variável em alto volume',
      'Limitações de taxa por plano',
      'Acurácia pode variar em microclimas',
      'Necessidade de múltiplas APIs para funcionalidades completas',
      'Dependência de conectividade para dados em tempo real'
    ]
  },
  {
    id: 'builtwith-datasets',
    name: 'BuiltWith Datasets',
    description: 'Repositório estruturado que disponibiliza, via download, metadados sobre tecnologias presentes em domínios web, cobrindo diversos setores como agricultura digital para análises estratégicas.',
    category: 'Tecnologia Web',
    type: 'Privado',
    coverage: 'Global',
    format: 'JSON/ZIP',
    updateFrequency: 'Mensal',
    cost: 'Pago (Orçamento Personalizado)',
    accessibility: 'Privado',
    website: 'https://builtwith.com/',
    apiDocumentation: 'https://builtwith.com/api',
    reliability: 95,
    completeness: 90,
    timeliness: 85,
    accuracy: 95,
    dataTypes: [
      'Tecnologias Web',
      'Metadados de Domínio',
      'Categorias Tecnológicas',
      'Histórico de Uso',
      'IoT',
      'Rastreamento por Satélite',
      'CMS',
      'APIs',
      'Scripts e Widgets',
      'Frameworks',
      'Informações de Contato',
      'Localização'
    ],
    features: [
      'Rastreamento de mais de 673 milhões de websites ativos',
      'Identificação de tecnologias implementadas em websites',
      'Categorização por tipo (IoT, rastreamento satelital, CMS, APIs)',
      'Dados de domínio, tecnologias, categorias e contagem de registros',
      'Category Datasets agrupados por categoria tecnológica',
      'Entire Internet Datasets com cobertura completa',
      'Datasets de exemplo disponíveis para download',
      'Estrutura de dados em JSON bem documentada',
      'Acesso via API para consultas dinâmicas',
      'Atualização mensal dos dados',
      'Alta precisão na detecção de scripts, widgets e frameworks',
      'Cobertura praticamente completa da internet'
    ],
    limitations: [
      'Volume massivo exige infraestrutura robusta para processamento',
      'Filtragem necessária para isolar domínios do agronegócio',
      'Custo pode ser elevado dependendo do volume de dados',
      'Qualidade de metadados de contato pode variar',
      'Preços não publicados, necessário solicitar orçamento',
      'Dependência da disponibilidade pública de informações nos websites'
    ],
    dataAndContent: {
      description: 'Oferece informações sobre quais tecnologias estão implementadas em websites, categorizadas por tipo (como IoT, rastreamento por satélite, CMS, APIs, etc). Contém dados de domínio, tecnologias, categorias, contagem de registros e histórico de uso.',
      categoryDatasets: 'Datasets agrupados por categoria tecnológica com milhões de registros',
      entireInternetDatasets: 'Cobertura de todos os sites ativos na internet',
      dataStructure: 'Arquivos JSON com estrutura bem documentada explicando cada propriedade e finalidade',
      coverage: 'Rastreamento de mais de 673 milhões de websites ativos representando cobertura praticamente completa da internet'
    },
    accessAndDocumentation: {
      primaryAccess: 'Download de datasets em formato ZIP contendo arquivos JSON',
      sampleDataset: 'Dataset de exemplo disponível para download oferecendo visão prática da estrutura dos dados',
      documentation: 'Documentação completa sobre campos presentes nos arquivos JSON disponível no site',
      apiAccess: 'Acesso via API para consultas dinâmicas e detalhadas além dos downloads',
      dataFormat: 'Arquivos JSON estruturados com metadados detalhados sobre tecnologias web'
    },
    pricing: {
      model: 'Orçamento personalizado - preços não publicados no site',
      apiPlans: 'Planos estruturados com base em volume de consultas e tipos de dados',
      scalability: 'Valores escaláveis conforme necessidade do cliente',
      contactRequired: 'Necessário solicitar orçamento para acesso completo aos datasets'
    },
    volumeAndQualityAssessment: {
      volume: {
        description: 'Volume massivo com rastreamento de mais de 673 milhões de websites ativos',
        coverage: 'Cobertura praticamente completa da internet',
        challenge: 'Para o setor agrícola, o desafio é filtrar e identificar domínios relevantes'
      },
      quality: {
        technologyDetection: 'Alta qualidade e precisão na detecção de scripts, widgets e frameworks',
        metadata: 'Qualidade de metadados como informações de contato pode variar',
        updateFrequency: 'Atualização mensal garante dados relativamente recentes',
        reliability: 'Principal fortaleza da plataforma na identificação de tecnologias'
      }
    },
    dataCollectionConsiderations: {
      strategicAnalysis: 'Fonte valiosa para análises setoriais em agricultura digital permitindo filtrar domínios relevantes',
      technologyMapping: 'Permite entender quais tecnologias estão sendo aplicadas no setor',
      dataIntegration: 'Pode ser combinada com outras bases (meteorologia, sensores, mercado) para inteligência competitiva',
      filtering: 'Criar filtros por categoria ou domínio relacionados à agricultura é fundamental para insights relevantes',
      competitiveIntelligence: 'Identificação de tendências tecnológicas no agronegócio'
    },
    challengesAndOpportunities: {
      challenges: [
        'Volume massivo exige infraestrutura robusta para armazenamento e processamento',
        'Filtragem manual ou automatizada necessária para isolar domínios do agronegócio',
        'Custo pode ser elevado dependendo do volume e profundidade dos dados necessários'
      ],
      opportunities: [
        'Mapeamento do ecossistema tecnológico agrícola',
        'Identificação de fornecedores, plataformas IoT, rastreamento satelital',
        'Insights para prospecção de clientes, parceiros ou benchmarking',
        'Análise de adoção tecnológica global ou regional com atualização periódica'
      ]
    },
    integrationRecommendations: [
      'Obter e estudar dataset de exemplo (ZIP/JSON) e documentação de campos',
      'Solicitar orçamento personalizado para datasets específicos de interesse',
      'Avaliar planos API se desejar acesso dinâmico aos dados',
      'Desenvolver pipelines de ingestão com filtragem por tecnologia relevante',
      'Armazenar em data warehouse ou sistema de análise',
      'Enriquecer dados cruzando com outras fontes (mercado, satélite, clima)',
      'Gerar dashboards e relatórios estratégicos',
      'Estabelecer processo de atualização periódico alinhado com frequência mensal'
    ]
  }
];

export const comparisonCategories = [
  {
    id: "accessibility",
    name: "Acessibilidade",
    options: ["Público", "Público/Pago", "Privado", "Restrito"]
  },
  {
    id: "cost",
    name: "Custo",
    options: ["Gratuito", "Freemium", "Pago", "Variável"]
  },
  {
    id: "coverage",
    name: "Cobertura",
    options: ["Nacional", "Regional", "Global", "Local"]
  },
  {
    id: "type",
    name: "Tipo de Instituição",
    options: ["Governamental", "Institucional", "Acadêmico", "Privado", "Internacional", "Colaborativo"]
  },
  {
    id: "updateFrequency",
    name: "Frequência de Atualização",
    options: ["Tempo Real", "Diário", "Semanal", "Mensal", "Trimestral", "Anual"]
  },
  {
    id: "format",
    name: "Formato dos Dados",
    options: ["API", "CSV", "JSON", "XML", "PDF", "XLS", "SHP", "GeoTIFF", "NetCDF"]
  }
];

export const qualityMetrics = [
  { name: "Confiabilidade", key: "reliability" },
  { name: "Completude", key: "completeness" },
  { name: "Pontualidade", key: "timeliness" },
  { name: "Precisão", key: "accuracy" }
];