#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obter __dirname em ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

try {
  // Obter a data do último commit
  const lastCommitDate = execSync('git log -1 --format="%cd" --date=format:"%d/%m/%Y"', {
    encoding: 'utf8'
  }).trim().replace(/"/g, '');

  // Criar o diretório se não existir
  const constantsDir = path.join(__dirname, '..', 'src', 'constants');
  if (!fs.existsSync(constantsDir)) {
    fs.mkdirSync(constantsDir, { recursive: true });
  }

  // Criar ou atualizar o arquivo com a data
  const filePath = path.join(constantsDir, 'lastUpdate.js');
  const content = `export const LAST_UPDATE = '${lastCommitDate}';\n`;
  
  fs.writeFileSync(filePath, content, 'utf8');
  
  console.log(`Data atualizada para: ${lastCommitDate}`);
} catch (error) {
  console.log('Erro ao obter data do git, usando data atual como fallback');
  
  // Fallback para data atual
  const currentDate = new Date().toLocaleDateString('pt-BR');
  
  // Criar o diretório se não existir
  const constantsDir = path.join(__dirname, '..', 'src', 'constants');
  if (!fs.existsSync(constantsDir)) {
    fs.mkdirSync(constantsDir, { recursive: true });
  }

  // Criar arquivo com data atual
  const filePath = path.join(constantsDir, 'lastUpdate.js');
  const content = `export const LAST_UPDATE = '${currentDate}';\n`;
  
  fs.writeFileSync(filePath, content, 'utf8');
  
  console.log(`Data atualizada para (fallback): ${currentDate}`);
}
