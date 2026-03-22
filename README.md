![image](https://github.com/user-attachments/assets/b4c79844-3e13-4af1-a664-ba1f435f5c5a)

## Descrição das Pastas e Arquivos

1. **assets/**
   - Armazena recursos estáticos utilizados no aplicativo, como fontes e imagens.
   - **fonts/**: Contém as fontes personalizadas.
     - *OpenSans-Regular.ttf*: Fonte "Open Sans" na variação regular.
   - **images/**: Armazena imagens utilizadas na interface.
     - *logo.png*: Logotipo da aplicação.
     - *background.jpg*: Imagem de fundo para telas específicas.

2. **src/**
   - Diretório principal do código-fonte do aplicativo.
   - **components/**: Componentes reutilizáveis da interface.
     - *Button.js*: Componente de botão personalizado.
     - *Input.js*: Campo de entrada de dados.
     - *Header.js*: Cabeçalho padrão das telas.
   - **navigation/**: Gerencia a navegação entre telas.
     - *AppNavigator.js*: Define a navegação principal após a autenticação.
     - *AuthNavigator.js*: Gerencia as rotas de autenticação (login e registro).
   - **screens/**: Contém as diferentes telas do aplicativo, organizadas por funcionalidade.
     - **Auth/**: Telas relacionadas à autenticação.
       - *LoginScreen.js*: Tela de login dos usuários.
       - *RegisterScreen.js*: Tela de registro de novos usuários.
     - **Main/**: Telas principais após o login.
       - *HomeScreen.js*: Tela inicial com resumo ou dashboard.
       - *AppointmentScreen.js*: Tela para visualização e gerenciamento de agendamentos.
       - *ProfileScreen.js*: Tela de perfil do usuário.
   - **services/**: Módulos que lidam com funcionalidades externas, como chamadas à API.
     - *api.js*: Configuração e funções para comunicação com o backend.
     - *auth.js*: Funções relacionadas à autenticação, como login e registro.
   - **utils/**: Funções utilitárias e constantes usadas em todo o aplicativo.
     - *constants.js*: Constantes, como URLs da API e chaves de configuração.
     - *helpers.js*: Funções auxiliares para manipulação de dados e formatação.

3. **Arquivos na raiz do projeto**
   - *App.js*: Ponto de entrada do aplicativo; inicializa a navegação principal.
   - *app.json*: Configurações do aplicativo, como nome e identificadores.
   - *babel.config.js*: Configurações do Babel para transpilar o código JavaScript.
   - *package.json*: Lista as dependências, scripts e informações do projeto.
   - *README.md*: Documentação inicial do projeto, com instruções e informações gerais.

## Conexões e Fluxo do Aplicativo

1. **Inicialização (App.js)**
   - O aplicativo começa executando o App.js, que configura o provedor de navegação e define o AppNavigator como o componente principal.

2. **Navegação (navigation/)**
   - *AppNavigator.js*: Define as rotas principais acessíveis após o login, como HomeScreen, AppointmentScreen e ProfileScreen.
   - *AuthNavigator.js*: Gerencia as rotas de autenticação, incluindo LoginScreen e RegisterScreen.

3. **Telas (screens/)**
   - **Autenticação (Auth/)**
     - *LoginScreen.js*: Utiliza o componente Input para capturar credenciais e o Button para submissão. Ao autenticar, redireciona para o AppNavigator.

Telas:

![image](https://github.com/user-attachments/assets/7d4cfcc9-624b-4593-8d02-0301e0f37355)  ![image](https://github.com/user-attachments/assets/c0c1a1f2-673b-4cb2-8f2e-464810a344b8)  
![image](https://github.com/user-attachments/assets/dd5bc2b0-6eea-4cb2-ac81-0f2360a8867b)  ![image](https://github.com/user-attachments/assets/91678ae0-0f2e-4733-8c4c-a4569e81e9e3)
![image](https://github.com/user-attachments/assets/e4926f0a-67ec-4d0c-8328-3015142c10a8)  ![image](https://github.com/user-attachments/assets/5cb9d5c0-03b6-44be-9526-3b7044ebcd8d)
![image](https://github.com/user-attachments/assets/36ec6dc0-a9ff-4502-8989-1961c3f16674)
















