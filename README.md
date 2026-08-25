# API Connect - Gerenciamento de Usuários

## Objetivo

Esta API foi desenvolvida como um MVP para realizar o gerenciamento de usuários. Ela permite cadastrar, listar, buscar, atualizar e remover usuários por meio de requisições HTTP.

Nesta versão, os dados são armazenados temporariamente em memória utilizando um array.

## Tecnologias utilizadas

- Node.js
- Express
- JavaScript
- JSON
- Git e GitHub

## Como executar o projeto

É necessário ter o Node.js instalado.

1. Clone o repositório:

```bash
git clone https://github.com/Millenavitoria-beep/api-connect-millena-vitoria.git
```

2. Entre na pasta do projeto:

```bash
cd api-connect-millena-vitoria
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o servidor:

```bash
node server.js
```

O servidor será executado na porta `3000`.

## Endpoints

### Listar usuários

```http
GET /api/usuarios
```

Retorna a lista de usuários cadastrados.

**Status de sucesso:** `200 OK`

### Buscar usuário por ID

```http
GET /api/usuarios/:id
```

Retorna o usuário correspondente ao ID informado.

**Status de sucesso:** `200 OK`  
**Usuário não encontrado:** `404 Not Found`

### Cadastrar usuário

```http
POST /api/usuarios
```

Exemplo de JSON:

```json
{
  "nome": "Carlos",
  "email": "carlos@email.com"
}
```

**Status de sucesso:** `201 Created`  
**Dados obrigatórios ausentes:** `400 Bad Request`

### Atualizar usuário

```http
PATCH /api/usuarios/:id
```

Exemplo:

```json
{
  "nome": "Carlos Silva"
}
```

**Status de sucesso:** `200 OK`  
**Usuário não encontrado:** `404 Not Found`

### Remover usuário

```http
DELETE /api/usuarios/:id
```

Remove o usuário correspondente ao ID informado.

**Status de sucesso:** `200 OK`  
**Usuário não encontrado:** `404 Not Found`

## Validação

No cadastro, os campos `nome` e `email` são obrigatórios. Caso algum deles não seja informado, a API retorna o status `400 Bad Request` com uma mensagem de erro em JSON.

## Persistência de dados

Os dados são armazenados em memória. Portanto, os usuários cadastrados durante a execução são perdidos quando o servidor é reiniciado.
