# estacao-meteorologica-backend

## Instalação
Para executar o back-end é necessário ter instalado:
* NodeJS
* MySQL
* Sequelize-cli
  
Antes de iniciar é necesśário instalar as dependências com:
```npm install```

E criar o banco de dados com:
```npx sequelize db:migrate```


## Execução 
Para a execução é só executar em um terminal o comando:
```npm run dev```

## Utilização
Pelo fato dessa ser uma API REST, o acesso aos dados é realizado por meio de requisições HTTP:

### Rotas
Podemos dividir as rotas em duas categorias, a primeira manipulação da tabela de estações meteorológicas (stations):

### Station routes
Para a rota ```'/stations'``` temos os métodos de requisição:

GET: retorna todas as estações meteorológica cadastradas.

POST: é utilizado para cadastrar uma nova estação

PUT: é utilizado para atualizar os dados uma estação já cadastrada, é necessário complementar a rota com o id da respectiva estação. Ex: ```/stations/1```

DELETE: remove uma estação já cadastrada, é necessário complementar a rota com o id da respectiva estação. Ex: ```/stations/1```

### Logs routes
Para a rota ```'/stations/{idDaEstação}/logs'``` temos os métodos de requisição:

GET: Os dados das leituras realizadas são obtidos a partir dessa rota

POST: A etação fornece os dados por essa rota
