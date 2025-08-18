import { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

const LastUpdated = () => {
  const [lastCommitDate, setLastCommitDate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLastCommitDate = async () => {
      try {
        // Primeiro, tentar importar do arquivo local gerado pelo script
        try {
          const { LAST_UPDATE } = await import('../constants/lastUpdate.js');
          setLastCommitDate(LAST_UPDATE);
          setLoading(false);
          return;
        } catch (localError) {
          console.log('Arquivo local não encontrado, tentando GitHub API...');
        }

        // Tentar buscar do GitHub API como fallback
        const response = await fetch('https://api.github.com/repos/junin27/Agronomic-Data-Sources/commits?per_page=1');
        
        if (response.ok) {
          const commits = await response.json();
          if (commits.length > 0) {
            const commitDate = new Date(commits[0].commit.committer.date);
            setLastCommitDate(commitDate.toLocaleDateString('pt-BR'));
          } else {
            // Fallback para data do build ou data atual
            setLastCommitDate(typeof __BUILD_DATE__ !== 'undefined' ? __BUILD_DATE__ : new Date().toLocaleDateString('pt-BR'));
          }
        } else {
          // Fallback para data do build ou data atual
          setLastCommitDate(typeof __BUILD_DATE__ !== 'undefined' ? __BUILD_DATE__ : new Date().toLocaleDateString('pt-BR'));
        }
      } catch (error) {
        console.log('API indisponível, usando data do build como fallback');
        // Fallback para data do build ou data atual
        setLastCommitDate(typeof __BUILD_DATE__ !== 'undefined' ? __BUILD_DATE__ : new Date().toLocaleDateString('pt-BR'));
      } finally {
        setLoading(false);
      }
    };

    fetchLastCommitDate();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center space-x-1 text-sm text-gray-500">
        <Calendar className="h-4 w-4" />
        <span>Carregando...</span>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-1 text-sm text-gray-500">
      <Calendar className="h-4 w-4" />
      <span>Fontes Atualizadas em: {lastCommitDate}</span>
    </div>
  );
};

export default LastUpdated;
