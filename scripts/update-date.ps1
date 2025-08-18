# Script PowerShell para Windows
# Atualiza automaticamente a data do último commit

# Obter a data do último commit
$lastCommitDate = git log -1 --format="%cd" --date=format:"%d/%m/%Y"

# Criar o diretório se não existir
if (!(Test-Path "src\constants")) {
    New-Item -ItemType Directory -Path "src\constants" -Force
}

# Criar ou atualizar um arquivo com a data
"export const LAST_UPDATE = '$lastCommitDate';" | Out-File -FilePath "src\constants\lastUpdate.js" -Encoding UTF8

Write-Host "Data atualizada para: $lastCommitDate"
