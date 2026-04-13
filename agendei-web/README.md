# Agendei Web 💻

![Badge](https://img.shields.io/badge/Platform-Web-brightgreen)
![Badge](https://img.shields.io/badge/Framework-React-blue)
![Badge](https://img.shields.io/badge/License-MIT-green)
![Badge](https://img.shields.io/badge/Status-Active-success)

---

<div align="center">

![Agendei Logo](./src/assets/images/Logo.png)

### Sistema de Agendamento de Consultas Médicas - Painel Admin

**Deploy**: https://agendeiweb.netlify.app

</div>

---

## 📱 Sobre o Sistema

O **Agendei Web** é um painel administrativo moderno para gerenciamento de agendamentos de consultas médicas. Desenvolvido com React e Vite, oferece uma interface intuitiva para que administradores gerenciem médicos, especialidades, pacientes e agendamentos de forma eficiente.

---

## 🚀 Funcionalidades

### ✨ Principais
- 🔐 **Autenticação** - Login seguro de administradores
- 👨‍⚕️ **Gerenciamento de Médicos** - Cadastro, edição e exclusão de médicos com suas especialidades
- 🏥 **Serviços/Especialidades** - Cadastro de especialidades médicas
- 👥 **Pacientes** - Gerenciamento completo de pacientes (CRUD)
- 📅 **Agendamentos** - Criação e gerenciamento de consultas com filtros por período e médico
- 👤 **Perfil** - Edição de dados do administrador

---

## 🖥️ Telas do Sistema

### 1. Login
Tela de acesso ao sistema com design moderno:
- Logo institucional
- Campos para email e senha
- Botão de acesso com gradiente
- Link para criação de nova conta

### 2. Registro
Tela para cadastro de novos administradores:
- Formulário completo com campos de nome, email e senha
- Design integrado com a identidade visual

### 3. Agendamentos
Dashboard principal de consultas:
- **Filtros**: Período de data (data inicial até data final), seleção de médico
- **Tabela**: Lista de todos os agendamentos com colunas:
  - Paciente
  - Médico
  - Especialidade
  - Data/Hora
  - Valor
  - Ações (editar/excluir)
- **Botão**: Novo Agendamento

### 4. Médicos
Gestão de profissionais:
- **Filtro**: Seleção de médico para filtrar resultados
- **Tabela**: Lista de médicos com:
  - Nome
  - Especialidade Principal
  - Ações (editar/excluir)
- **Botão**: Novo Médico

### 5. Pacientes
Gerenciamento de pacientes:
- **Filtro**: Seleção de paciente
- **Tabela**: Lista completa com colunas:
  - Nome
  - E-mail
  - Telefone
  - CEP
  - Endereço
  - Número
  - Complemento
  - Bairro
  - Cidade
  - UF
  - Ações (editar/excluir)
- **Botão**: Novo Paciente

### 6. Serviços
Cadastro de especialidades:
- **Tabela**: Lista de serviços com:
  - Descrição
  - Ações (editar/excluir)
- **Botão**: Novo Serviço

### 7. Perfil
Edição de dados do administrador:
- Campos para alteração de nome, email e senha

---

## 🎨 Design

O sistema conta com um design moderno e responsivo:

- **Paleta de Cores**:
  - Primária: Ciano (#0891b2)
  - Secundária: Indigo (#6366f1)
  - Fundos claros com gradientes sutis

- **Componentes**:
  - Cards com sombras suaves
  - Botões com gradientes e efeitos hover
  - Tabelas com linhas hover
  - Ícones Bootstrap Icons

- **Responsividade**: Layout adaptável para diferentes tamanhos de tela

---

## 🛠️ Tecnologias

| Tecnologia | Descrição |
|------------|-----------|
| **React** | Biblioteca JavaScript para interface |
| **Vite** | Build tool moderno e rápido |
| **Axios** | Cliente HTTP para API |
| **React Router** | Gerenciamento de rotas |
| **Bootstrap** | Framework UI |
| **Bootstrap Icons** | Biblioteca de ícones |
| **Netlify** | Hospedagem e deploy |

---

## 📁 Estrutura do Projeto

```
agendei-web/
├── public/                  # Arquivos públicos
├── src/
│   ├── assets/            # Imagens e recursos
│   │   └── images/        # Logo e imagens
│   ├── components/        # Componentes reutilizáveis
│   │   └── navbar/        # Barra de navegação
│   ├── constantes/        # Configurações
│   │   └── api.js         # Cliente API
│   ├── pages/             # Páginas do sistema
│   │   ├── login/         # Login
│   │   ├── register/       # Cadastro
│   │   ├── appointments/   # Agendamentos
│   │   ├── appointments-add/ # Novo/Editar agendamento
│   │   ├── doctors/        # Médicos
│   │   ├── doctors-add/    # Novo/Editar médico
│   │   ├── services/       # Serviços
│   │   ├── services-add/   # Novo/Editar serviço
│   │   ├── users/          # Pacientes
│   │   ├── users-add/      # Novo/Editar paciente
│   │   └── profile/        # Perfil
│   ├── styles/            # Estilos globais
│   │   └── global.css     # CSS global
│   ├── rotas.jsx          # Rotas do sistema
│   └── main.jsx           # Entry point
├── index.html             # HTML principal
├── package.json           # Dependências
└── vite.config.js         # Configuração Vite
```

---

## ⚙️ Configuração

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/jairalvarengapereira/Agendei-WEB.git

# Entre no diretório
cd Agendei-WEB

# Instale as dependências
npm install

# Inicie o projeto em modo desenvolvimento
npm run dev
```

### Build para Produção

```bash
npm run build
```

---

## 🔗 APIs e Integrações

- **API Principal**: https://agendei-api-53h2.onrender.com
- **Frontend**: https://agendeiweb.netlify.app

---

## 🗄️ Estrutura do Banco de Dados

### Tabelas Principais

| Tabela | Descrição |
|--------|-----------|
| `admins` | Administradores do sistema |
| `doctors` | Médicos cadastrados |
| `services` | Especialidades médicas |
| `users` | Pacientes |
| `doctors_services` | Relação médicos-serviços |
| `appointments` | Agendamentos de consultas |

---

## 📄 Licença

MIT License © 2026 Jair Alvarenga Pereira

---

## 👨‍💻 Autor

**Jair Alvarenga Pereira**

- GitHub: [@jairalvarengapereira](https://github.com/jairalvarengapereira)

---

## 🔄 Projetos Relacionados

- 📱 **Agendei Mobile**: https://github.com/jairalvarengapereira/Agendei-MOBILE
- 🔧 **Agendei API**: https://github.com/jairalvarengapereira/Agendei-API

---

<div align="center">

**Made with ❤️ for healthcare**

</div>