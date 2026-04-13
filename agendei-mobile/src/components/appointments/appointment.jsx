import { Text, View, Image } from "react-native";
import { styles } from "./appointment.style";
import icon from "../../constants/icon";
import Botao from "../botao/botao";

function Appointment(props) {
  console.log("bookingDate received:", props.bookingDate);
  
  let formattedDate = "Data inválida";
  
  if (props.bookingDate) {
    try {
      let dateStr = props.bookingDate;
      if (dateStr.includes(" ")) {
        dateStr = dateStr.split(" ")[0];
      }
      const [year, month, day] = dateStr.split("-");
      const dt = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
      console.log("Parsed date:", dt);
      if (!isNaN(dt.getTime())) {
        formattedDate = dt.toLocaleDateString("pt-BR");
      }
    } catch (e) {
      console.log("Erro ao parsear data:", e);
    }
  }

  return (
    <View style={styles.appointment}>
      <Text style={styles.name}>
        {props.service} — {props.doctor}
      </Text>
      <Text style={styles.specialty}>{props.specialty}</Text>

      <View style={styles.divider} />

      <View style={styles.container}>
        <View style={styles.containerBooking}>
          <View style={styles.booking}>
            <Image style={styles.icon} source={icon.calendar} />
            <Text style={styles.bookingDate}>{formattedDate}</Text>
          </View>

          <View style={styles.booking}>
            <Image style={styles.icon} source={icon.clock} />
            <Text style={styles.bookingHour}>{props.bookingHour}h</Text>
          </View>
        </View>

        <View style={styles.containerButton}>
          <Botao
            text="Cancelar"
            theme="danger"
            onPress={() => props.onPress(props.id_appointment)}
          />
        </View>
      </View>
    </View>
  );
}

export default Appointment;