import { Alert, View, Text, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./abahome.style";
import { useEffect, useState } from "react";
import api from "../../constants/api";
import { COLORs, FONT_SIZE } from "../../constants/theme";

function AbaHome(props) {
  const [services, setServices] = useState([]);

  function ClickService(id_service, description) {
    props.navigation.navigate("ServicesByService", { id_service, description });
  }

  async function LoadServices() {
    try {
      const response = await api.get("/services");
      if (response.data) {
        setServices(response.data);
      }
    } catch (error) {
      if (error.response?.data.error) {
        Alert.alert(error.response.data.error);
      } else {
        Alert.alert("Ocorreu um erro. Tente novamente mais tarde.");
      }
    }
  }

  useEffect(() => {
    LoadServices();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Olá! Bom dia 👋</Text>
        <Text style={styles.text}>
          Escolha uma {" "}
          <Text style={styles.accent}>especialidade</Text>
        </Text>
      </View>

      <FlatList
        data={services}
        keyExtractor={(serv) => serv.id_service}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.serviceItem}
            onPress={() => ClickService(item.id_service, item.description)}
          >
            <View style={styles.serviceContent}>
              <View style={styles.serviceIcon}>
                <Text style={styles.serviceIconText}>+</Text>
              </View>
              <Text style={styles.serviceDescription}>{item.description}</Text>
            </View>
            <Text style={styles.serviceArrow}>›</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default AbaHome;