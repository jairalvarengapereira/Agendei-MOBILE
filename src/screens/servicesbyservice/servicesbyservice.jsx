import { Alert, View, Text, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./servicesbyservice.style";
import { useEffect, useState } from "react";
import api from "../../constants/api";
import icon from "../../constants/icon";

function ServicesByService(props) {
  const id_service = props.route.params.id_service;
  const description = props.route.params.description;
  const [doctors, setDoctors] = useState([]);

  function ClickDoctor(id_doctor, name, specialty, iconDoctor) {
    props.navigation.navigate("services", { id_doctor, name, specialty, icon: iconDoctor });
  }

  async function LoadDoctorsByService() {
    try {
      const response = await api.get(`/services/${id_service}/doctors`);
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
    LoadDoctorsByService();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.subtitle}>Especialidade</Text>
        <Text style={styles.title}>{description}</Text>
        <Text style={styles.count}>{doctors.length} médico(s) disponível(is)</Text>
      </View>

      <FlatList
        data={doctors}
        keyExtractor={(doc) => doc.id_doctor}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.doctorItem}
            onPress={() => ClickDoctor(item.id_doctor, item.name, item.specialty, item.icon)}
          >
            <View style={styles.doctorIcon}>
              <Text style={styles.doctorIconText}>
                {item.icon === 'M' ? '👨' : '👩'}
              </Text>
            </View>
            <View style={styles.doctorInfo}>
              <Text style={styles.doctorName}>{item.name}</Text>
              <Text style={styles.doctorSpecialty}>{item.specialty}</Text>
            </View>
            <Text style={styles.doctorArrow}>›</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyText}>Nenhum médico encontrado para esta especialidade.</Text>
          </View>
        }
      />
    </View>
  );
}

export default ServicesByService;