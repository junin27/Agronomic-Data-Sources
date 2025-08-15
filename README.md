# Mapeamento de Fontes### 📊 Fontes de Dados Incluídas:

O sistema apresenta informações detalhadas sobre as principais fontes de dados agronômicos:

**Instituições Governamentais:**
- **IBGE** - Instituto Brasileiro de Geografia e Estatística
- **INMET** - Instituto Nacional de Meteorologia
- **INCRA** - Instituto Nacional de Colonização e Reforma Agrária
- **CONAB** - Companhia Nacional de Abastecimento
- **ANA/SNIRH** - Agência Nacional de Águas
- **CEMADEN** - Centro Nacional de Monitoramento e Alertas
- **CPRM/GEOBANK** - Serviço Geológico do Brasil
- **PRODES** - Programa de Cálculo do Desflorestamento
- **TerraClass** - Mapeamento do Uso da Terra na Amazônia
- **SIGEF** - Sistema de Gestão Fundiária
- **SIRENE** - Sistema Nacional de Recursos Hídricos
- **BDMEP** - Banco de Dados Meteorológicos

**Instituições de Pesquisa:**
- **EMBRAPA** - Empresa Brasileira de Pesquisa Agropecuária
- **CEPEA/ESALQ** - Centro de Estudos Avançados em Economia Aplicada
- **LAPIG/UFG** - Laboratório de Processamento de Imagens

**Projetos Colaborativos:**
- **MapBiomas** - Mapeamento do uso e cobertura da terra

**Fontes Internacionais:**
- **NASA POWER** - Dados meteorológicos globaisronômicos

Um site React moderno para apresentar, comparar e analisar fontes de dados agronômicos do Brasil e do mundo.

## 🌱 Funcionalidades

- **Dashboard Interativo**: Visão geral das fontes de dados com estatísticas em tempo real
- **Cards Detalhados**: Cada fonte de dados apresentada em card com modal informativo
- **Tabela Comparativa**: Compare até 6 fontes lado a lado em diferentes critérios
- **Gráficos Dinâmicos**: Visualizações diversas (barras, pizza, radar, linha) para análise dos dados
- **Filtros Avançados**: Busque e filtre por tipo, cobertura, custo e outras características
- **Design Responsivo**: Interface adaptada para desktop, tablet e mobile

## 🚀 Tecnologias Utilizadas

- **React 18**: Framework principal
- **Tailwind CSS**: Estilização moderna e responsiva
- **React Router**: Navegação entre páginas
- **Recharts**: Biblioteca de gráficos interativos
- **Lucide React**: Ícones modernos
- **Vite**: Build tool rápido e eficiente

## 📊 Fontes de Dados Incluídas

O sistema apresenta informações detalhadas sobre as principais fontes de dados agronômicos:

- **EMBRAPA**: Empresa Brasileira de Pesquisa Agropecuária
- **IBGE**: Instituto Brasileiro de Geografia e Estatística
- **INMET**: Instituto Nacional de Meteorologia
- **CEPEA/ESALQ**: Centro de Estudos Avançados em Economia Aplicada
- **INCRA**: Instituto Nacional de Colonização e Reforma Agrária
- **CONAB**: Companhia Nacional de Abastecimento
- **NASA POWER**: Dados meteorológicos globais
- **MapBiomas**: Mapeamento do uso e cobertura da terra

## 🎯 Métricas de Qualidade

Cada fonte é avaliada em quatro dimensões:

- **Confiabilidade**: Credibilidade e reputação da fonte
- **Completude**: Abrangência dos dados disponíveis
- **Pontualidade**: Frequência e regularidade das atualizações
- **Precisão**: Acurácia e exatidão das informações

## 🛠️ Instalação e Execução

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Passos

1. Clone o repositório:
\`\`\`bash
git clone https://github.com/seu-usuario/mapeamento-dados-agronomicos.git
cd mapeamento-dados-agronomicos
\`\`\`

2. Instale as dependências:
\`\`\`bash
npm install
\`\`\`

3. Execute o projeto em modo de desenvolvimento:
\`\`\`bash
npm run dev
\`\`\`

4. Acesse no navegador:
\`\`\`
http://localhost:5173
\`\`\`

## 📁 Estrutura do Projeto

\`\`\`
src/
├── components/          # Componentes React
│   ├── Navbar.jsx      # Barra de navegação
│   ├── Dashboard.jsx   # Dashboard principal
│   ├── DataSourceCards.jsx    # Cards das fontes
│   ├── DataSourceModal.jsx    # Modal detalhado
│   ├── ComparisonTable.jsx    # Tabela comparativa
│   └── Charts.jsx      # Gráficos e visualizações
├── data/               # Dados das fontes
│   └── datasources.js  # Base de dados das fontes
├── styles.css          # Estilos Tailwind
├── App.jsx            # Componente principal
└── main.jsx           # Ponto de entrada
\`\`\`

## 🎨 Personalização

### Adicionando Novas Fontes

Para adicionar uma nova fonte de dados, edite o arquivo \`src/data/datasources.js\`:

\`\`\`javascript
{
  id: 9,
  name: "Nova Fonte",
  description: "Descrição da fonte",
  type: "Tipo da instituição",
  category: "Categoria dos dados",
  coverage: "Cobertura geográfica",
  // ... outros campos
}
\`\`\`

### Modificando Estilos

O projeto usa Tailwind CSS. Para personalizar:

1. Edite \`tailwind.config.js\` para cores e temas personalizados
2. Modifique \`src/styles.css\` para componentes customizados

## 🚀 Build para Produção

\`\`\`bash
npm run build
\`\`\`

Os arquivos otimizados serão gerados na pasta \`dist/\`.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuições

Contribuições são bem-vindas! Por favor:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (\`git checkout -b feature/AmazingFeature\`)
3. Commit suas mudanças (\`git commit -m 'Add some AmazingFeature'\`)
4. Push para a branch (\`git push origin feature/AmazingFeature\`)
5. Abra um Pull Request

## 📞 Contato

- **Autor**: Seu Nome
- **Email**: seu.email@exemplo.com
- **LinkedIn**: [Seu Perfil](https://linkedin.com/in/seu-perfil)

## 🙏 Agradecimentos

- Todas as instituições que disponibilizam dados agronômicos de forma aberta
- Comunidade React e desenvolvedores das bibliotecas utilizadas
- Contribuidores do projeto+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
