# Agendei - Sistema de Agendamento de Consultas Médicas

<p align="center">
  <img src="agendei-mobile/assets/Logo.png" alt="Logo Agendei" width="200"/>
</p>

---

## 📋 Descrição do Projeto

O **Agendei** é um sistema completo de agendamento de consultas médicas, composto por três aplicações:

| Projeto | Descrição | Tecnologia |
|---------|-----------|------------|
| **agendei-API** | API Backend REST | Node.js + Express |
| **agendei-web** | Interface Web (PWA) | React + Vite |
| **agendei-mobile** | App Mobile Android | React Native + Expo |

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
# Servidor
PORT=3000
NODE_ENV=development

# Banco de Dados (PostgreSQL)
DB_HOST=localhost
DB_PORT=5432
DB_NAME=agendei
DB_USER=seu_usuario
DB_PASSWORD=sua_senha

# JWT
SECRET_KEY=sua_chave_secreta

#Frontend URL (para CORS)
FRONTEND_URL=http://localhost:5173
```

**Execução:**

```bash
# Desenvolvimento
npm run dev

# Produção
npm start
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

**Pré-requisitos:**
- Node.js (versão 18+)
- npm ou yarn

**Instalação:**

```bash
cd agendei-web
npm install
```

**Configuração:**

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_API_URL=http://localhost:3000
```

**Execução:**

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build
```

**Acesse:** http://localhost:5173

---

### 3. Agendei Mobile (App Android)

**Pré-requisitos:**
- Node.js (versão 18-20)
- Expo CLI
- Android Studio (para build local)

**Instalação:**

```bash
cd agendei-mobile
npm install
```

**Configuração:**

Crie um arquivo `.env` na raiz do projeto:

```env
EXPO_PUBLIC_API_URL=https://sua-api-url.onrender.com
```

**Execução (Desenvolvimento):**

```bash
npx expo start
```

Esqueaneie o QR Code com o app **Expo Go** no celular.

**Build APK (Produção):**

```bash
# Usando EAS Build (Recomendado)
npx eas build --platform android --profile preview

# Build local (requer Android Studio)
npx expo prebuild --platform android
cd android
./gradlew assembleDebug
```

O APK será gerado em: `android/app/build/outputs/apk/debug/app-debug.apk`

**Download do APKÚltimo:**
- [Agendei Mobile APK](https://expo.dev/artifacts/eas/9oqM4ENnB817G8PDpiAZ4h.apk)

---

## 📱 Telas do Aplicativo Mobile

### 1. Login
Tela de autenticação do usuário.

### 2. Home (Especialidades)
Lista de especialidades médicas disponíveis para agendamento.

### 3. Médicos por Especialidade
Lista de médicos da especialidade selecionada com informações de CRM e disponibilidade.

### 4. Agendamento
Calendário para selecionar data e horário da consulta.

### 5. Minhas Consultas
Lista de agendamentos realizados com opção de cancelamento.

### 6. Perfil
Informações do usuário logado com opção de logout.

---

## 🌐 URL da API

A API está hospedada no **Render** e pode ser acessada em:

```
https://agendei-api-53h2.onrender.com
```

**Nota:** O serviço gratuito do Render pode entrar em modo de sono após inactivity. Se a API não responder, aguarde alguns segundos e tente novamente.

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
│   │   ├── database/   # Configuração do banco
│   │   └── index.js     # Entrada da aplicação
│   ├── .env             # Variáveis de ambiente
│   └── package.json
│
├── agendei-web/          # Frontend Web React
│   ├── src/
│   │   ├── components/  # Componentes React
│   │   ├── pages/       # Páginas da aplicação
│   │   ├── context/     # Contextos (Auth)
│   │   ├── services/    # Serviços API
│   │   └── styles/      # Estilos CSS
│   ├── .env             # Variáveis de ambiente
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
│   ├── app.json         # Configuração Expo
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
- **SQLite** - Banco de dados (desenvolvimento)
- **JWT** - Autenticação
- **Bcrypt** - Criptografia de senhas

### Frontend Web
- **React** - Biblioteca UI
- **Vite** - Build tool
- **React Router** - Navegação
- **Axios** - Requisições HTTP
- **CSS Modules** - Estilização

### Mobile
- **React Native** - Framework mobile
- **Expo** - Ferramentas React Native
- **Expo Router** - Navegação
- **AsyncStorage** - Armazenamento local
- **React Navigation** - Navegação

---

## 📄 Licença

Este projeto está sob licença MIT.

---

## 👨‍💻 Autor

Desenvolvido por **Jair Alves Pereira**

---

## ⚠️ Notas Importantes

1. **Banco de Dados:** O projeto está configurado para usar PostgreSQL em produção. Para desenvolvimento local, pode usar SQLite.

2. **API em Produção:** A API gratuita do Render entra em modo de sono após 15 minutos de inatividade. A primeira requisição pode demorar alguns segundos.

3. **Build Mobile:** O APK pode ser gerado via EAS Build (nuvem) ou localmente com Android Studio.

4. **Versões:** O projeto mobile utiliza Expo SDK 54, que é compatível com a versão atual do Expo Go.