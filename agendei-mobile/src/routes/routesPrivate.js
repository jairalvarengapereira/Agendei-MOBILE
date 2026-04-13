import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from '../screens/main/main.jsx';
import Services from '../screens/services/services.jsx';
import Schedule from '../screens/schedule/schedule.jsx';
import ServicesByService from '../screens/servicesbyservice/servicesbyservice.jsx';
import { COLORs } from '../constants/theme.js';

const Stack = createNativeStackNavigator();

function RoutesPrivate(){
  return <Stack.Navigator>

    <Stack.Screen name="main" component={Main} 
      options={{ headerShown: false }}  
    />
    
    <Stack.Screen 
      name="ServicesByService" 
      component={ServicesByService} 
      options={{
        headerTitle: 'Médicos',
        headerTitleAlign: 'center',
        headerShadowVisible: false,
        headerTintColor: COLORs.textPrimary,
        headerStyle: {
          backgroundColor: COLORs.surface,
        }
      }}  
    />

    <Stack.Screen 
      name="services" 
      component={Services} 
      options={{
        headerTitle: 'Serviços',
        headerTitleAlign: 'center',
        headerShadowVisible: false,
        headerTintColor: COLORs.textPrimary,
        headerStyle: {
          backgroundColor: COLORs.surface,
        }
      }}  
    />

    <Stack.Screen name="schedule" component={Schedule} 
      options={{
        headerTitle: 'Fazer uma reserva',
        headerTitleAlign: 'center',
        headerTintColor: COLORs.textPrimary,
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: COLORs.surface,
        }
      }}  
    />

  </Stack.Navigator>
}

export default RoutesPrivate;