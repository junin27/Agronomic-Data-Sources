# Sistema de Atualização Automática de Data

Este sistema atualiza automaticamente a data de "Fontes Atualizadas em" no cabeçalho da aplicação.

## Como Funciona

O sistema usa uma abordagem em camadas para garantir que sempre tenha uma data válida:

1. **Arquivo Local** (scripts/update-date.ps1): Gera `src/constants/lastUpdate.js` com a data do último commit
2. **GitHub API**: Busca a data do último commit online (fallback)
3. **Data do Build**: Usa a data de quando a aplicação foi construída (fallback)
4. **Data Atual**: Última opção se tudo mais falhar

## Uso Manual

Para atualizar a data manualmente:

```bash
npm run update-date
```

## Automação

### Durante o Build
A data é atualizada automaticamente quando você executa:
```bash
npm run build
```

### Git Hook (Opcional)
Um git hook foi criado em `.git/hooks/pre-commit` que atualiza a data antes de cada commit.

Para ativar o hook no Windows:
```bash
# Tornar o arquivo executável (no Git Bash)
chmod +x .git/hooks/pre-commit
```

## Arquivos Importantes

- `src/components/LastUpdated.jsx` - Componente que exibe a data
- `scripts/update-date.ps1` - Script PowerShell para Windows
- `scripts/update-date.sh` - Script Bash para Linux/Mac
- `src/constants/lastUpdate.js` - Arquivo gerado com a data (commitado no repo)

## Funcionamento Offline

O sistema funciona mesmo offline usando:
1. O arquivo local `lastUpdate.js` (se disponível)
2. A data definida durante o build (variável `__BUILD_DATE__`)
3. A data atual como último recurso

Isso garante que a aplicação sempre mostre uma data, mesmo sem conexão com internet ou GitHub.
