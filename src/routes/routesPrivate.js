import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from '../screens/main/main.jsx';
import Services from '../screens/services/services.jsx';
import Schedule from '../screens/schedule/schedule.jsx';
import { COLORs } from '../constants/theme.js';

const Stack = createNativeStackNavigator();

function RoutesPrivate(){
  return <Stack.Navigator>

    <Stack.Screen name="main" component={Main} 
      options={{ headerShown: false }}  
    />
    <Stack.Screen 
      name="services" 
      component={Services} 
      options={{
        headerTitle: 'Serviços',
        headerTitleAlign: 'center',
        headerShadowVisible: false,
        headerTintColor: COLORs.white,
        headerStyle:{
          backgroundColor: COLORs.blue2,
        }
       }}  
    />
    <Stack.Screen name="schedule" component={Schedule} 
      options={{
        headerTitle: 'Fazer uma reserva',
        headerTitleAlign: 'center',
        headerTintColor: COLORs.blue2,
        headerShadowVisible: false,
      }}  
    />

  </Stack.Navigator>
}

export default RoutesPrivate;