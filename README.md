# Agendei - Sistema de Agendamento de Consultas Médicas

<p align="center">
  <img src="agendei-mobile/assets/Logo.png" alt="Logo Agendei" width="200"/>
</p>

---

![Badge](https://img.shields.io/badge/Platform-Android-brightgreen)
![Badge](https://img.shields.io/badge/Framework-Expo-blue)
![Badge](https://img.shields.io/badge/License-MIT-green)

---

## 📋 Descrição do Projeto

O **Agendei** é um sistema completo de agendamento de consultas médicas, composto por três aplicações:

| Projeto | Descrição | Tecnologia |
|---------|-----------|------------|
| **agendei-API** | API Backend REST | Node.js + Express |
| **agendei-web** | Interface Web (PWA) | React + Vite |
| **agendei-mobile** | App Mobile Android | React Native + Expo |

O **Agendei Mobile** é um aplicativo mobile para agendamento de consultas médicas, desenvolvido com React Native e Expo. Permite que pacientes encontrem médicos por especialidade, agendem consultas e gerenciem seu perfil.

---

## 🚀Funcionalidades

### ✨Principais
- 🔐 **Autenticação** - Login e cadastro de usuários
- 🔍 **Busca por Especialidade** - Encontre médicos pela área de atuação
- 📅 **Agendamento** - Marque consultas de forma simples
- 👤 **Perfil do Usuário** - Gerencie seus dados pessoais
- 🔑 **Alteração de Senha** - Mude sua senha com segurança

### 📱Telas do App Mobile
- **Login** - Tela de acesso ao sistema
- **Cadastro** - Registro de novos usuários
- **Especialidades** - Lista de especialidades médicas
- **Médicos** - Médicos por especialidade
- **Serviços** - Serviços disponíveis por médico
- **Agendamento** - Escolha de data e horário
- **Minhas Consultas** - Lista de agendamentos com opção de cancelamento
- **Perfil** - Edição de dados e logout

---

## 🏗️ Arquitetura do Sistema

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   Agendei Web   │────▶│  Agendei API    │────▶│   Banco de      │
│   (React Web)   │     │ (Node.js/Express)│     │   Dados        │
└─────────────────┘     └─────────────────┘     └─────────────────┘
                               │
                               ▼
                        ┌─────────────────┐
                        │  Agendei Mobile │
                        │ (React Native)  │
                        └─────────────────┘
```

---

## 🚀 Como Executar Cada Projeto

### 1. Agendei API (Backend)

**Pré-requisitos:**
- Node.js (versão 18+)
- Banco de dados PostgreSQL ou SQLite

**Instalação:**

```bash
cd agendei-API
npm install
```

**Configuração:**

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3000
NODE_ENV=development
DB_HOST=localhost
DB_PORT=5432
DB_NAME=agendei
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
SECRET_KEY=sua_chave_secreta
FRONTEND_URL=http://localhost:5173
```

**Execução:**

```bash
npm run dev
```

**Endpoints da API:**

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| POST | `/users` | Criar novo usuário |
| POST | `/auth` | Autenticar usuário |
| GET | `/services` | Listar especialidades |
| GET | `/doctors` | Listar médicos |
| GET | `/doctors/:id_service` | Listar médicos por especialidade |
| POST | `/appointments` | Criar agendamento |
| GET | `/appointments` | Listar agendamentos do usuário |
| DELETE | `/appointments/:id` | Cancelar agendamento |

---

### 2. Agendei Web (Interface Web)

**Instalação:**

```bash
cd agendei-web
npm install
```

**Configuração:**

```env
VITE_API_URL=http://localhost:3000
```

**Execução:**

```bash
npm run dev
```

**Acesse:** http://localhost:5173

---

### 3. Agendei Mobile (App Android)

**Instalação:**

```bash
cd agendei-mobile
npm install
```

**Configuração:**

```env
EXPO_PUBLIC_API_URL=https://agendei-api-53h2.onrender.com
```

**Execução (Desenvolvimento):**

```bash
npx expo start
```

Esqueaneie o QR Code com o app **Expo Go** no celular.

**Build APK (Produção):**

```bash
npx eas build --platform android --profile preview
```

---

## 🌐 URL da API

A API está hospedada no **Render** e pode ser acessada em:

```
https://agendei-api-53h2.onrender.com
```

**Nota:** O serviço gratuito do Render pode entrar em modo de sono após inatividade. Se a API não responder, aguarde alguns segundos e tente novamente.

---

## 📁 Estrutura de Pastas

```
AgendaJS/
├── agendei-API/          # Backend Node.js
│   ├── src/
│   │   ├── controllers/  # Controladores de rotas
│   │   ├── repositories/# Acesso ao banco de dados
│   │   ├── services/    # Lógica de negócio
│   │   ├── routes/      # Definição de rotas
│   │   └── database/   # Configuração do banco
│   └── package.json
│
├── agendei-web/          # Frontend Web React
│   ├── src/
│   │   ├── components/  # Componentes React
│   │   ├── pages/       # Páginas da aplicação
│   │   └── styles/      # Estilos CSS
│   └── package.json
│
├── agendei-mobile/       # App Mobile React Native
│   ├── src/
│   │   ├── components/  # Componentes React Native
│   │   ├── screens/     # Telas do app
│   │   ├── routes/      # Navegação
│   │   ├── contexts/   # Contextos (Auth)
│   │   └── constants/  # Constantes (API, Theme)
│   ├── assets/          # Imagens e ícones
│   └── package.json
│
└── README.md             # Este arquivo
```

---

## 🔧 Tecnologias Utilizadas

### Backend
- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **PostgreSQL** - Banco de dados relacional
- **JWT** - Autenticação

### Frontend Web
- **React** - Biblioteca UI
- **Vite** - Build tool
- **Axios** - Requisições HTTP

### Mobile
- **React Native** - Framework mobile
- **Expo** - Ferramentas React Native
- **React Navigation** - Navegação
- **AsyncStorage** - Armazenamento local

---

## 📄 Licença

MIT License © 2026 Jair Alvarenga Pereira

---

## 👨‍💻 Autor

**Jair Alvarenga Pereira**

- GitHub: [@jairalvarengapereira](https://github.com/jairalvarengapereira)

---

<div align="center">

**Made with ❤️ for healthcare**

</div>