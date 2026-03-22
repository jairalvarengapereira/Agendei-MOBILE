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

















