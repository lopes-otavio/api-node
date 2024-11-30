🚨 Accident Reports API
📋 Descrição do Projeto
API RESTful desenvolvida com Fastify para gerenciamento de relatórios de acidentes. A aplicação permite a manipulação de dados de acidentes através de endpoints para busca, criação, atualização e exclusão de relatórios.
🛠️ Pré-requisitos

Node.js (versão 18 ou superior recomendada)
npm (Gerenciador de Pacotes do Node)

🚀 Instalação

Clone o repositório:
bashCopygit clone https://github.com/seu-usuario/accident-reports-api.git
cd accident-reports-api

Instale as dependências:
bashCopynpm install


⚙️ Configuração
Certifique-se de ter um arquivo CSV com dados de relatórios de acidentes no diretório apropriado.
🖥️ Executando a Aplicação
Modo de Desenvolvimento
Para rodar a aplicação com recarregamento automático:
bashCopynpm run dev
A aplicação estará disponível em http://localhost:3000
🌐 Endpoints da API
Buscar Todos os Relatórios

GET /accident-reports

Retorna todos os relatórios de acidentes



Buscar Relatório Específico

GET /accident-reports/:id

Retorna um relatório de acidente específico
Retorna 404 se não encontrado



Criar Relatório

POST /accident-reports

Adiciona um novo relatório de acidente
Requer objeto de relatório completo no corpo da requisição



Atualizar Relatório

PUT /accident-reports/:id

Atualiza um relatório de acidente existente
Retorna 404 se o relatório não for encontrado



Excluir Relatório

DELETE /accident-reports/:id

Remove um relatório de acidente específico
Retorna 404 se o relatório não for encontrado



📂 Estrutura do Projeto
Copysrc/
├── server.ts          # Configuração principal do servidor
├── routes.ts          # Definições de rotas da API
├── services/
│   └── csvService.ts  # Serviço de parsing de CSV
└── models/
    └── AccidentReport.ts  # Definição de tipo para relatórios
🧩 Tecnologias Utilizadas

Fastify
TypeScript
csv-parse
tsx (Execução e modo de observação do TypeScript)

📦 Dependências de Desenvolvimento

@types/node
ts-node
typescript

📄 Licença
Licença ISC
👤 Autor
Otávio Lopes
