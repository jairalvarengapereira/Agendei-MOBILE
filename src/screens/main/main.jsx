import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AbaCalendar from "../abacalendar/abacalendar.jsx";
import AbaHome from "../abahome/abahome.jsx";
import AbaProfile from "../abaprofile/abaprofile.jsx";
import { COLORs } from "../../constants/theme.js";
import icon from "../../constants/icon.js";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

const TAB_BAR_STYLE = {
  backgroundColor: COLORs.surface,
  borderTopColor: COLORs.border,
  borderTopWidth: 1,
  elevation: 0,
  shadowOpacity: 0,
  paddingBottom: 8,
  paddingTop: 8,
};

const HEADER_STYLE = {
  backgroundColor: COLORs.surface,
  borderBottomColor: COLORs.border,
  borderBottomWidth: 1,
  elevation: 0,
  shadowOpacity: 0,
};

function TabIcon({ source, focused, width = 28, height = 28 }) {
  return (
    <Image
      source={source}
      style={{
        width,
        height,
        tintColor: focused ? COLORs.primary : COLORs.textSecondary,
        opacity: focused ? 1 : 0.6,
      }}
    />
  );
}

function Main() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: TAB_BAR_STYLE,
        headerStyle: HEADER_STYLE,
        headerTintColor: COLORs.textPrimary,
        tabBarShowLabel: false,
        headerTitleAlign: "center",
        headerTitle: () => (
          <Image source={icon.logo} style={{ width: 80, height: 28 }} />
        ),
      }}
    >
      <Tab.Screen
        name="Home"
        component={AbaHome}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icon.home} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={AbaCalendar}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icon.calendar} focused={focused} width={26} height={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={AbaProfile}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icon.profile} focused={focused} width={22} height={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Main;