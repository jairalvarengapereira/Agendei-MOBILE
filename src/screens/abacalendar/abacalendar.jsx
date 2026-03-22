import { Alert, View, FlatList, Text } from "react-native";
import { styles } from "./abacalendar.style";
import { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import Appointment from "../../components/appointments/appointment";
import api from "../../constants/api";

function AbaCalendar() {
  const [appointments, setAppointments] = useState([]);

  async function LoadAppointments() {
    try {
      const response = await api.get("/appointments");
      if (response.data) {
        setAppointments(response.data);
      }
    } catch (error) {
      Alert.alert(error.response?.data.error || "Ocorreu um erro. Tente novamente mais tarde.");
    }
  }

  async function DeleteAppointment(id_appointment) {
    try {
      const response = await api.delete(`/appointments/${id_appointment}`);
      if (response.data?.id_appointment) {
        LoadAppointments();
      }
    } catch (error) {
      Alert.alert(error.response?.data.error || "Ocorreu um erro. Tente novamente mais tarde.");
    }
  }

  useFocusEffect(
    useCallback(() => {
      LoadAppointments();
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Minhas Consultas</Text>
        <Text style={styles.subtitle}>Gerencie seus agendamentos</Text>
      </View>

      <FlatList
        data={appointments}
        keyExtractor={(appoint) => appoint.id_appointment.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Appointment
            id_appointment={item.id_appointment}
            service={item.service}
            doctor={item.doctor}
            specialty={item.specialty}
            bookingDate={item.booking_date}
            bookingHour={item.booking_hour}
            onPress={DeleteAppointment}
          />
        )}
      />
    </View>
  );
}

export default AbaCalendar;
