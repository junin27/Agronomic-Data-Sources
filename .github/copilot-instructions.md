# Instruções para o GitHub Copilot

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

Este é um projeto React com Tailwind CSS para apresentação e análise de fontes de dados agronômicos.

## Estrutura do Projeto

- **React**: Framework principal para a interface do usuário
- **Tailwind CSS**: Framework de estilos utilitários
- **React Router**: Navegação entre páginas
- **Recharts**: Biblioteca para criação de gráficos
- **Lucide React**: Ícones

## Funcionalidades Principais

1. **Dashboard**: Visão geral das fontes de dados com estatísticas
2. **Cards de Fontes**: Exibição das fontes com modal detalhado
3. **Tabela Comparativa**: Comparação lado a lado das fontes selecionadas
4. **Gráficos**: Visualizações diversas dos dados (barras, pizza, radar, linha)

## Dados

As fontes de dados estão estruturadas em `src/data/datasources.js` com informações sobre:
- Metadados básicos (nome, tipo, cobertura)
- Métricas de qualidade (confiabilidade, completude, pontualidade, precisão)
- Características técnicas (formato, frequência de atualização)
- Aspectos econômicos (custo, acessibilidade)

## Convenções de Código

- Use componentes funcionais com hooks
- Implemente responsividade com classes Tailwind
- Mantenha componentes modulares e reutilizáveis
- Use PropTypes ou TypeScript para tipagem (se necessário)
- Siga as convenções de nomenclatura do React (PascalCase para componentes)

## Estilo Visual

- Paleta de cores focada em tons de verde (agricultura) e azul (dados)
- Design limpo e moderno
- Cards com hover effects
- Tabelas responsivas com scroll horizontal
- Gráficos interativos e informativos
