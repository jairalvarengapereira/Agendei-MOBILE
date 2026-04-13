import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes/routes.js";
import { AuthProvider } from "./src/contexts/auth.js";


function App() {
  return <NavigationContainer>
    <AuthProvider>
      <Routes /> 
    </AuthProvider>
  </NavigationContainer>;
}
export default App;