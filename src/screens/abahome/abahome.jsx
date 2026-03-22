import { Alert, View, Text, FlatList } from "react-native";
import { styles } from "./abahome.style";
import { useEffect, useState } from "react";
import Doctor from "../../components/doctor/doctor";
import api from "../../constants/api";

function AbaHome(props) {
  const [doctors, setDoctors] = useState([]);

  function ClickDoctor(id_doctor, name, specialty, icon) {
    props.navigation.navigate("services", { id_doctor, name, specialty, icon });
  }

  async function LoadDoctors() {
    try {
      const response = await api.get("/doctors");
      if (response.data) {
        setDoctors(response.data);
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
    LoadDoctors();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Olá! Bom dia 👋</Text>
        <Text style={styles.text}>
          Agende seus {" "}
          <Text style={styles.accent}>serviços médicos</Text>
        </Text>
      </View>

      <FlatList
        data={doctors}
        keyExtractor={(doc) => doc.id_doctor}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Doctor
            id_doctor={item.id_doctor}
            name={item.name}
            icon={item.icon}
            specialty={item.specialty}
            onPress={ClickDoctor}
          />
        )}
      />
    </View>
  );
}

export default AbaHome;