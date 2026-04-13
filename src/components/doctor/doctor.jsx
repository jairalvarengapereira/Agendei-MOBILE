import { Image, TouchableOpacity, View, Text } from "react-native";
import { styles } from "./doctor.style";
import icon from "../../constants/icon";

function Doctor(props) {
  return (
    <TouchableOpacity
      style={styles.doctor}
      activeOpacity={0.75}
      onPress={() => props.onPress(props.id_doctor, props.name, props.specialty, props.icon)}
    >
      <View style={styles.iconWrapper}>
        <Image
          source={props.icon === "M" ? icon.male : icon.female}
          style={styles.icon}
        />
      </View>

      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.specialty}>{props.specialty}</Text>
      </View>

      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );
}

export default Doctor;