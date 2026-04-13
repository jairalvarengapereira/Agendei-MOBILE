import { Text, View, Image } from "react-native";
import { styles } from "./appointment.style";
import icon from "../../constants/icon";
import Botao from "../botao/botao";

function Appointment(props) {
  const dt = new Date(props.bookingDate + "T" + props.bookingHour);

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
            <Text style={styles.bookingDate}>{dt.toLocaleDateString()}</Text>
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