import { Alert, Text, View } from "react-native";
import { styles } from "./schedule.style.js";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { ptBR } from "../../constants/calendar.js";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import Botao from "../../components/botao/botao.jsx";
import api from "../../constants/api.js";
import { COLORs } from "../../constants/theme.js";

LocaleConfig.locales["pt-BR"] = ptBR;
LocaleConfig.defaultLocale = "pt-BR";

function Schedule(props) {
  const id_doctor = props.route.params.id_doctor;
  const id_service = props.route.params.id_service;

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedHour, setSelectedHour] = useState("");

  async function ClickBooking() {
    try {
      if (selectedDate === "") {
        Alert.alert("Selecione uma data para agendar a consulta.");
        return;
      }
      if (selectedHour === "") {
        Alert.alert("Selecione um horário para agendar a consulta.");
        return;
      }

      const response = await api.post("/appointments", {
        id_doctor,
        id_service,
        booking_date: selectedDate,
        booking_hour: selectedHour,
      });

      if (response.data?.id_appointment) {
        props.navigation.popToTop();
      }
    } catch (error) {
      if (error.response?.data.error) {
        Alert.alert(error.response.data.error);
      } else {
        Alert.alert("Ocorreu um erro. Tente novamente mais tarde.");
      }
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Calendar
          style={styles.calendar}
          theme={styles.theme}
          onDayPress={(day) => setSelectedDate(day.dateString)}
          markedDates={{ [selectedDate]: { selected: true } }}
          minDate={new Date().toDateString()}
        />

        <Text style={styles.textHour}>Horário</Text>

        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={selectedHour}
            onValueChange={(itemValue) => setSelectedHour(itemValue)}
            dropdownIconColor={COLORs.primary}
            style={{ color: COLORs.textPrimary }}
          >
            <Picker.Item label="Selecione um horário" value="" />
            <Picker.Item label="08:00" value="08:00" />
            <Picker.Item label="08:30" value="08:30" />
            <Picker.Item label="09:00" value="09:00" />
            <Picker.Item label="09:30" value="09:30" />
            <Picker.Item label="10:00" value="10:00" />
            <Picker.Item label="10:30" value="10:30" />
            <Picker.Item label="11:00" value="11:00" />
            <Picker.Item label="11:30" value="11:30" />
            <Picker.Item label="12:00" value="12:00" />
            <Picker.Item label="12:30" value="12:30" />
            <Picker.Item label="13:00" value="13:00" />
            <Picker.Item label="13:30" value="13:30" />
            <Picker.Item label="14:00" value="14:00" />
            <Picker.Item label="14:30" value="14:30" />
            <Picker.Item label="15:00" value="15:00" />
            <Picker.Item label="15:30" value="15:30" />
            <Picker.Item label="16:00" value="16:00" />
            <Picker.Item label="16:30" value="16:30" />
            <Picker.Item label="17:00" value="17:00" />
            <Picker.Item label="17:30" value="17:30" />
            <Picker.Item label="18:00" value="18:00" />
          </Picker>
        </View>
      </View>

      <View style={styles.botao}>
        <Botao text="Confirmar Agendamento" onPress={ClickBooking} />
      </View>
    </View>
  );
}

export default Schedule;