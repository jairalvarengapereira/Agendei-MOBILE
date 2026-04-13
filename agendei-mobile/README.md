# Agendei Mobile 📱

![Badge](https://img.shields.io/badge/Platform-Android-brightgreen)
![Badge](https://img.shields.io/badge/Framework-Expo-blue)
![Badge](https://img.shields.io/badge/License-MIT-green)

---

<div align="center">

![Agendei Logo](./assets/Logo.png)

### Sistema de Agendamento de Consultas Médicas

</div>

---

## 📱Sobre o App

O **Agendei Mobile** é um aplicativo mobile para agendamento de consultas médicas, desenvolvido com React Native e Expo. Permite que pacientes encontrem médicos por especialidade, agendem consultas e gerenciem seu perfil.

---

## 🚀Funcionalidades

### ✨Principais
- 🔐 **Autenticação** - Login e cadastro de usuários
- 🔍 **Busca por Especialidade** - Encontre médicos pela área de atuação
- 📅 **Agendamento** - Marque consultas de forma simples
- 👤 **Perfil do Usuário** - Gerencie seus dados pessoais
- 🔑 **Alteração de Senha** - Mude sua senha com segurança
- 📍 **Busca Automática de CEP** - Endereço preenchido automaticamente

### 📱Telas
- **Login** - Tela de acesso ao sistema
- **Cadastro** - Registro de novos usuários
- **Especialidades** - Lista de especialidades médicas
- **Médicos** - Médicos por especialidade
- **Serviços** - Serviços disponíveis por médico
- **Agendamento** - Escolha de data e horário
- **Perfil** - Edição de dados e alteração de senha

---

## 🛠️Tecnologias

| Tecnologia | Descrição |
|------------|-----------|
| **React Native** | Framework para desenvolvimento mobile |
| **Expo** | Plataforma e ferramentas para React Native |
| **React Navigation** | Navegação entre telas |
| **Axios** | Cliente HTTP para API |
| **AsyncStorage** | Armazenamento local |
| **ViaCEP** | API de busca de CEP |

---

## 📁Estrutura do Projeto

```
agendei-mobile/
├── assets/                 # Recursos estáticos
│   └── Logo.png           # Logo do app
├── src/
│   ├── components/        # Componentes reutilizáveis
│   │   ├── botao/         # Botão customizado
│   │   ├── doctor/        # Card de médico
│   │   ├── service/        # Card de serviço
│   │   └── appointments/   # Card de agendamento
│   ├── constants/         # Constantes e configurações
│   │   ├── api.js         # Configuração da API
│   │   ├── icon.js        # Ícones do app
│   │   └── theme.js       # Tema de cores
│   ├── contexts/          # Contextos React
│   │   └── auth.js        # Contexto de autenticação
│   ├── routes/            # Navegação
│   │   ├── routes.js      # Rotas públicas
│   │   ├── routesPrivate.js # Rotas privadas
│   │   └── routesOpen.js  # Rotas abertas
│   └── screens/           # Telas do aplicativo
│       ├── account/       # Cadastro
│       ├── abaprofile/    # Perfil
│       ├── abahome/       # Home
│       ├── abacalendar/   # Calendário
│       ├── login/         # Login
│       ├── main/          # Abas principais
│       ├── schedule/      # Agendamento
│       ├── services/      # Serviços do médico
│       └── servicesbyservice/ # Médicos por especialidade
├── app.json               # Configurações Expo
├── package.json           # Dependências
└── README.md             # Este arquivo
```

---

## ⚙️Configuração

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/jairalvarengapereira/Agendei-MOBILE.git

# Entre no diretório
cd Agendei-MOBILE

# Instale as dependências
npm install

# Inicie o projeto
npx expo start
```

### Build para Android

```bash
# Build com EAS
npx eas build -p android --profile preview
```

---

## 🔗APIs Utilizadas

- **API Principal**: https://agendei-api-53h2.onrender.com
- **ViaCEP**: https://viacep.com.br (busca automática de endereço)

---

## 📄Licença

MIT License © 2026 Jair Alvarenga Pereira

---

## 👨‍💻Autor

**Jair Alvarenga Pereira**

- GitHub: [@jairalvarengapereira](https://github.com/jairalvarengapereira)

---

<div align="center">

**Made with ❤️ for healthcare**

</div>