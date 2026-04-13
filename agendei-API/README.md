# Agendei API - Backend

API RESTful do sistema de agendamento de consultas médicas Agendei.

## 📋 Descrição

API Node.js/Express que gerencia médicos, serviços, usuários e agendamentos. Utiliza PostgreSQL como banco de dados e JWT para autenticação.

## 🚀 Tecnologias

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **PostgreSQL** - Banco de dados relacional
- **pg** - Cliente PostgreSQL
- **jsonwebtoken** - Autenticação JWT
- **bcrypt** - Criptografia de senhas
- **dotenv** - Variáveis de ambiente

## 📦 Instalação

```bash
cd agendei-API
npm install
npm start
```

## 🔧 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
DATABASE_URL=postgresql://user:password@host/neondb?sslmode=require
PORT=3001
```

## 🗄️ Estrutura do Banco de Dados

### Tabelas

#### admins
- `id_admin` (SERIAL PRIMARY KEY)
- `name` (VARCHAR 50)
- `email` (VARCHAR 100)
- `password` (VARCHAR 100)

#### doctors
- `id_doctor` (SERIAL PRIMARY KEY)
- `name` (VARCHAR 50)
- `specialty` (VARCHAR 50)
- `icon` (VARCHAR 10)

#### services
- `id_service` (SERIAL PRIMARY KEY)
- `description` (VARCHAR 50)

#### users
- `id_user` (SERIAL PRIMARY KEY)
- `name` (VARCHAR 50)
- `email` (VARCHAR 100)
- `password` (VARCHAR 100)
- `fone` (VARCHAR 20)
- `cep`, `logr`, `num`, `compl`, `bairro`, `cidade`, `uf` (Endereço)

#### doctors_services
- `id_doctor_service` (SERIAL PRIMARY KEY)
- `id_doctor` (INTEGER REFERENCES doctors)
- `id_service` (INTEGER REFERENCES services)
- `price` (NUMERIC 9,2)

#### appointments
- `id_appointment` (SERIAL PRIMARY KEY)
- `id_doctor` (INTEGER REFERENCES doctors)
- `id_service` (INTEGER REFERENCES services)
- `id_user` (INTEGER REFERENCES users)
- `booking_date` (DATE)
- `booking_hour` (VARCHAR 5)

## 📡 Endpoints

### Autenticação Admin
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| POST | /admin/login | Login de administrador |
| POST | /admin/register | Registro de administrador |

### Autenticação Usuário
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| POST | /users/login | Login de usuário |
| POST | /users | Registro de usuário |

### Médicos (requer token)
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | /doctors | Listar médicos |
| GET | /doctors/:id_doctor | Detalhes do médico |
| POST | /doctors | Cadastrar médico |
| PUT | /doctors/:id_doctor | Atualizar médico |
| DELETE | /doctors/:id_doctor | Excluir médico |
| GET | /doctors/:id_doctor/services | Serviços do médico |

### Serviços
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | /services | Listar serviços (público) |
| POST | /services | Cadastrar serviço (token) |
| PUT | /services/:id_service | Atualizar serviço |
| DELETE | /services/:id_service | Excluir serviço |

### Agendamentos (requer token)
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | /appointments | Listar agendamentos do usuário |
| POST | /appointments | Criar agendamento |
| DELETE | /appointments/:id_appointment | Cancelar |

### Admin (requer token)
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | /admin/appointments | Todos os agendamentos |
| GET | /admin/users | Listar usuários |
| GET | /admin/appointments/:id | Detalhes |
| POST | /admin/appointments | Criar (admin) |
| PUT | /admin/appointments/:id | Editar (admin) |
| PUT | /admin/profile/:id_admin | Editar perfil admin |

## 🔐 Autenticação

A API usa JWT para autenticação. O token deve ser enviado no header:
```
Authorization: Bearer <token>
```

## 📁 Estrutura de Arquivos

```
agendei-API/
├── src/
│   ├── index.js           # Entry point
│   ├── routes.js          # Rotas da API
│   ├── token.js           # Funções JWT
│   ├── database/
│   │   └── postgres.js    # Conexão PostgreSQL
│   ├── controllers/       # Controladores
│   ├── services/         # Lógica de negócio
│   └── repositories/      # Acesso ao banco
├── package.json
└── vercel.json
```

## 🌐 Links de Produção

- **API**: https://agendei-api-53h2.onrender.com
- **Frontend**: https://agendeiweb.netlify.app

## 📝 Scripts

```bash
npm start    # Iniciar servidor
```

## 📄 Licença

MIT

## 👤 Autor

Jair Alvarenga Pereira

## 🔗 Repositório

https://github.com/jairalvarengapereira/Agendei-API