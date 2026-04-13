import { Text, TouchableOpacity } from "react-native";
import { styles } from "./botao.style.js";

function Botao(props) {
  const isDanger = props.theme === "danger";

  return (
    <TouchableOpacity
      style={[styles.btn, isDanger ? styles.danger : styles.primary]}
      onPress={props.onPress}
      activeOpacity={0.75}
    >
      <Text style={isDanger ? styles.textDanger : styles.text}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
}

export default Botao;