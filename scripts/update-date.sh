#!/bin/bash

# Script para atualizar automaticamente a data do último commit
# Este script pode ser usado como git hook

# Obter a data do último commit
LAST_COMMIT_DATE=$(git log -1 --format="%cd" --date=format:"%d/%m/%Y")

# Criar ou atualizar um arquivo com a data
echo "export const LAST_UPDATE = '$LAST_COMMIT_DATE';" > src/constants/lastUpdate.js

echo "Data atualizada para: $LAST_COMMIT_DATE"
